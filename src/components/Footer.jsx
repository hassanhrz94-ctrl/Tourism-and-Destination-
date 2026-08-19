"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#060B18] mt-20 text-[#8B93B0] px-6 md:px-16 py-16">
      {/* ambient glow — decorative only, no layout impact */}
      <div className="pointer-events-none absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-indigo-600/15 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-16 right-1/4 h-72 w-72 rounded-full bg-cyan-400/10 blur-[110px]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="font-display text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-transparent">
            WanderLand
          </h1>
          <p className="font-body mt-4 max-w-xl text-[#8B93B0]">
            Your gateway to extraordinary travel experiences around the world.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Newsletter */}
          <div>
            <h3 className="font-mono text-cyan-300/80 mb-3 tracking-wide text-sm">
              NEWSLETTER
            </h3>
            <p className="font-body mb-4 text-sm text-[#8B93B0]">
              Subscribe for exclusive travel deals and inspiration.
            </p>

            <div className="flex items-center bg-white/5 border border-white/10 px-4 py-3 rounded-lg transition-colors duration-200 focus-within:border-cyan-400/60">
              <input
                type="email"
                placeholder="Enter email"
                className="font-body bg-transparent outline-none flex-1 text-sm text-[#EDF1FF] placeholder:text-[#5B6280]"
              />
              <span className="bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-transparent text-lg transition-transform duration-200 hover:translate-x-0.5 hover:-translate-y-0.5 cursor-pointer">
                ↗
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono text-cyan-300/80 mb-3 tracking-wide text-sm">
              QUICK LINKS
            </h3>
            <ul className="font-body space-y-2 text-sm">
              <li className="group relative w-fit hover:text-white cursor-pointer transition-colors duration-200">
                Home
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-cyan-300 to-indigo-400 transition-all duration-300 group-hover:w-full" />
              </li>
              <li className="group relative w-fit hover:text-white cursor-pointer transition-colors duration-200">
                Destinations
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-cyan-300 to-indigo-400 transition-all duration-300 group-hover:w-full" />
              </li>
              <li className="group relative w-fit hover:text-white cursor-pointer transition-colors duration-200">
                My Bookings
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-cyan-300 to-indigo-400 transition-all duration-300 group-hover:w-full" />
              </li>
              <li className="group relative w-fit hover:text-white cursor-pointer transition-colors duration-200">
                My Profile
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-cyan-300 to-indigo-400 transition-all duration-300 group-hover:w-full" />
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-mono text-cyan-300/80 mb-3 tracking-wide text-sm">
              SUPPORT
            </h3>
            <ul className="font-body space-y-2 text-sm">
              <li className="group relative w-fit hover:text-white cursor-pointer transition-colors duration-200">
                Help Center
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-cyan-300 to-indigo-400 transition-all duration-300 group-hover:w-full" />
              </li>
              <li className="group relative w-fit hover:text-white cursor-pointer transition-colors duration-200">
                Terms of Service
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-cyan-300 to-indigo-400 transition-all duration-300 group-hover:w-full" />
              </li>
              <li className="group relative w-fit hover:text-white cursor-pointer transition-colors duration-200">
                Privacy Policy
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-cyan-300 to-indigo-400 transition-all duration-300 group-hover:w-full" />
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-cyan-300/80 mb-3 tracking-wide text-sm">
              CONTACT US
            </h3>
            <ul className="font-body space-y-2 text-sm text-[#8B93B0]">
              <li>786 901 1622</li>
              <li>info@wandarland.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="font-body text-sm text-[#5B6280]">
            © 2026 WanderLand. All rights reserved.
          </p>

          <div className="flex gap-5 mt-4 md:mt-0 text-lg">
            <span className="cursor-pointer text-[#8B93B0] transition-all duration-200 hover:text-cyan-300 hover:-translate-y-0.5 inline-block">
              X
            </span>
            <span className="cursor-pointer text-[#8B93B0] transition-all duration-200 hover:text-cyan-300 hover:-translate-y-0.5 inline-block">
              in
            </span>
            <span className="cursor-pointer text-[#8B93B0] transition-all duration-200 hover:text-cyan-300 hover:-translate-y-0.5 inline-block">
              ◎
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;