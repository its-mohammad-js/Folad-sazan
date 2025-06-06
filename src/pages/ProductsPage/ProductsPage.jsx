import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import HeroSection from "./component/HeroSection";
import { useLanguage } from "../../i18n/LanguageProvider";
import ProductsLoader from "./component/ProductsLoader";
import { useEffect, useState } from "react";

function ProductsPage() {
  const {
    i18n: { language },
  } = useTranslation();
  const navigate = useNavigate();
  const { products, loading } = useLanguage();
  const [filteredProducts, setFiltered] = useState([]);

  useEffect(() => {
    setFiltered(products);
  }, [loading]);

  return (
    <div>
      {/* Hero section */}
      <HeroSection {...{ setFiltered, products, loading }} />

      <div dir={language !== "fa" ? "ltr" : "rtl"} className="">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {!loading ? (
              filteredProducts.map((item) => (
                <div
                  onClick={() => {
                    navigate(`/product/${item.id}`);
                    scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  key={item.id}
                  className="group cursor-pointer"
                >
                  <img
                    alt={item.imageAlt}
                    src={item.thumbnail}
                    className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                  />
                  <h3 className="mt-4 text-base md:text-xl font-bold text-gray-200">
                    {item[`title__${language}`]}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-300">
                    {item.Price}{" "}
                    <span>{language !== "fa" ? "Toman" : "تومان"}</span>
                  </p>
                </div>
              ))
            ) : (
              <ProductsLoader />
            )}
          </div>

          {!loading && !filteredProducts.length && (
            <h4 className="text-4xl text-gray-200 font-bold w-full text-center">
              {language === "fa"
                ? "هیچ محصولی پیدا نشد."
                : "There is no product with this name"}
            </h4>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
