"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Equipment", href: "/equipment" },
  { label: "Parts", href: "#parts" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${scrolled ? "shadow-md" : "border-b border-gray-100"}`}
      role="banner"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[68px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 flex-shrink-0"
            aria-label="Tractor & Equipment Company — Home"
          >
            <div
              className="flex items-center justify-center w-10 h-10 bg-[#F5C400]"
              aria-hidden="true"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 18L7 6H17L21 18H3Z" fill="#111111" />
                <rect x="9" y="9" width="6" height="6" fill="#F5C400" />
              </svg>
            </div>
            <div className="leading-none">
              <span className="block text-[11px] font-700 tracking-widest text-brand-gray uppercase">
                CLP
              </span>
              <span className="block text-[15px] font-800 tracking-wide text-brand-dark">
                Equipment Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-7"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[13.5px] font-600 text-[#333] hover:text-[#F5C400] transition-colors duration-150 tracking-wide focus:outline-none focus-visible:underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#F5C400] text-[#111111] text-[13px] font-700 tracking-wide px-5 py-2.5 hover:bg-[#E0B000] transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C400] focus-visible:ring-offset-2"
            >
              Request a Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-11 h-11 text-[#111111] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C400]"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">
              {mobileOpen ? "Close menu" : "Open menu"}
            </span>
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path
                  d="M1 1L21 21M21 1L1 21"
                  stroke="#111111"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            ) : (
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                <path
                  d="M0 1H22M0 8H22M0 15H22"
                  stroke="#111111"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Panel */}
      <div
        id="mobile-nav"
        className={`lg:hidden bg-white border-t border-gray-100 transition-all duration-200 overflow-hidden ${mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
        aria-hidden={!mobileOpen}
      >
        <nav
          className="flex flex-col px-4 py-4 gap-1"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block py-3 px-2 text-[15px] font-600 text-[#111111] border-b border-gray-50 hover:text-[#F5C400] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 pb-2">
            <a
              href="#contact"
              className="block text-center bg-[#F5C400] text-[#111111] text-[14px] font-700 tracking-wide px-5 py-3.5 hover:bg-[#E0B000] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Request a Quote
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
