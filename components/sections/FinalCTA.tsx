"use client";

export default function FinalCTA() {
  return (
    <section
      className="w-full bg-[#1A1A1A] py-16 sm:py-20 relative overflow-hidden"
      aria-label="Request a quote"
    >
      {/* Subtle yellow accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] bg-[#F5C400]"
        aria-hidden="true"
      />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-xl">
            <p className="text-[10px] font-700 tracking-[0.2em] text-[#F5C400] uppercase mb-4">
              Get Started
            </p>
            <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] font-800 leading-[1.1] text-white tracking-tight mb-4">
              Ready to Get the Right
              <br className="hidden sm:block" />
              Equipment for the Job?
            </h2>
            <p className="text-[14px] text-white/60 leading-relaxed max-w-md">
              Talk to our team about equipment, parts, service or support for
              your operation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#F5C400] text-[#111111] text-[14px] font-700 tracking-wide px-7 py-3.5 hover:bg-[#E0B000] transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C400] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A]"
            >
              Request a Quote
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white text-[14px] font-600 tracking-wide px-7 py-3.5 hover:border-white/60 hover:bg-white/5 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
