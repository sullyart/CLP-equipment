"use client";

export default function Hero() {
  return (
    <section
      className="
    relative
    mt-[64px]
    w-full
    overflow-hidden
    bg-[#111111]
    lg:mt-[68px]
  "
      style={{ height: "clamp(520px, 72vh, 860px)" }}
      aria-label="Hero"
    >
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1575281923032-f40d94ef6160?w=1920&h=900&fit=crop&auto=format"
        alt="Excavator loading soil into a dump truck on an active construction site"
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
        fetchPriority="high"
      />

      {/* Dark gradient overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/80
          via-black/50
          to-black/10
        "
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex h-full items-end pb-10 sm:pb-16 lg:pb-10">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            {/* Eyebrow */}
            <p className="mb-4 inline-flex items-center gap-2 sm:mb-5">
              <span
                className="block h-px w-5 bg-[#F5C400]"
                aria-hidden="true"
              />

              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#F5C400]">
                Tractor &amp; Equipment Company
              </span>
            </p>

            {/* Heading */}
            <h1 className="mb-4 text-[32px] font-extrabold leading-[1.08] tracking-tight text-white sm:mb-5 sm:text-[42px] lg:text-[54px]">
              Heavy Equipment,
              <br />
              Parts &amp; Support
              <br />
              <span className="text-[#F5C400]">You Can Rely On</span>
            </h1>

            {/* Description */}
            <p className="mb-7 max-w-md text-[15px] leading-relaxed text-white/75 sm:mb-8 sm:text-[16px]">
              Reliable heavy equipment, parts, service and support for
              construction, infrastructure and industrial operations.
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="#contact"
                className="
                  inline-flex
                  min-h-[48px]
                  items-center
                  justify-center
                  gap-2
                  bg-[#F5C400]
                  px-6
                  py-3.5
                  text-[14px]
                  font-bold
                  tracking-wide
                  text-[#111111]
                  transition-colors
                  duration-150
                  hover:bg-[#E0B000]
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#F5C400]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-black
                "
              >
                Request a Quote
              </a>

              <a
                href="#equipment"
                className="
                  inline-flex
                  min-h-[48px]
                  items-center
                  justify-center
                  gap-2
                  border
                  border-white/50
                  px-6
                  py-3.5
                  text-[14px]
                  font-semibold
                  tracking-wide
                  text-white
                  transition-colors
                  duration-150
                  hover:border-white
                  hover:bg-white/10
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-white
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-black
                "
              >
                Explore Equipment
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 7H12M8 3L12 7L8 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>
              </a>
            </div>

            {/* Trust bar */}
            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-white/15 pt-5 sm:mt-8 sm:pt-6">
              {["Equipment", "Parts", "Service", "Support"].map((item, i) => (
                <span
                  key={item}
                  className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60 sm:text-[12px] sm:tracking-widest"
                >
                  {i > 0 && (
                    <span className="h-3 w-px bg-white/25" aria-hidden="true" />
                  )}

                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
