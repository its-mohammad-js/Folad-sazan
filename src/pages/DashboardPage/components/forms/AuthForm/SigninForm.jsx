import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../../../../i18n/utils";
import toast, { LoaderIcon } from "react-hot-toast";

export default function SigninForm({ setAuth }) {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const navigate = useNavigate();
  const [formData, setForm] = useState({
    userName: "",
    password: "",
  });
  const [loading, setLoading] = useState(true);

  async function onSignin(e) {
    e.preventDefault();
    const { password, userName } = formData;

    try {
      setLoading(true);

      const response = await fetch(
        "https://fooladsazan.org/WP/index.php?rest_route=/custom/v1/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "uh#__5d)#|<CNc9?L98LO=I;c5=)fq[pUys3>}GGG8*X%z=LqO08V:LV;ab{XCv|",
          },
          body: JSON.stringify({
            username: userName,
            password: password,
          }),
        }
      );

      if (response.ok) {
        setCookie("isAuthenticated", true);
        setAuth(true);
      } else {
        toast.error("Faild login to dashboard");
      }
    } catch (error) {
      toast.error("Faild login to dashboard");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      dir={language === "fa" ? "rtl" : "ltr"}
      className="h-screen flex items-center bg-gray-900"
    >
      <div className="fixed inset-0 bg-red-50 z-0">
        <img
          src="/images/UBeam120.jpg"
          alt="bg-thumbnail"
          className="size-full"
        />
      </div>

      {loading ? (
        <div className="flex flex-none w-11/12 flex-col items-center relative justify-center py-8 mx-auto lg:py-0">
          <div
            onClick={() => navigate("/")}
            className="flex items-center justify-between mb-6 text-2xl font-semibold bg-gray-200/15 px-4 group hover:bg-gray-200/25 transition-all cursor-pointer py-2 backdrop-blur-xs rounded-xl text-white"
          >
            <img
              className={`${language === "fa" ? "ml-4" : "mr-4"} size-8`}
              src="/FoladLogo.png"
              alt="logo"
            />
            <h4 className="group-hover:text-[#0f0f2a] transition-all">
              {t("LoginForm.title")}
            </h4>
          </div>
          <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl w-full text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                {t("LoginForm.title02")}
              </h1>
              <form
                onSubmit={(e) => onSignin(e)}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {t("LoginForm.userNameLabel")}
                  </label>
                  <input
                    type="userName"
                    name="userName"
                    id="userName"
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, userName: e.target.value }))
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder={t("LoginForm.userNamePlaceHolder")}
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {t("LoginForm.passwordLabel")}
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, password: e.target.value }))
                    }
                    placeholder={t("LoginForm.passwordPlaceholder")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-[#152c5a] bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {t("LoginForm.submitbtn")}
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-11/12 md:w-64 h-32 relative mx-auto rounded-xl animate-pulse bg-gray-200/75 p-4 flex flex-col items-center justify-center gap-y-4">
          <p>
            <LoaderIcon className="!size-15" />
          </p>
          <span>Loading</span>
        </div>
      )}
    </section>
  );
}
