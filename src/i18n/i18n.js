import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      hero: {
        title: "Crafting Excellence in Steel & Casting",
        subtitle:
          "With decades of expertise, we deliver top-quality steel and casting solutions for industries worldwide.",
      },
      industriesCard: {
        sectionTitle: "Industries We Serve",
        sectionSubtitle:
          "Delivering high-quality steel and casting solutions across various industries, ensuring strength, durability, and innovation.",

        construction: {
          title: "Construction",
          description:
            "Reliable steel solutions for bridges, skyscrapers, and infrastructure projects that stand the test of time.",
        },
        automotive: {
          title: "Automotive",
          description:
            "High-performance steel components that enhance durability, safety, and efficiency in modern vehicles.",
        },
        manufacturing: {
          title: "Manufacturing",
          description:
            "Strong and versatile steel materials tailored for machinery, equipment, and industrial applications.",
        },
        energy: {
          title: "Energy",
          description:
            "Premium-grade steel for power plants, pipelines, and renewable energy projects worldwide.",
        },
      },
      metricsSection: {
        title: "Our Metrics Tell the Story",
        subTitle:
          "Delivering quality, reliability, and innovation—our numbers speak for themselves.",
        items: [
          {
            number: "50+",
            label: "Years of Excellence",
          },
          {
            number: "1M+",
            label: "Tons of Steel Produced",
          },
          {
            number: "500+",
            label: "Successful Projects",
          },
          {
            number: "99%",
            label: "Client Satisfaction",
          },
        ],
      },
      globalTrustSection: {
        title: "GLOBAL TRUST",
        trusted: "Trusted",
        byClients: "by Clients",
        worldwide: "Worldwide",
        description:
          "With a proven track record spanning over 50 countries, we've earned the trust of leading industrial partners through our uncompromising quality standards and tailored solutions. Our global network of manufacturing facilities and distribution centers ensures timely delivery and local support, while our multinational team brings diverse expertise to every project.",
        button: "Explore Our Global Presence",
      },
      growthExcellenceSection: {
        title: "Growth & Excellence Over Time",
        description:
          "Through decades of dedicated research and development, we have consistently pushed the boundaries of innovation in our industry. Our unwavering commitment to quality control at every production stage has enabled us to achieve sustainable growth across global markets. By investing in cutting-edge technology and nurturing long-term partnerships, we've established ourselves as a trusted leader in the sector.",
        button: "Request more info",
      },
      testimonialsSection: {
        title: "Our partners. Our Friends.",
        highlight: "They love us.",
        description:
          "Trusted by businesses worldwide, our commitment to quality and reliability speeds through our clients' experiences",
      },
      legacySection: {
        titleStart: "Building a",
        titleHighlight: "Legacy of",
        titleEnd: "Excellence",
        description:
          "Crafting high-quality steel solutions with precision, innovation, and a commitment to excellence worldwide.",
      },
      OurMissionSection: {
        missionTitle: "Our Mission",
        missionDescription:
          "We are committed to producing high-quality steel products that meet the evolving needs of modern industries. Through continuous innovation, precision engineering, and sustainable practices, we strive to enhance efficiency, reduce environmental impact, and provide long-lasting solutions. Our mission extends beyond manufacturing—we aim to build strong relationships with our partners and customers, ensuring that every product we deliver upholds the highest standards of quality and reliability.",
        visionTitle: "Our Vision",
        visionDescription:
          "We envision a future where steel manufacturing is driven by cutting-edge technology, sustainability, and excellence. Our goal is to redefine industry standards by integrating smart manufacturing processes, optimizing resource efficiency, and fostering a culture of continuous improvement. As we expand our global reach, we are dedicated to shaping a more innovative and responsible steel industry that not only meets today’s demands but also paves the way for future generations.",
      },
      servicesSection: {
        header: {
          smallTitle: "Our Services",
          mainTitle: "We Provide Top-Tier Services",
          description:
            "Tailored to meet client needs with efficiency, reliability, and operational excellence",
        },
        items: [
          {
            title: "Fast & Reliable Delivery",
            description:
              "We ensure timely and secure delivery of our products through our global logistics network",
          },
          {
            title: "Deal-Making Process",
            description:
              "Simple and efficient process with expert team support for consultations and custom orders",
          },
          {
            title: "Quality Products",
            description:
              "Precision-crafted steel meeting international standards for durable construction",
          },
          {
            title: "Competitive Pricing",
            description:
              "High-quality products at market-best prices with transparent costing",
          },
        ],
      },
      ctaSection: {
        title: "A Glimpse Into Our Work",
        subtitle: "Explore our craftsmanship and dedication",
        description:
          "From raw materials to the final product, discover our advanced manufacturing processes, skilled workforce, and commitment to quality through a collection of images that highlight our work.",
        learnMore: "Learn More",
      },
      ContactForm: {
        contactInfoTitle: "Contact Information",
        contactInfoSubtitle: "Say something to book a service call",
        phone: "+10123456789",
        email: "demo@gmail.com",
        address:
          "132 Dartmouth Street Boston, Massachusetts 02156 United States",
        form: {
          firstName: "First Name",
          lastName: "Last Name",
          email: "Email",
          phoneNumber: "Phone Number",
          selectSubject: "Select Subject?",
          generalInquiry: "General Inquiry",
          message: "Message",
          messagePlaceholder: "Write your message..",
          sendButton: "Send Message",
        },
      },
      navbar: {
        home: "Home",
        about: "About Us",
        products: "Products",
        contact: "Contact Us",
        desc: "Foolad Sazan delivers high-quality casting services using modern technology and skilled experts. Our commitment to quality has earned the trust of our clients.",
      },
    },
  },
  fa: {
    translation: {
      hero: {
        title: "خلق کیفیت بی‌نظیر در صنعت فولاد و ریخته‌گری",
        subtitle:
          "با سال‌ها تجربه، ما بهترین خدمات فولاد و ریخته‌گری رو برای صنایع در سرتاسر دنیا ارائه می‌دهیم.",
      },
      industriesCard: {
        sectionTitle: "صنایعی که به آن‌ها خدمت می‌کنیم",
        sectionSubtitle:
          "ارائه راهکارهای باکیفیت فولاد و ریخته‌گری برای صنایع مختلف، تضمین‌کننده استحکام، دوام و نوآوری.",

        construction: {
          title: "ساخت‌وساز",
          description:
            "راه‌حل‌های قابل اعتماد فولادی برای پل‌ها، آسمان‌خراش‌ها و پروژه‌های زیربنایی که دوام و ماندگاری دارند.",
        },
        automotive: {
          title: "خودروسازی",
          description:
            "قطعات فولادی با عملکرد بالا برای افزایش دوام، ایمنی و بهره‌وری در خودروهای مدرن.",
        },
        manufacturing: {
          title: "تولید صنعتی",
          description:
            "فولاد مقاوم و چندمنظوره متناسب با نیازهای ماشین‌آلات، تجهیزات و کاربردهای صنعتی.",
        },
        energy: {
          title: "انرژی",
          description:
            "فولاد باکیفیت برای نیروگاه‌ها، خطوط لوله و پروژه‌های انرژی‌های تجدیدپذیر در سراسر جهان.",
        },
      },
      metricsSection: {
        title: "آمارها گویای کیفیت ما هستند",
        subTitle:
          "با ارائه کیفیت، اعتماد و نوآوری، آمار ما خود بیانگر مسیر موفقیت ماست",
        items: [
          {
            number: "۵۰+",
            label: "سال تجربه درخشان",
          },
          {
            number: "۱M+",
            label: "تن فولاد تولیدشده",
          },
          {
            number: "۵۰۰+",
            label: "پروژه موفق",
          },
          {
            number: "۹۹٪",
            label: "رضایت مشتریان",
          },
        ],
      },
      globalTrustSection: {
        title: "اعتماد جهانی",
        trusted: "مورد اعتماد",
        byClients: "توسط مشتریان",
        worldwide: "در سراسر جهان",
        description:
          "با فعالیت در بیش از ۵۰ کشور، اعتماد شرکای صنعتی پیشرو را از طریق استانداردهای کیفیت و راهکارهای سفارشی کسب کرده‌ایم. شبکه جهانی تولید و توزیع ما، همراه با تیم چندملیتی متخصص، راهکارهای فولادی سازگار با نیازهای منطقه‌ای و استانداردهای بین‌المللی ارائه می‌دهد.",
        button: "بررسی حضور جهانی ما",
      },
      growthExcellenceSection: {
        title: "رشد و تعالی در طول زمان",
        description:
          "طی دهه‌ها تحقیق و توسعه مستمر، ما همواره مرزهای نوآوری در صنعت خود را جابجا کرده‌ایم. تعهد بی‌چون‌وچرای ما به کنترل کیفیت در تمام مراحل تولید، امکان رشد پایدار در بازارهای جهانی را فراهم آورده است. با سرمایه‌گذاری در فناوری‌های پیشرفته و پرورش مشارکت‌های بلندمدت، خود را به عنوان یک رهبر قابل اعتماد در این بخش تثبیت کرده‌ایم.",
        button: "درخواست اطلاعات بیشتر",
      },
      testimonialsSection: {
        title: "همکاران ما، دوستان ما",
        highlight: "ما را دوست دارند",
        description:
          "با اعتماد کسب‌وکارهای سراسر جهان، تعهد ما به کیفیت و قابلیت اطمینان در تجربه مشتریان ما دیده می‌شود.",
      },
      legacySection: {
        titleStart: "ساختن",
        titleHighlight: "میراثی از",
        titleEnd: "برتری",
        description:
          "ساخت راه‌حل‌های فولادی باکیفیت با دقت، نوآوری و تعهد به برتری در سراسر جهان.",
      },
      OurMissionSection: {
        missionTitle: "ماموریت ما",
        missionDescription:
          "ما متعهد به تولید محصولات فولادی با کیفیت بالا هستیم که پاسخگوی نیازهای در حال تحول صنایع مدرن باشند. از طریق نوآوری مداوم، مهندسی دقیق و رویکردهای پایدار، در تلاشیم کارایی را افزایش دهیم، اثرات زیست‌محیطی را کاهش دهیم و راه‌حل‌هایی ماندگار ارائه کنیم. ماموریت ما فراتر از تولید است — ما به دنبال ایجاد روابط قوی با شرکا و مشتریان خود هستیم تا اطمینان حاصل کنیم که هر محصولی که ارائه می‌دهیم، بالاترین استانداردهای کیفیت و قابلیت اطمینان را داراست.",
        visionTitle: "چشم‌انداز ما",
        visionDescription:
          "ما آینده‌ای را متصور هستیم که در آن تولید فولاد توسط فناوری‌های پیشرفته، پایداری و برتری هدایت می‌شود. هدف ما بازتعریف استانداردهای صنعت از طریق به‌کارگیری فرآیندهای هوشمند، بهینه‌سازی استفاده از منابع و ایجاد فرهنگی از بهبود مستمر است. با گسترش حضور جهانی‌مان، متعهد به شکل‌دهی صنعتی نوآورانه‌تر و مسئولانه‌تر هستیم که نه تنها پاسخگوی نیازهای امروز باشد، بلکه مسیر را برای نسل‌های آینده هموار کند.",
      },
      servicesSection: {
        header: {
          smallTitle: "خدمات ما",
          mainTitle: "ما خدمات برتر ارائه می‌دهیم",
          description:
            "متناسب با نیاز مشتریان، با کارایی، اعتمادپذیری و برتری عملیاتی",
        },
        items: [
          {
            title: "تحویل سریع و مطمئن",
            description:
              "ما از طریق شبکه جهانی لجستیک خود، تحویل به‌موقع و ایمن محصولات را تضمین می‌کنیم",
          },
          {
            title: "فرآیند معامله",
            description:
              "فرآیندی ساده و کارآمد با پشتیبانی تیم متخصص برای مشاوره و سفارشات سفارشی",
          },
          {
            title: "محصولات باکیفیت",
            description:
              "فولاد مهندسی‌شده با دقت که مطابق با استانداردهای بین‌المللی برای ساخت‌وساز بادوام است",
          },
          {
            title: "قیمت‌گذاری رقابتی",
            description:
              "محصولات باکیفیت با بهترین قیمت‌های بازار و هزینه‌های شفاف",
          },
        ],
      },
      ctaSection: {
        title: "نگاهی به کار ما",
        subtitle: "کاوش در هنر و تعهد ما",
        description:
          "از مواد اولیه تا محصول نهایی، فرآیندهای پیشرفته تولید، نیروی کار ماهر و تعهد ما به کیفیت را از طریق مجموعه‌ای از تصاویر که کار ما را نشان می‌دهند، کشف کنید.",
        learnMore: "اطلاعات بیشتر",
      },
      ContactForm: {
        contactInfoTitle: "اطلاعات تماس",
        contactInfoSubtitle: "برای رزرو تماس خدماتی، پیامی ارسال کنید",
        phone: "+10123456789", // شماره تماس نیاز به ترجمه ندارد
        email: "demo@gmail.com", // ایمیل نیز قابل تغییر نیست
        address:
          "132 خیابان دارتموث، بوستون، ماساچوست 02156، ایالات متحده آمریکا",
        form: {
          firstName: "نام",
          lastName: "نام خانوادگی",
          email: "ایمیل",
          phoneNumber: "شماره تماس",
          selectSubject: "موضوع مورد نظر را انتخاب کنید؟",
          generalInquiry: "سؤال عمومی",
          message: "پیام",
          messagePlaceholder: "پیام خود را بنویسید...",
          sendButton: "ارسال پیام",
        },
      },
      navbar: {
        home: "خانه",
        about: "درباره ما",
        products: "محصولات",
        contact: "ارتباط با ما",
        desc: "فولادسازان با بهره‌گیری از فناوری روز و نیروی متخصص، خدمات ریخته‌گری دقیق و باکیفیتی ارائه می‌دهد. تعهد ما به کیفیت، اعتماد مشتریان را تضمین کرده است.",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fa",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
