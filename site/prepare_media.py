"""
Nén và đổi tên file sản phẩm để đưa lên GitHub.

Cách dùng (cần Python 3 và ffmpeg đã cài, chạy trong thư mục portfolio):
    python prepare_media.py "D:/Motion" "D:/Social"

- Mỗi thư mục truyền vào được quét: .mp4 .mov .gif
- Kết quả nằm trong assets/media/: <tên>.mp4 (đã nén, GIF được đổi sang mp4) và <tên>.jpg (thumbnail)
- Tên mới = chữ thường, dấu cách thành "-", ví dụ "Logo motion.gif" -> logo-motion.mp4
- KHÔNG truyền thư mục video YouTube dài (NTE66...): hãy đăng lên YouTube rồi dán ID vào index.html
"""
import re, subprocess, sys
from pathlib import Path

OUT = Path(__file__).parent / "assets" / "media"
OUT.mkdir(parents=True, exist_ok=True)
EXT = {".mp4", ".mov", ".gif"}

def slug(name):
    return re.sub(r"[^a-z0-9-]", "", name.lower().replace(" ", "-"))

def dims(f):
    r = subprocess.run(["ffprobe", "-v", "error", "-select_streams", "v:0",
                        "-show_entries", "stream=width,height", "-of", "csv=p=0", str(f)],
                       capture_output=True, text=True, check=True)
    w, h = r.stdout.strip().split(",")[:2]
    return int(w), int(h)

def process(f):
    name = slug(f.stem)
    mp4, jpg = OUT / f"{name}.mp4", OUT / f"{name}.jpg"
    w, h = dims(f)
    # ngang: tối đa cao 720 | dọc: tối đa rộng 720; -2 giữ tỉ lệ và số chẵn
    vf = "scale=-2:'min(720,ih)'" if w >= h else "scale='min(720,iw)':-2"
    if not mp4.exists():
        cmd = ["ffmpeg", "-y", "-loglevel", "error", "-i", str(f), "-vf", vf,
               "-c:v", "libx264", "-crf", "26", "-preset", "slow", "-pix_fmt", "yuv420p",
               "-movflags", "+faststart"]
        cmd += ["-an"] if f.suffix.lower() == ".gif" else ["-c:a", "aac", "-b:a", "128k"]
        subprocess.run(cmd + [str(mp4)], check=True)
    if not jpg.exists():
        for ss in ("1", "0"):
            subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-ss", ss, "-i", str(mp4),
                            "-frames:v", "1", "-vf", "scale=640:-2", str(jpg)])
            if jpg.exists() and jpg.stat().st_size > 0:
                break
    mb = mp4.stat().st_size / 1e6
    flag = "  <-- QUÁ NẶNG, hạ crf hoặc cắt ngắn" if mb > 90 else ""
    print(f"{f.name:32} -> {mp4.name:28} {mb:6.1f} MB{flag}")

if len(sys.argv) < 2:
    sys.exit(__doc__)
for d in sys.argv[1:]:
    for f in sorted(Path(d).iterdir()):
        if f.suffix.lower() in EXT:
            process(f)
print("Xong. Kiểm tra thư mục assets/media rồi upload lên GitHub.")
