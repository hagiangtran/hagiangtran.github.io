# Portfolio — Trần Hà Giang

## Cấu trúc
- `index.html` — giao diện (không cần sửa)
- `data.js` — TOÀN BỘ nội dung: sản phẩm, kênh YouTube, kinh nghiệm, kỹ năng, bảng màu mặc định
- `assets/img/avatar.jpg` — ảnh đại diện (thay bằng ảnh nét hơn, giữ tên file)
- `assets/media/` — file mp4 và thumbnail của bạn (tạo bằng `prepare_media.py`)

## Đổi bảng màu
Người xem tự đổi bằng nút tròn màu trên thanh menu (lưu lại cho lần sau).
Muốn đổi màu mặc định, mở `data.js`, sửa dòng `const DEFAULT_THEME = "indigo";` thành một trong:
`indigo` (Đêm chàm), `forest` (Rừng sâu), `wine` (Rượu vang), `ocean` (Đại dương), `cream` (Kem & cam), `lilac` (Tím lilac).

## Đưa lên GitHub Pages
1. Tạo repo mới (ví dụ `portfolio`), upload toàn bộ thư mục này.
2. Settings → Pages → Source: Deploy from a branch → `main` / root.
3. Web chạy ở `https://<username>.github.io/portfolio/`.

## Chuẩn bị file sản phẩm (làm 1 lần)
1. Cài ffmpeg (Windows: `winget install ffmpeg`) và Python 3.
2. Mở terminal trong thư mục này, chạy:
   `python prepare_media.py "D:/duong-dan/Motion" "D:/duong-dan/Social"`
   Script nén video về 720p, đổi GIF thành mp4 nhẹ, tạo thumbnail và đổi tên (chữ thường, không dấu cách) vào `assets/media/`.
3. Tên file sinh ra đã khớp với danh sách trong `index.html` (ví dụ `Logo motion.gif` thành `logo-motion.mp4`).

## Video YouTube dài (NTE66, NTE68, NTE70)
Mỗi file ~1.5 GB, không đưa lên GitHub được. Đăng lên kênh YouTube (công khai hoặc không công khai), lấy ID video
(`youtube.com/watch?v=ABC123xyz` thì ID là `ABC123xyz`), dán vào `yt:""` tương ứng trong `index.html`. Mục chưa có ID sẽ tự ẩn.

## Giới hạn GitHub
File tối đa 100 MB, repo nên dưới 1 GB. Sau khi nén, các sản phẩm motion và social thường chỉ còn vài chục MB tổng.
Nếu script báo "QUÁ NẶNG" ở file nào (ví dụ MBBankfinal.mp4 gốc 162 MB), tăng `-crf` lên 28–30 hoặc cắt ngắn clip.

## Xem thử trên máy (quan trọng với video YouTube)
Mở trực tiếp `index.html` bằng cách bấm đúp (địa chỉ `file://`) sẽ làm YouTube báo "Error 153". Đây là giới hạn của YouTube, không phải lỗi web.
Hãy chạy máy chủ nhỏ: mở terminal trong thư mục `site`, gõ `python -m http.server 8000`, rồi vào `http://localhost:8000`.
Khi đưa lên GitHub Pages (địa chỉ https) thì video chạy bình thường.
