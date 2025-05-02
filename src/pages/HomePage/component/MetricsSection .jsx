import { useTranslation } from "react-i18next";

const MetricsSection = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const metrics = t("metricsSection.items", {
    returnObjects: true,
  });

  return (
    <section
      dir={language !== "fa" ? "ltr" : "rtl"}
      className="py-16 px-4 z-10 relative text-center text-white"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        {t("metricsSection.title")}
      </h2>
      <p className="text-sm md:text-base text-gray-300 mb-12 max-w-2xl mx-auto">
        {t("metricsSection.subTitle")}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12">
        {metrics.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div className="text-gray-200 rtl:border-r-2 ltr:border-l-2 border-[#9333EA] px-4 text-2xl md:text-3xl font-bold">
              {item.number}
            </div>
            <p className="mt-2 text-base md:text-lg text-gray-200">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MetricsSection;
