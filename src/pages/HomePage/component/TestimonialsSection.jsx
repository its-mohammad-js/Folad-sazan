import React from "react";
import { useTranslation } from "react-i18next";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    companyEn: "Sazeh Gostar",
    companyFa: "سازه‌گستر",
    textEn:
      "Exceptional service and high-grade casting materials! Our production line saw a 30% improvement in efficiency after partnering with Foulad Sazaneh. Their technical support is always on point.",
    textFa:
      "خدمات فوق‌العاده و مواد ریخته‌گری با درجه کیفیت بالا! پس از همکاری با فولاد سازانه، خط تولید ما حدود ۳۰٪ بهره‌وری بیشتری داشت. پشتیبانی فنی آن‌ها همیشه دقیق و حرفه‌ای است.",
    authorEn: "Reza Khani",
    authorFa: "رضا خانی",
    positionEn: "Production Manager",
    positionFa: "مدیر تولید",
  },
  {
    id: 2,
    companyEn: "Pars Rolling Mills",
    companyFa: "نورد پارس",
    textEn:
      "We’ve relied on Foulad Sazaneh for years, and their steel quality has remained consistently outstanding. The durability of their products has minimized our maintenance costs significantly.",
    textFa:
      "سال‌هاست به فولاد سازانه اعتماد داریم و کیفیت فولاد آن‌ها همیشه فوق‌العاده بوده است. دوام بالای محصولاتشان باعث کاهش چشمگیر هزینه‌های نگهداری ما شده است.",
    authorEn: "Mina Rajabi",
    authorFa: "مینا رجبی",
    positionEn: "Quality Supervisor",
    positionFa: "ناظر کیفیت",
  },
  {
    id: 3,
    companyEn: "Aria Casting Co.",
    companyFa: "شرکت ریخته‌گری آریا",
    textEn:
      "A trusted partner in our foundry operations. Their innovative approach to casting techniques helped us achieve tighter tolerances and improved surface finishes across several projects.",
    textFa:
      "شریکی قابل‌اعتماد در عملیات ریخته‌گری ما. رویکرد نوآورانه آن‌ها به تکنیک‌های ریخته‌گری به ما کمک کرد تا به تلرانس‌های دقیق‌تر و سطوح صاف‌تری در پروژه‌های مختلف دست پیدا کنیم.",
    authorEn: "Saeed Moradi",
    authorFa: "سعید مرادی",
    positionEn: "Technical Director",
    positionFa: "مدیر فنی",
  },
  {
    id: 4,
    companyEn: "Toseeh Steel",
    companyFa: "توسعه فولاد",
    textEn:
      "Foulad Sazaneh has transformed our supply chain with their reliable deliveries and consistent steel grade. Their commitment to client satisfaction is clear in every interaction we’ve had.",
    textFa:
      "فولاد سازانه با تحویل‌های به‌موقع و کیفیت یکنواخت محصولات فولادی، زنجیره تأمین ما را متحول کرده است. تعهد آن‌ها به رضایت مشتری در هر تعامل ما کاملاً مشهود است.",
    authorEn: "Ali Ghasemi",
    authorFa: "علی قاسمی",
    positionEn: "Procurement Lead",
    positionFa: "سرپرست خرید",
  },
];

const TestimonialsSection = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const langKey = language === "fa" ? "Fa" : "En";

  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="overflow-hidden py-8 px-4 space-y-8 relative">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Title */}
        <h2 className="text-3xl md:text-5xl leading-10 md:leading-16 font-bold text-gray-200 mb-4">
          {t("testimonialsSection.title")}
          <br />
          <span className="text-[#818cf8]">
            {t("testimonialsSection.highlight")}
          </span>
        </h2>

        {/* Description Paragraph */}
        <div className="max-w-3xl mx-auto">
          <p className="text-base md:text-lg text-gray-400 leading-relaxed">
            {t("testimonialsSection.description")}
          </p>
        </div>
      </div>

      <div className="flex w-max animate-scroll gap-x-6">
        {doubledTestimonials.map((testimonial, i) => (
          <TestimonialCard
            key={testimonial.id * i}
            testimonial={testimonial}
            langKey={langKey}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
