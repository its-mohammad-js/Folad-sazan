import { BsArrowRight } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function HeroSection() {
  const { i18n } = useTranslation();

  const texts = {
    en: {
      heading: "The easiest way \n to contact us",
      getStarted: "Get Started",
      viewPreview: "View Preview",
      connectText: "Let's connect with us:",
    },
    fa: {
      heading: "آسان‌ترین راه برای \n ارتباط با ما",
      getStarted: "شروع کنید",
      viewPreview: "نمایش پیش‌نمایش",
      connectText: "با ما در ارتباط باشید:",
    },
  };

  const textDirection = i18n.language === "fa" ? "rtl" : "ltr";

  return (
    <section
      className="py-28 flex px-4 relative items-start justify-between"
      dir={textDirection}
    >
      <div className="relative z-10 md:w-1/2 py-10  sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto text-center md:text-start">
          {/* Main Content */}
          <div className="space-y-24 mb-4 md:mb-16">
            <h2 className="text-4xl text-gray-200 relative leading-12 md:leading-16 md:text-6xl font-bold mb-6">
              <div className="w-32 h-4 bg-[#0B63E5] absolute left-1/3 md:left-auto bottom-2 z-0" />
              <span className="z-10 relative">
                {texts[i18n.language].heading}
              </span>
            </h2>

            {/* Buttons Container */}
            <div className="flex md:justify-start justify-center gap-5">
              <button
                className="bg-gray-300 px-4 text-sm md:text-base py-2 md:px-8 md:py-4 rounded-md font-bold 
               transition-all duration-300 transform hover:-translate-y-1 
              flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{texts[i18n.language].getStarted}</span>
                <BsArrowRight className="rtl:rotate-180" />
              </button>

              <button className="px-4 py-2 md:px-8 md:py-4 text-sm md:text-base rounded-md font-bold cursor-pointer bg-[#061C3D] text-gray-200">
                {texts[i18n.language].viewPreview}
              </button>
            </div>
          </div>

          {/* Social Connections */}
          <div className="pt-16">
            <p className="text-lg flex items-center text-gray-300 font-medium mb-6 opacity-90">
              <span className="w-12 h-1 bg-[#0B63E5] mx-2"></span>{" "}
              {texts[i18n.language].connectText}
            </p>
            <div className="flex justify-center md:justify-start space-x-8">
              <button className="p-3 rounded-md text-gray-200 bg-white/5 hover:bg-white/10 transition-all">
                <FaFacebook className="w-6 h-6" />
              </button>
              <button className="p-3 rounded-md text-gray-200 bg-white/5 hover:bg-white/10 transition-all">
                <FaTwitter className="w-6 h-6" />
              </button>
              <button className="p-3 rounded-md text-gray-200 bg-white/5 hover:bg-white/10 transition-all">
                <FaLinkedin className="w-6 h-6" />
              </button>
              <button className="p-3 rounded-md text-gray-200 bg-white/5 hover:bg-white/10 transition-all">
                <FaInstagram className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[35rem] relative z-10 hidden md:block w-[30rem] py-6 bg-gray-400 rounded-md">
        <img
          src="images/ContactusHeroThumb.png"
          alt="thumbnail"
          className="size-full object-cover"
        />
      </div>

      <div className="size-48 bg-[#6b21a8] absolute -bottom-16 rtl:-right-16 ltr:-left-16 z-0 rounded-full" />
    </section>
  );
}

export default HeroSection;
