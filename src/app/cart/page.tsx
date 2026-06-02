"use client";

import { OptimizedImage } from "@/components/ui/OptimizedImage";
import Link from "next/link";
import { motion } from "framer-motion";
import { Minus, Plus, Trash2, ShoppingBag, MessageCircle } from "lucide-react";
import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/Button";
import { useCartStore } from "@/store/cartStore";
import { buildCartOrderMessage, getWhatsAppLink } from "@/lib/whatsapp";

export default function CartPage() {
  const { items, updateQuantity, removeItem } = useCartStore();
  const orderLink = getWhatsAppLink(buildCartOrderMessage(items));

  if (items.length === 0) {
    return (
      <PageTransition>
        <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary-bg">
            <ShoppingBag className="h-10 w-10 text-text-secondary" />
          </div>
          <h1 className="mt-6 font-heading text-2xl font-bold">Your cart is empty</h1>
          <p className="mt-2 text-text-secondary">
            Browse our menu and add some delicious treats!
          </p>
          <Link href="/menu" className="mt-8">
            <Button size="lg">Browse Menu</Button>
          </Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold">Your Cart</h1>
        <p className="mt-2 text-text-secondary">
          {items.length} item{items.length !== 1 ? "s" : ""} in your cart
        </p>

        <div className="mt-10 space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={item.product.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100 sm:gap-6 sm:p-6"
            >
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-28">
                <OptimizedImage
                  src={item.product.image}
                  alt={item.product.name}
                  fill
                  preset="thumb"
                  className="object-cover"
                  sizes="112px"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <Link
                    href={`/menu/${item.product.id}`}
                    className="font-heading text-lg font-semibold hover:text-accent"
                  >
                    {item.product.name}
                  </Link>
                  {item.customNote && (
                    <p className="mt-1 text-xs text-text-secondary">
                      Note: {item.customNote}
                    </p>
                  )}
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center rounded-full border border-gray-200">
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity - 1)
                      }
                      className="p-2 transition-colors hover:bg-secondary-bg"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="w-8 text-center text-sm font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                      className="p-2 transition-colors hover:bg-secondary-bg"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="rounded-full p-2 text-text-secondary transition-colors hover:bg-error/10 hover:text-error"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-secondary-bg p-6">
          <p className="mt-2 text-sm text-text-secondary">
            Ready to order? Send your cart directly on WhatsApp.
          </p>
          <a href={orderLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="mt-6 w-full">
              <MessageCircle className="h-4 w-4" />
              Order This Cart on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </PageTransition>
  );
}
