import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = ({ testimonial, langKey }) => {
  console.log(langKey);

  return (
    <div
      dir={langKey !== "Fa" ? "ltr" : "rtl"}
      className="inline-block flex-none w-80 h-auto bg-[#334155] p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <div className="flex rtl:flex-row-reverse items-center mb-4 gap-2">
        <FaQuoteLeft className="text-gray-200 text-2xl mr-3" />
        <span className="text-lg font-semibold text-gray-200">
          {testimonial[`company${langKey}`]}
        </span>
      </div>
      <p className="text-gray-200 mb-6 whitespace-normal text-[15px] leading-6">
        {testimonial[`text${langKey}`]}
      </p>
      <div className="flex items-center gap-2">
        <div className="size-16 rounded-full bg-gray-400"></div>
        {testimonial[`author${langKey}`] && (
          <div className="">
            <p className="font-medium text-gray-200 text-[16px]">
              {testimonial[`author${langKey}`]}
            </p>
            <p className="italic text-xs text-gray-400 mt-1">
              {testimonial[`position${langKey}`]}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;
