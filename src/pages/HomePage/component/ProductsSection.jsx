import { useState } from "react";
import { BiCategory } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../i18n/LanguageProvider";

export default function ProductsSection() {
  const { products, loading } = useLanguage();
  const {
    i18n: { language },
  } = useTranslation();
  const navigate = useNavigate();

  if (!loading && products?.length)
    return (
      <section className="container mx-auto px-4 py-12 relative z-[5]">
        <h2 className="text-4xl font-bold text-center text-gray-200 mb-10">
          {language === "fa" ? "محصولات ما" : "Our Prouducts"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              onClick={() => {
                navigate(`/product/${item.id}`);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              key={item.id}
              className="border-gray-200 rounded-lg overflow-hidden shadow-sm hover:opacity-80 cursor-pointer"
            >
              <div className="relative bg-[#1d2f57] h-60 w-full">
                <img
                  src={item.thumbnail}
                  alt={item.title[language]}
                  fill
                  className="object-cover size-full"
                />
              </div>

              <div className="p-5">
                <div className="flex items-center gap-6 text-gray-200 mb-3">
                  <div className="flex items-center gap-1">
                    <BiCategory className="size-4" />
                    <span className="text-sm">
                      {item.category[`${language}`]}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-200 transition-colors duration-300">
                  {item.title[`${language}`]}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
}
