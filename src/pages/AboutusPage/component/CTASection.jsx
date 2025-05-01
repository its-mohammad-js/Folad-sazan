import { useTranslation } from "react-i18next";
import { BsArrowRight } from "react-icons/bs";

const gridLayout = [
  [
    {
      id: 1,
      image: "/images/CTAThumbnail (1).png",
      size: "w-12 h-28 md:w-32 md:h-42",
    },
    {
      id: 2,
      image: "/images/CTAThumbnail (2).png",
      size: "w-12 h-20 md:w-32 md:h-32",
    },
  ],
  [
    {
      id: 4,
      image: "/images/CTAThumbnail (3).png",
      size: "w-12 h-24 md:w-32 md:h-36",
    },
    {
      id: 6,
      image: "/images/CTAThumbnail (5).png",
      size: "w-14 h-36 md:w-32 md:h-60",
    },
  ],
  [
    {
      id: 8,
      image: "/images/CTAThumbnail (6).png",
      size: "w-16 h-28 md:w-40 md:h-44",
    },
    {
      id: 9,
      image: "/images/CTAThumbnail (7).png",
      size: "w-16 h-36 md:w-40 md:h-60",
    },
    {
      id: 10,
      image: "/images/CTAThumbnail (8).png",
      size: "w-16 h-24 md:w-40 md:h-36",
    },
  ],
  [
    {
      id: 11,
      image: "/images/CTAThumbnail (9).png",
      size: "w-20 h-40 md:w-44 md:h-64",
    },
    {
      id: 12,
      image: "/images/CTAThumbnail (10).png",
      size: "w-20 h-28 md:w-36 md:h-44",
    },
  ],
];

function CTASection() {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const boxStyles =
    "rounded-lg shadow-md flex items-center justify-center overflow-hidden";

  return (
    <section
      dir={language !== "fa" ? "ltr" : "rtl"}
      className="relative items-center overflow-hidden md:flex"
    >
      {/* thumbnails */}
      <div className="flex md:w-1/2 justify-center relative z-10 md:justify-start items-center gap-2 md:gap-4 px-4 py-10 overflow-x-auto">
        {gridLayout.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-none flex-col md:gap-4">
            {column.map((item) => (
              <div
                key={item.id}
                className={`${boxStyles} ${item.size} flex-none`}
              >
                <img
                  src={item.image}
                  alt={`Box ${item.id}`}
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* title & descirption */}
      <div className="py-16 px-4 sm:px-6 relative z-10 lg:px-8 md:w-1/2">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl leading-12 md:leading-14 md:text-5xl font-bold text-gray-200">
                {t("ctaSection.title")}
              </h2>
              <p className="text-lg text-gray-300 font-medium">
                {t("ctaSection.subtitle")}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t("ctaSection.description")}
              </p>
              <a
                href="#"
                className="inline-flex items-center text-gray-200 font-medium hover:text-gray-400 transition-colors"
              >
                {t("ctaSection.learnMore")}
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-full h-[40rem] bg-[#581c87] top-48 md:top-64 rtl:rotate-[-28deg] rotate-[28deg] rtl:md:rotate-[40deg] md:rotate-[-40deg] rtl:-right-48 -left-48 md:-left-1/2 rtl:md:-right-1/2 z-0 rounded-full"></div>
    </section>
  );
}

export default CTASection;
