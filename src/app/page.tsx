"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  MapPin,
  Sparkles,
  Star,
  Heart,
} from "lucide-react";
import { PageTransition } from "@/components/layout/PageTransition";
import { CategorySection } from "@/components/home/CategorySection";
import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/Button";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { getFeaturedProducts } from "@/lib/data/products";
import {
  categoryShowcases,
  brandTaglines,
  businessInfo,
} from "@/lib/data/brand";
import { useAnimation } from "@/hooks/useAnimation";

export default function HomePage() {
  const featured = getFeaturedProducts();
  const { fadeInUp, staggerContainer } = useAnimation();

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-[92vh] overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d"
            alt="Faisal Latif Sweets & Bakers"
            fill
            preset="hero"
            priority
            className="scale-105 object-cover"
            sizes="100vw"
          />
          <div className="hero-gradient absolute inset-0" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.15),transparent_50%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="relative mb-6 h-36 w-36 overflow-hidden rounded-full shadow-2xl ring-4 ring-gold/60 sm:h-44 sm:w-44"
          >
            <OptimizedImage
              src="/images/logo.jpg"
              alt="Faisal Latif Sweets & Bakers Logo"
              fill
              preset="thumb"
              priority
              className="object-cover"
              sizes="176px"
            />
          </motion.div>

          <motion.div {...fadeInUp} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-5 py-2 text-sm font-semibold text-gold backdrop-blur-sm">
              <Award className="h-4 w-4" />
              {brandTaglines.primary}
            </span>

            <h1 className="mt-6 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
              Faisal Latif
              <span className="mt-2 block text-2xl font-normal text-gold sm:text-3xl lg:text-4xl">
                Sweets & Bakers
              </span>
            </h1>

            <p className="font-script mt-4 text-4xl text-gold sm:text-5xl">
              {brandTaglines.urdu}
            </p>
            <p className="mt-2 text-lg text-white/80 sm:text-xl">
              {brandTaglines.english}
            </p>

            <div className="mt-4 inline-flex items-center gap-2 text-sm text-white/70">
              <MapPin className="h-4 w-4 text-gold" />
              {businessInfo.address}
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/menu">
                <Button size="lg" className="shadow-lg shadow-gold/25">
                  <Sparkles className="h-5 w-5" />
                  Order Now
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/reviews">
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-gold/60 text-white hover:bg-white/10"
                >
                  <Star className="h-5 w-5" />
                  See Reviews
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="h-2 w-1 rounded-full bg-gold"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars / Founders */}
      <section className="relative overflow-hidden bg-secondary-bg py-20">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl ring-2 ring-gold/30">
                <OptimizedImage
                  src="/images/pillars.png"
                  alt="Founders of Faisal Latif Sweets & Bakers"
                  fill
                  preset="section"
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-maroon px-6 py-4 text-white shadow-xl sm:-bottom-6 sm:-right-6">
                <p className="font-script text-2xl text-gold">Since Generations</p>
                <p className="text-sm text-white/80">The Pillars of Our Legacy</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                <Heart className="h-4 w-4" />
                Our Heritage
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-maroon sm:text-4xl">
                The Pillars Behind{" "}
                <span className="text-accent">Layyah&apos;s Finest</span>
              </h2>
              <p className="mt-5 leading-relaxed text-text-secondary">
                Faisal Latif Sweets & Bakers stands on the foundation of trust,
                tradition, and an unwavering commitment to quality. From Main Bazar
                Fateh Pur, Layyah, our family has served the community with sweets
                that carry the taste of home and cakes that make every celebration
                unforgettable.
              </p>
              <p className="mt-4 leading-relaxed text-text-secondary">
                Today, we are proud to be known as{" "}
                <strong className="text-maroon">{brandTaglines.primary}</strong> —
                a name synonymous with freshness, flavor, and the warmth of
                Pakistani hospitality.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                {[
                  { value: "25+", label: "Years of Trust" },
                  { value: "1000+", label: "Happy Customers" },
                  { value: "#1", label: "In Layyah" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gold/10"
                  >
                    <p className="font-heading text-2xl font-bold text-accent">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-text-secondary">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Sections */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-maroon sm:text-4xl">
            Explore Our Delights
          </h2>
          <p className="mt-3 text-text-secondary">
            From mithai to sundaes — something special for every craving
          </p>
        </div>
        {categoryShowcases.map((cat, i) => (
          <CategorySection key={cat.id} category={cat} index={i} />
        ))}
      </section>

      {/* Featured Products */}
      <section className="bg-maroon py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Customer Favorites
            </h2>
            <p className="mt-3 text-white/70">
              Most loved items from our menu
            </p>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {featured.slice(0, 6).map((product, i) => (
              <ProductCard key={product.id} product={product} priority={i < 3} />
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <Link href="/menu">
              <Button
                size="lg"
                className="bg-gold text-maroon hover:bg-gold/90"
              >
                View Full Menu
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/images/cta.jpg"
            alt="Celebration cake"
            fill
            preset="hero"
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-maroon/80" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-3xl px-4 text-center sm:px-6"
        >
          <p className="font-script text-4xl text-gold sm:text-5xl">
            {brandTaglines.urdu}
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
            Visit Us at Fateh Pur, Layyah
          </h2>
          <p className="mt-4 text-lg text-white/85">
            Order online or walk in — fresh sweets, cakes & bakery items waiting
            for you every day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/menu">
              <Button size="lg" className="bg-gold text-maroon hover:bg-gold/90">
                Start Ordering
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <MapPin className="h-5 w-5" />
                Get Directions
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
}
