export const ProductInfo = [
  {
    id: 1,
    thumbnail: "/images/IPEBeam160.jpg",
    title: { en: "IPE Beam 160", fa: "تیرآهن IPE 160" },
    availability: true,
    brand: { en: "Foulad Sazan", fa: "فولاد سازان" },
    category: { en: "Steel Beam", fa: "تیرآهن فولادی" },
    sku: "IPE160-FS-12M",
    description: {
      en: "The IPE 160 beam produced by Foulad Sazan is manufactured according to DIN 1025 standards. Made from ST37 steel, it offers excellent strength and durability, making it ideal for structural frameworks, bridges, and various civil engineering projects.",
      fa: "تیرآهن IPE 160 تولیدی فولاد سازان مطابق با استاندارد DIN 1025 ساخته شده است. این محصول از فولاد ST37 ساخته شده و دارای استحکام و دوام عالی است، که آن را برای سازه‌های ساختمانی، پل‌ها و پروژه‌های مهندسی عمرانی ایده‌آل می‌کند.",
    },
    size: ["12 meters"],
    color: ["dark silver", "steel gray"],
    technicalSpecs:
      '[{"label":{"en":"Standard","fa":"استاندارد"},"value":"DIN 1025 / ISIRI 12345"},{"label":{"en":"Steel Grade","fa":"گرید فولاد"},"value":"ST37"},{"label":{"en":"Web Height","fa":"ارتفاع وب"},"value":"160 mm"},{"label":{"en":"Flange Width","fa":"عرض فلنج"},"value":"82 mm"},{"label":{"en":"Web Thickness","fa":"ضخامت وب"},"value":"5.0 mm"},{"label":{"en":"Flange Thickness","fa":"ضخامت فلنج"},"value":"7.4 mm"},{"label":{"en":"Unit Weight","fa":"وزن واحد"},"value":"18.8 kg/m"},{"label":{"en":"Length","fa":"طول"},"value":"12 meters"},{"label":{"en":"Total Weight","fa":"وزن کل"},"value":"225.6 kg"},{"label":{"en":"Production","fa":"تولید"},"value":"Foulad Sazan – Isfahan"},{"label":{"en":"Packaging","fa":"بسته‌بندی"},"value":"Bundled with steel straps"}]',
  },
];

export function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return decodeURIComponent(value);
    }
  }
  return null;
}

export function setCookie(name, value, days = 180) {
  const expires = new Date(Date.now() + days * 86400000).toUTCString(); // 86400000 = 24 * 60 * 60 * 1000
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${expires}; path=/`;
}
