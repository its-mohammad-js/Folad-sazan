import { useTranslation } from "react-i18next";

function OurMissionSection() {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <div
      dir={language !== "fa" ? "ltr" : "rtl"}
      className="space-y-28 my-16 overflow-hidden"
    >
      <div className="px-4 py-2 mx-auto">
        <div className="flex flex-col md:flex-row relative gap-8 md:gap-12 lg:gap-16">
          {/* Colored Box */}
          <div className="w-full md:w-1/5">
            <img
              src="/images/figureOurMission (1).png"
              alt="figure-image"
              className="object-contain absolute rtl:-right-48 ltr:-left-48 size-[28rem] -top-14"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-2/3 space-y-6">
            <h2 className="text-3xl md:text-6xl font-bold text-gray-200">
              {t("OurMissionSection.missionTitle")}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {t("OurMissionSection.missionDescription")}
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 py-2 mx-auto">
        <div className="flex flex-col md:flex-row justify-end gap-8 md:gap-12 relative lg:gap-16">
          {/* Text Content */}
          <div className="w-full md:w-2/3 space-y-6">
            <h2 className="text-3xl md:text-6xl font-bold text-gray-200">
              {t("OurMissionSection.visionTitle")}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {t("OurMissionSection.visionDescription")}
            </p>
          </div>

          {/* Colored Box */}
          <div className="w-full md:w-1/5">
            <img
              src="/images/figureOurMission (2).png"
              alt="figure-image"
              className="object-contain absolute rtl:-left-48 ltr:-right-48 size-[28rem] -top-36"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMissionSection;
