"use client";

import { useState } from "react";

const footerColumns = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Careers", href: "#" },
      { label: "Locations", href: "#contact" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Equipment",
    links: [
      { label: "Construction", href: "#equipment" },
      { label: "Mining", href: "#equipment" },
      { label: "Road Equipment", href: "#equipment" },
      { label: "Forestry", href: "#equipment" },
      { label: "Material Handling", href: "#equipment" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Sales", href: "#services" },
      { label: "Service", href: "#services" },
      { label: "Parts", href: "#services" },
      { label: "Support", href: "#services" },
    ],
  },
];

function SocialIcon({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="w-8 h-8 flex items-center justify-center text-white/40 hover:text-[#F5C400] border border-white/10 hover:border-[#F5C400]/40 transition-colors duration-150 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#F5C400]"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer
      className="w-full bg-[#111111] border-t border-white/5"
      role="contentinfo"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[200px_1fr_1fr_1fr_280px] gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#"
              className="flex items-center gap-2.5 mb-5"
              aria-label="Tractor & Equipment Company"
            >
              <div
                className="w-9 h-9 bg-[#F5C400] flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M3 18L7 6H17L21 18H3Z" fill="#111111" />
                  <rect x="9" y="9" width="6" height="6" fill="#F5C400" />
                </svg>
              </div>
              <div className="leading-none">
                <span className="block text-[9px] font-700 tracking-widest text-white/40 uppercase">
                  CLP
                </span>
                <span className="block text-[13px] font-700 text-white">
                  Equipment Co.
                </span>
              </div>
            </a>
            <p className="text-[12.5px] text-white/40 leading-relaxed max-w-[180px]">
              Equipment, parts, service and support for demanding operations.
            </p>
          </div>

          {/* Nav columns */}
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-[10px] font-700 tracking-[0.18em] text-white/40 uppercase mb-4">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2.5" role="list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13px] text-white/60 hover:text-[#F5C400] transition-colors duration-150 focus:outline-none focus-visible:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter column */}
          <div>
            <h3 className="text-[10px] font-700 tracking-[0.18em] text-white/40 uppercase mb-4">
              Stay Updated
            </h3>
            <p className="text-[12.5px] text-white/50 leading-relaxed mb-4">
              Equipment news, promotions and industry updates.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="bg-white/5 border border-white/10 text-white text-[13px] px-3 py-2.5 placeholder-white/25 focus:outline-none focus:border-[#F5C400] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#F5C400] text-[#111111] text-[12px] font-700 tracking-wide px-4 py-2.5 hover:bg-[#E0B000] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C400] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
              >
                Subscribe
              </button>
            </form>

            {/* Socials */}
            <div className="flex gap-2 mt-6">
              <SocialIcon label="Facebook">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="Twitter / X">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="LinkedIn">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </SocialIcon>
              <SocialIcon label="YouTube">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12z" />
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-12 pt-6 border-t border-white/5">
          <p className="text-[11px] text-white/25">
            &copy; {new Date().getFullYear()} Tractor &amp; Equipment Company.
            All rights reserved.
          </p>
          <div className="flex gap-5">
            <a
              href="#"
              className="text-[11px] text-white/25 hover:text-white/50 transition-colors focus:outline-none focus-visible:underline"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[11px] text-white/25 hover:text-white/50 transition-colors focus:outline-none focus-visible:underline"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
