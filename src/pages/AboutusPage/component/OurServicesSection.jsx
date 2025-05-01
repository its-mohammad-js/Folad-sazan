import { useTranslation } from "react-i18next";
import {
  FaCheckCircle,
  FaDollarSign,
  FaHandshake,
  FaTruck,
} from "react-icons/fa";

const services = [
  {
    icon: <FaTruck className="w-8 h-8" />,
  },
  {
    icon: <FaHandshake className="w-8 h-8" />,
  },
  {
    icon: <FaCheckCircle className="w-8 h-8" />,
  },
  {
    icon: <FaDollarSign className="w-8 h-8" />,
  },
];

const ServicesSection = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const header = t("servicesSection.header", { returnObjects: true });
  const items = t("servicesSection.items", { returnObjects: true });

  return (
    <div
      dir={language !== "fa" ? "ltr" : "rtl"}
      className="flex items-center md:items-start relative justify-between"
    >
      <section className="py-16 px-4 backdrop-blur-sm relative z-10 sm:px-6 lg:px-8 md:w-1/2">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center md:text-start mb-12 md:mb-16">
            <h2 className="text-base font-semibold text-[#9333EA] mb-4">
              {header.smallTitle}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">
              {header.mainTitle}
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {header.description}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 md:grid-rows-2 gap-8">
            {items.map((svc, idx) => (
              <div
                key={idx}
                className="p-2 md:p-6 rounded-xl transition-shadow duration-300"
              >
                <div className="flex flex-col items-center md:items-start text-center md:text-start">
                  {/* Icon Container */}
                  <div className="mb-4 p-3 rounded-full text-[#9333EA]">
                    {services[idx].icon}
                  </div>
                  {/* Content */}
                  <h4 className="text-xl font-semibold text-gray-200 mb-2">
                    {svc.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {svc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-1/2 size-96 absolute md:relative">
        <img
          src="/images/ServiceFigure.png"
          alt="figure"
          className="absolute object-cover ltr:-right-56 rtl:-left-56 top-32"
        />
      </div>
    </div>
  );
};

export default ServicesSection;
