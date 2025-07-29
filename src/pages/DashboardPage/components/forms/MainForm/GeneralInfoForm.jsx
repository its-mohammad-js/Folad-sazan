import { useTranslation } from "react-i18next";
import MainInfo from "./GeneralInfo/MainInfo";
import ThumbnailField from "./GeneralInfo/ThumbnailField";
import { useFormData } from "./FormContext";

function GeneralInfo() {
  const { isEdit } = useFormData();
  const { t } = useTranslation();

  return (
    <div>
      <div className="">
        {/* main form */}
        <div className="border-b space-y-4 border-gray-900/10">
          <h4 className="text-2xl font-bold w-full text-center text-gray-200">
            {isEdit
              ? `${t("MainForm.editTitle")}`
              : `${t("MainForm.addTitle")}`}
          </h4>
          {/* main info */}
          <MainInfo />
          {/* thumbnail */}
          <ThumbnailField />
        </div>
      </div>
    </div>
  );
}

export default GeneralInfo;
