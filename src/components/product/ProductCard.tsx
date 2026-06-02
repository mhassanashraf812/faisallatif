"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { Product } from "@/lib/data/products";
import { Button } from "@/components/ui/Button";
import {
  buildSingleProductOrderMessage,
  getWhatsAppLink,
} from "@/lib/whatsapp";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const orderLink = getWhatsAppLink(buildSingleProductOrderMessage(product.name, 1));

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-shadow hover:shadow-lg"
    >
      <Link href={`/menu/${product.id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <OptimizedImage
            src={product.image}
            alt={product.name}
            fill
            preset="card"
            priority={priority}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-text-secondary backdrop-blur-sm">
            {product.category}
          </span>
        </div>
      </Link>

      <div className="p-5">
        <Link href={`/menu/${product.id}`}>
          <h3 className="font-heading text-lg font-semibold transition-colors group-hover:text-accent">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 line-clamp-2 text-sm text-text-secondary">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-end">
          <a href={orderLink} target="_blank" rel="noopener noreferrer">
            <Button size="sm" aria-label={`Order ${product.name} on WhatsApp`}>
              <MessageCircle className="h-4 w-4" />
              Order on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </motion.article>
  );
}
