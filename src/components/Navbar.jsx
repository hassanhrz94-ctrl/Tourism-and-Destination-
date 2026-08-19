"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { Menu, X, LogOut } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "My Bookings", href: "/my-bookings" },
  { label: "Add Destination", href: "/add-destination" },
];

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
    setMobileOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-[#060B18]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        {/* Logo */}
        <Link
          href={"/"}
          className="font-display bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-lg font-bold tracking-tight text-transparent"
        >
          WanderLand
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative font-body text-sm text-[#C7CCE0] transition-colors duration-200 hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-gradient-to-r from-cyan-300 to-indigo-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop right side */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href={"/profile"}
            className="font-body text-sm text-[#C7CCE0] transition-colors hover:text-white"
          >
            Profile
          </Link>

          {user ? (
            <>
              <Avatar className="ring-2 ring-cyan-400/40 transition-shadow duration-200 hover:ring-cyan-300/80">
                <Avatar.Image
                  referrerPolicy="no-referrer"
                  alt={user.name}
                  src={user?.image}
                />
                <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <Button
                size="sm"
                onClick={handleSignOut}
                variant="danger"
                className="rounded-lg font-body font-medium transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_16px_rgba(244,63,94,0.4)]"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link
                href={"/login"}
                className="font-body text-sm text-[#C7CCE0] transition-colors hover:text-white"
              >
                Login
              </Link>
<Link href={"/signup"} onClick={() => setMobileOpen(false)}>
  <Button
    size="sm"
    className="rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-400 font-body font-medium text-[#060B18]"
  >
    Sign Up
  </Button>
</Link>
            </>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="text-[#EDF1FF] md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-white/10 md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2.5 font-body text-sm text-[#C7CCE0] transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={"/profile"}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2.5 font-body text-sm text-[#C7CCE0] transition-colors hover:bg-white/5 hover:text-white"
                >
                  Profile
                </Link>
              </li>

              <div className="mt-2 flex items-center gap-3 border-t border-white/10 px-3 pt-3">
                {user ? (
                  <>
                    <Avatar className="ring-2 ring-cyan-400/40">
                      <Avatar.Image
                        referrerPolicy="no-referrer"
                        alt={user.name}
                        src={user?.image}
                      />
                      <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                    </Avatar>
                    <Button
  size="sm"
  onClick={handleSignOut}
  variant="danger"
  className="rounded-lg font-body font-medium"
  startContent={<LogOut size={14} />}
>
  Logout
</Button>
                  </>
                ) : (
                  <>
                    <Link
                      href={"/login"}
                      onClick={() => setMobileOpen(false)}
                      className="font-body text-sm text-[#C7CCE0] hover:text-white"
                    >
                      Login
                    </Link>
                   <Link href={"/signup"}>
  <Button
    size="sm"
    className="rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-400 font-body font-medium text-[#060B18] transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_18px_rgba(34,211,238,0.45)]"
  >
    Sign Up
  </Button>
</Link>
                  </>
                )}
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;