import { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { supabase } from "../../supabaseClient";

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
        const { data, error } = await supabase.from("products").select("*");

        const mergedData = data.map((d) => ({
          ...d,
          technicalSpecs: JSON.parse(d.technicalSpecs),
        }));
        console.log(mergedData);

        setProducts(mergedData);
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

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        isRTL,
        products,
        loading,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
