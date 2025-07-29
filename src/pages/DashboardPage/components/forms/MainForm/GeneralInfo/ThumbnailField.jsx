import { useEffect, useState } from "react";
import { FaPhotoFilm } from "react-icons/fa6";
import { useFormData } from "../FormContext";
import { useLanguage } from "../../../../../../i18n/LanguageProvider";

function ThumbnailField() {
  const { register, errors, setLoading, setValue, selectedProduct } =
    useFormData();
  const { deleteImage } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);
  const [prevImage, setPrevImage] = useState(null);

  useEffect(() => {
    if (selectedProduct) {
      setPrevImage(
        selectedProduct?.thumbnail !==
          "https://fooladsazan.org/WP/wp-content/uploads/2025/07/Not-Found-Pic.png"
          ? selectedProduct?.thumbnail
          : ""
      );
    }
  }, [selectedProduct]);

  async function handleRemoveImage() {
    try {
      if (prevImage) {
        setLoading(true);
        await deleteImage(prevImage);
        setPrevImage(null);
        setLoading(false);
      } else {
        setSelectedImage(null);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleImageSelect(e) {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setValue("thumbnail", file, { shouldValidate: true });
    }
  }

  return (
    <div className="col-span-full">
      <label
        htmlFor="cover-photo"
        className="block text-sm/6 font-bold text-gray-200"
      >
        Cover photo
      </label>

      <div className="mt-2 flex justify-center rounded-lg border bg-[#ecebeb] border-dashed border-gray-900/25 px-6 py-10 relative">
        {selectedImage || prevImage ? (
          <div className="flex flex-col items-center">
            <img
              src={prevImage ? prevImage : selectedImage}
              alt="Selected"
              className="max-h-64 object-contain rounded-md"
            />
            <button
              type="button"
              onClick={handleRemoveImage}
              className="mt-4 cursor-pointer text-red-500 underline text-sm"
            >
              Remove Image
            </button>
          </div>
        ) : (
          <div className="text-center ">
            <FaPhotoFilm
              aria-hidden="true"
              className="mx-auto size-12 text-gray-300 "
            />
            <div className="mt-4 flex text-sm/6 text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-bold text-gray-900 px-2 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span className="p-2">Upload a file</span>
                <input
                  {...register("thumbnail", {
                    required: "Cover photo is required",
                  })}
                  id="file-upload"
                  name="thumbnail"
                  type="file"
                  className="sr-only"
                  onChange={handleImageSelect}
                  accept="image/*"
                />
              </label>
              <p className="pl-1 text-gray-900">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-900">PNG, JPG, GIF up to 10MB</p>
          </div>
        )}
      </div>
      {errors.thumbnail && (
        <p className="text-red-500 mt-2 md:mt-3 text-center">
          {errors.thumbnail.message}
        </p>
      )}
    </div>
  );
}

export default ThumbnailField;
