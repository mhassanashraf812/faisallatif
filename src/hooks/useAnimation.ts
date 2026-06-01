"use client";

import { useReducedMotion } from "framer-motion";

export function useAnimation() {
  const prefersReducedMotion = useReducedMotion();

  const fadeInUp = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: "easeOut" as const },
      };

  const fadeIn = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.4 },
      };

  const staggerContainer = prefersReducedMotion
    ? {}
    : {
        initial: {},
        animate: { transition: { staggerChildren: 0.1 } },
      };

  const scaleOnHover = prefersReducedMotion
    ? {}
    : {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
        transition: { type: "spring" as const, stiffness: 400, damping: 17 },
      };

  return { fadeInUp, fadeIn, staggerContainer, scaleOnHover, prefersReducedMotion };
}
