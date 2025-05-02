import { useTranslation } from "react-i18next";

const cardsData = [
  {
    thumbnailSrc: "/images/IndystryCard (1).png",
    title: "industriesCard.construction.title",
    subTitle: "industriesCard.construction.description",
  },
  {
    thumbnailSrc: "/images/IndystryCard (2).png",
    title: "industriesCard.automotive.title",
    subTitle: "industriesCard.automotive.description",
  },
  {
    thumbnailSrc: "/images/IndystryCard (3).png",
    title: "industriesCard.manufacturing.title",
    subTitle: "industriesCard.manufacturing.description",
  },
  {
    thumbnailSrc: "/images/IndystryCard (4).png",
    title: "industriesCard.energy.title",
    subTitle: "industriesCard.energy.description",
  },
];

function IndustriesSection() {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <div dir={language !== "fa" ? "ltr" : "rtl"} className="relative space-y-6">
      {/* title */}
      <div className="relative opacity -0 z-10 px-4 py-2">
        <h4 className="text-4xl text-gray-200 font-bold">
          {t("industriesCard.sectionTitle")}
        </h4>
        <p className="text-lg text-gray-300 mt-4">
          {t("industriesCard.sectionSubtitle")}
        </p>
      </div>
      {/* cards */}
      <div className="flex px-4 py-2 opacity -0 md:grid relative z-10 md:grid-cols-2 md:overflow-hidden overflow-auto md:grid-rows-1 gap-6 md:py-1">
        {cardsData.map((card, index) => (
          <div className="bg-[#1b2b56] w-full flex-none h-[30rem] rounded-md overflow-hidden gap-y-2">
            <div className="h-3/4 w-full bg-gray-300 rounded-md overflow-hidden">
              <img
                src={card.thumbnailSrc}
                alt="card-thumbnail"
                className="size-full object-cover"
              />
            </div>
            <div className="px-4 py-4 flex flex-col justify-evenly gap-2 h-1/4">
              <h6 className="text-2xl text-gray-200 font-semibold">
                {t(card.title)}
              </h6>
              <p className="text-base text-gray-300">{t(card.subTitle)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IndustriesSection;
