"use client";

import Link from "next/link";
import { useState } from "react";

const equipmentCompanies = [
  {
    name: "Komatsu",
    category: "Construction & Mining",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Komatsu_excavator.jpg",
    description:
      "Excavators, loaders, dozers and mining equipment built for demanding construction and earthmoving applications.",
  },
  {
    name: "Sennebogen",
    category: "Material Handling",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sennebogen%20Material%20Handler.jpg",
    description:
      "Material handling machines designed for demanding recycling, scrap, timber and industrial applications.",
  },
  {
    name: "Wirtgen",
    category: "Road Construction",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Wirtgen_W210i_Milling_Machine.webm/960px--Wirtgen_W210i_Milling_Machine.webm.jpg",
    description:
      "Specialized road construction equipment for milling, recycling and pavement rehabilitation.",
  },
  {
    name: "Vögele",
    category: "Asphalt Pavers",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/V%C3%B6gele_Super_1303-3i_paver.jpg",
    description:
      "Road pavers engineered for precise, efficient asphalt placement across a wide range of applications.",
  },
  {
    name: "HAMM",
    category: "Compaction",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Hamm_Roller.jpg",
    description:
      "Compaction equipment for road construction, earthwork and demanding paving environments.",
  },
  {
    name: "KLEEMANN",
    category: "Crushing & Screening",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Kleemann_MR_130_Z_EVO_mobile_impact_crusher.jpg",
    description:
      "Mobile crushing and processing equipment for demolition, recycling and aggregate production.",
  },
  {
    name: "Fecon",
    category: "Forestry",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Machinery%20in%20Timber%20Management%20-%20NKRD%202017%20%2828103058049%29.jpg",
    description:
      "Forestry mulching and vegetation management equipment designed for demanding land-clearing applications.",
  },
  {
    name: "Gradall",
    category: "Excavation",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/FDOT_Gradall_Excavator_on_FL_44-3.jpg",
    description:
      "Versatile excavators designed for mobility, reach and specialized excavation applications.",
  },
  {
    name: "Sandvik",
    category: "Drilling & Mining",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sandvik_DC125R_drill_rig.jpg",
    description:
      "Drilling equipment designed to deliver precision and dependable performance in demanding ground conditions.",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Equipment", href: "/equipment" },
  { label: "Parts", href: "/parts" },
  { label: "Services", href: "/service" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];

function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 7H12M7.5 2.5L12 7L7.5 11.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="square"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 5H17M3 10H17M3 15H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 4L16 16M16 4L4 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 1C5.79 1 4 2.79 4 5c0 3.25 4 10 4 10s4-6.75 4-10c0-2.21-1.79-4-4-4zm0 5.5A1.5 1.5 0 1 1 8 3a1.5 1.5 0 0 1 0 3.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function EquipmentPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#111111] text-[#111111]">
      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white">
        <div className="mx-auto flex h-[72px] max-w-[1500px] items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            aria-label="CLP Equipment Limited home"
            className="flex shrink-0 items-center"
          >
            <div className="flex h-[46px] w-[46px] items-center justify-center bg-[#111111]">
              <span className="text-[11px] font-800 tracking-[-0.04em] text-[#F5C400]">
                CLP
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
            {navLinks.map((link) => {
              const active = link.href === "/equipment";

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative py-2 text-[10px] font-700 uppercase tracking-[0.12em] transition-colors ${
                    active
                      ? "text-[#111111]"
                      : "text-[#777777] hover:text-[#111111]"
                  }`}
                >
                  {link.label}

                  {active && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#F5C400]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden items-center gap-2 bg-[#F5C400] px-5 py-3 text-[10px] font-800 uppercase tracking-[0.08em] text-[#111111] transition-colors hover:bg-[#111111] hover:text-white lg:inline-flex"
          >
            Get In Touch
            <ArrowRight />
          </Link>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center text-[#111111] lg:hidden"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="border-t border-gray-100 bg-white lg:hidden">
            <nav className="mx-auto max-w-[1500px] px-4 py-3 sm:px-6">
              {navLinks.map((link) => {
                const active = link.href === "/equipment";

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between border-b border-gray-100 py-4 text-[11px] font-700 uppercase tracking-[0.1em] last:border-b-0 ${
                      active ? "text-[#111111]" : "text-[#666666]"
                    }`}
                  >
                    <span>{link.label}</span>

                    {active && <span className="h-2 w-2 bg-[#F5C400]" />}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 bg-[#F5C400] px-5 py-3 text-[10px] font-800 uppercase tracking-[0.08em] text-[#111111]"
              >
                Get In Touch
                <ArrowRight />
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#111111]">
        <div className="mx-auto grid min-h-[430px] max-w-[1500px] lg:grid-cols-[0.9fr_1.1fr]">
          {/* Hero copy */}
          <div className="relative flex items-center px-5 py-16 sm:px-8 sm:py-20 lg:px-12 xl:px-20">
            <div className="relative z-10 max-w-[620px]">
              <p className="mb-5 text-[10px] font-800 uppercase tracking-[0.25em] text-[#F5C400]">
                Equipment Division
              </p>

              <h1 className="text-[42px] font-900 uppercase leading-[0.92] tracking-[-0.04em] text-white sm:text-[56px] lg:text-[68px]">
                Equipment
                <span className="block text-[#F5C400]">Built To Work.</span>
              </h1>

              <p className="mt-6 max-w-[500px] text-[14px] leading-7 text-white/60 sm:text-[15px]">
                Explore a range of construction, road building, material
                handling, forestry, drilling and mining equipment from
                established manufacturers.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#equipment"
                  className="inline-flex items-center gap-2 bg-[#F5C400] px-5 py-3 text-[10px] font-800 uppercase tracking-[0.08em] text-[#111111] transition-colors hover:bg-white"
                >
                  Browse Equipment
                  <ArrowRight />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-[10px] font-800 uppercase tracking-[0.08em] text-white transition-colors hover:border-[#F5C400] hover:text-[#F5C400]"
                >
                  Talk To Our Team
                </Link>
              </div>
            </div>

            {/* Decorative yellow block */}
            <div className="absolute bottom-0 left-0 h-1 w-28 bg-[#F5C400]" />
          </div>

          {/* Hero image */}
          <div className="relative min-h-[300px] overflow-hidden sm:min-h-[380px] lg:min-h-full">
            <img
              src="https://commons.wikimedia.org/wiki/Special:FilePath/Komatsu_excavator.jpg"
              alt="Komatsu excavator working on a construction site"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-transparent to-transparent lg:from-[#111111]/70 lg:via-[#111111]/10" />

            <div className="absolute bottom-5 right-5 border border-white/20 bg-black/60 px-4 py-3 backdrop-blur-sm sm:bottom-8 sm:right-8">
              <p className="text-[9px] font-800 uppercase tracking-[0.16em] text-[#F5C400]">
                Heavy Equipment
              </p>
              <p className="mt-1 text-[11px] text-white">
                Ready for demanding work
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="text-[10px] font-800 uppercase tracking-[0.2em] text-[#F5C400]">
              Our Equipment
            </p>

            <h2 className="mt-3 text-[30px] font-900 uppercase leading-[1] tracking-[-0.03em] text-[#111111] sm:text-[38px]">
              Machines For
              <br />
              Serious Work.
            </h2>
          </div>

          <div className="max-w-[650px] lg:justify-self-end">
            <p className="text-[14px] leading-7 text-[#666666]">
              From excavation and material handling to road construction,
              crushing, forestry and drilling, our equipment lineup is built
              around the work our customers do every day.
            </p>

            <div className="mt-5 flex items-center gap-3 text-[10px] font-800 uppercase tracking-[0.12em] text-[#111111]">
              <span className="h-[2px] w-8 bg-[#F5C400]" />
              Equipment &amp; Solutions
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EQUIPMENT GRID
      ====================================================== */}
      <section
        id="equipment"
        className="bg-[#F5C400] px-4 py-5 sm:px-6 sm:py-7 lg:px-8"
      >
        <div className="mx-auto grid max-w-[1280px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {equipmentCompanies.map((company, index) => (
            <article
              key={company.name}
              className="group flex min-h-[420px] flex-col overflow-hidden bg-white transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-[235px] overflow-hidden bg-[#EAEAEA] sm:h-[250px]">
                <img
                  src={company.image}
                  alt={`${company.name} ${company.category} equipment`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading={index < 3 ? "eager" : "lazy"}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />

                <div className="absolute bottom-4 left-4">
                  <span className="inline-block bg-[#F5C400] px-2.5 py-1 text-[8px] font-800 uppercase tracking-[0.12em] text-[#111111]">
                    {company.category}
                  </span>
                </div>

                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center bg-white/95 text-[11px] font-900 text-[#111111]">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[20px] font-900 uppercase tracking-[-0.02em] text-[#111111]">
                    {company.name}
                  </h3>

                  <div className="mt-1 h-2 w-2 shrink-0 bg-[#F5C400]" />
                </div>

                <p className="mt-3 text-[12px] leading-6 text-[#666666]">
                  {company.description}
                </p>

                <div className="mt-auto pt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[10px] font-800 uppercase tracking-[0.1em] text-[#111111] transition-colors hover:text-[#F5C400]"
                  >
                    Enquire About Equipment
                    <ArrowRight />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          EQUIPMENT CTA
      ====================================================== */}
      <section className="bg-[#111111] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-[10px] font-800 uppercase tracking-[0.2em] text-[#F5C400]">
              Need Help Choosing?
            </p>

            <h2 className="mt-3 max-w-[700px] text-[30px] font-900 uppercase leading-[1] tracking-[-0.03em] text-white sm:text-[42px]">
              Let&apos;s Find The Right Machine For The Job.
            </h2>

            <p className="mt-5 max-w-[600px] text-[13px] leading-6 text-white/55">
              Tell us what you&apos;re working on and our team can help you
              identify the equipment and support options that fit your
              application.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-3 bg-[#F5C400] px-6 py-4 text-[10px] font-900 uppercase tracking-[0.1em] text-[#111111] transition-colors hover:bg-white"
          >
            Contact CLP Equipment
            <ArrowRight />
          </Link>
        </div>
      </section>

      {/* =====================================================
          CONTACT SECTION
          Kept structurally consistent with supplied code
      ====================================================== */}
      <section className="bg-black px-5 py-8 sm:py-10">
        <div className="mx-auto max-w-[1080px]">
          <div className="ml-auto w-full max-w-[530px] bg-white p-5 sm:p-7">
            <div className="mb-5">
              <p className="text-[9px] font-700 uppercase tracking-[0.16em] text-yellow-500">
                Get In Touch
              </p>

              <h2 className="mt-1 text-[16px] font-medium text-slate-900">
                Contact Us
              </h2>
            </div>

            <form className="mt-5" action="#" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="h-10 border border-slate-700 bg-white px-3 text-[9px] italic outline-none placeholder:text-slate-500 focus:border-yellow-500"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="h-10 border border-slate-700 bg-white px-3 text-[9px] italic outline-none placeholder:text-slate-500 focus:border-yellow-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="h-10 border border-slate-700 bg-white px-3 text-[9px] italic outline-none placeholder:text-slate-500 focus:border-yellow-500"
                />

                <select
                  name="location"
                  defaultValue=""
                  className="h-10 border border-slate-700 bg-white px-3 text-[9px] italic text-slate-500 outline-none focus:border-yellow-500"
                >
                  <option value="" disabled>
                    Choose Location
                  </option>
                  <option value="kingston-tn">Kingston, TN</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Type your message here..."
                rows={5}
                className="w-full resize-none border border-slate-700 bg-white p-3 text-[9px] italic outline-none placeholder:text-slate-500 focus:border-yellow-500"
              />

              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className="min-w-[88px] bg-slate-700 px-5 py-2.5 text-[9px] text-white transition hover:bg-slate-900"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
          Based on the footer from the supplied equipment page
      ====================================================== */}
      <footer className="bg-[#171717] text-yellow-400">
        <div className="mx-auto grid max-w-[1080px] gap-8 px-6 py-7 sm:grid-cols-3">
          {/* Products */}
          <div>
            <h3 className="text-[10px] font-medium">Products</h3>

            <div className="mt-3 space-y-2 text-[9px]">
              <Link
                href="/products"
                className="block transition hover:text-white"
              >
                Financing
              </Link>

              <Link
                href="/rental"
                className="block transition hover:text-white"
              >
                Rental
              </Link>

              <Link href="/parts" className="block transition hover:text-white">
                Request A Quote
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-[10px] font-medium">Support</h3>

            <div className="mt-3 space-y-2 text-[9px]">
              <Link
                href="/contact"
                className="block transition hover:text-white"
              >
                Contact Us
              </Link>

              <Link
                href="/locations"
                className="block transition hover:text-white"
              >
                Locations
              </Link>

              <Link
                href="/careers"
                className="block transition hover:text-white"
              >
                Careers
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[10px] font-medium">Email Address</h3>

            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Email address"
                className="h-9 min-w-0 flex-1 border border-yellow-400 bg-transparent px-3 text-[9px] text-white outline-none placeholder:text-gray-400"
              />

              <button
                type="submit"
                className="h-9 border border-l-0 border-yellow-400 px-4 text-[9px] font-medium text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 bg-[#292929]">
          <div className="mx-auto flex max-w-[1080px] justify-end gap-4 px-6 py-2 text-[8px] text-yellow-400">
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>

            <span>|</span>

            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
