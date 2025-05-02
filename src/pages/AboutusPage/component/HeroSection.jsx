import { useTranslation } from "react-i18next";

function HeroSection() {
  const { t } = useTranslation();

  return (
    <div className="h-[600px] relative z-0 flex items-center justify-center overflow-hidden">
      {/* main title */}
      <div className="text-center px-4 space-y-6 flex flex-col items-center relative z-10">
        <h4 className="text-3xl md:text-5xl relative z-10 font-bold text-gray-200">
          {t("legacySection.titleStart")}{" "}
          <span className="relative px-4">
            <p className="w-full h-12 md:h-20 absolute inset-0 z-0">
              <img
                src="/images/TextBorderStatic.svg"
                alt="static-border"
                className="mx-auto size-full"
              />
            </p>
            <span className="relative z-10">
              {t("legacySection.titleHighlight")}
            </span>
          </span>{" "}
          {t("legacySection.titleEnd")}
        </h4>
        <p className="md:text-lg text-gray-300 md:w-lg mx-auto">
          {t("legacySection.description")}
        </p>
        <img src="/images/RoundedLine.svg" alt="line-svg" />
      </div>
      {/* figures */}
      <>
        {/* left */}
        <div className="size-36 absolute z-0 left-[-15%]  md:left-[5%] top-[10%]">
          <img src="/images/Figures (1).png" alt="Figure-model" />
        </div>
        <div className="size-36 absolute z-0 left-[-25%]  md:left-[10%]">
          <img src="/images/Figures (1).svg" alt="Figure-model" />
        </div>
        <div className="size-36 absolute z-0 left-[-15%]  md:left-[5%] bottom-[5%]">
          <img src="/images/Figures (2).png" alt="Figure-model" />
        </div>
        {/* rightt */}
        <div className="size-36 absolute z-0 right-[-15%] md:right-[5%] top-[10%]">
          <img src="/images/Figures (3).png" alt="Figure-model" />
        </div>
        <div className="size-36 absolute z-0 right-[-25%] md:right-[10%]">
          <img src="/images/Figures (4).png" alt="Figure-model" />
        </div>
        <div className="size-36 absolute z-0 -right-[15%] md:right-[5%] bottom-[5%]">
          <img src="/images/Figures (5).png" alt="Figure-model" />
        </div>
      </>
    </div>
  );
}

export default HeroSection;
