import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqItems = [
  {
    question: {
      en: "What Industries Do You Serve?",
      fa: "در چه صنایعی فعالیت می‌کنید؟",
    },
    answer: {
      en: "We provide high-quality steel products for various industries including construction, automotive, manufacturing, and energy sectors.",
      fa: "ما محصولات فولادی با کیفیت بالا را برای صنایع مختلف از جمله ساخت‌وساز، خودروسازی، تولید و انرژی ارائه می‌دهیم.",
    },
  },
  {
    question: {
      en: "How Do You Ensure The Quality Of Your Products?",
      fa: "چگونه از کیفیت محصولات خود اطمینان حاصل می‌کنید؟",
    },
    answer: {
      en: "Our products undergo strict quality control measures including advanced testing and certification to meet industry standards and client expectations.",
      fa: "محصولات ما تحت کنترل کیفیت سخت‌گیرانه قرار می‌گیرند که شامل آزمایش‌ها و گواهی‌نامه‌های پیشرفته برای رعایت استانداردهای صنعتی و انتظارات مشتری است.",
    },
  },
  {
    question: {
      en: "Do You Offer Customized Steel Solutions?",
      fa: "آیا راه‌حل‌های سفارشی برای محصولات فولادی ارائه می‌دهید؟",
    },
    answer: {
      en: "Yes, we specialize in tailor-made steel products to meet your specific requirements, ensuring durability and precision in every order.",
      fa: "بله، ما در تولید محصولات فولادی سفارشی متناسب با نیازهای خاص شما تخصص داریم و دوام و دقت را در هر سفارش تضمین می‌کنیم.",
    },
  },
  {
    question: {
      en: "Do You Offer International Shipping?",
      fa: "آیا ارسال بین‌المللی هم دارید؟",
    },
    answer: {
      en: "Yes, we supply our products worldwide, ensuring safe and efficient logistics for international clients.",
      fa: "بله، ما محصولات خود را به سراسر جهان عرضه می‌کنیم و لجستیک ایمن و کارآمد را برای مشتریان بین‌المللی تضمین می‌کنیم.",
    },
  },
  {
    question: {
      en: "What Is Your Average Production And Delivery Time?",
      fa: "میانگین زمان تولید و تحویل محصولات شما چقدر است؟",
    },
    answer: {
      en: "Production and delivery times depend on order size and complexity, but we strive to deliver efficiently while maintaining high standards.",
      fa: "زمان تولید و تحویل بسته به اندازه و پیچیدگی سفارش متغیر است، اما ما همواره تلاش می‌کنیم تحویل را به‌صورت کارآمد و با حفظ استانداردهای بالا انجام دهیم.",
    },
  },
  {
    question: {
      en: "How Can I Request A Quote Or Place An Order?",
      fa: "چگونه می‌توانم درخواست قیمت یا سفارش بدهم؟",
    },
    answer: {
      en: "You can contact us via our website, email, or phone to request a quote, discuss your needs, and place an order with our team.",
      fa: "شما می‌توانید از طریق وب‌سایت، ایمیل یا تلفن با ما تماس بگیرید، نیازهای خود را مطرح کرده و درخواست قیمت یا سفارش ثبت کنید.",
    },
  },
];

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const {
    i18n: { language: lang },
  } = useTranslation();

  return (
    <section
      dir={lang !== "fa" ? "ltr" : "rtl"}
      className="py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xl font-semibold text-[#581c87] mb-2">
            {lang === "fa" ? "سؤالات متداول" : "FAQ"}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-200">
            {lang === "fa" ? "پرسش‌های پرتکرار" : "Frequently Asked Questions"}
          </h3>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="bg-[#1e2d52] rounded-lg shadow-sm transition-all"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  aria-expanded={isActive}
                >
                  <span className="text-lg font-medium text-gray-300">
                    {item.question[lang]}
                  </span>
                  {isActive ? (
                    <FiChevronUp className="w-6 h-6 text-gray-600" />
                  ) : (
                    <FiChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out px-6 ${
                    isActive
                      ? "py-4 opacity-100 [&>p]:size-auto"
                      : "py-0 opacity-0 [&>p]:size-0"
                  }`}
                >
                  <p className="text-gray-300 leading-relaxed">
                    {item.answer[lang]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
