"use client";

import { useState } from "react";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { businessInfo, brandTaglines } from "@/lib/data/brand";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      "Assalam o Alaikum, I need information.",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Message: ${form.message}`,
    ].join("\n");
    window.open(getWhatsAppLink(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold text-accent">
            {brandTaglines.primary}
          </span>
          <h1 className="font-heading text-4xl font-bold text-maroon">
            Contact Us
          </h1>
          <p className="mt-3 text-text-secondary">
            Visit us at Fateh Pur, Layyah — or send us a message
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          {/* Contact info + map image */}
          <div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
              <OptimizedImage
                src="/images/contact.jpg"
                alt="Faisal Latif shop exterior"
                fill
                preset="section"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-sm text-text-secondary">
                    {businessInfo.address}
                    <br />
                    {businessInfo.city}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className="text-sm text-text-secondary hover:text-accent"
                  >
                    {businessInfo.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href={`mailto:${businessInfo.email}`}
                    className="text-sm text-text-secondary hover:text-accent"
                  >
                    {businessInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">Hours</p>
                  <p className="text-sm text-text-secondary">{businessInfo.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center py-12 text-center"
              >
                <h2 className="mt-4 font-heading text-xl font-semibold">
                  Message Sent to WhatsApp
                </h2>
                <p className="mt-2 text-sm text-text-secondary">
                  Thanks! We opened WhatsApp so you can confirm quickly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="font-heading text-xl font-semibold">
                  Send us a Message
                </h2>
                <Input
                  label="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  required
                />
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="How can we help you?"
                    rows={5}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
