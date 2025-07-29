import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import HeroSection from "./components/products/HeroSection";
import ProductsLoader from "./components/products/ProductsLoader";
import { useLanguage } from "../../i18n/LanguageProvider";
import SigninForm from "./components/forms/AuthForm/SigninForm";
import { getCookie } from "../../i18n/utils";
import toast from "react-hot-toast/headless";
import { LoaderIcon } from "react-hot-toast";

function DashboardPage() {
  const { i18n } = useTranslation();
  const language = i18n.language;
  const [filteredProducts, setFiltered] = useState([]);
  const navigate = useNavigate();
  const [selectedProduct, setSelected] = useState();
  const { loading, products, deleteImage } = useLanguage();
  const [isAuthenticated, setAuth] = useState(false);
  const [loadDelete, setLoading] = useState(false);

  useEffect(() => {
    const authCookie = getCookie("isAuthenticated");

    setAuth(authCookie);
  }, []);

  useEffect(() => {
    i18n.changeLanguage(language);
    document.body.setAttribute("data-lang", language);
  }, [language, i18n]);

  useEffect(() => {
    setFiltered(products);
  }, [loading]);

  async function onDeleteProduct(product) {
    const apiKey =
      "uh#__5d)#|<CNc9?L98LO=I;c5=)fq[pUys3>}GGG8*X%z=LqO08V:LV;ab{XCv|";

    try {
      if (!selectedProduct) {
        setSelected(product);
      } else {
        setLoading(true);
        const { uiid, thumbnail } = selectedProduct;
        await deleteImage(thumbnail);

        const response = await fetch(
          "https://fooladsazan.org/WP/index.php?rest_route=/custom/v1/delete-product",
          {
            method: "DELETE",
            headers: {
              Authorization: apiKey,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ product_uuid: uiid }),
          }
        );
        const result = await response.json();
        if (!response.ok) {
          console.error("❌ خطا:", result.error || "نامشخص");
          return { success: false, message: result.error || "خطا" };
        }
        toast.success("Product removed");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error deleting product:", error.message);
    } finally {
      setLoading(false);
    }
  }

  if (!isAuthenticated) return <SigninForm {...{ setAuth }} />;

  if (isAuthenticated)
    return (
      <>
        <div>
          <HeroSection {...{ setFiltered, products, loading }} />

          <div className="grid grid-cols-1 my-28 px-4 py-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {!loading ? (
              filteredProducts.map((item) => (
                <div key={item.id} className="group cursor-pointer">
                  <div className="relative">
                    <img
                      alt={item.imageAlt}
                      src={item.thumbnail}
                      className="aspect-square peer w-full hover:opacity-60 transition-all rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                    />

                    <div className="absolute top-3 invisible opacity-0 peer-hover:visible peer-hover:opacity-100 transition-all hover:visible hover:opacity-100 right-3 flex flex-col gap-2">
                      <button
                        onClick={() => {
                          onDeleteProduct(item);
                        }}
                        className="p-2 bg-white rounded-full text-2xl cursor-pointer text-red-700"
                      >
                        <FaTrash />
                      </button>
                      <button
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                          navigate(`/MainForm/${item.uiid}`);
                        }}
                        className="p-2 bg-white rounded-full text-2xl cursor-pointer"
                      >
                        <FaEdit />
                      </button>
                    </div>
                  </div>
                  <h3 className="mt-4 text-base md:text-xl font-bold text-gray-200">
                    {item.title[`${language}`]}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-300">
                    {!item.price && "قیمت تنظیم نشده"}
                    {item.price &&
                      `${item.price} ${language !== "fa" ? "Toman" : "تومان"}`}
                  </p>
                </div>
              ))
            ) : (
              <ProductsLoader />
            )}
          </div>
        </div>

        {!loadDelete && (
          <div
            className={`${
              selectedProduct ? "visible opacity-100" : "invisible opacity-0"
            } flex overflow-y-auto overflow-x-hidden fixed inset-0 bg-gray-950/50 backdrop-blur-sm z-50 justify-center items-center w-full md:inset-0 max-h-full`}
          >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
              <div className="relative bg-white rounded-lg shadow-sm">
                <div className="flex items-center justify-between p-4 md:p-5 rounded-t">
                  <button
                    onClick={() => setSelected(null)}
                    type="button"
                    className="text-gray-400  bg-transparent text-3xl hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 ms-auto inline-flex justify-center items-center"
                    data-modal-hide="default-modal"
                  >
                    <CgClose />
                  </button>
                </div>

                <div className="p-4 md:p-5 space-y-4">
                  <p className="text-base leading-relaxed text-gray-800 md:text-xl font-semibold">
                    are you sure about delete this product ?
                  </p>
                </div>

                <div className="flex items-center justify-end p-4 md:p-5 gap-2 rounded-b">
                  <button
                    onClick={() => setSelected(null)}
                    type="button"
                    className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => onDeleteProduct()}
                    type="button"
                    className="text-white bg-[#0f172a] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {loadDelete && (
          <div className="inset-0 fixed bg-gray-950/50 backdrop-blur-xs z-20 flex items-center justify-center">
            <div className="w-11/12 md:w-64 h-32 relative m-auto rounded-xl animate-pulse bg-gray-200/75 p-4 flex flex-col items-center justify-center gap-y-4">
              <p>
                <LoaderIcon className="!size-15" />
              </p>
              <span>Loading</span>
            </div>
          </div>
        )}
      </>
    );
}

export default DashboardPage;
