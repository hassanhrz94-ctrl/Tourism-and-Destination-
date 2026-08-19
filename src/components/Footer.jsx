"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import Link from "next/link";
import { Send, MapPin } from "lucide-react";

const footerLinks = {
  Explore: [
    { label: "Destinations", href: "/destinations" },
    { label: "My Bookings", href: "/my-bookings" },
    { label: "Add Destination", href: "/add-destination" },
    { label: "Travel Stories", href: "/stories" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "How it works", href: "/how-it-works" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Support: [
    { label: "Help Center", href: "/help" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cancellation Policy", href: "/cancellation" },
  ],
};

const SocialIcon = ({ path }) => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor">
    <path d={path} />
  </svg>
);

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    path: "M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 2.2.28 3 .58a6 6 0 0 1 2.2 1.4 6 6 0 0 1 1.4 2.2c.3.8.52 1.8.58 3 .06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.28 2.2-.58 3a6 6 0 0 1-1.4 2.2 6 6 0 0 1-2.2 1.4c-.8.3-1.8.52-3 .58-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-2.2-.28-3-.58a6 6 0 0 1-2.2-1.4 6 6 0 0 1-1.4-2.2c-.3-.8-.52-1.8-.58-3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.28-2.2.58-3a6 6 0 0 1 1.4-2.2 6 6 0 0 1 2.2-1.4c.8-.3 1.8-.52 3-.58C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.52 0-4.76.07-1.02.05-1.57.22-1.94.36-.49.19-.84.42-1.2.79-.37.36-.6.71-.79 1.2-.14.37-.31.92-.36 1.94C3.83 9.35 3.83 9.72 3.83 12s0 2.65.07 3.89c.05 1.02.22 1.57.36 1.94.19.49.42.84.79 1.2.36.37.71.6 1.2.79.37.14.92.31 1.94.36 1.24.06 1.61.07 4.76.07s3.52 0 4.76-.07c1.02-.05 1.57-.22 1.94-.36.49-.19.84-.42 1.2-.79.37-.36.6-.71.79-1.2.14-.37.31-.92.36-1.94.06-1.24.07-1.61.07-3.89s0-2.65-.07-3.89c-.05-1.02-.22-1.57-.36-1.94a3.2 3.2 0 0 0-.79-1.2 3.2 3.2 0 0 0-1.2-.79c-.37-.14-.92-.31-1.94-.36C15.52 4 15.15 4 12 4zm0 3.4a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2zm0 1.8a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6zm4.8-2a1.07 1.07 0 1 1 0 2.15 1.07 1.07 0 0 1 0-2.15z",
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    path: "M13.5 22v-8.5H16l.4-3.4h-2.9V8c0-1 .27-1.6 1.65-1.6H16.5V3.4C16.2 3.36 15.2 3.27 14 3.27c-2.5 0-4.2 1.53-4.2 4.34v2.5H7v3.4h2.8V22h3.7z",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    path: "M22 5.9c-.66.3-1.37.5-2.1.6.76-.46 1.34-1.18 1.62-2.05-.71.43-1.5.73-2.34.9A3.7 3.7 0 0 0 12.7 8.1c0 .29.03.57.1.83A10.5 10.5 0 0 1 5.1 5.4a3.7 3.7 0 0 0 1.14 4.94c-.6-.02-1.16-.19-1.65-.46v.05a3.7 3.7 0 0 0 2.96 3.63 3.7 3.7 0 0 1-1.65.06 3.7 3.7 0 0 0 3.45 2.57A7.4 7.4 0 0 1 3.9 17.7a10.45 10.45 0 0 0 5.66 1.66c6.8 0 10.52-5.63 10.52-10.52l-.01-.48A7.5 7.5 0 0 0 22 5.9z",
  },
  {
    name: "Youtube",
    href: "https://youtube.com",
    path: "M21.6 7.2s-.2-1.46-.83-2.1c-.79-.84-1.68-.84-2.09-.89C15.8 4 12 4 12 4h-.01s-3.8 0-6.68.2c-.4.05-1.29.05-2.09.9-.63.63-.83 2.1-.83 2.1S2.2 8.9 2.2 10.6v1.5c0 1.7.2 3.4.2 3.4s.2 1.46.83 2.1c.8.84 1.85.81 2.32.9 1.68.16 7.15.21 7.15.21s3.8 0 6.69-.2c.4-.05 1.29-.06 2.08-.9.63-.64.83-2.1.83-2.1s.2-1.7.2-3.4v-1.5c0-1.7-.2-3.4-.2-3.4zM9.9 14.1V8.6l5.4 2.76-5.4 2.75z",
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // TODO: hook up to newsletter API
    setEmail("");
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#060B18] text-[#EDF1FF]">
      <div className="pointer-events-none absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-indigo-600/15 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-16 right-1/4 h-72 w-72 rounded-full bg-cyan-400/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 sm:px-8">
        {/* Balanced flex layout instead of uneven fr-grid */}
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-8">
          {/* Brand + newsletter — fixed max width so it doesn't eat column space */}
          <div className="max-w-xs shrink-0">
            <Link
              href={"/"}
              className="font-display bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-xl font-bold tracking-tight text-transparent"
            >
              WanderLand
            </Link>
            <p className="font-body mt-3 text-sm text-[#8B93B0]">
              Trips shaped by people who actually live there. Discover
              Bangladesh, one route at a time.
            </p>

            <form onSubmit={handleSubscribe} className="mt-6">
              <label
                htmlFor="footer-email"
                className="font-mono text-[11px] tracking-wide text-cyan-300/80"
              >
                GET TRIP INSPIRATION
              </label>
              <div className="mt-2 flex items-center gap-2">
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="font-body w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-[#EDF1FF] placeholder:text-[#5B6280] outline-none transition-colors focus:border-cyan-400/60"
                />
                <Button
                  type="submit"
                  isIconOnly
                  size="sm"
                  className="shrink-0 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-400 text-[#060B18] transition-transform duration-200 hover:scale-105"
                  aria-label="Subscribe"
                >
                  <Send size={16} />
                </Button>
              </div>
            </form>
          </div>

          {/* Link columns — evenly spaced, no huge dead gaps */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 sm:gap-x-14 lg:flex lg:gap-16">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading} className="min-w-[140px]">
                <h3 className="font-display text-sm font-semibold text-[#EDF1FF]">
                  {heading}
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group relative inline-block font-body text-sm text-[#8B93B0] transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-cyan-300 to-indigo-400 transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar — true 3-column split so socials sit dead center */}
        <div className="mt-14 grid grid-cols-1 items-center gap-4 border-t border-white/10 py-6 sm:grid-cols-3">
          <p className="font-mono flex items-center justify-center gap-1.5 text-xs text-[#5B6280] sm:justify-start">
            <MapPin size={12} className="text-cyan-400/70" />
            23.68°N, 90.35°E — Dhaka, Bangladesh
          </p>

          <div className="flex items-center justify-center gap-4">
            {socials.map(({ name, href, path }) => (
              <motion.a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="text-[#8B93B0] transition-colors duration-200 hover:text-cyan-300"
                aria-label={name}
              >
                <SocialIcon path={path} />
              </motion.a>
            ))}
          </div>

          <p className="font-body text-center text-xs text-[#5B6280] sm:text-right">
            © {new Date().getFullYear()} WanderLand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;