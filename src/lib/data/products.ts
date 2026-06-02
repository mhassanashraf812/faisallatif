export type ProductCategory =
  | "Cakes"
  | "Sweets"
  | "Bakery Items"
  | "Fast Food"
  | "Sundaes"
  | "Chocolates & Gifts"
  | "Other Items";

export interface Product {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  category: ProductCategory;
  image: string;
  featured?: boolean;
  customCake?: boolean;
}

export const categories: ProductCategory[] = [
  "Cakes",
  "Sweets",
  "Bakery Items",
  "Fast Food",
  "Sundaes",
  "Chocolates & Gifts",
  "Other Items",
];

export const products: Product[] = [
  {
    id: "chocolate-fudge-cake",
    name: "Chocolate Fudge Cake",
    description:
      "Rich, moist chocolate layers with silky fudge frosting — a celebration classic baked fresh daily.",
    ingredients: ["Dark chocolate", "Cocoa", "Fresh cream", "Butter", "Eggs", "Flour"],
    price: 2800,
    category: "Cakes",
    image: "/images/menu/chocolate-fudge-cake.jpg",
    featured: true,
    customCake: true,
  },
  {
    id: "red-velvet-cake",
    name: "Red Velvet Cake",
    description:
      "Velvety crimson sponge with cream cheese frosting — elegant, soft, and unforgettable.",
    ingredients: ["Cream cheese", "Buttermilk", "Cocoa", "Vanilla", "Eggs"],
    price: 3200,
    category: "Cakes",
    image: "/images/menu/red-velvet.jpg",
    featured: true,
    customCake: true,
  },
  {
    id: "strawberry-shortcake",
    name: "Strawberry Shortcake",
    description:
      "Light sponge layered with fresh strawberries and whipped cream — a springtime favorite.",
    ingredients: ["Strawberries", "Whipped cream", "Sponge cake", "Sugar"],
    price: 2600,
    category: "Cakes",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
    customCake: true,
  },
  {
    id: "gulab-jamun",
    name: "Gulab Jamun",
    description:
      "Soft milk-solid dumplings soaked in rose-cardamom syrup — a timeless Pakistani sweet.",
    ingredients: ["Khoya", "Semolina", "Rose water", "Cardamom", "Sugar syrup"],
    price: 850,
    category: "Sweets",
    image: "/images/menu/gulab-jamun.jpg",
    featured: true,
  },
  {
    id: "barfi-assortment",
    name: "Barfi Assortment",
    description:
      "A colorful mix of pistachio, coconut, and milk barfi — perfect for gifting and celebrations.",
    ingredients: ["Milk powder", "Pistachios", "Coconut", "Ghee", "Sugar"],
    price: 1200,
    category: "Sweets",
    image: "/images/menu/barfi.jpg",
    featured: true,
  },
  {
    id: "jalebi",
    name: "Crispy Jalebi",
    description:
      "Golden spirals fried to perfection and dipped in saffron syrup — crisp outside, juicy inside.",
    ingredients: ["Flour", "Yogurt", "Saffron", "Sugar syrup"],
    price: 600,
    category: "Sweets",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664a97107",
  },
  {
    id: "croissant",
    name: "Butter Croissant",
    description:
      "Flaky, golden layers of French-style croissant — baked every morning for peak freshness.",
    ingredients: ["Butter", "Flour", "Yeast", "Milk"],
    price: 350,
    category: "Bakery Items",
    image: "/images/menu/bakery-items.jpg",
    featured: true,
  },
  {
    id: "sourdough-bread",
    name: "Artisan Sourdough",
    description:
      "Slow-fermented sourdough with a crisp crust and tangy, airy crumb.",
    ingredients: ["Sourdough starter", "Flour", "Salt", "Water"],
    price: 450,
    category: "Bakery Items",
    image: "/images/menu/bakery-items.jpg",
  },
  {
    id: "cinnamon-rolls",
    name: "Cinnamon Rolls",
    description:
      "Warm, swirled rolls topped with cream cheese glaze — comfort in every bite.",
    ingredients: ["Cinnamon", "Brown sugar", "Cream cheese", "Flour", "Butter"],
    price: 550,
    category: "Bakery Items",
    image: "/images/menu/bakery-items.jpg",
  },
  {
    id: "chicken-burger",
    name: "Crispy Chicken Burger",
    description:
      "Juicy fried chicken patty with fresh lettuce, tomato, and house special sauce.",
    ingredients: ["Chicken breast", "Brioche bun", "Lettuce", "Special sauce"],
    price: 650,
    category: "Fast Food",
    image: "/images/menu/burger.jpg",
    featured: true,
  },
  {
    id: "club-sandwich",
    name: "Club Sandwich",
    description:
      "Triple-decker sandwich with grilled chicken, egg, cheese, and fresh vegetables.",
    ingredients: ["Chicken", "Egg", "Cheese", "Lettuce", "Tomato", "Toast"],
    price: 750,
    category: "Fast Food",
    image: "/images/menu/sundae.jpg",
  },
  {
    id: "fries-combo",
    name: "Loaded Fries Combo",
    description:
      "Crispy golden fries with cheese sauce and herbs — a crowd-pleasing snack.",
    ingredients: ["Potatoes", "Cheese sauce", "Herbs", "Spices"],
    price: 450,
    category: "Fast Food",
    image: "/images/menu/pizza.jpg",
  },
  {
    id: "truffle-chocolates",
    name: "Luxury Truffle Box",
    description:
      "Handcrafted chocolate truffles in assorted flavors — an elegant gift for any occasion.",
    ingredients: ["Dark chocolate", "Cream", "Cocoa", "Vanilla", "Nuts"],
    price: 2200,
    category: "Chocolates & Gifts",
    image:
      "https://images.unsplash.com/photo-1511381939415-44080a510774",
    featured: true,
  },
  {
    id: "gift-hamper",
    name: "Celebration Gift Hamper",
    description:
      "Curated selection of sweets, chocolates, and bakery treats in premium packaging.",
    ingredients: ["Assorted sweets", "Chocolates", "Cookies", "Gift box"],
    price: 4500,
    category: "Chocolates & Gifts",
    image:
      "https://images.unsplash.com/photo-1549465220-1a0b9238e257",
  },
  {
    id: "chocolate-sundae",
    name: "Chocolate Fudge Sundae",
    description:
      "Rich chocolate ice cream layered with hot fudge, whipped cream, and crushed nuts.",
    ingredients: ["Chocolate ice cream", "Hot fudge", "Whipped cream", "Nuts"],
    price: 550,
    category: "Sundaes",
    image: "/images/menu/pasta.jpg",
    featured: true,
  },
  {
    id: "strawberry-sundae",
    name: "Strawberry Delight Sundae",
    description:
      "Vanilla ice cream with fresh strawberries, strawberry syrup, and a cherry on top.",
    ingredients: ["Vanilla ice cream", "Fresh strawberries", "Syrup", "Cherry"],
    price: 500,
    category: "Sundaes",
    image: "/images/menu/sundae.jpg",
  },
  {
    id: "brownie-sundae",
    name: "Brownie Blast Sundae",
    description:
      "Warm brownie chunks with ice cream, caramel drizzle, and chocolate chips.",
    ingredients: ["Brownie", "Ice cream", "Caramel", "Chocolate chips"],
    price: 650,
    category: "Sundaes",
    image: "/images/menu/sundae.jpg",
    featured: true,
  },
  {
    id: "hot-chocolate",
    name: "Signature Hot Chocolate",
    description:
      "Rich Belgian chocolate drink topped with whipped cream — warm indulgence.",
    ingredients: ["Belgian chocolate", "Milk", "Whipped cream", "Cocoa"],
    price: 450,
    category: "Other Items",
    image:
      "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed",
  },
  {
    id: "fresh-juice",
    name: "Fresh Seasonal Juice",
    description:
      "Cold-pressed seasonal fruit juice — refreshing and naturally sweet.",
    ingredients: ["Seasonal fruits", "Ice", "Mint"],
    price: 350,
    category: "Other Items",
    image:
      "https://images.unsplash.com/photo-1622597467836-f3281f3751b8",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}
