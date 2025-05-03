import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageProvider";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";
import useOutSideClick from "../hooks/useOutSideClick";
import { RiMenu2Line } from "react-icons/ri";
import { CgClose } from "react-icons/cg";

function Navbar() {
  const { toggleLanguage } = useLanguage();
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const navigate = useNavigate();
  const [menuIsShow, setMenu] = useState(false);
  const isRTL = language === "fa";
  const menuRef = useRef();
  useOutSideClick(menuRef, () => setMenu(false), !menuIsShow);
  const [mobileMenu, setMobilemenu] = useState(false);
  const location = useLocation();

  // disable scroll on mobile menu open
  useEffect(() => {
    document.body.style.overflow = !mobileMenu ? "auto" : "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenu]);

  function onChangeLang() {
    toggleLanguage();
    setMenu(false);
    setMobilemenu(false);
  }

  return (
    <div
      className={`${
        location.pathname.includes("/products") ||
        location.pathname.includes("/product")
          ? "static"
          : "absolute"
      } flex h px-4 py-4 items-center justify-between w-full z-10 max-w-[1440px]`}
    >
      {/* logo section */}
      <div className="flex items-center gap-x-2">
        <div className="bg-slate-300 rounded-full">
          <img src="/FoladLogo.png" alt="logo" className="" />
        </div>
        <h4 className="text-base md:text-2xl font-bold text-slate-100">
          Foolad Sazan
        </h4>
      </div>
      {/* desktop routes */}
      <div className="hidden ltr:flex-row-reverse md:flex items-center gap-8 rtl:pr-12 ltr:pr-16 py-2 text-gray-200">
        <button
          className="cursor-pointer text-lg font-semibold"
          onClick={() => navigate("/")}
        >
          {t("navbar.home")}
        </button>
        <button
          className="cursor-pointer text-lg font-semibold"
          onClick={() => navigate("/about-us")}
        >
          {t("navbar.about")}
        </button>
        <button
          className="cursor-pointer text-lg font-semibold"
          onClick={() => navigate("/contact-us")}
        >
          {t("navbar.contact")}
        </button>
        <button
          className="cursor-pointer text-lg font-semibold"
          onClick={() => navigate("/products")}
        >
          {t("navbar.products")}
        </button>
      </div>
      {/* menu & change language */}
      <div className="flex items-center gap-x-4">
        {/* change lang menu */}
        <div
          ref={menuRef}
          className="relative hidden md:flex items-center text-center"
        >
          <button
            onClick={() => setMenu(!menuIsShow)}
            className={`${
              isRTL && "flex-row-reverse"
            } cursor-pointer text-gray-200 text-lg font-semibold flex items-center gap-x-2`}
          >
            <p>{!isRTL ? "English" : "فارسی"}</p>
            <IoChevronDown
              className={`${menuIsShow && "rotate-180"} mt-0.5 transition-all`}
            />
          </button>

          <div
            className={`${
              menuIsShow ? "opacity-100 visible" : "opacity-0 invisible "
            } absolute flex z-50 gap-y-2 flex-col px-2 top-full w-32 transition-all py-2 items-center justify-center rounded-md right-0 mt-2 shadow-2xl bg-gray-100`}
          >
            <button
              onClick={() =>
                language !== "fa" ? onChangeLang() : setMenu(false)
              }
              className={`${
                language === "fa" && "bg-gray-200"
              } px-2 py-1 size-full rounded-md hover:bg-gray-200 cursor-pointer`}
            >
              فارسی
            </button>
            <button
              onClick={() =>
                language === "fa" ? onChangeLang() : setMenu(false)
              }
              className={`${
                language !== "fa" && "bg-gray-300"
              } px-2 py-1 size-full rounded-md hover:bg-gray-200 cursor-pointer`}
            >
              English
            </button>
          </div>
        </div>

        <div className="md:hidden relative z-20">
          <button
            onClick={() => setMobilemenu(true)}
            className="text-[#3b5bb3] rotate-180 text-xl"
          >
            <RiMenu2Line className="text-3xl" />
          </button>

          <div
            className={`${
              mobileMenu
                ? "visible opacity-100 translate-x-0"
                : "invisible opacity-0 translate-x-10"
            } flex flex-col fixed z-50 transition-all font-semibold text-lg text-gray-200 bg-[#1B2B56] gap-y-4 w-full top-0 py-12 left-0 h-screen`}
          >
            <button
              onClick={() => setMobilemenu(false)}
              className="absolute top-4 right-4 text-2xl"
            >
              <CgClose />
            </button>

            <button
              onClick={() => {
                navigate("/");
                setMobilemenu(false);
              }}
            >
              {t("navbar.home")}
            </button>
            <button
              onClick={() => {
                navigate("/about-us");
                setMobilemenu(false);
              }}
            >
              {t("navbar.about")}
            </button>
            <button
              onClick={() => {
                navigate("/contact-us");
                setMobilemenu(false);
              }}
            >
              {t("navbar.contact")}
            </button>
            <button
              onClick={() => {
                navigate("/products");
                setMobilemenu(false);
              }}
            >
              {t("navbar.products")}
            </button>
            <button
              onClick={() =>
                language !== "fa" ? onChangeLang() : setMenu(false)
              }
            >
              فارسی
            </button>
            <button
              onClick={() =>
                language === "fa" ? onChangeLang() : setMenu(false)
              }
            >
              English
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
