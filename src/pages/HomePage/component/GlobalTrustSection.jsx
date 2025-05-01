import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const GlobalTrustSection = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <div
      dir={language !== "fa" ? "ltr" : "rtl"}
      className="flex-col md:flex-row flex items-center justify-baseline py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center md:text-start">
        <h1 className="text-xl font-bold text-gray-200 mb-6">
          {t("globalTrustSection.title")}
        </h1>
        <h2 className="text-5xl leading-14 font-black text-gray-100 mb-4">
          <span className="text-[#C084FC]">
            {t("globalTrustSection.trusted")}
          </span>{" "}
          {t("globalTrustSection.byClients")} <br />
          <span className="relative">
            <span className="size-14 top-2 -left-2 absolute bg-[#7e0fec] z-0"></span>
            <span className="relative">
              {t("globalTrustSection.worldwide")}
            </span>
          </span>
        </h2>

        <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-8">
          {t("globalTrustSection.description")}
        </p>

        <div className="mt-10">
          <button className="cursor-pointer py-3 text-lg flex items-center gap-2 text-white font-medium rounded-md">
            {t("globalTrustSection.button")}
            <span className="rtl:rotate-180">
              <BsArrowRight />
            </span>
          </button>
        </div>
      </div>

      <div className="md:w-1/2 w-full h-fit mt-4 md:mt-0 md:h-96">
        <img
          src="/images/GlobalMapThumbnail.png"
          alt="map-thumbnail"
          className="size-full object-center md:object-top object-contain md:object-cover"
        />
      </div>
    </div>
  );
};

export default GlobalTrustSection;
