import { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://fooladsazan.org/WP/index.php?rest_route=/custom/v1/products",
          {
            method: "GET",
            headers: {
              Authorization:
                "uh#__5d)#|<CNc9?L98LO=I;c5=)fq[pUys3>}GGG8*X%z=LqO08V:LV;ab{XCv|",
            },
          }
        );
        const products = await response.json();

        setProducts(products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    i18n.changeLanguage(language);
    document.body.setAttribute("data-lang", language);
  }, [language, i18n]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fa" ? "en" : "fa"));
  };

  const isRTL = language === "fa";

  const deleteImage = async (thumbnail_url) => {
    try {
      await fetch(
        "https://fooladsazan.org/WP/index.php?rest_route=/custom/v1/delete-image",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            image_url: thumbnail_url,
          }),
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        isRTL,
        products,
        loading,
        deleteImage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
