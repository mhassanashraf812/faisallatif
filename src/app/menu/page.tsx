"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import { PageTransition } from "@/components/layout/PageTransition";
import { ProductCard } from "@/components/product/ProductCard";
import {
  products,
  categories,
  type ProductCategory,
} from "@/lib/data/products";
import { brandTaglines } from "@/lib/data/brand";
import { cn } from "@/lib/utils";

type SortOption = "default" | "name";

function MenuContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") as ProductCategory | null;

  const [activeCategory, setActiveCategory] = useState<ProductCategory | "All">(
    categoryParam && categories.includes(categoryParam) ? categoryParam : "All"
  );
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOption>("default");

  useEffect(() => {
    if (categoryParam && categories.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    if (sort === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [activeCategory, search, sort]);

  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold text-accent">
            {brandTaglines.primary}
          </span>
          <h1 className="font-heading text-4xl font-bold text-maroon">
            Our Menu
          </h1>
          <p className="mt-3 text-text-secondary">
            Sweets, cakes, bakery, fast food, sundaes & more
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            />
          </div>

          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-text-secondary" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="rounded-full border border-gray-200 bg-white px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            >
              <option value="default">Default</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("All")}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              activeCategory === "All"
                ? "bg-accent text-white"
                : "bg-secondary-bg text-text-secondary hover:bg-accent/10"
            )}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeCategory === cat
                  ? "bg-accent text-white"
                  : "bg-secondary-bg text-text-secondary hover:bg-accent/10"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredProducts.length > 0 ? (
          <motion.div
            layout
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        ) : (
          <div className="mt-16 text-center text-text-secondary">
            <p className="text-lg">No products found matching your search.</p>
          </div>
        )}
      </div>
    </PageTransition>
  );
}

export default function MenuPage() {
  return (
    <Suspense>
      <MenuContent />
    </Suspense>
  );
}
