import type { ProductCategory } from "./products";

export interface CategoryShowcase {
  id: string;
  title: string;
  titleUrdu?: string;
  tagline: string;
  description: string;
  image: string;
  category: ProductCategory;
}

export const categoryShowcases: CategoryShowcase[] = [
  {
    id: "sweets",
    title: "Sweets",
    titleUrdu: "مٹھائی",
    tagline: "Mithai jo dil jeet le",
    description:
      "Traditional gulab jamun, barfi, jalebi & more — made fresh daily with authentic recipes passed down through generations.",
    image: "/images/menu/barfi.jpg",
    category: "Sweets",
  },
  {
    id: "cakes",
    title: "Cakes",
    titleUrdu: "کیک",
    tagline: "Har khushi ka cake",
    description:
      "Custom birthday, wedding & celebration cakes — beautifully designed and baked to perfection for your special moments.",
    image: "/images/menu/cakes.jpeg",
    category: "Cakes",
  },
  {
    id: "bakery",
    title: "Bakery Items",
    titleUrdu: "بیکری",
    tagline: "Subah ki tazi khushboo",
    description:
      "Fresh croissants, artisan bread, cinnamon rolls & pastries — straight from our ovens every morning.",
    image: "/images/menu/bakery-items.jpg",
    category: "Bakery Items",
  },
  {
    id: "fast-food",
    title: "Fast Food",
    titleUrdu: "فاسٹ فوڈ",
    tagline: "Bhook mitao, mazaa pao",
    description:
      "Crispy burgers, loaded fries, club sandwiches & more — quick, delicious meals for the whole family.",
    image: "/images/menu/pizza.jpg",
    category: "Fast Food",
  },
  {
    id: "sundaes",
    title: "Sundaes",
    titleUrdu: "سنڈے",
    tagline: "Thandi meethi treat",
    description:
      "Creamy ice cream sundaes topped with chocolate, nuts & fresh fruits — the perfect cool indulgence.",
    image: "/images/menu/sundae.jpg",
    category: "Sundaes",
  },
];

export const brandTaglines = {
  primary: "Layyah Ki Number 1 Bakery",
  urdu: "ذائقہ جو یاد رہے",
  english: "A Taste That Stays With You",
  secondary: [
    "Zayqa Jo Yaad Rahay",
    "Har Bite Mein Mohabbat",
    "Fresh Daily, Loved Always",
    "Fateh Pur Ka Fakhar",
  ],
};

export const businessInfo = {
  name: "Faisal Latif Sweets & Bakers",
  address: "MM Road, Fateh Pur",
  city: "Fateh Pur, Pakistan",
  phone: "03126762123",
  email: "Faisallatifsweets@gmail.com",
  hours: "Daily 5:00 AM – 12:00 PM",
};
