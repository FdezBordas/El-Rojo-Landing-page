"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

export function Section({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6 md:py-20">
      {children}
    </section>
  );
}

export function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

export function CTAButton({
  href,
  children,
  eventName,
}: {
  href: string;
  children: ReactNode;
  eventName?: string;
}) {
  return (
    <Link
      href={href}
      onClick={() => eventName && trackEvent(eventName, { href })}
      className="inline-flex items-center gap-2 rounded-xl bg-rojo-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-rojo-600"
    >
      {children}
      <ArrowUpRight size={16} />
    </Link>
  );
}
