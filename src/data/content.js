export const content = {
  hero: {
    title: "Hi, I'm",
    name: "Fahat Trongnasuk",
    alias: "Bruce Wayne",
    tagline: "Software Developer | Tech Enthusiast",
  },
  about: {
    story: "ความกระหายที่จะเรียนรู้และเผชิญหน้ากับความท้าทายใหม่ๆ คือสิ่งที่ขับเคลื่อนตัวผม นั่นคือเหตุผลที่ผมไม่เคยหยุดพาตัวเองไปแข่งขันในเวทีใหญ่ๆ ตั้งแต่ National Software Contest (NSC) ไปจนถึงงาน OpenAI Codex x AIAT Hackathon ในฐานะนักพัฒนาซอฟต์แวร์ ผมมองว่าเทคโนโลยีคือเครื่องมือทลายขีดจำกัด ไม่ว่าจะเป็นการพัฒนาเว็บแอปพลิเคชันที่ซับซ้อน หรือสร้างโปรเจกต์เกมแนว 2D Metroidvania ผมพร้อมเสมอที่จะดำดิ่งลงไปแก้ปัญหาและสร้างสรรค์ผลงานที่สามารถตอบโจทย์การใช้งานได้จริง",
  },
  projects: [
    {
      id: 1,
      title: "Slip Sense Dashboard",
      success: "A robust dashboard application hosted on Vercel for monitoring and analytics.",
      failure: "Faced challenges with deployment and responsive design initially.",
      learning: "Learned the intricacies of modern web deployment and mobile-first design.",
      description: "SlipSense คือเว็บแอปพลิเคชันสำหรับจัดการด้านการเงินที่ออกแบบมาเพื่อพ่อค้าแม่ค้าออนไลน์และธุรกิจขนาดเล็กโดยเฉพาะ ขับเคลื่อนด้วยเทคโนโลยี Vision AI ที่สามารถอ่านและดึงข้อมูลจากสลิปโอนเงินหรือใบเสร็จได้โดยอัตโนมัติ ระบบจะช่วยจัดหมวดหมู่รายรับ-รายจ่าย และแสดงผลสรุปสุขภาพทางการเงินผ่าน Dashboard แบบเรียลไทม์ ตัวแอปพัฒนาด้วยเทคโนโลยีเว็บที่ทันสมัย มีดีไซน์ที่สวยงาม ใช้งานง่าย และรองรับการแสดงผลบนทุกอุปกรณ์ (Responsive Design)",
      technologies: ["Next.js", "React.js", "Tailwind", "TypeScript", "Supabase", "OpenAI Vision"],
      features: [
        "AI-Powered Slip Extraction: ระบบ AI สแกนและดึงข้อมูลจากสลิปโอนเงินหรือใบเสร็จได้อย่างแม่นยำอัตโนมัติ",
        "Real-time Financial Dashboard: แดชบอร์ดสรุปยอดกำไรสุทธิ รายรับ และรายจ่ายของเดือนปัจจุบันแบบเรียลไทม์",
        "Automated Categorization: ระบบช่วยวิเคราะห์และจัดหมวดหมู่รายรับ-รายจ่ายให้เหมาะสมกับประเภทธุรกิจ",
        "Comprehensive Analytics Charts: กราฟวิเคราะห์กระแสเงินสดและพฤติกรรมการใช้จ่ายที่ดูง่ายและสวยงาม",
        "Secure Cloud Storage: ระบบจัดเก็บประวัติการทำธุรกรรมและรูปสลิปต้นฉบับอย่างปลอดภัยบนระบบคลาวด์"
      ],
      githubLink: "https://github.com/SOGUY144/SlipSense",
      liveLink: "https://slip-sense-gamma.vercel.app/dashboard",
      image: "/projects/slip_sense_real.png"
    },
    {
      id: 2,
      title: "Loop to Token",
      success: "Successfully deployed a decentralized or token-based web application.",
      failure: "Encountered state management complexities during the initial build phase.",
      learning: "Gained deep insights into tokenomics integration and scalable web architecture.",
      description: "Loop to Token เป็นเว็บแอปพลิเคชันที่สร้างขึ้นเพื่อส่งเสริมการรีไซเคิลและลดปริมาณขยะ ผ่านการเปลี่ยนขยะพลาสติกให้เป็นคะแนนสะสม ผู้ใช้งานสามารถค้นหาตู้ทิ้งขยะอัจฉริยะ (Smart Bin) บนแผนที่, สแกน QR Code เพื่อรับคะแนน, และนำคะแนนไปแลกเป็นคูปองส่วนลดจากร้านค้าที่ร่วมรายการได้ทันที โดดเด่นด้วยการออกแบบ UI แบบ Glassmorphism ที่ทันสมัย และประสบการณ์ใช้งานที่ลื่นไหลบนทุกอุปกรณ์",
      technologies: ["Vanilla JavaScript", "Firebase", "Leaflet.js", "jsQR"],
      features: [
        "In-Browser QR Scanner: ระบบเปิดกล้องสแกน QR Code ผ่านหน้าเว็บได้ทันที เพื่อยืนยันการรับคะแนนจากตู้ Smart Bin",
        "Interactive Map System: แผนที่ค้นหาจุดทิ้งขยะอัจฉริยะ พร้อมหมุดที่ออกแบบพิเศษเพื่อให้ผู้ใช้ค้นหาสถานที่ใกล้ตัวได้อย่างรวดเร็ว",
        "Reward & Point Tracking: ระบบบัญชีผู้ใช้สำหรับจัดการคะแนนสะสมแบบเรียลไทม์ และฟังก์ชันแลกคูปองส่วนลดจากร้านค้าพาร์ทเนอร์",
        "Smart Database Fallback: ระบบจัดการข้อมูลอัจฉริยะที่สามารถทำงานผ่าน LocalDB ในเครื่องได้อัตโนมัติ หากเกิดข้อผิดพลาดในการเชื่อมต่อเซิร์ฟเวอร์หลัก"
      ],
      githubLink: "https://github.com/SOGUY144/loop-to-token",
      liveLink: "https://loop-to-token.vercel.app/",
      image: "/projects/loop_to_token_real.png",
      modalImage: "/projects/loop_to_token_modal.png"
    },
    {
      id: 3,
      title: "RouteWise AI",
      success: "Successfully developed a smart route optimization system with AI.",
      failure: "Faced challenges in integrating the map API with AI routing algorithms.",
      learning: "Mastered geospatial data handling and AI-driven route calculations.",
      description: "RouteWise AI คือระบบจัดการเส้นทางอัจฉริยะที่ออกแบบมาเพื่อทีมขนส่งและโลจิสติกส์โดยเฉพาะ ผสมผสานเทคโนโลยีแผนที่ขั้นสูงเข้ากับปัญญาประดิษฐ์ (AI) เพื่อคำนวณและจัดวางเส้นทางการเดินทางที่ดีที่สุด ช่วยประหยัดเวลาในการทำงานและลดต้นทุนค่าน้ำมันได้อย่างมีประสิทธิภาพสูงสุด",
      technologies: ["React (Next.js)", "Map API (Google Maps)", "AI Integration (Gemini AI)", "Tailwind CSS"],
      features: [
        "ระบบคำนวณและปรับแต่งเส้นทางอัจฉริยะ (Smart route optimization)",
        "อินเทอร์เฟซแผนที่แบบโต้ตอบใช้งานง่าย (Interactive mapping interface)",
        "ระบบแนะนำจุดหมายและเส้นทางด้วย AI (AI-powered destination suggestions)",
        "การติดตามตำแหน่งคนขับแบบเรียลไทม์ (Real-time driver tracking)"
      ],
      githubLink: "https://github.com/maxsaidawat-cell/routewise-aii",
      liveLink: "https://routewise-aii-1ket.vercel.app/",
      image: "/projects/routewise.png"
    },
    {
      id: 4,
      title: "The Coming of Stages",
      success: "Developed an engaging event enrollment platform for musicals.",
      failure: "Handled complex ticketing and user registration flows under high traffic.",
      learning: "Improved performance optimization and robust authentication systems.",
      description: "The Coming of Stages คือแพลตฟอร์มจัดการอีเวนต์และระบบลงทะเบียนที่สร้างขึ้นมาสำหรับงานเทศกาลละครเวที 'Hopemaker in Bloom' โดยเฉพาะ ระบบถูกออกแบบมาเพื่อมอบประสบการณ์ที่ราบรื่น (Seamless) ให้กับผู้ใช้งาน ตั้งแต่การจองตั๋วเข้าร่วมกิจกรรม, การสร้างตั๋วแบบคิวอาร์โค้ด (QR Code), ไปจนถึงระบบจัดการบัญชีผู้ใช้งานที่ครบวงจร",
      technologies: ["React", "Next.js", "Tailwind", "Node.js"],
      features: [
        "Event enrollment & ticketing: ระบบลงทะเบียนเข้าร่วมกิจกรรมและจัดการการจองตั๋ว",
        "QR Code generation for tickets: ระบบสร้าง QR Code อัตโนมัติเพื่อใช้เป็นตั๋วเข้างาน (E-Ticket)",
        "Secure user authentication: ระบบสมัครสมาชิกและเข้าสู่ระบบที่มีความปลอดภัย",
        "Real-time availability tracking: ระบบติดตามและอัปเดตจำนวนที่นั่ง/สิทธิ์ที่ว่างแบบเรียลไทม์"
      ],
      githubLink: "https://github.com/thecomingofstages/enroll-website",
      liveLink: "https://enroll.thecomingofstages.com/",
      image: "/projects/coming_of_stages.png",
      modalImage: "/projects/coming_of_stages_modal.png"
    },
    {
      id: 5,
      title: "GitHub Archives & Mini Projects",
      description: "คอลเลกชันรวมมินิโปรเจกต์และโค้ดต่างๆ ที่ผมเคยพัฒนาขึ้นมาเพื่อการศึกษาและทดลองเทคโนโลยีใหม่ๆ (ไม่ได้นำไป Deploy ขึ้นโฮสต์จริง) ซึ่งประกอบไปด้วยโปรเจกต์จากหลายภาษา ไม่ว่าจะเป็น Python, JavaScript, Machine Learning (DebtML) และ C# (SLOO)",
      technologies: ["Python", "JavaScript", "C#", "Machine Learning"],
      githubLinks: [
        { name: "PY Repo", url: "https://github.com/SOGUY144/PY" },
        { name: "Wad Repo", url: "https://github.com/SOGUY144/Wad" },
        { name: "DebtML Repo", url: "https://github.com/SOGUY144/DebtML" },
        { name: "SLOO Repo", url: "https://github.com/SOGUY144/SLOO" }
      ],
      features: [
        "PY: คอลเลกชันสคริปต์และโปรเจกต์ขนาดเล็กที่เขียนด้วย Python",
        "Wad: โปรเจกต์ที่พัฒนาด้วย JavaScript",
        "DebtML: โมเดล Machine Learning สำหรับการวิเคราะห์ข้อมูล",
        "SLOO: โปรเจกต์ที่พัฒนาด้วยภาษา C#"
      ],
      image: "/projects/github_archives.png"
    }
  ],
  mindset: {
    conflictResolution: "ผมมองว่าความขัดแย้งคือโอกาสในการระดมสมองและแลกเปลี่ยนมุมมอง ผมเชื่อมั่นในการใช้เหตุผลและตรรกะมาถกเถียงกันอย่างสร้างสรรค์ เพื่อค้นหา Solution และวางรากฐานโครงสร้างที่ดีที่สุดให้กับงาน โดยเปิดรับฟังทีมงานทุกฝ่ายเพื่อผสานไอเดียและขับเคลื่อนโปรเจกต์ให้ก้าวหน้าอย่างแข็งแกร่ง",
    techInterest: "ผมหลงใหลในการพัฒนาซอฟต์แวร์ด้วยแนวคิด 'Vibe Coding' โดยรับบทบาทเป็น Architect ผู้ออกแบบโครงสร้างระบบ และดึงศักยภาพของ AI มาเป็นผู้ช่วย (Speed Runner) ในการเขียนโค้ดและจัดการระบบ ไม่ว่าจะเป็นงาน Full-Stack Web หรือ Game Development เพื่อสร้างสรรค์ผลลัพธ์ที่รวดเร็วและมีประสิทธิภาพสูงสุด"
  },
  contact: {
    github: "https://github.com/SOGUY144",
    instagram: "https://www.instagram.com/g_oshand/?hl=en",
    facebook: "https://www.facebook.com/fahat.ntr/?locale=th_TH"
  },
  certificates: [
    {
      id: 1,
      title: "IT CLASH 69 (Multimedia Track)",
      issuer: "KMITL",
      date: "2026",
      image: "/certificates/cert1.jpg"
    },
    {
      id: 2,
      title: "Thailand Summer Jam 2026",
      issuer: "Thailand Summer Jam",
      date: "April 2026",
      image: "/certificates/cert2.png"
    },
    {
      id: 3,
      title: "HackaTech Championship",
      issuer: "NEXTOPIA / KBTG",
      date: "2026",
      image: "/certificates/cert3.png"
    },
    {
      id: 4,
      title: "1st Runner-Up - GameJamX 5Years",
      issuer: "GameJamX",
      date: "April 2026",
      image: "/certificates/cert4.png"
    },
    {
      id: 5,
      title: "Global Game Jam 2026",
      issuer: "Global Game Jam",
      date: "2026",
      image: "/certificates/cert5.png"
    },
    {
      id: 6,
      title: "1st Runner-Up - Game Dev Tournament",
      issuer: "Hamster Hub",
      date: "December 2025",
      image: "/certificates/cert6.png"
    },
    {
      id: 7,
      title: "HackaTech Accomplishment",
      issuer: "NEXTOPIA / KBTG",
      date: "2026",
      image: "/certificates/cert7.jpg"
    }
  ],
  techStack: [
    { id: 1, name: "React.js", color: "#61dafb" },
    { id: 2, name: "TypeScript", color: "#3178c6" },
    { id: 3, name: "Tailwind", color: "#38bdf8" },
    { id: 4, name: "HTML", color: "#e34f26" },
    { id: 5, name: "CSS", color: "#1572b6" },
    { id: 6, name: "PHP", color: "#777bb4" },
    { id: 7, name: "Laravel", color: "#ff2d20" },
    { id: 8, name: "Next.js", color: "#ffffff" },
    { id: 9, name: "JavaScript", color: "#f7df1e" },
    { id: 10, name: "MySQL", color: "#4479a1" }
  ],
  games: [
    {
      id: 1,
      title: "Micro-Immersive Sim",
      genre: ["Immersive Sim", "Indie", "Pixel Art"],
      shortDescription: "A bite-sized immersive sim experience where every choice matters.",
      itchLink: "https://soguy.itch.io/micro-immersive-sim",
      image: "/projects/micro_immersive_sim.png"
    },
    {
      id: 2,
      title: "AquaMata",
      genre: ["Side-Scroller", "Shooter", "Action", "Pixel Art"],
      shortDescription: "เรื่องราวของ Hydro สสารรูปมนุษย์ที่ตื่นขึ้นมาเพื่อออกตามหาแหล่งน้ำที่หายไป บนโลกที่ร้อนดั่งเปลวเพลิง ตัวเกมเป็นแนว Side-scroller Shooter ที่สามารถใช้สกิลเกี่ยวกับน้ำรูปแบบต่างๆ ได้",
      itchLink: "https://punyapatchairat.itch.io/aquamata",
      image: "/projects/aquamata.png"
    },
    {
      id: 3,
      title: "DarkFlameMaster",
      genre: ["3D", "Action", "Game Jam"],
      shortDescription: "โปรเจกต์เกม 3D จากงาน ITCLASH69 Multimedia Jam ที่โดดเด่นด้วยธีมพลังแห่งเปลวเพลิงทมิฬ (Dark Flame) พัฒนาขึ้นร่วมกับทีมงานในระยะเวลาจำกัด",
      itchLink: "https://soguy.itch.io/darkflamemaster",
      image: "/projects/darkflamemaster.png"
    }
  ]
};
