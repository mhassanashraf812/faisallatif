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
    image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75",
    category: "Sweets",
  },
  {
    id: "cakes",
    title: "Cakes",
    titleUrdu: "کیک",
    tagline: "Har khushi ka cake",
    description:
      "Custom birthday, wedding & celebration cakes — beautifully designed and baked to perfection for your special moments.",
    image: "https://images.unsplash.com/photo-1578985545062-c437068358b2",
    category: "Cakes",
  },
  {
    id: "bakery",
    title: "Bakery Items",
    titleUrdu: "بیکری",
    tagline: "Subah ki tazi khushboo",
    description:
      "Fresh croissants, artisan bread, cinnamon rolls & pastries — straight from our ovens every morning.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
    category: "Bakery Items",
  },
  {
    id: "fast-food",
    title: "Fast Food",
    titleUrdu: "فاسٹ فوڈ",
    tagline: "Bhook mitao, mazaa pao",
    description:
      "Crispy burgers, loaded fries, club sandwiches & more — quick, delicious meals for the whole family.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    category: "Fast Food",
  },
  {
    id: "sundaes",
    title: "Sundaes",
    titleUrdu: "سنڈے",
    tagline: "Thandi meethi treat",
    description:
      "Creamy ice cream sundaes topped with chocolate, nuts & fresh fruits — the perfect cool indulgence.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
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
  address: "Main Bazar, Fateh Pur, Layyah",
  city: "Layyah, Punjab, Pakistan",
  phone: "+92 300 1234567",
  email: "info@faisallatif.com",
  hours: "Daily 8:00 AM – 10:00 PM",
};
