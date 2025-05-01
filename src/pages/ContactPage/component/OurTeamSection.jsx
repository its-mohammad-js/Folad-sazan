import React from "react";
import { useTranslation } from "react-i18next";

const teamMembers = [
  {
    name: {
      en: "Darrell Steward",
      fa: "دارل استوارد",
    },
    role: {
      en: "Production Engineer",
      fa: "مهندس تولید",
    },
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: {
      en: "Cody Fisher",
      fa: "کودی فیشر",
    },
    role: {
      en: "Quality Control Specialist",
      fa: "متخصص کنترل کیفیت",
    },
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: {
      en: "Marvin McKinney",
      fa: "ماروین مک‌کینی",
    },
    role: {
      en: "Waiting & Fabrication Expert",
      fa: "متخصص انتظار و ساخت",
    },
    image: "https://randomuser.me/api/portraits/men/58.jpg",
  },
  {
    name: {
      en: "Leslie Alexander",
      fa: "لسلی الکساندر",
    },
    role: {
      en: "Industrial Designer",
      fa: "طراح صنعتی",
    },
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: {
      en: "Floyd Mika",
      fa: "فلوید میکا",
    },
    role: {
      en: "Supply Chain Manager",
      fa: "مدیر زنجیره تأمین",
    },
    image: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    name: {
      en: "Esther Howard",
      fa: "استر هاوارد",
    },
    role: {
      en: "Sales & Business Development Executive",
      fa: "مدیر توسعه فروش و کسب‌وکار",
    },
    image: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    name: {
      en: "Kathryn Murphy",
      fa: "کاترین مورفی",
    },
    role: {
      en: "Customer Support Specialist",
      fa: "متخصص پشتیبانی مشتری",
    },
    image: "https://randomuser.me/api/portraits/women/41.jpg",
  },
  {
    name: {
      en: "Devon Lane",
      fa: "دون لین",
    },
    role: {
      en: "Maintenance & Safety Supervisor",
      fa: "سرپرست نگهداری و ایمنی",
    },
    image: "https://randomuser.me/api/portraits/men/67.jpg",
  },
];

const OurTeamSection = () => {
  const { t, i18n } = useTranslation();

  const textDirection = i18n.language === "fa" ? "rtl" : "ltr";

  return (
    <section
      className="py-16 px-4 relative z-10 sm:px-6 lg:px-8 bg-transparent"
      dir={textDirection}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {i18n.language === "en"
              ? "Meet our team member"
              : "با اعضای تیم ما آشنا شوید"}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {i18n.language === "en"
              ? "Behind every great achievement is a team of dedicated professionals committed to excellence, innovation, and quality craftsmanship."
              : "هر دستاورد بزرگ پشت سر خود تیمی از حرفه‌ای‌های متعهد به برتری، نوآوری و کیفیت ساخت دارد."}
          </p>
        </div>

        {/* Grid 2 rows × 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg transition-all"
            >
              {/* Profile Image */}
              <div className="size-32 mb-4 rounded-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name.en}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-white">
                {member.name[i18n.language]}
              </h3>

              {/* Role */}
              <p className="text-gray-400 mt-1">{member.role[i18n.language]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
