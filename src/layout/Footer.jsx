import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const routes = [
  { title: "navbar.home", path: "/" },
  { title: "navbar.about", path: "/about-us" },
  { title: "navbar.contact", path: "/contact-us" },
  { title: "navbar.products", path: "/products" },
];

const Footer = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const navigate = useNavigate();

  return (
    <footer
      dir={language === "fa" ? "rtl" : "ltr"}
      className="text-gray-200 mt-auto relative
      bg-[#0f172a]/90"
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:justify-start items-start gap-14">
          <div className="md:w-1/3 space-y-4">
            {/* logo */}
            <div className="flex items-center gap-2">
              <div className="size-12 rounded-full bg-slate-300">
                <img src="/FoladLogo.png" alt="" />
              </div>
              <h4 className="text-3xl font-bold">
                {language === "fa" ? "فولاد سازان" : "Foolad Sazan"}
              </h4>
            </div>
            {/* desc */}
            <div className="">{t("navbar.desc")}</div>
          </div>

          {/* Product Column */}
          <div className="min-w-[160px]">
            <h3 className="text-gray-200 text-2xl font-bold ">
              {language === "fa" ? "پیج های اصلی" : "Main Pages"}
            </h3>
            <ul className="space-y-3 my-2 text-sm">
              {routes.map((item) => (
                <li
                  onClick={() => {
                    navigate(item.path);
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  key={item.title}
                >
                  <h4 className="hover:text-gray-300 cursor-pointer text-lg">
                    {t(item.title)}
                  </h4>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <p className="text-center text-sm text-gray-500">
            © foolad sazan @ 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
