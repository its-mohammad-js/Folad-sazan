import { useTranslation } from "react-i18next";
import { ProductInfo } from "../../i18n/ProductsInfo";
import { useNavigate } from "react-router-dom";
import HeroSection from "./component/HeroSection";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

function ProductsPage() {
  const {
    i18n: { language },
  } = useTranslation();
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero section */}
      <HeroSection />

      <div dir={language !== "fa" ? "ltr" : "rtl"} className="cursor-pointer">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {ProductInfo.map((product) => (
              <div
                onClick={() => {
                  navigate(`/product/${product.id}`);
                  scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                key={product.id}
                className="group"
              >
                <img
                  alt={product.imageAlt}
                  src={product.thumbnail}
                  className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                />
                <h3 className="mt-4 text-base md:text-xl font-bold text-gray-200">
                  {product.title[language]}
                </h3>
                <p className="mt-1 text-lg font-medium text-gray-300">
                  {product.price}{" "}
                  <span>{language !== "fa" ? "Toman" : "تومان"}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
