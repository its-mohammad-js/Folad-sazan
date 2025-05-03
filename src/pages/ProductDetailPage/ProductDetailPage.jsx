import { useTranslation } from "react-i18next";
import { ProductInfo } from "../../i18n/ProductsInfo";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { i18n, t } = useTranslation();
  const lang = i18n.language;
  const params = useParams();
  const productDetailItem = ProductInfo.find(
    (p) => Number(p.id) === Number(params.id)
  );

  return (
    <div dir={lang === "fa" ? "rtl" : "ltr"} className="px-4 py-2">
      {/* product details */}
      <section className="flex-grow mx-auto border-b border-slate-600 py-5 lg:grid lg:grid-cols-2 lg:py-10">
        {/* image gallery */}
        <div className="container mx-auto h-96 overflow-hidden bg-gray-200 rounded-md md:h-[28rem]">
          <img
            src={productDetailItem.thumbnail}
            alt="product-thumbnail"
            className="size-full object-cover"
          />
        </div>

        {/* description */}
        <div className="mx-auto my-4 lg:px-5">
          <h2 className="pt-3 text-2xl my-2 md:mb-4 md:text-3xl text-gray-200 font-bold lg:pt-0">
            {productDetailItem.title[lang]}
          </h2>

          <p className="text-gray-300 my-2 font-bold">
            {lang === "fa" ? "برند" : "Brand"}:{" "}
            <span className="font-normal">{productDetailItem.brand[lang]}</span>
          </p>
          <p className="text-gray-300 my-2 font-bold">
            {lang === "fa" ? "دسته بندی" : "category"}:{" "}
            <span className="font-normal">
              {productDetailItem.category[lang]}
            </span>
          </p>
          <p className="text-gray-300 my-2 font-bold">
            SKU: <span className="font-normal">{productDetailItem.sku}</span>
          </p>
          <p className="mt-4 text-4xl font-bold text-gray-300">
            {productDetailItem.price}{" "}
            <span className="text-lg">{lang !== "fa" ? "Toman" : "تومان"}</span>
          </p>
          <p className="pt-5 text-sm leading-5 text-gray-400">
            {productDetailItem.description[lang]}
          </p>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="mt-8 px-5">
        <h3 className="text-2xl my-2 md:text-3xl text-gray-200 font-bold mb-4">
          {lang === "fa" ? "جدول اطلاعات فنی" : "Technical Info"}
        </h3>
        <table className="w-full text-sm text-left text-gray-300">
          <tbody>
            {productDetailItem.technicalSpecs.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}
              >
                <td className="px-4 py-2 rtl:text-start font-semibold text-gray-300">
                  {item.label[lang]}
                </td>
                <td className="px-4 py-2 text-gray-400 rtl:text-start">
                  <span dir="ltr">{item.value}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Support CTA */}
      <section className="mt-12 relative overflow-hidden rounded-xl shadow-md">
        <div className="px-5 py-8 relative z-[5] bg-gray-800/90 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-gray-100 mb-2">
            {lang === "fa" ? "نیاز به کمک دارید؟" : t("Need Assistance?")}
          </h3>
          <p className="text-gray-400 mb-4">
            {lang === "fa"
              ? "متخصصان ما اینجا هستند تا به هر سوالی در مورد مشخصات تیرآهن، سفارشات یا تحویل پاسخ دهند."
              : t(
                  "Our experts are here to help you with any questions regarding steel beam specifications, orders, or delivery."
                )}
          </p>

          <div className="text-gray-300 space-y-1 mb-6">
            <p>
              📞 {lang === "fa" ? "تلفن" : t("Phone")}:{" "}
              <a
                href="tel:+982112345678"
                className="text-blue-400 hover:underline"
              >
                <span dir="ltr">+98 21 1234 5678</span>
              </a>
            </p>
            <p>
              ✉️ {lang === "fa" ? "ایمیل" : t("Email")}:{" "}
              <a
                href="mailto:support@fouladsazan.com"
                className="text-blue-400 hover:underline"
              >
                support@fouladsazan.com
              </a>
            </p>
          </div>

          <button className="bg-[#1b2b56] cursor-pointer hover:bg-blue-700 text-gray-300 font-semibold py-2 px-6 rounded-md transition">
            {lang === "fa" ? "تماس با پشتیبانی" : t("Contact Support")}
          </button>
        </div>

        <div className="absolute inset-0 z-0">
          <img
            src="/images/CTABANNER.jpg"
            alt="CTA-BANNER"
            className="size-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
