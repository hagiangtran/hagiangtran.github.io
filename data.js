/* =====================================================================
   DỮ LIỆU WEB — chỉ cần sửa file này (không cần đụng vào index.html)
   Bảng màu mặc định: indigo | forest | wine | ocean | cream | lilac
   (người xem vẫn tự đổi được bằng nút bảng màu trên thanh menu)
   ===================================================================== */
const DEFAULT_THEME = "cream";

/* =====================================================================
   1) SẢN PHẨM / PROJECTS — chỉ cần sửa phần này
   type:  "social" | "motion" | "youtube"
   file:  đường dẫn mp4/gif trong assets/media/   (social, motion)
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

  /* ---- SOCIAL ---- */
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
   title:{vi:"YOUTUBE 3", en:"YOUTUBE 3"}, note:{vi:"Video YouTube · 13:26", en:"YouTube video · 13:26"}}
];

/* 2) KÊNH YOUTUBE / CHANNELS (thêm stat:"123K subs" nếu muốn hiện số sub) */
const CHANNELS = [
   {name:"Daily Quiz", url:"https://www.youtube.com/@DailyQuizYT",stat:"2.6M subs",
   desc:{vi:"Kênh quiz trên YouTube mà mình đã xây dựng hình ảnh và làm video có video đạt 9Tr views.", en:"The YouTube quiz channel for which I developed the brand identity and created videos has a video that reached 9M views."}},
  {name:"Monkey Quiz", url:"https://www.youtube.com/@MonkeyQuiz.",stat:"632K subs",
   desc:{vi:"Kênh quiz trên YouTube mà mình đã xây dựng hình ảnh và làm video có video đạt 18Tr views.", en:"The YouTube quiz channel for which I developed the brand identity and created videos has a video that reached 18M views."}},
  {name:"Quiz Royale", url:"https://www.youtube.com/@QuizRoyaleTV",stat:"35K subs",
   desc:{vi:"Kênh quiz trên YouTube mà mình đã dựng video có video đạt 500K views.", en:"One of the videos I produced for a YouTube quiz channel reached 500K views."}},
  {name:"Quiz Kingdom", url:"https://www.youtube.com/@QuizKingdomYT",stat:"853K subs",
   desc:{vi:"Kênh quiz trên YouTube mà mình đã dựng video có video đạt 9Tr views.", en:"One of the videos I produced for a YouTube quiz channel reached 9M views."}}
];

/* 3) NỘI DUNG SONG NGỮ */
const L = {
 vi:{
  bio:"Editor/animator hoạt động từ 2020, có kinh nghiệm thực chiến trong các mảng esports, âm nhạc, bất động sản và YouTube quốc tế. Mình dùng thành thạo hệ phần mềm đồ họa cùng AI để làm ra những video sắc nét, mượt mà và đúng nhu cầu người xem.",
  navWork:"Sản phẩm", navChannels:"Kênh YouTube", navAi:"AI", navExp:"Kinh nghiệm", navSkill:"Kỹ năng", navContact:"Liên hệ",
  ctaWork:"Xem sản phẩm", ctaContact:"Liên hệ", contactTitle:"Cùng làm việc nhé", call:"Gọi điện",
  all:"Tất cả", social:"Social", motion:"Motion", youtube:"YouTube", empty:"Chưa có sản phẩm nào trong mục này.",
  watch:"Xem kênh", close:"Đóng ✕",
  exp:[
   ["Goda Media","9/2023 – 10/2026","Xử lý hình ảnh, video cho sản phẩm YouTube Mỹ."],
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
  all:"All", social:"Social", motion:"Motion", youtube:"YouTube", empty:"Nothing in this category yet.",
  watch:"Visit channel", close:"Close ✕",
  exp:[
   ["Goda Media","9/2023 – 10/2026","Image and video processing for US YouTube products."],
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
