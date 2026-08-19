"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { ArrowRight, PlayCircle, MapPin } from "lucide-react";

const destinations = [
  { name: "Sundarbans", coord: "22.49°N, 89.54°E", top: "78%", left: "14%" },
  { name: "Sylhet", coord: "24.89°N, 91.87°E", top: "18%", left: "62%" },
  { name: "Cox's Bazar", coord: "21.43°N, 91.98°E", top: "74%", left: "78%" },
];

const stats = [
  "64 districts",
  "3 UNESCO sites",
  "700+ rivers",
  "120km beach",
  "6 seasons",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Banner = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#060B18] text-[#EDF1FF]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }

        @keyframes float-blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.05); }
          66% { transform: translate(-15px, 15px) scale(0.97); }
        }
        .blob { animation: float-blob 14s ease-in-out infinite; }
        .blob-delay { animation-delay: -6s; }

        .route-dot {
          offset-path: path("M40,340 C110,230 145,110 250,70 C300,110 270,270 320,320");
          offset-rotate: 0deg;
          animation: travel 6s linear infinite;
        }
        @keyframes travel {
          0% { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track { animation: marquee 22s linear infinite; }

        @media (prefers-reduced-motion: reduce) {
          .blob, .route-dot, .marquee-track { animation: none; }
        }
      `}</style>

      {/* Ambient background blobs */}
      <div className="pointer-events-none absolute -top-32 -left-20 h-72 w-72 rounded-full bg-indigo-600/25 blur-[100px] blob" />
      <div className="pointer-events-none absolute top-1/3 -right-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-[110px] blob blob-delay" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(79,70,229,0.12),transparent_60%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 py-16 sm:px-10 lg:flex-row lg:gap-8 lg:py-28">
        {/* Left: copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full max-w-xl lg:w-1/2"
        >
          <motion.p
            variants={item}
            className="font-mono text-xs tracking-[0.25em] text-cyan-300/80"
          >
            23.68°N, 90.35°E — EXPLORE BANGLADESH
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display mt-4 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl"
          >
            Beyond the map,{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              Bangladesh awaits.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="font-body mt-5 max-w-md text-base text-[#8B93B0] sm:text-lg"
          >
            From the mangroves of the Sundarbans to the tea hills of Sylhet —
            plan routes, book local guides, and discover trips shaped by
            people who actually live there.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button
              className="bg-gradient-to-r from-indigo-500 to-cyan-400 font-body font-medium text-[#060B18]"
              endContent={<ArrowRight size={16} />}
            >
              Start exploring
            </Button>
            <Button
              variant="light"
              className="font-body font-medium text-[#EDF1FF]"
              startContent={<PlayCircle size={18} />}
            >
              Watch stories
            </Button>
          </motion.div>

          {/* Marquee stat strip */}
          <motion.div variants={item} className="mt-10 overflow-hidden">
            <div className="marquee-track flex w-max gap-6">
              {[...stats, ...stats].map((s, i) => (
                <span
                  key={i}
                  className="font-mono whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-[#8B93B0]"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right: animated route illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative aspect-square w-full max-w-md lg:w-1/2"
        >
          <svg
            viewBox="0 0 360 380"
            className="absolute inset-0 h-full w-full"
            fill="none"
          >
            <path
              d="M40,340 C110,230 145,110 250,70 C300,110 270,270 320,320"
              stroke="url(#routeGradient)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              opacity="0.6"
            />
            <defs>
              <linearGradient id="routeGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#22D3EE" />
                <stop offset="100%" stopColor="#4F46E5" />
              </linearGradient>
            </defs>
          </svg>

          {/* traveling dot along the path */}
          <div className="route-dot absolute h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_4px_rgba(34,211,238,0.6)]" />

          {destinations.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
              style={{ top: d.top, left: d.left }}
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400/50" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-300" />
              </span>
              <MapPin size={14} className="mt-1 text-indigo-300" />
              <span className="font-display mt-0.5 text-xs font-medium">
                {d.name}
              </span>
              <span className="font-mono text-[10px] text-[#8B93B0]">
                {d.coord}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;