"use client";

import { useState } from "react";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { motion } from "framer-motion";
import { Star, Quote, Video, MessageSquare, ImageIcon } from "lucide-react";
import { PageTransition } from "@/components/layout/PageTransition";
import { FacebookVideoEmbed } from "@/components/reviews/FacebookVideoEmbed";
import {
  reviews,
  videoReviews,
  textReviews,
  imageReviews,
} from "@/lib/data/reviews";
import { brandTaglines } from "@/lib/data/brand";
import { cn } from "@/lib/utils";

type FilterType = "all" | "video" | "text" | "image";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-accent text-accent" : "text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

const filters: { id: FilterType; label: string; icon: typeof Video }[] = [
  { id: "all", label: "All Reviews", icon: Star },
  { id: "video", label: "Video", icon: Video },
  { id: "text", label: "Text", icon: MessageSquare },
  { id: "image", label: "Photos", icon: ImageIcon },
];

export default function ReviewsPage() {
  const [filter, setFilter] = useState<FilterType>("all");
  const avgRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  const filteredReviews =
    filter === "all"
      ? reviews
      : filter === "video"
        ? videoReviews
        : filter === "text"
          ? textReviews
          : imageReviews;

  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold text-accent">
            {brandTaglines.primary}
          </span>
          <h1 className="font-heading text-4xl font-bold text-maroon">
            Customer Reviews
          </h1>
          <p className="mt-3 text-text-secondary">
            Real stories from Layyah — in video, text & photos
          </p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-secondary-bg px-6 py-3">
            <StarRating rating={Math.round(avgRating)} />
            <span className="font-semibold">{avgRating.toFixed(1)}</span>
            <span className="text-text-secondary">
              ({reviews.length} reviews)
            </span>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setFilter(id)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
                filter === id
                  ? "bg-accent text-white"
                  : "bg-secondary-bg text-text-secondary hover:bg-accent/10"
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
              <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs">
                {id === "all"
                  ? reviews.length
                  : id === "video"
                    ? videoReviews.length
                    : id === "text"
                      ? textReviews.length
                      : imageReviews.length}
              </span>
            </button>
          ))}
        </div>

        {/* Video reviews section highlight */}
        {(filter === "all" || filter === "video") && videoReviews.length > 0 && (
          <section className="mt-14">
            <h2 className="font-heading text-2xl font-bold text-maroon">
              Video Reviews from Facebook
            </h2>
            <p className="mt-2 text-text-secondary">
              Watch what our customers say about us
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videoReviews
                .filter((v) => filter === "all" || filter === "video")
                .map((review, index) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <FacebookVideoEmbed
                      url={review.videoUrl!}
                      caption={review.caption}
                      previewImage={review.previewImage}
                    />
                    <div className="mt-2 flex items-center gap-2">
                      <StarRating rating={review.rating} />
                      <span className="text-xs text-text-secondary">
                        {review.date}
                      </span>
                    </div>
                  </motion.div>
                ))}
            </div>
          </section>
        )}

        {/* Text reviews */}
        {(filter === "all" || filter === "text") && textReviews.length > 0 && (
          <section className="mt-14">
            {filter === "all" && (
              <h2 className="font-heading text-2xl font-bold text-maroon">
                Written Reviews
              </h2>
            )}
            <div
              className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${
                filter === "all" ? "mt-8" : "mt-0"
              }`}
            >
              {textReviews
                .filter((r) => filter === "all" || filter === "text")
                .map((review, index) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
                  >
                    <Quote className="absolute right-5 top-5 h-8 w-8 text-accent/15" />
                    <div className="flex items-center gap-3">
                      {review.avatar && (
                        <div className="relative h-12 w-12 overflow-hidden rounded-full">
                          <OptimizedImage
                            src={review.avatar}
                            alt={review.name}
                            fill
                            preset="avatar"
                            className="object-cover"
                            sizes="48px"
                          />
                        </div>
                      )}
                      <div>
                        <p className="font-semibold">{review.name}</p>
                        <p className="text-xs text-text-secondary">
                          {review.date}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <StarRating rating={review.rating} />
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </motion.div>
                ))}
            </div>
          </section>
        )}

        {/* Image reviews */}
        {(filter === "all" || filter === "image") && imageReviews.length > 0 && (
          <section className="mt-14">
            {filter === "all" && (
              <h2 className="font-heading text-2xl font-bold text-maroon">
                Customer Photos
              </h2>
            )}
            <div
              className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${
                filter === "all" ? "mt-8" : "mt-0"
              }`}
            >
              {imageReviews
                .filter((r) => filter === "all" || filter === "image")
                .map((review, index) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100"
                  >
                    <div className="relative aspect-square">
                      <OptimizedImage
                        src={review.imageUrl!}
                        alt={review.caption ?? "Customer photo"}
                        fill
                        preset="card"
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <StarRating rating={review.rating} />
                      {review.caption && (
                        <p className="mt-2 text-sm text-text-secondary">
                          {review.caption}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
            </div>
          </section>
        )}
      </div>
    </PageTransition>
  );
}
