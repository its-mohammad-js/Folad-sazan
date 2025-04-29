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
          "Serving industries across continents with high-quality steel and casting solutions tailored to their needs.",
        button: "Explore Our Global Presence",
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
          "ارائه خدمات فولاد و ریخته‌گری باکیفیت به صنایع در قاره‌های مختلف، مطابق با نیازهای آن‌ها.",
        button: "بررسی حضور جهانی ما",
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
