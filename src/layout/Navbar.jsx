import React from "react";
import { BiChevronDown, BiMenu } from "react-icons/bi";
import { useLanguage } from "../i18n/LanguageProvider";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { toggleLanguage } = useLanguage();
  const {
    i18n: { language },
  } = useTranslation();

  return (
    <div className="flex h px-4 py-4 items-center justify-between w-full absolute z-10 max-w-[1440px]">
      {/* logo section */}
      <div className="flex items-center gap-x-2">
        <div className="bg-slate-300 rounded-full">
          <img src="/FoladLogo.png" alt="logo" className="" />
        </div>
        <h4 className="text-base md:text-2xl font-bold text-slate-100">
          Foolad Sazan
        </h4>
      </div>

      {/* menu & change language */}
      <div className="flex items-center gap-x-4">
        {/* language change */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-none border-none text-gray-200 flex items-center "
          >
            Select language <BiChevronDown className="text-2xl mt-1" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-gray-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => language !== "en" && toggleLanguage()}>
              <a>English</a>
            </li>
            <li onClick={() => language !== "fa" && toggleLanguage()}>
              <a>فارسی</a>
            </li>
          </ul>
        </div>

        <button className="bg-[#1F3E88] hidden md:block cursor-pointer px-4 py-2 text-slate-200 font-semibold rounded-md">
          contact
        </button>
        <div className="">
          <BiMenu className="bg-slate-200 text-slate-800 p-1.5 rounded-md text-4xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
