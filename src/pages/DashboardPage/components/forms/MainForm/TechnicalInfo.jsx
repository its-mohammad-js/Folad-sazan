import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { CgClose } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import { useFormData } from "./FormContext";

function TechnicalInfo() {
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      <h4 className="text-2xl font-bold my-6 w-full text-center text-gray-200">
        {t("MainForm.techTitle")}
      </h4>
      <TechnicalPropertiesInput />
      <TagInput name="color" label="Add Colors" />
      <TagInput name="size" label="Add Size" />
    </div>
  );
}

export default TechnicalInfo;

const TechnicalPropertiesInput = () => {
  const [labelEn, setLabelEn] = useState("");
  const [labelFa, setLabelFa] = useState("");
  const [value, setValue] = useState("");
  const [properties, setProperties] = useState([]);
  const formData = useFormData();
  const { t } = useTranslation();
  const { selectedProduct } = useFormData();

  useEffect(() => {
    if (selectedProduct?.technicalSpecs) {
      const prevProperties = selectedProduct?.technicalSpecs.map(
        ({ label: { en, fa }, value }) => {
          const prevProp = {
            label: { fa, en },
            value,
          };

          return { title: prevProp, id: uuidv4() };
        }
      );

      setProperties(prevProperties);
    }
  }, [selectedProduct]);

  useEffect(() => {
    formData.setValue(
      "properties",
      properties.map(({ title }) => title)
    );
  }, [properties]);

  const handleSubmit = (e) => {
    if (e.key === "Enter" && labelEn.trim() && labelFa.trim() && value.trim()) {
      const newProperty = {
        label: { en: labelEn.trim(), fa: labelFa.trim() },
        value: value.trim(),
      };
      setProperties((prev) => [...prev, { title: newProperty, id: uuidv4() }]);

      // Clear inputs
      setLabelEn("");
      setLabelFa("");
      setValue("");
    }
  };

  return (
    <div className="mx-auto space-y-4">
      <div className="flex gap-4">
        <div className="w-1/2">
          <label className="block mb-1 font-medium text-gray-200">
            Label (English)
          </label>
          <input
            type="text"
            placeholder="e.g. Flange Thickness"
            value={labelEn}
            onChange={(e) => setLabelEn(e.target.value)}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#4d7ae2] sm:text-sm/6"
          />
        </div>

        <div className="w-1/2">
          <label className="block mb-1 font-medium text-gray-200">
            Label (Farsi)
          </label>
          <input
            type="text"
            placeholder="e.g. ضخامت فلنج"
            value={labelFa}
            onChange={(e) => setLabelFa(e.target.value)}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#4d7ae2] sm:text-sm/6"
          />
        </div>
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-200">Value</label>
        <input
          type="text"
          placeholder="e.g. 6.5 mm"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleSubmit}
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#4d7ae2] sm:text-sm/6"
        />
        <p className="text-sm text-gray-300 mt-1">Press Enter to add</p>
      </div>

      <button
        disabled={!labelEn.trim() || !labelFa.trim() || !value.trim()}
        onClick={() => handleSubmit({ key: "Enter" })}
        type="button"
        className="bg-gray-200 disabled:opacity-50 font-bold text-lg rounded-md w-full px-4 py-2"
      >
        {t("MainForm.addProp")}
      </button>

      <div className="mt-4 gap-2 flex flex-wrap ">
        {properties.map(({ title, id }) => (
          <div
            key={id}
            onClick={() =>
              setProperties((prev) =>
                prev.filter(({ id: uiid }) => uiid !== id)
              )
            }
            className="p-3 bg-gray-100 rounded shadow-sm cursor-pointer hover:bg-red-400 group transition-all"
          >
            <div className="text-sm font-semibold text-gray-900 group-hover:text-gray-200">
              {title.label.en} / {title.label.fa}
            </div>
            <div className="text-sm text-gray-600 group-hover:text-gray-300 ">
              {title.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TagInput = ({ name, label }) => {
  const [inputValue, setInputValue] = useState("");
  const formData = useFormData();
  const [tags, setTags] = useState([]);
  const { selectedProduct } = useFormData();

  useEffect(() => {
    if (selectedProduct?.[name]) {
      setTags(
        selectedProduct?.[name].map((title) => ({ title, id: uuidv4() }))
      );
    }
  }, [selectedProduct]);

  useEffect(() => {
    formData.setValue(
      name,
      tags.map(({ title }) => title)
    );
  }, [tags]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTags((prev) => [...prev, { title: inputValue.trim(), id: uuidv4() }]);
      setInputValue("");
    }
  };

  return (
    <div className="mx-auto space-y-4">
      <label className="block mb-1 text-gray-200 font-medium">{label}</label>
      <input
        type="text"
        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#4d7ae2] sm:text-sm/6"
        placeholder="Type something and press Enter"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        disabled={!inputValue.trim()}
        onClick={() => handleKeyDown({ key: "Enter" })}
        type="button"
        className="bg-gray-200 disabled:opacity-50 font-bold text-lg rounded-md w-full px-4 py-2 "
      >
        add new {name}
      </button>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map(({ title, id }, index) => (
          <span
            key={id}
            className="bg-gray-100 rounded shadow-sm gap-x-4 py-2 px-3 flex items-center text-sm"
          >
            <p className="font-bold">{title}</p>
            <button
              type="button"
              onClick={() =>
                setTags((prev) => prev.filter(({ id: uiid }) => uiid !== id))
              }
              className="text-lg cursor-pointer"
            >
              <CgClose />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};
