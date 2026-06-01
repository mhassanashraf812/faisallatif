import { OptimizedImage } from "@/components/ui/OptimizedImage";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { businessInfo, brandTaglines } from "@/lib/data/brand";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-gold/20 bg-maroon text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-gold/50">
              <OptimizedImage
                src="/images/logo.jpg"
                alt="Faisal Latif logo"
                fill
                preset="thumb"
                className="object-cover"
                sizes="56px"
              />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold">Faisal Latif</h3>
              <p className="text-xs text-white/70">Sweets & Bakers</p>
            </div>
          </div>
          <p className="mt-4 font-script text-2xl text-gold">
            {brandTaglines.urdu}
          </p>
          <p className="mt-1 text-sm text-white/70">{brandTaglines.english}</p>
          <p className="mt-3 inline-block rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-gold">
            {brandTaglines.primary}
          </p>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold text-gold">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <Link href="/menu" className="transition-colors hover:text-gold">
                Our Menu
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="transition-colors hover:text-gold">
                Customer Reviews
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-gold">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/cart" className="transition-colors hover:text-gold">
                Your Cart
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold text-gold">
            Categories
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <Link href="/menu?category=Sweets" className="hover:text-gold">
                Sweets
              </Link>
            </li>
            <li>
              <Link href="/menu?category=Cakes" className="hover:text-gold">
                Cakes
              </Link>
            </li>
            <li>
              <Link href="/menu?category=Bakery Items" className="hover:text-gold">
                Bakery Items
              </Link>
            </li>
            <li>
              <Link href="/menu?category=Fast Food" className="hover:text-gold">
                Fast Food
              </Link>
            </li>
            <li>
              <Link href="/menu?category=Sundaes" className="hover:text-gold">
                Sundaes
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold text-gold">
            Visit Us
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{businessInfo.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              <span>{businessInfo.phone}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              <span>{businessInfo.email}</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-gold" />
              <span>{businessInfo.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {businessInfo.name}. {brandTaglines.primary}.
      </div>
    </footer>
  );
}
