import { useFormData } from "../FormContext";

function MainInfo() {
  const { register, errors } = useFormData();

  return (
    <div className="space-y-6">
      {/* main fields */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        {/* name en */}
        <div className="sm:col-span-3">
          <label
            htmlFor="title__en"
            className="block text-sm/6 font-bold text-gray-200"
          >
            Product Name
          </label>
          <div className="mt-2">
            <input
              {...register("title__en", {
                required: "Product name is required",
                minLength: { value: 3, message: "Minimum 3 characters" },
              })}
              id="title__en"
              name="title__en"
              type="text"
              autoComplete="given-name"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#4d7ae2] sm:text-sm/6"
            />
            {errors.title__en && (
              <p className="text-red-500 mt-2 md:mt-3">
                {errors.title__en.message}
              </p>
            )}
          </div>
        </div>
        {/* name farsi */}
        <div dir="rtl" className="sm:col-span-3">
          <label
            htmlFor="title__fa"
            className="block text-sm/6 font-bold text-gray-200"
          >
            نام محصول
          </label>
          <div className="mt-2">
            <input
              {...register("title__fa", {
                required: "لطفا نام محصول را وارد کنید.",
                minLength: { value: 3, message: "حداقل 3 کاراکتر" },
              })}
              id="title__fa"
              name="title__fa"
              type="text"
              autoComplete="given-name"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#4d7ae2] sm:text-sm/6"
            />
            {errors.title__fa && (
              <p className="text-red-500 mt-2 md:mt-3">
                {errors.title__fa.message}
              </p>
            )}
          </div>
        </div>
        {/* brand (en) */}
        <div className="sm:col-span-3">
          <label
            htmlFor="brand"
            className="block text-sm/6 font-bold text-gray-200"
          >
            Product Brand
          </label>
          <div className="mt-2">
            <input
              {...register("brand__en", {
                required: "Brand is required",
                minLength: { value: 3, message: "Minimum 3 characters" },
              })}
              id="brand__en"
              name="brand__en"
              type="text"
              autoComplete="given-name"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#4d7ae2] sm:text-sm/6"
            />
            {errors.brand__en && (
              <p className="text-red-500 mt-2 md:mt-3">
                {errors.brand__en.message}
              </p>
            )}
          </div>
        </div>
        {/* brand (fa) */}
        <div dir="rtl" className="sm:col-span-3">
          <label
            htmlFor="brand"
            className="block text-sm/6 font-bold text-gray-200"
          >
            برند محصول
          </label>
          <div className="mt-2">
            <input
              {...register("brand__fa", {
                required: "لطفا برند محصول را وارد کنید",
                minLength: { value: 3, message: "Minimum 3 characters" },
              })}
              id="brand__fa"
              name="brand__fa"
              type="text"
              autoComplete="given-name"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#4d7ae2] sm:text-sm/6"
            />
            {errors.brand__fa && (
              <p className="text-red-500 mt-2 md:mt-3">
                {errors.brand__fa.message}
              </p>
            )}
          </div>
        </div>
        {/* sku */}
        <div className="sm:col-span-3">
          <label
            htmlFor="sku"
            className="block text-sm/6 font-bold text-gray-200"
          >
            sku
          </label>
          <div className="mt-2">
            <input
              {...register("sku", {
                required: "Sku is required",
                minLength: { value: 3, message: "حداقل ۳ کاراکتر" },
              })}
              id="sku"
              name="sku"
              type="text"
              autoComplete="family-name"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#4d7ae2] sm:text-sm/6"
            />
            {errors.sku && (
              <p className="text-red-500 mt-2 md:mt-3">{errors.sku.message}</p>
            )}
          </div>
        </div>
        {/* price */}
        <div className="sm:col-span-3">
          <label
            htmlFor="price"
            className="block text-sm/6 font-bold text-gray-200"
          >
            Price
          </label>
          <div className="mt-2">
            <input
              {...register("price", {
                required: "Price is required",
                min: { value: 1, message: "Price must be greater than 0" },
              })}
              id="price"
              name="price"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#4d7ae2] sm:text-sm/6"
            />
            {errors.price && (
              <p className="text-red-500 mt-2 md:mt-3">
                {errors.price.message}
              </p>
            )}
          </div>
        </div>
        {/* category (en) */}
        <div className="sm:col-span-3">
          <label
            htmlFor="category__en"
            className="block text-sm/6 font-bold text-gray-200"
          >
            Category
          </label>
          <div className="mt-2">
            <input
              {...register("category__en", {
                required: "Category is required",
                minLength: { value: 3, message: "Minimum 3 characters" },
              })}
              id="category__en"
              name="category__en"
              type="text"
              autoComplete="given-name"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#4d7ae2] sm:text-sm/6"
            />
            {errors.category__en && (
              <p className="text-red-500 mt-2 md:mt-3">
                {errors.category__en.message}
              </p>
            )}
          </div>
        </div>
        {/* category (fa) */}
        <div dir="rtl" className="sm:col-span-3">
          <label
            htmlFor="category"
            className="block text-sm/6 font-bold text-gray-200"
          >
            دسته بندی
          </label>
          <div className="mt-2">
            <input
              {...register("category__fa", {
                required: "دسته بندی محصول را وارد کنید",
                minLength: { value: 3, message: "حداقل 3 کاراکتر" },
              })}
              id="category__fa"
              name="category__fa"
              type="text"
              autoComplete="given-name"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#4d7ae2] sm:text-sm/6"
            />
            {errors.category__fa && (
              <p className="text-red-500 mt-2 md:mt-3">
                {errors.category__fa.message}
              </p>
            )}
          </div>
        </div>
      </div>
      {/* description (en) */}
      <div className="col-span-full">
        <label
          htmlFor="about"
          className="block text-sm/6 font-bold text-gray-200"
        >
          About
        </label>
        <div className="mt-2">
          <textarea
            {...register("description__en", {
              required: "Description is required",
              minLength: { value: 10, message: "Minimum 10 characters" },
            })}
            id="description__en"
            name="description__en"
            rows={3}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#4d7ae2] sm:text-sm/6"
            defaultValue=""
          />
          {errors.description__en && (
            <p className="text-red-500 mt-2 md:mt-3">
              {errors.description__en.message}
            </p>
          )}
        </div>
      </div>
      {/* description (fa) */}
      <div dir="rtl" className="col-span-full">
        <label
          htmlFor="description__fa"
          className="block text-sm/6 font-bold text-gray-200"
        >
          درباره محصول
        </label>
        <div className="mt-2">
          <textarea
            {...register("description__fa", {
              required: "توضیح درباره محصول الزامی است",
              minLength: { value: 10, message: "حداقل ۱۰ کاراکتر" },
            })}
            id="description__fa"
            name="description__fa"
            rows={3}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#4d7ae2] sm:text-sm/6"
            defaultValue=""
          />
          {errors.description__fa && (
            <p className="text-red-500 mt-2 md:mt-3">
              {errors.description__fa.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainInfo;
