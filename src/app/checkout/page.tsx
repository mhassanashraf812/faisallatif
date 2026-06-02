"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Truck,
  Store,
  MessageCircle,
  Check,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useCartStore } from "@/store/cartStore";
import { cn } from "@/lib/utils";
import { buildCartOrderMessage, getWhatsAppLink } from "@/lib/whatsapp";

const steps = ["Delivery", "Payment", "Confirm"];

export default function CheckoutPage() {
  const { items, clearCart } = useCartStore();

  const [step, setStep] = useState(0);
  const [orderType, setOrderType] = useState<"delivery" | "pickup">("delivery");
  const [paymentMethod, setPaymentMethod] = useState<"whatsapp">("whatsapp");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (items.length === 0 && !orderPlaced) {
    return (
      <PageTransition>
        <div className="mx-auto max-w-lg px-4 py-24 text-center">
          <h1 className="font-heading text-2xl font-bold">Nothing to checkout</h1>
          <p className="mt-2 text-text-secondary">Your cart is empty.</p>
          <Link href="/menu" className="mt-8 inline-block">
            <Button>Browse Menu</Button>
          </Link>
        </div>
      </PageTransition>
    );
  }

  if (orderPlaced) {
    return (
      <PageTransition>
        <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex h-20 w-20 items-center justify-center rounded-full bg-success/10"
          >
            <Check className="h-10 w-10 text-success" />
          </motion.div>
          <h1 className="mt-6 font-heading text-3xl font-bold">Order Confirmed!</h1>
          <p className="mt-3 text-text-secondary">
            Thank you, {formData.name}! Your order has been placed successfully.
            {" We'll contact you on WhatsApp shortly."}
          </p>
          <Link href="/" className="mt-8">
            <Button size="lg">Back to Home</Button>
          </Link>
        </div>
      </PageTransition>
    );
  }

  const handlePlaceOrder = () => {
    const message = buildCartOrderMessage(items, {
      name: formData.name,
      phone: formData.phone,
      orderType,
      address: formData.address,
      notes: formData.notes,
    });
    window.open(getWhatsAppLink(message), "_blank", "noopener,noreferrer");
    clearCart();
    setOrderPlaced(true);
  };

  return (
    <PageTransition>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold">Checkout</h1>

        {/* Step indicator */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors",
                  i <= step
                    ? "bg-accent text-white"
                    : "bg-secondary-bg text-text-secondary"
                )}
              >
                {i + 1}
              </div>
              <span
                className={cn(
                  "hidden text-sm sm:inline",
                  i <= step ? "text-foreground font-medium" : "text-text-secondary"
                )}
              >
                {s}
              </span>
              {i < steps.length - 1 && (
                <ChevronRight className="mx-1 h-4 w-4 text-text-secondary" />
              )}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="mt-10 space-y-6"
            >
              <h2 className="font-heading text-xl font-semibold">
                Delivery or Pickup?
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <button
                  onClick={() => setOrderType("delivery")}
                  className={cn(
                    "flex items-center gap-4 rounded-2xl border-2 p-5 text-left transition-colors",
                    orderType === "delivery"
                      ? "border-accent bg-accent/5"
                      : "border-gray-200 hover:border-accent/30"
                  )}
                >
                  <Truck className="h-6 w-6 text-accent" />
                  <div>
                    <p className="font-semibold">Delivery</p>
                    <p className="text-sm text-text-secondary">Share address on WhatsApp</p>
                  </div>
                </button>
                <button
                  onClick={() => setOrderType("pickup")}
                  className={cn(
                    "flex items-center gap-4 rounded-2xl border-2 p-5 text-left transition-colors",
                    orderType === "pickup"
                      ? "border-accent bg-accent/5"
                      : "border-gray-200 hover:border-accent/30"
                  )}
                >
                  <Store className="h-6 w-6 text-accent" />
                  <div>
                    <p className="font-semibold">Pickup</p>
                    <p className="text-sm text-text-secondary">
                      Collect from our shop
                    </p>
                  </div>
                </button>
              </div>

              <Input
                label="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Your name"
              />
              <Input
                label="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="+92 300 1234567"
              />
              {orderType === "delivery" && (
                <Input
                  label="Delivery Address"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  placeholder="Street, area, city"
                />
              )}
              <Input
                label="Order Notes (optional)"
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
                placeholder="Any special instructions..."
              />
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="mt-10 space-y-6"
            >
              <h2 className="font-heading text-xl font-semibold">
                Payment Method
              </h2>
              <div className="grid gap-4 sm:grid-cols-1">
                <button
                  onClick={() => setPaymentMethod("whatsapp")}
                  className={cn(
                    "flex items-center gap-4 rounded-2xl border-2 p-5 text-left transition-colors",
                    paymentMethod === "whatsapp"
                      ? "border-accent bg-accent/5"
                      : "border-gray-200 hover:border-accent/30"
                  )}
                >
                  <MessageCircle className="h-6 w-6 text-accent" />
                  <div>
                    <p className="font-semibold">WhatsApp Order</p>
                    <p className="text-sm text-text-secondary">
                      Confirm your order directly on WhatsApp
                    </p>
                  </div>
                </button>
              </div>

              <div className="rounded-2xl bg-secondary-bg p-6">
                <h3 className="font-heading font-semibold">Order Summary</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {items.map((item) => (
                    <li
                      key={item.product.id}
                      className="flex justify-between text-text-secondary"
                    >
                      <span>
                        {item.quantity}x {item.product.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="mt-10 space-y-6"
            >
              <h2 className="font-heading text-xl font-semibold">
                Review & Confirm
              </h2>
              <div className="rounded-2xl border border-gray-200 p-6 space-y-4">
                <div>
                  <p className="text-sm text-text-secondary">Name</p>
                  <p className="font-medium">{formData.name || "—"}</p>
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Phone</p>
                  <p className="font-medium">{formData.phone || "—"}</p>
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Order Type</p>
                  <p className="font-medium capitalize">{orderType}</p>
                </div>
                {orderType === "delivery" && (
                  <div>
                    <p className="text-sm text-text-secondary">Address</p>
                    <p className="font-medium">{formData.address || "—"}</p>
                  </div>
                )}
                <div>
                  <p className="text-sm text-text-secondary">Payment</p>
                  <p className="font-medium">WhatsApp Order</p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-text-secondary">Confirmation</p>
                  <p className="font-heading text-2xl font-bold text-accent">
                    WhatsApp Order
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-10 flex justify-between">
          {step > 0 ? (
            <Button variant="secondary" onClick={() => setStep(step - 1)}>
              <ChevronLeft className="h-4 w-4" />
              Back
            </Button>
          ) : (
            <Link href="/cart">
              <Button variant="secondary">
                <ChevronLeft className="h-4 w-4" />
                Back to Cart
              </Button>
            </Link>
          )}

          {step < steps.length - 1 ? (
            <Button onClick={() => setStep(step + 1)}>
              Continue
              <ChevronRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handlePlaceOrder}>Place Order</Button>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
