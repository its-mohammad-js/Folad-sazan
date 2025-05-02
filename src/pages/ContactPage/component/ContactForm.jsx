import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function ContactForm() {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <section
      dir={language !== "fa" ? "ltr" : "rtl"}
      className="flex flex-col relative z-0 md:flex-row items-center justify-between px-4 py-2"
    >
      {/* Contact Info */}
      <div className="bg-[#011c2a] relative z-10 overflow-hidden py-12 pb-32 px-4 md:px-14">
        <div className="max-w-7xl mx-auto">
          <div className="text-center md:text-start mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">
              {t("ContactForm.contactInfoTitle")}
            </h2>
            <p className="text-lg text-gray-300">
              {t("ContactForm.contactInfoSubtitle")}
            </p>
          </div>

          <div className="space-y-4">
            {/* Phone */}
            <div className="rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <FaPhone className="text-gray-200 size-6" />
                <a
                  href={`tel:${t("ContactForm.phone")}`}
                  className="text-xl text-gray-200"
                >
                  {t("ContactForm.phone")}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-gray-200 size-6" />
                <a
                  href={`mailto:${t("ContactForm.email")}`}
                  className="text-gray-200"
                >
                  {t("ContactForm.email")}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 text-start">
                <FaMapMarkerAlt className="text-gray-200 size-6" />
                <span className="max-w-64 text-gray-200">
                  {t("ContactForm.address")}
                </span>
              </div>
            </div>
          </div>

          {/* Background Circles */}
          <div className="size-32 rounded-full right-16 -bottom-4 bg-gray-200/60 absolute" />
          <div className="size-44 rounded-full right-12 -bottom-20 bg-gray-200/40 absolute" />
        </div>
      </div>

      {/* Contact Form */}
      <div>
        <form className="text-white relative z-10 p-8 rounded-lg space-y-6 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-1">
                {t("ContactForm.form.firstName")}
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-1"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">
                {t("ContactForm.form.lastName")}
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-1"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">
                {t("ContactForm.form.email")}
              </label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-1"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">
                {t("ContactForm.form.phoneNumber")}
              </label>
              <input
                type="tel"
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-1"
              />
            </div>
          </div>

          {/* Subject Options */}
          <div>
            <label className="block text-sm mb-2">
              {t("ContactForm.form.selectSubject")}
            </label>
            <div className="flex flex-wrap gap-4">
              {[1, 2, 3, 4].map((i) => (
                <label key={i} className="flex items-center space-x-2">
                  <input type="radio" name="subject" className="form-radio" />
                  <span>{t("ContactForm.form.generalInquiry")}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-1">
              {t("ContactForm.form.message")}
            </label>
            <textarea
              rows="3"
              placeholder={t("ContactForm.form.messagePlaceholder")}
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-1 resize-none"
            ></textarea>
          </div>

          <div className="flex justify-end mt-4">
            <button className="bg-[#0f2c3f] text-white py-2 px-6 rounded-lg shadow-md hover:bg-[#14384e] transition">
              {t("ContactForm.form.sendButton")}
            </button>
          </div>
        </form>
      </div>

      <div className="absolute rotate-180 top-32 md:top-auto md:ltr:-right-1/4 md:rtl:-left-1/4">
        <img src="/images/FigureVector.svg" alt="side-vector" />
      </div>
    </section>
  );
}

export default ContactForm;
