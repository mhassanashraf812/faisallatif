"use client";

import { use, useState } from "react";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Minus, Plus, ArrowLeft, Check, MessageCircle } from "lucide-react";
import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { getProductById } from "@/lib/data/products";
import { useCartStore } from "@/store/cartStore";
import {
  buildSingleProductOrderMessage,
  getWhatsAppLink,
} from "@/lib/whatsapp";

interface ProductDetailPageProps {
  params: Promise<{ productId: string }>;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { productId } = use(params);
  const product = getProductById(productId);

  const [quantity, setQuantity] = useState(1);
  const [customNote, setCustomNote] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addItem(product, quantity, customNote || undefined);
    setShowConfirm(true);
  };
  const orderLink = getWhatsAppLink(
    buildSingleProductOrderMessage(product.name, quantity, customNote || undefined)
  );

  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Menu
        </Link>

        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative aspect-square overflow-hidden rounded-3xl"
          >
            <OptimizedImage
              src={product.image}
              alt={product.name}
              fill
              preset="section"
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
          >
            <span className="rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
              {product.category}
            </span>
            <h1 className="mt-4 font-heading text-3xl font-bold sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-6 leading-relaxed text-text-secondary">
              {product.description}
            </p>

            <div className="mt-6">
              <h3 className="font-heading text-lg font-semibold">Ingredients</h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {product.ingredients.map((ing) => (
                  <li
                    key={ing}
                    className="rounded-full bg-secondary-bg px-3 py-1 text-sm text-text-secondary"
                  >
                    {ing}
                  </li>
                ))}
              </ul>
            </div>

            {product.customCake && (
              <div className="mt-6 rounded-2xl border border-accent/20 bg-accent/5 p-5">
                <h3 className="font-heading text-lg font-semibold">
                  Custom Cake Options
                </h3>
                <p className="mt-1 text-sm text-text-secondary">
                  Specify size, flavor, message, or design preferences below.
                </p>
                <textarea
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  placeholder="e.g. 2kg, chocolate sponge, 'Happy Birthday Ali' written in gold..."
                  rows={3}
                  className="mt-3 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>
            )}

            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center rounded-full border border-gray-200">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="rounded-l-full p-3 transition-colors hover:bg-secondary-bg"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="rounded-r-full p-3 transition-colors hover:bg-secondary-bg"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              <Button size="lg" onClick={handleAddToCart} className="flex-1 sm:flex-none">
                Add to Cart
              </Button>
              <a href={orderLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="flex-1 sm:flex-none">
                  <MessageCircle className="h-4 w-4" />
                  Order on WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <Modal
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        title="Added to Cart!"
      >
        <div className="flex flex-col items-center text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-success/10">
            <Check className="h-7 w-7 text-success" />
          </div>
          <p className="mt-4 text-text-secondary">
            {quantity}x {product.name} added to your cart.
          </p>
          <div className="mt-6 flex gap-3">
            <Button variant="secondary" onClick={() => setShowConfirm(false)}>
              Continue Shopping
            </Button>
            <Link href="/cart">
              <Button>View Cart</Button>
            </Link>
          </div>
        </div>
      </Modal>
    </PageTransition>
  );
}
