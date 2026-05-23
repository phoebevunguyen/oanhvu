export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  details: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  role: string;
  achievements?: string;
  company: string;
  category: 'released' | 'upcoming' | 'marketing';
  categoryLabel: string;
  summary: string;
  poster?: string;
  photos?: string[];
  links?: {
    imdb?: string;
    netflix?: string;
    galaxyPlay?: string;
    youtube?: string;
    facebook?: string;
    tiktok?: string;
  };
}

export interface AwardItem {
  title: string;
  description: string;
}

export interface CourseItem {
  name: string;
  organization: string;
  date: string;
}

export interface TranslationSchema {
  nav: {
    about: string;
    experience: string;
    portfolio: string;
    awards: string;
    contact: string;
    downloadCv: string;
  };
  hero: {
    title: string;
    role: string;
    quote: string;
    cta: string;
  };
  about: {
    title: string;
    p1: string;
    p2?: string;
  };
  experience: {
    title: string;
    clickToDetail: string;
  };
  portfolio: {
    title: string;
    tabs: {
      released: string;
      upcoming: string;
      marketing: string;
    };
    producer: string;
    status: string;
    achievement: string;
    role: string;
    viewDetails: string;
  };
  awards: {
    title: string;
    awardsSubtitle: string;
    coursesSubtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    connect: string;
    email: string;
    phone: string;
    zalo: string;
    facebook: string;
    linkedin: string;
    imdb: string;
    call: string;
    sendEmail: string;
  };
  modal: {
    close: string;
    links: string;
  };
}

export const content: {
  vn: TranslationSchema & { experiences: ExperienceItem[]; projects: ProjectItem[]; awardsList: AwardItem[]; coursesList: CourseItem[] };
  en: TranslationSchema & { experiences: ExperienceItem[]; projects: ProjectItem[]; awardsList: AwardItem[]; coursesList: CourseItem[] };
} = {
  vn: {
    nav: {
      about: 'Về tôi',
      experience: 'Kinh nghiệm',
      portfolio: 'Sản phẩm',
      awards: 'Giải thưởng',
      contact: 'Liên hệ',
      downloadCv: 'Tải CV',
    },
    hero: {
      title: 'VŨ NGUYỄN HOÀNG OANH',
      role: 'Người kể chuyện',
      quote: '"Tôi tin vào sức mạnh của những câu chuyện. Chúng ta kết nối với nhau, cùng tin vào những thứ vô hình thông qua những câu chuyện được kể qua nhiều thế hệ. Với tôi, phim ảnh là một công cụ kể chuyện quyền năng giúp tôi thấu hiểu chính mình và chạm vào người khác."',
      cta: 'Liên hệ hợp tác',
    },
    about: {
      title: 'Câu chuyện của tôi',
      p1: 'Bắt đầu sự nghiệp trong ngành marketing, tôi luôn bị cuốn hút bởi sức mạnh của những câu chuyện và dùng chúng như cầu nối để đưa thương hiệu đến gần hơn với khách hàng. Ngay trước đại dịch Covid, tôi quyết định rẽ hướng và dấn thân vào ngành phim từ con số 0. Sau nhiều năm ăn nằm với điện ảnh, tôi muốn tiếp tục kể những câu chuyện chạm đến cảm xúc khán giả, để lại cho họ những chiêm nghiêm, suy tư và trăn trở về cuộc sống. Không chỉ kể chuyện bằng cảm xúc hay góc nhìn cá nhân, tôi kể chuyện bằng tư duy của một người làm marketing, tôi dùng những kỹ năng phân tích thị trường và đặt khán giả làm trung tâm để tạo ra những kịch bản có tính thương mại cao.',
    },
    experience: {
      title: 'Hành trình sự nghiệp',
      clickToDetail: 'Click để xem chi tiết',
    },
    portfolio: {
      title: 'PORTFOLIO',
      tabs: {
        released: 'Phim đã phát hành',
        upcoming: 'Phim sắp ra mắt',
        marketing: 'Chiến dịch marketing',
      },
      producer: 'Nhà sản xuất / Đối tác',
      status: 'Trạng thái',
      achievement: 'Thành tích',
      role: 'Vai trò',
      viewDetails: 'Xem chi tiết',
    },
    awards: {
      title: 'Giải thưởng & Khóa học',
      awardsSubtitle: 'GIẢI THƯỞNG',
      coursesSubtitle: 'KHOÁ HỌC ĐÃ THAM GIA',
    },
    contact: {
      title: 'Kết nối với tôi và cùng kể những câu chuyện tiếp theo',
      subtitle: 'Hãy kết nối với tôi để cùng tạo nên những tác phẩm ấn tượng.',
      connect: 'Kết nối',
      email: 'Email',
      phone: 'Điện thoại',
      zalo: 'Zalo',
      facebook: 'Facebook',
      linkedin: 'LinkedIn',
      imdb: 'IMDB',
      call: 'Gọi điện',
      sendEmail: 'Gửi Email',
    },
    modal: {
      close: 'Đóng',
      links: 'Liên kết',
    },
    experiences: [
      {
        id: 'exp1',
        role: 'Freelance Screenwriter',
        company: 'Freelance',
        duration: '2025 - Hiện tại',
        details: [
          'The Rebel 2 (Dòng Máu Anh Hùng 2) | Chánh Phương Film: giai đoạn phát triển kịch bản (pending)',
          'Án Mạng Núi Cấm | 89sGroup: giai đoạn hậu kỳ',
          'Linh Trạm – Bậc Thầy Giải Nghiệp | CangProduction: giai đoạn tiền kỳ'
        ],
      },
      {
        id: 'exp2',
        role: 'Biên kịch (Screenwriter)',
        company: '89sGroup',
        duration: '2020 - 2025',
        details: [
          'Thành công doanh thu phòng vé: Đồng biên kịch kịch bản các phim điện ảnh đạt doanh thu phòng vé cao tại Việt Nam: Siêu Lừa Gặp Siêu Lầy (121 tỷ VNĐ) và Quỷ Cẩu (108 tỷ VNĐ).',
          'Lập kế hoạch chiến lược & Phát triển Concept: Phối hợp với đội ngũ Marketing và Design để xây dựng visual concept, kế hoạch nội dung sáng tạo và kịch bản truyền thông, đảm bảo đồng nhất với linh hồn thương hiệu cốt lõi và mục tiêu thương mại của bộ phim.',
          'Định vị Thương hiệu Tài năng: Xây dựng và duy trì nhận diện thương hiệu nhất quán cho Đạo diễn Võ Thanh Hòa và Talent Team trên nhiều nền tảng, tăng cường vị thế trong ngành và mức độ tương tác của khán giả.'
        ],
      },
      {
        id: 'exp3',
        role: 'Freelance Content Marketing',
        company: 'Freelance',
        duration: '2017 - 2020',
        details: [
          'Giám sát sản xuất sáng tạo: Quản lý nội dung mạng xã hội hàng ngày & Giám sát sản xuất vật phẩm POSM và OOH để đảm bảo tuân thủ 100% Nguyên tắc Nhận diện Thương hiệu cho Chuỗi F&B (Kombo/ Lee BBQ/ Bangkok Daily Restaurant).',
          'Xây dựng Nhận diện Thương hiệu và Key Visuals cho Hệ thống Công nghệ Vận tải & Logistics (SmartWay).',
          'Ra mắt Thương hiệu: Thực hiện chiến dịch khai trương Phương Nam Book City trên Facebook, đạt tất cả KPI về nhận diện thương hiệu trong 6 tháng.',
          'Marketing Điện ảnh: Quản lý nội dung mạng xã hội hàng ngày cho Starlight Cinema trong hơn 1 năm, thúc đẩy lượng đặt vé trực tuyến.',
          'SEO & PR: Phối hợp với Admicro (Kênh14, VNExpress) để viết các bài PR chiến lược cho các ứng dụng công nghệ và thương hiệu thời trang (Cocosin, Dottie).'
        ],
      },
      {
        id: 'exp4',
        role: 'Marketing Supervisor',
        company: 'Saigon Innovation Hub',
        duration: '2016 - 2017',
        details: [
          'Lập kế hoạch và thực hiện các kế hoạch truyền thông thương hiệu tích hợp (Sự kiện, PR, Email, Mạng xã hội) cho các sáng kiến startup do chính phủ dẫn dắt.',
          'Tối ưu hóa vận hành: Phát triển ứng dụng đặt phòng trực tuyến custom, tiết kiệm 40% tài nguyên vận hành và chuẩn hóa quy trình dịch vụ cộng đồng.'
        ],
      },
      {
        id: 'exp5',
        role: 'Digital Marketing Executive',
        company: 'YouNet Group',
        duration: '2015 - 2016',
        details: [
          'Ứng dụng Social Listening tools (YouNet, Buzzmetrics) cho market research và phân tích đối thủ cạnh tranh, chuyển đổi dữ liệu thô thành strategic brand insights và high-impact infographics.',
          'Phân tích brand sentiment và tracking cho clients (Kimberly-Clark, Orion, Vinasoy).'
        ],
      },
    ],
    projects: [
      {
        id: 'proj1',
        title: 'Siêu Lừa Gặp Siêu Lầy',
        year: '2023',
        role: 'Đồng Biên kịch',
        company: '89sGroup',
        achievements: 'Đạt doanh thu 121 tỷ VNĐ',
        category: 'released',
        categoryLabel: 'Phim điện ảnh',
        summary: 'Bộ phim điện ảnh hài hước, kịch tính xoay quanh các phi vụ lừa đảo tinh vi, những cú lừa lém lỉnh giữa các tay lừa đảo chuyên nghiệp. Phim chiếu rạp thu hút sự quan tâm lớn của khán giả cả nước và đạt mốc doanh thu trăm tỷ cực kỳ ấn tượng.',
        poster: '/images/sieulaygapsieulua-poster.jpg',
        photos: ['/images/Sieulaygapsieulua-hinh1.jpg', '/images/sieulaygapsieulua-hinh2.jpg'],
        links: {
          imdb: 'https://www.imdb.com/title/tt26938241',
          netflix: 'https://www.netflix.com/watch/81676438',
        },
      },
      {
        id: 'proj2',
        title: 'Quỷ Cẩu',
        year: '2023',
        role: 'Đồng Biên kịch',
        company: '89sGroup',
        achievements: 'Đạt doanh thu 108 tỷ VNĐ',
        category: 'released',
        categoryLabel: 'Phim điện ảnh',
        summary: 'Tác phẩm phim điện ảnh kinh dị lấy cảm hứng từ câu chuyện dân gian "Chó đội nón mê". Phim đi sâu khai thác những góc tối của con người, nghiệp báo gia đình và đạt tiếng vang lớn với doanh thu ấn tượng 108 tỷ VNĐ.',
        poster: '/images/quycau-poster.jpg',
        photos: ['/images/quycau-hinh1.jpg', '/images/quycau-hinh2.jpg'],
        links: {
          imdb: 'https://www.imdb.com/title/tt30611573/?ref_=fn_t_1',
          galaxyPlay: 'https://galaxyplay.vn/title/quy-cau',
        },
      },
      {
        id: 'proj3',
        title: 'Tuổi Trẻ Giá Bao Nhiêu',
        year: '2024',
        role: 'Biên kịch',
        company: 'SK Pictures',
        achievements: 'Phát sóng trên kênh truyền hình quốc gia VTV3',
        category: 'released',
        categoryLabel: 'Phim truyền hình',
        summary: 'Bộ phim truyền hình dài tập xoay quanh hành trình khởi nghiệp, va vấp cuộc đời và các mối quan hệ tình cảm, gia đình phức tạp của thế hệ trẻ ngày nay. Tác phẩm mang thông điệp tích cực và định hướng giá trị cuộc sống sâu sắc.',
        poster: '/images/tuoitregiabaonhieu-poster.jpg',
        links: {
          youtube: 'https://www.youtube.com/playlist?list=PLL0b_qIPgmjAdUmi2tn3tkK4ySvHruFKz',
        },
      },
      {
        id: 'proj4',
        title: 'Thời Tới Cản Không Kịp',
        year: '2022',
        role: 'Biên kịch',
        company: '89sGroup',
        achievements: 'Phát hành trên nền tảng TrueID & FPT Play',
        category: 'released',
        categoryLabel: 'Web Series',
        summary: 'Chuỗi phim hài ngắn (Web Series) vui nhộn phản ánh các vấn đề thời sự, xu hướng và những câu chuyện hài hước dở khóc dở cười đời thường, thu hút hàng triệu lượt xem trên các nền tảng số.',
        poster: '/images/thoitoicankhongkip-poster.jpg',
        links: {
          galaxyPlay: 'https://fptplay.vn/xem-video/thoi-toi-can-khong-kip-672c3af11c6b4a7226e01c77',
        },
      },
      {
        id: 'proj5',
        title: 'Thiên Tài Của Mẹ',
        year: '2023',
        role: 'Biên kịch',
        company: 'Đoàn phim 14-Day',
        achievements: 'Thắng giải "Phim Ngắn Xuất Sắc Nhất" tại cuộc thi 14-Day Short Film 2023',
        category: 'released',
        categoryLabel: 'Phim ngắn',
        summary: 'Tác phẩm phim ngắn đầy xúc động về tình mẫu tử thiêng liêng và những nỗ lực thầm lặng của người mẹ. Bộ phim đã xuất sắc thuyết phục hội đồng nghệ thuật để giành giải thưởng cao nhất của cuộc thi.',
        poster: '/images/thientaicuame-poster.png',
        photos: ['/images/thientaicuame-hinh1.jpg'],
        links: {
          facebook: 'https://www.facebook.com/watch/?v=193821789671396',
        },
      },
      {
        id: 'proj6',
        title: 'Mẹ Xin Lỗi',
        year: '2022',
        role: 'Biên kịch',
        company: 'Đoàn phim TikTok',
        achievements: 'Thắng giải "Quay Phim Xuất Sắc Nhất" & đề cử "Phim Ngắn Xuất Sắc Nhất" tại TikTok Film Festival 2022',
        category: 'released',
        categoryLabel: 'Phim ngắn',
        summary: 'Phim ngắn thử nghiệm với định dạng màn hình dọc độc đáo, khai thác câu chuyện tâm lý gia đình đầy tinh tế và nghệ thuật kể chuyện súc tích, mang lại hiệu ứng hình ảnh xuất sắc.',
        poster: '/images/Mexinloi-poster.jpg',
        links: {
          tiktok: 'https://www.tiktok.com/@n.h.p120499/video/7156594876581219586?is_from_webapp=1&sender_device=pc&web_id=7359233908725351954',
        },
      },
      {
        id: 'proj7',
        title: 'The Rebel 2 (Dòng Máu Anh Hùng 2)',
        year: 'Đang sản xuất',
        role: 'Biên kịch kịch bản',
        company: 'Chánh Phương Films',
        achievements: 'Giai đoạn phát triển kịch bản (Pending)',
        category: 'upcoming',
        categoryLabel: 'Phim điện ảnh',
        summary: 'Phần hậu truyện vô cùng được mong đợi của bộ phim hành động võ thuật kinh điển Việt Nam "Dòng Máu Anh Hùng" (2007). Dự án hứa hẹn sẽ mang đến những pha hành động đỉnh cao kết hợp câu chuyện lịch sử hào hùng, sâu sắc.',
      },
      {
        id: 'proj8',
        title: 'Án Mạng Núi Cấm',
        year: 'Đang sản xuất',
        role: 'Biên kịch',
        company: '89sGroup',
        achievements: 'Giai đoạn hậu kỳ (Post-production)',
        category: 'upcoming',
        categoryLabel: 'Phim điện ảnh',
        summary: 'Tác phẩm điện ảnh kỳ bí, giật gân lấy bối cảnh vùng tâm linh Núi Cấm huyền bí. Câu chuyện đi sâu giải mã vụ án mạng bí hiểm đan xen các yếu tố tâm lý con người.',
      },
      {
        id: 'proj9',
        title: 'Linh Trạm - Bậc Thầy Giải Nghiệp',
        year: 'Đang sản xuất',
        role: 'Biên kịch',
        company: 'Cang Production',
        achievements: 'Giai đoạn tiền kỳ (Pre-production)',
        category: 'upcoming',
        categoryLabel: 'Phim điện ảnh',
        summary: 'Tác phẩm điện ảnh mang yếu tố kỳ ảo, tâm linh giả tưởng đầy sáng tạo xoay quanh những người làm nhiệm vụ giải nghiệp cho nhân gian.',
      },
      {
        id: 'proj10',
        title: 'Honda Nothing Beat Us',
        year: '2022',
        role: 'Kế hoạch nội dung & Kịch bản',
        company: 'Khách hàng Honda Việt Nam',
        achievements: 'TVC Chiến dịch lan tỏa cảm hứng',
        category: 'marketing',
        categoryLabel: 'Chiến dịch TVC',
        summary: 'Chiến dịch truyền thông đầy cảm xúc với thông điệp: "Honda BỀN BỈ LĂN BÁNH, ĐI QUA KHÓ KHĂN CÙNG NHỮNG NGƯỜI HÙNG THẦM LẶNG" nhằm tôn vinh nỗ lực bền bỉ vượt khó khăn của người dân Việt Nam.',
        links: {
          youtube: 'https://www.youtube.com/watch?v=nrVs5mcA62o',
        },
      },
      {
        id: 'proj11',
        title: 'A Love Letter by Dottie',
        year: '2019',
        role: 'Content Strategist',
        company: 'Thương hiệu thời trang Dottie',
        achievements: 'Social Campaign',
        category: 'marketing',
        categoryLabel: 'Chiến dịch Marketing',
        summary: 'Chiến dịch truyền cảm hứng bằng những câu chuyện thư tình ngọt ngào của phái đẹp, kết nối hài hòa giữa giá trị thời trang của thương hiệu Dottie với cảm xúc chân thành từ khách hàng.',
        poster: '/images/aloveletterbyDottie.jpg',
      },
      {
        id: 'proj12',
        title: 'iFind - “21 tỷ đồng hỗ trợ 700 nhà bán lẻ”',
        year: '2018',
        role: 'PR Lead / Copywriter',
        company: 'iFind App',
        achievements: 'Chiến dịch PR & Truyền thông cộng đồng',
        category: 'marketing',
        categoryLabel: 'Chiến dịch PR',
        summary: 'Một chiến dịch PR ý nghĩa mang lại giá trị thực tế lớn, hỗ trợ 700 nhà bán lẻ liên kết vượt qua các khủng hoảng thị trường nhờ các gói hỗ trợ công nghệ tài chính trị giá 21 tỷ đồng.',
      },
      {
        id: 'proj13',
        title: 'Khai trương Phương Nam Book City',
        year: '2017',
        role: 'Supervisor Truyền thông',
        company: 'Phương Nam Book',
        achievements: 'Chiến dịch Khai trương & Launching',
        category: 'marketing',
        categoryLabel: 'Chiến dịch Khai trương',
        summary: 'Chiến dịch quảng bá ra mắt tổ hợp nhà sách khổng lồ với hai ý tưởng concept chủ đạo là "Rừng sách nhiệt đới" và "Thành phố sách Châu Âu" ngay giữa lòng Sài Gòn, thu hút hàng chục ngàn lượt tham quan.',
        poster: '/images/phuongnambookcity.jpg',
      },
    ],
    awardsList: [
      {
        title: 'Thiên Tài Của Mẹ',
        description: 'Thắng giải "Phim Ngắn Xuất Sắc Nhất" tại cuộc thi 14-Day Short Film 2023.',
      },
      {
        title: 'Mẹ Xin Lỗi',
        description: 'Thắng giải "Quay Phim Xuất Sắc Nhất" và nhận đề cử "Phim Ngắn Xuất Sắc Nhất" tại TikTok Film Festival 2022.',
      },
    ],
    coursesList: [
      {
        name: 'Rewriting the Script in Practical Filmmaking',
        organization: 'Chanh Phuong Films',
        date: 'Sep 2025',
      },
      {
        name: 'Film Production & Marketing (Internal Training)',
        organization: '89sGroup',
        date: '2025',
      },
      {
        name: 'Into Filmmaking',
        organization: 'MAAC',
        date: 'May 2020',
      },
      {
        name: 'Emotional Intelligence Training',
        organization: 'Life Coaching Vietnam',
        date: 'Sep 2018',
      },
      {
        name: 'Market Research Training Course',
        organization: 'INTAGE Vietnam Academy',
        date: 'Aug 2017',
      },
      {
        name: 'The Journey of Discovering Good Consumer Insights',
        organization: 'Havas Riverorchid',
        date: 'May 2016',
      },
      {
        name: 'Visual Storytelling & Inbound Marketing',
        organization: 'Markus Marketing Center',
        date: 'Feb 2016',
      },
    ],
  },
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      portfolio: 'Portfolio',
      awards: 'Awards',
      contact: 'Contact',
      downloadCv: 'Download CV',
    },
    hero: {
      title: 'VU NGUYEN HOANG OANH',
      role: 'Storyteller',
      quote: '"I believe in the power of stories. We connect with each other, believing in the invisible through stories told across generations. To me, cinema is a powerful storytelling tool that helps me understand myself and touch others."',
      cta: "Let's Collaborate",
    },
    about: {
      title: 'My Story',
      p1: 'Starting my career in marketing, I have always been fascinated by the power of stories, using them as bridges to bring brands closer to customers. Right before the Covid pandemic, I decided to pivot and step into the film industry from scratch. After years of living and breathing cinema, I want to continue telling stories that touch the audience\'s emotions, leaving them with reflections, contemplations, and introspection about life. Rather than telling stories solely through emotions or personal viewpoints, I tell stories with the mindset of a marketer, utilizing market analysis skills and keeping the audience at the center to create highly commercial screenplays.',
    },
    experience: {
      title: 'Career Journey',
      clickToDetail: 'Click to view details',
    },
    portfolio: {
      title: 'PORTFOLIO',
      tabs: {
        released: 'Released Films',
        upcoming: 'Upcoming Films',
        marketing: 'Marketing Campaigns',
      },
      producer: 'Producer / Client',
      status: 'Status',
      achievement: 'Achievement',
      role: 'Role',
      viewDetails: 'View Details',
    },
    awards: {
      title: 'Awards & Courses',
      awardsSubtitle: 'AWARDS',
      coursesSubtitle: 'COMPLETED COURSES',
    },
    contact: {
      title: "Connect with me and let's craft the next stories",
      subtitle: 'Get in touch to bring compelling and high-impact stories to life.',
      connect: 'Connect',
      email: 'Email',
      phone: 'Phone',
      zalo: 'Zalo',
      facebook: 'Facebook',
      linkedin: 'LinkedIn',
      imdb: 'IMDB',
      call: 'Call Now',
      sendEmail: 'Send Email',
    },
    modal: {
      close: 'Close',
      links: 'Links',
    },
    experiences: [
      {
        id: 'exp1',
        role: 'Freelance Screenwriter',
        company: 'Freelance',
        duration: '2025 - Present',
        details: [
          'The Rebel 2 (Dong Mau Anh Hung 2) | Chánh Phương Film: in development stage (pending)',
          'An Mang Nui Cam | 89sGroup: in post-production stage',
          'Linh Tram – Bac Thay Giai Nghiep | CangProduction: in pre-production Stage'
        ],
      },
      {
        id: 'exp2',
        role: 'Screenwriter',
        company: '89sGroup',
        duration: '2020 - 2025',
        details: [
          'Box Office Success: Co-wrote scripts for feature films achieving high Vietnam box office revenue: Hustler vs Scammer (Sieu Lua Gap Sieu Lay) - 121B VND and Crimson Snout (Quy Cau) - 108B VND.',
          'Strategic Planning & Concept Development: Collaborated with Marketing and Design teams to build visual concepts, creative content plan and communication scripts, ensuring alignment with the film\'s core brand soul and commercial objectives.',
          'Talent Branding: Defined and maintained consistent brand identities for Director Vo Thanh Hoa and the Talent Team across multiple platforms, significantly increasing industry positioning and audience engagement.'
        ],
      },
      {
        id: 'exp3',
        role: 'Freelance Content Marketing',
        company: 'Freelance',
        duration: '2017 - 2020',
        details: [
          'Creative Production Oversight: Managed daily social media content & Supervised the production of POSM and OOH materials to ensure 100% compliance with Brand Identity Guidelines for F&B Chain (Kombo/ Lee BBQ/ Bangkok Daily Restaurant).',
          'Built the Brand Identity and Key Visuals for Logistics & Transportation Tech System (SmartWay).',
          'Brand Launch: Executed the grand opening campaign for Phuong Nam Book City on Facebook, achieving all brand awareness KPIs within 6 months.',
          'Cinema Marketing: Managed daily social media content for Starlight Cinema for over 1 year, boosting online booking engagement.',
          'SEO & PR: Collaborated with Admicro (Kenh14, VNExpress) to write strategic PR articles for tech apps and fashion brands (Cocosin, Dottie).'
        ],
      },
      {
        id: 'exp4',
        role: 'Marketing Supervisor',
        company: 'Saigon Innovation Hub',
        duration: '2016 - 2017',
        details: [
          'Planned and executed integrated brand communication plans (Events, PR, Email, Social) for government-led startup initiatives.',
          'Operational Optimization: Developed a custom room-booking web-app, saving 40% in operational resources and standardizing community service workflows.'
        ],
      },
      {
        id: 'exp5',
        role: 'Digital Marketing Executive',
        company: 'YouNet Group',
        duration: '2015 - 2016',
        details: [
          'Applied Social Listening tools (YouNet, Buzzmetrics) for market research and competitor analysis, transforming raw data into strategic brand insights and high-impact infographics.',
          'Analyzed and tracked brand sentiment for major clients (Kimberly-Clark, Orion, Vinasoy).'
        ],
      },
    ],
    projects: [
      {
        id: 'proj1',
        title: 'Siêu Lừa Gặp Siêu Lầy',
        year: '2023',
        role: 'Co-writer',
        company: '89sGroup',
        achievements: 'Grossed 121 billion VND at Box Office',
        category: 'released',
        categoryLabel: 'Feature Film',
        summary: 'A clever comedy-heist theatrical movie following sophisticated team of tricksters pulling off high-stakes operations. It captured the public\'s attention, breaking records with an impressive 121B VND gross earnings.',
        poster: '/images/sieulaygapsieulua-poster.jpg',
        photos: ['/images/Sieulaygapsieulua-hinh1.jpg', '/images/sieulaygapsieulua-hinh2.jpg'],
        links: {
          imdb: 'https://www.imdb.com/title/tt26938241',
          netflix: 'https://www.netflix.com/watch/81676438',
        },
      },
      {
        id: 'proj2',
        title: 'Quỷ Cẩu',
        year: '2023',
        role: 'Co-writer',
        company: '89sGroup',
        achievements: 'Grossed 108 billion VND at Box Office',
        category: 'released',
        categoryLabel: 'Feature Film',
        summary: 'A theatrical psychological horror film inspired by the spooky local urban legend "Chó đội nón mê". Exploring dark karma and family curses, it became a box office phenomenon, crossing the 108B VND milestone.',
        poster: '/images/quycau-poster.jpg',
        photos: ['/images/quycau-hinh1.jpg', '/images/quycau-hinh2.jpg'],
        links: {
          imdb: 'https://www.imdb.com/title/tt30611573/?ref_=fn_t_1',
          galaxyPlay: 'https://galaxyplay.vn/title/quy-cau',
        },
      },
      {
        id: 'proj3',
        title: 'Tuổi Trẻ Giá Bao Nhiêu',
        year: '2024',
        role: 'Screenwriter',
        company: 'SK Pictures',
        achievements: 'Broadcasted on National VTV3 Channel',
        category: 'released',
        categoryLabel: 'TV Series',
        summary: 'A TV drama series tracing the entrepreneurship journey, life lessons, and romance of young adults in contemporary Vietnam, delivering positive messages and deep family values.',
        poster: '/images/tuoitregiabaonhieu-poster.jpg',
        links: {
          youtube: 'https://www.youtube.com/playlist?list=PLL0b_qIPgmjAdUmi2tn3tkK4ySvHruFKz',
        },
      },
      {
        id: 'proj4',
        title: 'Thời Tới Cản Không Kịp',
        year: '2022',
        role: 'Screenwriter',
        company: '89sGroup',
        achievements: 'Released on TrueID & FPT Play',
        category: 'released',
        categoryLabel: 'Web Series',
        summary: 'A comedy web series illustrating social trends and lighthearted everyday conflicts, amassing millions of streams on major digital platforms.',
        poster: '/images/thoitoicankhongkip-poster.jpg',
        links: {
          galaxyPlay: 'https://fptplay.vn/xem-video/thoi-toi-can-khong-kip-672c3af11c6b4a7226e01c77',
        },
      },
      {
        id: 'proj5',
        title: 'Thiên Tài Của Mẹ',
        year: '2023',
        role: 'Screenwriter',
        company: '14-Day Film Crew',
        achievements: 'Won "Best Short Film" at 14-Day Short Film 2023 Competition',
        category: 'released',
        categoryLabel: 'Short Film',
        summary: 'An emotional short film focused on maternal sacrifice and silent love, produced entirely within 14 days and taking home the grand prize.',
        poster: '/images/thientaicuame-poster.png',
        photos: ['/images/thientaicuame-hinh1.jpg'],
        links: {
          facebook: 'https://www.facebook.com/watch/?v=193821789671396',
        },
      },
      {
        id: 'proj6',
        title: 'Mẹ Xin Lỗi',
        year: '2022',
        role: 'Screenwriter',
        company: 'TikTok Film Crew',
        achievements: 'Won "Best Cinematography" & Nominated for "Best Short Film" at TikTok Film Festival 2022',
        category: 'released',
        categoryLabel: 'Short Film',
        summary: 'An artistic vertical short film that captures family dynamics through highly polished cinematography and a concise narrative format.',
        poster: '/images/Mexinloi-poster.jpg',
        links: {
          tiktok: 'https://www.tiktok.com/@n.h.p120499/video/7156594876581219586?is_from_webapp=1&sender_device=pc&web_id=7359233908725351954',
        },
      },
      {
        id: 'proj7',
        title: 'The Rebel 2 (Dong Mau Anh Hung 2)',
        year: 'Upcoming',
        role: 'Script Writer',
        company: 'Chanh Phuong Films',
        achievements: 'Script Development Phase (Pending)',
        category: 'upcoming',
        categoryLabel: 'Feature Film',
        summary: 'The highly anticipated sequel to the legendary Vietnamese action film "The Rebel" (2007). The project promises high-octane martial arts coupled with a deep historical narrative.',
      },
      {
        id: 'proj8',
        title: 'Án Mạng Núi Cấm',
        year: 'Upcoming',
        role: 'Screenwriter',
        company: '89sGroup',
        achievements: 'Post-production Phase',
        category: 'upcoming',
        categoryLabel: 'Feature Film',
        summary: 'A suspenseful, mystical feature thriller set in the mysterious and spiritual Nui Cam mountains, solving a complex crime mystery.',
      },
      {
        id: 'proj9',
        title: 'Linh Trạm - Bậc Thầy Giải Nghiệp',
        year: 'Upcoming',
        role: 'Screenwriter',
        company: 'Cang Production',
        achievements: 'Pre-production Phase',
        category: 'upcoming',
        categoryLabel: 'Feature Film',
        summary: 'A highly imaginative spiritual fantasy feature film centering around spiritual agents tasked with balancing human karma.',
      },
      {
        id: 'proj10',
        title: 'Honda Nothing Beat Us',
        year: '2022',
        role: 'Content Planning & Scripting',
        company: 'Honda Vietnam Client',
        achievements: 'Inspiring TVC Campaign',
        category: 'marketing',
        categoryLabel: 'TVC Campaign',
        summary: 'A commercial campaign celebrating resilience: "Honda rolling persistently, overcoming hardships alongside silent everyday heroes."',
        links: {
          youtube: 'https://www.youtube.com/watch?v=nrVs5mcA62o',
        },
      },
      {
        id: 'proj11',
        title: 'A Love Letter by Dottie',
        year: '2019',
        role: 'Content Strategist',
        company: 'Dottie Fashion Brand',
        achievements: 'Social Campaign',
        category: 'marketing',
        categoryLabel: 'Marketing Campaign',
        summary: 'A heartwarming storytelling campaign using female love letters, linking Dottie\'s fashion appeal with real, authentic emotions.',
        poster: '/images/aloveletterbyDottie.jpg',
      },
      {
        id: 'proj12',
        title: 'iFind - “21 billion VND supporting 700 retailers”',
        year: '2018',
        role: 'PR Lead / Copywriter',
        company: 'iFind App',
        achievements: 'PR & Community Support Campaign',
        category: 'marketing',
        categoryLabel: 'PR Campaign',
        summary: 'A impactful public relations initiative providing financial and tech support bundles valued at 21B VND to help 700 retail stores weather market shifts.',
      },
      {
        id: 'proj13',
        title: 'Phuong Nam Book City Grand Opening',
        year: '2017',
        role: 'Communications Supervisor',
        company: 'Phuong Nam Book',
        achievements: 'Launching & Store Opening Campaign',
        category: 'marketing',
        categoryLabel: 'Opening Campaign',
        summary: 'Promotional campaign introducing a massive new bookstore complex with concepts of "Tropical Jungle of Books" and "European Book City" in HCMC.',
        poster: '/images/phuongnambookcity.jpg',
      },
    ],
    awardsList: [
      {
        title: 'Thiên Tài Của Mẹ',
        description: 'Won "Best Short Film" at the 14-Day Short Film 2023 competition.',
      },
      {
        title: 'Mẹ Xin Lỗi',
        description: 'Won "Best Cinematography" and nominated for "Best Short Film" at the TikTok Film Festival 2022.',
      },
    ],
    coursesList: [
      {
        name: 'Rewriting the Script in Practical Filmmaking',
        organization: 'Chanh Phuong Films',
        date: 'Sep 2025',
      },
      {
        name: 'Film Production & Marketing (Internal Training)',
        organization: '89sGroup',
        date: '2025',
      },
      {
        name: 'Into Filmmaking',
        organization: 'MAAC',
        date: 'May 2020',
      },
      {
        name: 'Emotional Intelligence Training',
        organization: 'Life Coaching Vietnam',
        date: 'Sep 2018',
      },
      {
        name: 'Market Research Training Course',
        organization: 'INTAGE Vietnam Academy',
        date: 'Aug 2017',
      },
      {
        name: 'The Journey of Discovering Good Consumer Insights',
        organization: 'Havas Riverorchid',
        date: 'May 2016',
      },
      {
        name: 'Visual Storytelling & Inbound Marketing',
        organization: 'Markus Marketing Center',
        date: 'Feb 2016',
      },
    ],
  },
};
