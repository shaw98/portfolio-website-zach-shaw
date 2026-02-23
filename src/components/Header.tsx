"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${scrolled
          ? "bg-warm-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
        }
      `}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 md:px-10 h-16 md:h-18">
        {/* Logo / name */}
        <a
          href="#hero"
          className="font-heading font-800 text-xl text-slate-900 tracking-tight hover:text-coral transition-colors duration-200"
        >
          zach shaw
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-sm font-body font-500 text-slate-500 hover:text-slate-900 hover:bg-slate-900/5 transition-all duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-coral px-5 py-2 text-sm font-heading font-700 text-white
                transition-all duration-300 hover:bg-coral-hover hover:scale-[1.03] active:scale-[0.98]
                shadow-md shadow-coral/20 hover:shadow-lg hover:shadow-coral/25"
            >
              Let&apos;s connect
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 -mr-2 rounded-lg text-slate-700 hover:bg-slate-900/5 transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`
          md:hidden fixed inset-0 top-16 z-40
          transition-all duration-300
          ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
        `}
      >
        <div className="absolute inset-0 bg-slate-900/20" onClick={() => setMobileOpen(false)} />
        <div
          className={`
            relative bg-warm-white border-t border-slate-900/5
            px-6 pt-4 pb-8 space-y-1
            transition-transform duration-300
            ${mobileOpen ? "translate-y-0" : "-translate-y-4"}
          `}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-body font-500 text-slate-700 hover:text-coral hover:bg-coral-light/50 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center rounded-full bg-coral px-6 py-3 font-heading font-700 text-white
                shadow-md shadow-coral/20 transition-all duration-300 hover:bg-coral-hover"
            >
              Let&apos;s connect
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
