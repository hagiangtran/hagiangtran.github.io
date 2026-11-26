/* =====================================================================
   DỮ LIỆU WEB — chỉ cần sửa file này (không cần đụng vào index.html)
   Giao diện mới (11/2026) dùng một bảng màu cố định; DEFAULT_THEME giữ lại cho tương thích, không còn tác dụng.
   ===================================================================== */
const DEFAULT_THEME = "cream";

/* =====================================================================
   1) SẢN PHẨM / PROJECTS — chỉ cần sửa phần này
   type:  "social" | "motion" | "youtube" | "mobile" | "shortdrama"
   file:  đường dẫn mp4/gif trong assets/media/   (social, motion, mobile)
   yt:    ID video YouTube (phần sau v=)           (youtube)
   thumb: ảnh đại diện (tuỳ chọn, nên có). (tỉ lệ khung hình tự nhận theo thumbnail)
   ===================================================================== */
const PROJECTS = [
  /* ---- MOTION (auto:true = tự phát lặp khi cuộn tới) ---- */
  {type:"motion", auto:true, file:"assets/media/mbbankfinal.mp4", thumb:"assets/media/mbbankfinal.jpg",
   title:{vi:"MB Bank", en:"MB Bank"}, note:{vi:"Motion graphics", en:"Motion graphics"}},
  {type:"motion", auto:true, file:"assets/media/bamozo-1.mp4", thumb:"assets/media/bamozo-1.jpg",
   title:{vi:"Bamozo 1", en:"Bamozo 1"}, note:{vi:"Motion graphics", en:"Motion graphics"}},
  {type:"motion", auto:true, file:"assets/media/bamozo-2.mp4", thumb:"assets/media/bamozo-2.jpg",
   title:{vi:"Bamozo 2", en:"Bamozo 2"}, note:{vi:"Motion graphics", en:"Motion graphics"}},
  {type:"motion", auto:true, file:"assets/media/logo-motion.mp4", thumb:"assets/media/logo-motion.jpg",
   title:{vi:"Logo motion", en:"Logo motion"}, note:{vi:"Logo animation", en:"Logo animation"}},
  {type:"motion", auto:true, file:"assets/media/girl.mp4", thumb:"assets/media/girl.jpg",
   title:{vi:"Girl", en:"Girl"}, note:{vi:"Animation", en:"Animation"}},
  {type:"motion", auto:true, file:"assets/media/trans-motion.mp4", thumb:"assets/media/trans-motion.jpg",
   title:{vi:"Transition motion", en:"Transition motion"}, note:{vi:"Chuyển cảnh", en:"Transitions"}},
  {type:"motion", auto:true, file:"assets/media/motion-1.mp4", thumb:"assets/media/motion-1.jpg",
   title:{vi:"Motion 1", en:"Motion 1"}, note:{vi:"Motion graphics", en:"Motion graphics"}},
  {type:"motion", auto:true, file:"assets/media/mootion-2.mp4", thumb:"assets/media/mootion-2.jpg",
   title:{vi:"Motion 2", en:"Motion 2"}, note:{vi:"Motion graphics", en:"Motion graphics"}},
  {type:"motion", auto:true, file:"assets/media/motion-3.mp4", thumb:"assets/media/motion-3.jpg",
   title:{vi:"Motion 3", en:"Motion 3"}, note:{vi:"Motion graphics", en:"Motion graphics"}},
  {type:"motion", auto:true, file:"assets/media/motion-4.mp4", thumb:"assets/media/motion-4.jpg",
   title:{vi:"Motion 4", en:"Motion 4"}, note:{vi:"Motion graphics", en:"Motion graphics"}},

  /* ---- SOCIAL (4 video thẩm mỹ ở đầu) ---- */
  {type:"social", file:"assets/media/tham-my-1.mp4", thumb:"assets/media/tham-my-1.jpg",
   title:{vi:"Lấy lại vẻ ngoài trẻ trung", en:"Regain a youthful look"}, note:{vi:"Video thẩm mỹ · 1:07", en:"Aesthetic clinic video · 1:07"}},
  {type:"social", file:"assets/media/tham-my-2.mp4", thumb:"assets/media/tham-my-2.jpg",
   title:{vi:"Mẹ bỉm lấy lại tự tin với Eye Rejuv", en:"A new mom regains confidence with Eye Rejuv"}, note:{vi:"Video thẩm mỹ · 0:25", en:"Aesthetic clinic video · 0:25"}},
  {type:"social", file:"assets/media/tham-my-3.mp4", thumb:"assets/media/tham-my-3.jpg",
   title:{vi:"Quầng thâm mắt sau sinh", en:"Postpartum dark circles"}, note:{vi:"Video thẩm mỹ · 1:00", en:"Aesthetic clinic video · 1:00"}},
  {type:"social", file:"assets/media/tham-my-4.mp4", thumb:"assets/media/tham-my-4.jpg",
   title:{vi:"Lấy lại chục tuổi chỉ sau 60 phút", en:"Ten years younger in just 60 minutes"}, note:{vi:"Video thẩm mỹ · 0:30", en:"Aesthetic clinic video · 0:30"}},
  {type:"social", file:"assets/media/tiktok1.mp4", thumb:"assets/media/tiktok1.jpg",
   title:{vi:"TikTok 1", en:"TikTok 1"}, note:{vi:"Video ngắn · 0:26", en:"Short-form · 0:26"}},
  {type:"social", file:"assets/media/tiktok2.mp4", thumb:"assets/media/tiktok2.jpg",
   title:{vi:"TikTok 2", en:"TikTok 2"}, note:{vi:"Video ngắn · 0:16", en:"Short-form · 0:16"}},
  {type:"social", file:"assets/media/tiktok3.mp4", thumb:"assets/media/tiktok3.jpg",
   title:{vi:"TikTok 3", en:"TikTok 3"}, note:{vi:"Video ngắn · 0:19", en:"Short-form · 0:19"}},
  {type:"social", file:"assets/media/ielts1.mp4", thumb:"assets/media/ielts1.jpg",
   title:{vi:"IELTS 1", en:"IELTS 1"}, note:{vi:"Video social · 1:52", en:"Social video · 1:52"}},
  {type:"social", file:"assets/media/nancy.mp4", thumb:"assets/media/nancy.jpg",
   title:{vi:"Nancy", en:"Nancy"}, note:{vi:"Video social · 0:28", en:"Social video · 0:28"}},
  {type:"social", file:"assets/media/8812.mp4", thumb:"assets/media/8812.jpg",
   title:{vi:"8812", en:"8812"}, note:{vi:"Video social · 0:26", en:"Social video · 0:26"}},

  /* ---- YOUTUBE: dán ID video vào yt (phần sau v= hoặc sau youtu.be/). Để trống thì tạm ẩn. ---- */
  {type:"youtube", yt:"teIKlMBEJ6Q",
   title:{vi:"YOUTUBE 1", en:"YOUTUBE 1"}, note:{vi:"Video YouTube · 13:57", en:"YouTube video · 13:57"}},
  {type:"youtube", yt:"F6wygbZMieQ",
   title:{vi:"YOUTUBE 2", en:"YOUTUBE 2"}, note:{vi:"Video YouTube · 14:24", en:"YouTube video · 14:24"}},
  {type:"youtube", yt:"4mGoSnEf51U",
   title:{vi:"YOUTUBE 3", en:"YOUTUBE 3"}, note:{vi:"Video YouTube · 13:26", en:"YouTube video · 13:26"}},
   {type:"youtube", yt:"D1jKSvq2EqA",
   title:{vi:"YOUTUBE 4", en:"YOUTUBE 4"}, note:{vi:"Video YouTube · 1:12", en:"YouTube video · 1:12"}},

  /* ---- MOBILE APP x CLAUDE ---- */
  {type:"mobile", file:"assets/media/mobile-app-1.mp4", thumb:"assets/media/mobile-app-1.jpg",
   title:{vi:"Mobile App 1", en:"Mobile App 1"}, note:{vi:"Mobile App x Claude · 0:30", en:"Mobile App x Claude · 0:30"}},
  {type:"mobile", file:"assets/media/mobile-app-2.mp4", thumb:"assets/media/mobile-app-2.jpg",
   title:{vi:"Mobile App 2", en:"Mobile App 2"}, note:{vi:"Mobile App x Claude · 0:30", en:"Mobile App x Claude · 0:30"}},
  {type:"mobile", file:"assets/media/mobile-app-3.mp4", thumb:"assets/media/mobile-app-3.jpg",
   title:{vi:"Mobile App 3", en:"Mobile App 3"}, note:{vi:"Mobile App x Claude · 0:30", en:"Mobile App x Claude · 0:30"}},

  /* ---- SHORT DRAMA ---- */
  {type:"shortdrama", file:"assets/media/shortdrama1.mp4", thumb:"assets/media/shortdrama1.jpg",
   title:{vi:"Short Drama 1", en:"Short Drama 1"}, note:{vi:"Short Drama · 0:47", en:"Short Drama · 0:47"}},
  {type:"shortdrama", file:"assets/media/shortdrama2.mp4", thumb:"assets/media/shortdrama2.jpg",
   title:{vi:"Short Drama 2", en:"Short Drama 2"}, note:{vi:"Short Drama · 1:03", en:"Short Drama · 1:03"}},
  {type:"shortdrama", file:"assets/media/shortdrama3.mp4", thumb:"assets/media/shortdrama3.jpg",
   title:{vi:"Short Drama 3", en:"Short Drama 3"}, note:{vi:"Short Drama · 0:53", en:"Short Drama · 0:53"}},
  {type:"shortdrama", file:"assets/media/shortdrama4.mp4", thumb:"assets/media/shortdrama4.jpg",
   title:{vi:"Short Drama 4", en:"Short Drama 4"}, note:{vi:"Short Drama · 1:05", en:"Short Drama · 1:05"}}
];

/* 2) KÊNH YOUTUBE MÌNH ĐÃ LÀM VIDEO
   top: lượt xem của video cao nhất mình làm | role: việc mình làm cho kênh */
const CHANNELS = [
  {name:"Monkey Quiz", url:"https://www.youtube.com/@MonkeyQuiz.", stat:"632K subs", top:{vi:"18Tr", en:"18M"},
   role:{vi:["Xây dựng hình ảnh kênh","Làm video"], en:["Channel branding","Video production"]},
   desc:{vi:"Mình xây dựng hình ảnh cho kênh và trực tiếp làm video. Video nổi bật nhất đã vượt 18 triệu lượt xem.", en:"I built the channel's visual identity and produced its videos. The top one has passed 18 million views."}},
  {name:"Daily Quiz", url:"https://www.youtube.com/@DailyQuizYT", stat:"2.6M subs", top:{vi:"9Tr", en:"9M"},
   role:{vi:["Xây dựng hình ảnh kênh","Làm video"], en:["Channel branding","Video production"]},
   desc:{vi:"Kênh quiz 2,6 triệu người đăng ký. Mình làm hình ảnh kênh và video, có video chạm mốc 9 triệu lượt xem.", en:"A 2.6M-subscriber quiz channel. I made its branding and videos, one of which hit 9 million views."}},
  {name:"Quiz Kingdom", url:"https://www.youtube.com/@QuizKingdomYT", stat:"853K subs", top:{vi:"9Tr", en:"9M"},
   role:{vi:["Dựng video"], en:["Video editing"]},
   desc:{vi:"Mình dựng video cho kênh, trong đó có video đạt 9 triệu lượt xem.", en:"I edited videos for this channel, including one with 9 million views."}},
  {name:"Quiz Royale", url:"https://www.youtube.com/@QuizRoyaleTV", stat:"35K subs", top:{vi:"500K", en:"500K"},
   role:{vi:["Dựng video"], en:["Video editing"]},
   desc:{vi:"Kênh đang lớn, mình dựng video và có video đạt 500 nghìn lượt xem.", en:"A growing channel where I edit videos; one reached 500K views."}}
];

/* 2b) DỰ ÁN AI (tóm tắt từ Portfolio AI: https://hagiangtran.github.io/ai-portfolio/) */
const AI_URL = "https://hagiangtran.github.io/ai-portfolio/";
const AIP = [
  {tag:{vi:"Extension Premiere Pro", en:"Premiere Pro extension"}, title:{vi:"Bộ extension tự động hóa Premiere", en:"Premiere automation extensions"},
   desc:{vi:"Voice Cutter dùng Whisper khớp từng câu kịch bản với đoạn voice, cắt khoảng lặng và tạo sẵn subclip. Footage Replacer, Auto Replace thay hàng trăm footage chỉ trong vài cú bấm.", en:"Voice Cutter uses Whisper to match each script line to the voice-over, trim silences and create subclips. Footage Replacer and Auto Replace swap hundreds of clips in a few clicks."},
   metric:"60%+", mlabel:{vi:"thời gian dựng được rút ngắn", en:"less editing time"}, tech:["Adobe CEP","ExtendScript","Whisper","Python"]},
  {tag:{vi:"Pipeline AI", en:"AI pipeline"}, title:{vi:"Pipeline làm phim AI từ một kịch bản", en:"AI film pipeline from one script"},
   desc:{vi:"AI tách kịch bản thành nhân vật, bối cảnh, đạo cụ; ComfyUI tạo ảnh neo để nhân vật không đổi mặt giữa các cảnh; Wan2.2 chạy local sinh video, thêm TTS và nhạc thành bản 1080p.", en:"AI breaks the script into characters, sets and props; ComfyUI anchor images keep faces consistent; Wan2.2 runs locally to generate shots, then TTS and music make a 1080p cut."},
   metric:"6", mlabel:{vi:"giai đoạn từ kịch bản đến bản dựng", en:"stages from script to final cut"}, tech:["ComfyUI","Wan2.2","TTS","AI Agent"]},
  {tag:{vi:"App desktop", en:"Desktop app"}, title:{vi:"Local AI Upscaler ảnh & video 2K/4K", en:"Local AI Upscaler for 2K/4K"},
   desc:{vi:"Upscale footage cũ và ảnh AI bằng Real-ESRGAN chạy offline trên GPU, không tốn phí cloud. Video được chia từng đợt 200 frame rồi ghép lại bằng ffmpeg.", en:"Upscales old footage and AI images with Real-ESRGAN running offline on the GPU, with no cloud fees. Videos are processed in 200-frame batches and re-joined with ffmpeg."},
   metric:"16", mlabel:{vi:"ảnh xử lý cùng lúc", en:"images processed at once"}, tech:["Python","Real-ESRGAN","ffmpeg"]},
  {tag:{vi:"Đang phát triển", en:"In progress"}, title:{vi:"App phim ngắn dọc full-stack", en:"Full-stack vertical drama app"},
   desc:{vi:"App Flutter xem phim dọc, mở khóa tập bằng xu, quảng cáo hoặc VIP; backend Supabase và trang admin Next.js để đăng nhiều tập cùng lúc.", en:"A Flutter app for vertical dramas with coin, ad or VIP unlocks, a Supabase backend and a Next.js admin to publish many episodes at once."},
   metric:"3", mlabel:{vi:"phần: mobile, backend, admin", en:"parts: mobile, backend, admin"}, tech:["Flutter","Supabase","Next.js"]}
];

/* 3) NỘI DUNG SONG NGỮ */
const L = {
 vi:{
  bio:"Editor/animator hoạt động từ 2020, có kinh nghiệm thực chiến trong các mảng esports, âm nhạc, bất động sản và YouTube quốc tế. Mình dùng thành thạo hệ phần mềm đồ họa cùng AI để làm ra những video sắc nét, mượt mà và đúng nhu cầu người xem.",
  navWork:"Sản phẩm", navChannels:"Kênh YouTube", navAi:"AI", navExp:"Kinh nghiệm", navSkill:"Kỹ năng", navContact:"Liên hệ",
  ctaWork:"Xem sản phẩm", ctaContact:"Liên hệ", contactTitle:"Cùng làm việc nhé", call:"Gọi điện",
  all:"Tất cả", social:"Social", motion:"Motion", youtube:"YouTube", mobile:"Mobile App x Claude", mobileNote:"Sản phẩm chỉ dùng cho mục đích cá nhân", shortdrama:"Short Drama", shortdramaNote:"Sản phẩm chỉ dùng cho mục đích cá nhân", empty:"Chưa có sản phẩm nào trong mục này.",
  watch:"Xem kênh", close:"Đóng ✕",
  exp:[
   ["Goda Media","9/2023 – 11/2026","Xử lý hình ảnh, video cho sản phẩm YouTube Mỹ."],
   ["TNHH Chính Phát","6/2023 – 8/2023","Quay và dựng video về sản phẩm Vali du lịch."],
   ["Box Studio","4/2022 – 10/2022","Chỉnh sửa video game cho đội tuyển thi đấu PUBG Mobile toàn quốc."],
   ["Nhô Photo","9/2021 – 3/2022","Chỉnh sửa video, hình ảnh về du lịch, bất động sản."],
   ["CLB Young Music","8/2021 – 12/2022","Chỉnh sửa video, hình ảnh về âm nhạc."],
   ["Freelancer","2020 – nay","Hoạt động trong cộng đồng Designer – Editor."]
  ],
  ai:[
   ["Prompting & AI scripting","Dùng AI để viết script tự động hóa (JavaScript/ExtendScript) cho After Effects và Premiere Pro, rút ngắn thời gian cho các tác vụ lặp đi lặp lại."],
   ["Công cụ hỗ trợ","Dùng AI để phát triển tiện ích mở rộng (CEP extension) và các ứng dụng nhỏ (Python) phục vụ công việc."],
   ["Tối ưu pipeline","Tiên phong áp dụng quy trình tích hợp AI để giải các bài toán kỹ thuật khó trong dự án, giúp hoàn thành nhanh hơn."]
  ]
 },
 en:{
  bio:"Editor and animator working since 2020, with hands-on experience in esports, music, real estate and international YouTube. I use the full graphics software stack together with AI to make sharp, smooth videos that fit what the audience needs.",
  navWork:"Work", navChannels:"Channels", navAi:"AI", navExp:"Experience", navSkill:"Skills", navContact:"Contact",
  ctaWork:"View work", ctaContact:"Contact me", contactTitle:"Let’s work together", call:"Call",
  all:"All", social:"Social", motion:"Motion", youtube:"YouTube", mobile:"Mobile App x Claude", mobileNote:"For personal use only", shortdrama:"Short Drama", shortdramaNote:"For personal use only", empty:"Nothing in this category yet.",
  watch:"Visit channel", close:"Close ✕",
  exp:[
   ["Goda Media","9/2023 – 11/2026","Image and video processing for US YouTube products."],
   ["Chính Phát Co., Ltd.","6/2023 – 8/2023","Filmed and edited videos for travel suitcase products."],
   ["Box Studio","4/2022 – 10/2022","Edited gameplay videos for a national PUBG Mobile esports team."],
   ["Nhô Photo","9/2021 – 3/2022","Edited travel and real estate videos and photos."],
   ["Young Music Club","8/2021 – 12/2022","Edited music videos and photos."],
   ["Freelancer","2020 – present","Active in the designer and editor community."]
  ],
  ai:[
   ["Prompting & AI scripting","Using AI to write automation scripts (JavaScript/ExtendScript) for After Effects and Premiere Pro, cutting the time spent on repetitive tasks."],
   ["Tooling","Using AI to build extensions (CEP) and small Python apps that support daily production work."],
   ["Pipeline optimization","Early adopter of AI-integrated workflows to solve hard technical problems in projects and finish them faster."]
  ]
 }
};
const SKILLS=[["Adobe Premiere",90],["After Effects",82],["Photoshop",83],["Illustrator",79],["CapCut",69],["AI",69]];
