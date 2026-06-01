"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import type { CategoryShowcase } from "@/lib/data/brand";

interface CategorySectionProps {
  category: CategoryShowcase;
  index: number;
}

export function CategorySection({ category, index }: CategorySectionProps) {
  const isEven = index % 2 === 0;

  return (
    <section className="overflow-hidden py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
            isEven ? "" : "lg:[direction:rtl]"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, x: isEven ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`relative ${isEven ? "" : "lg:[direction:ltr]"}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl ring-1 ring-gold/20">
              <OptimizedImage
                src={category.image}
                alt={category.title}
                fill
                preset="section"
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/60 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full bg-gold px-4 py-1.5 text-sm font-semibold text-maroon">
                {category.tagline}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isEven ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={isEven ? "" : "lg:[direction:ltr]"}
          >
            {category.titleUrdu && (
              <span className="font-script text-3xl text-gold">
                {category.titleUrdu}
              </span>
            )}
            <h2 className="font-heading text-3xl font-bold text-maroon sm:text-4xl">
              {category.title}
            </h2>
            <p className="mt-2 text-lg font-medium text-accent">
              {category.tagline}
            </p>
            <p className="mt-4 leading-relaxed text-text-secondary">
              {category.description}
            </p>
            <Link
              href={`/menu?category=${encodeURIComponent(category.category)}`}
              className="mt-6 inline-flex items-center gap-2 font-semibold text-maroon transition-colors hover:text-accent"
            >
              Explore {category.title}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
