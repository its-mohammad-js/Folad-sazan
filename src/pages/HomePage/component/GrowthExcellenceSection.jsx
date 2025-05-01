import React from "react";
import { useTranslation } from "react-i18next";

const GrowthExcellenceSection = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <div
      dir={language !== "fa" ? "ltr" : "rtl"}
      className="md:flex-row flex-col-reverse flex w-full items-center px-4 py-2 md:h-96 gap-4 my-2"
    >
      <div className="md:w-1/2 w-full h-full p-2">
        <img
          src="/images/chartThumbnail.png"
          alt="chart-thumbnail"
          className="size-full object-contain"
        />
      </div>

      <div className="w-full md:w-1/2 h-full flex flex-col text-center md:text-start items-center justify-evenly md:items-start md:px-4 py-2">
        <h1 className="text-5xl leading-14 w-11/12 font-bold text-gray-200 mb-4">
          {t("growthExcellenceSection.title")}
        </h1>
        <p className="text-gray-300 mb-6 leading-8 text-lg">
          {t("growthExcellenceSection.description")}
        </p>
        <button className="px-4 py-2 bg-gray-600 cursor-pointer text-white rounded-md transition-colors">
          {t("growthExcellenceSection.button")}
        </button>
      </div>
    </div>
  );
};

export default GrowthExcellenceSection;
