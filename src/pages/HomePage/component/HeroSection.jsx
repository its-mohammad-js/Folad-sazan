import { useTranslation } from "react-i18next";

function HeroSection() {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <div
      dir={language !== "fa" ? "ltr" : "rtl"}
      className="relative h-[500px] z-0 overflow-hidden flex items-center justify-between"
    >
      <div className="h-full text-center bg-gray-900/50 backdrop-blur-xs rtl:md:px-16 relative w-full md:w-1/2 z-10 gap-4 flex items-start justify-center flex-col px-12 pt-12">
        <div className="size-64 rounded-xl bg-gradient-to-l from-[#C026D3] to-[#612368] -top-6 md:top-auto -rotate-12 absolute ltr:-left-56 rtl:-right-56 z-0"></div>
        <div className="size-64 rounded-xl bg-gradient-to-l from-[#9333EA] to-[#4A00E0] -top-6 md:top-auto -rotate-6 absolute ltr:-left-56 rtl:-right-56"></div>
        <h4 className="text-3xl  md:w-10/12 leading-10 md:leading-14 md:text-5xl font-bold text-gray-200 z-10">
          {t("hero.title")}
        </h4>
        <p className="md:w-10/12 md:text-lg text-gray-300 z-10">
          {t("hero.subtitle")}
        </p>
        <svg
          className="w-10/12 md:w-96 rtl:md:mr-12 ltr:md:ml-16 h-6 md:h-12 mx-auto"
          viewBox="0 0 600 90"
        >
          <path
            d="M 0 40 Q 200 10 800 40"
            className="stroke-[#9333EA] stroke-[10] fill-none"
          />
        </svg>
      </div>

      <div className="md:w-1/2 w-full h-full absolute md:relative z-0">
        <div className="absolute size-[32rem] bg-gray-600 z-10 ltr:-right-14 rtl:-left-14 rounded-xl overflow-hidden -top-36 -rotate-12">
          <img
            src="/images/Thumbnail01.jpg"
            alt="thumbnail"
            className="size-full opacity-60"
          />
        </div>
        <div className="absolute size-[33rem] bg-[#2A5894] ltr:-right-12 rtl:-left-12 rounded-xl -top-32 -rotate-[12deg]"></div>
      </div>
    </div>
  );
}

export default HeroSection;
