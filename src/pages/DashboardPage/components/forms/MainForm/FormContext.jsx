import { createContext, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { LoaderIcon } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";

const formContext = createContext();
export const useFormData = () => useContext(formContext);

function FormContext({ children, isEdit, setEdit, selectedProduct }) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
    reset,
  } = useForm();
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedProduct) {
      setEdit(true);
      reset({
        title__en: selectedProduct.title?.en || "",
        title__fa: selectedProduct.title?.fa || "",
        description__en: selectedProduct.description?.en || "",
        description__fa: selectedProduct.description?.fa || "",
        brand__en: selectedProduct.brand?.en || "",
        brand__fa: selectedProduct.brand?.fa || "",
        category__en: selectedProduct.category?.en || "",
        category__fa: selectedProduct.category?.fa || "",
        sku: selectedProduct.sku || "",
        price: selectedProduct.price || "",
        size: selectedProduct.size || [],
        color: selectedProduct.color || [],
        properties:
          selectedProduct.technicalSpecs?.map((spec) => ({
            label__en: spec.label?.en || "",
            label__fa: spec.label?.fa || "",
            value: spec.value || "",
          })) || [],
        thumbnail: selectedProduct.thumbnail || "",
      });
    }
  }, [selectedProduct]);

  useEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.style.overflow = isLoading ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isLoading]);

  async function handleAddProduct(formData) {
    try {
      setLoading(true);
      const picUrl = await uploadImage(formData.thumbnail);

      const productData = {
        title: {
          en: formData.title__en,
          fa: formData.title__fa,
        },
        description: {
          en: formData.description__en,
          fa: formData.description__fa,
        },
        availability: true,
        brand: {
          en: formData.brand__en,
          fa: formData.brand__fa,
        },
        category: {
          en: formData.category__en,
          fa: formData.category__fa,
        },
        sku: formData.sku,
        size: formData.size,
        color: formData.color,
        technicalSpecs: isEdit
          ? formData.properties
          : JSON.stringify(formData.properties),
        thumbnail:
          picUrl?.url ||
          formData.thumbnail ||
          "https://fooladsazan.org/WP/wp-content/uploads/2025/07/Not-Found-Pic.png",
        price: formData.price,
        uiid: selectedProduct?.uiid ? selectedProduct.uiid : v4(),
      };

      if (isEdit) {
        console.log(productData);

        fetch(
          "https://fooladsazan.org/WP/index.php?rest_route=/custom/v1/products/update",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "uh#__5d)#|<CNc9?L98LO=I;c5=)fq[pUys3>}GGG8*X%z=LqO08V:LV;ab{XCv|",
            },
            body: JSON.stringify(productData),
          }
        );
      } else {
        await fetch(
          "https://fooladsazan.org/WP/index.php?rest_route=/custom/v1/products",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "uh#__5d)#|<CNc9?L98LO=I;c5=)fq[pUys3>}GGG8*X%z=LqO08V:LV;ab{XCv|",
            },
            body: JSON.stringify(productData),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log("✅ محصول با موفقیت ثبت شد:", data);
          })
          .catch((error) => {
            console.error("❌ خطا در ثبت محصول:", error);
          });
      }

      // toast.success(isEdit ? "Edited Successfully" : "Product Added");
      // navigate("/dashboard");
      // window.location.reload();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const uploadImage = async (file) => {
    if (!file) return { error: "No file provided" };

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(
        "https://fooladsazan.org/WP/index.php?rest_route=/custom/v1/upload-image",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        return { error: errorData.error || "Upload failed" };
      }

      const data = await response.json();
      return { url: data.url };
    } catch (error) {
      console.log(error);
      return { error };
    }
  };

  return (
    <formContext.Provider
      value={{
        isLoading,
        getValues,
        setLoading,
        isEdit,
        setEdit,
        register,
        handleSubmit,
        watch,
        setValue,
        errors,
        selectedProduct,
      }}
    >
      <div
        className={`${
          isLoading ? "opacity-0 invisible" : ""
        } w-full px-4 py-2 md:w-[700px] my-8 md:my-10 transition-all mx-auto md:py-4`}
      >
        <form
          onSubmit={handleSubmit(handleAddProduct)}
          className="py-12 space-y-6"
        >
          {children}
        </form>
      </div>
      {/* loading screen */}
      <div
        className={`${
          isLoading ? "visible opacity-100" : "invisible opacity-0"
        } absolute inset-0 flex items-center justify-center bg-gray-950/50 backdrop-blur-sm`}
      >
        <div className="px-12 py-2 bg-gray-200 rounded-md flex items-center gap-4 justify-center flex-col">
          <LoaderIcon className="!size-12" />
          <p>Laoding...</p>
        </div>
      </div>
    </formContext.Provider>
  );
}

export default FormContext;
