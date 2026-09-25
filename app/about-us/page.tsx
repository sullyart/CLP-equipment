"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  ShieldCheck,
  Wrench,
  Truck,
  Award,
  MapPin,
  Phone,
  History,
} from "lucide-react";

const stats = [
  {
    value: "25+",
    label: "Years of Experience",
  },
  {
    value: "40+",
    label: "Equipment Models",
  },
  {
    value: "12",
    label: "Industries Served",
  },
  {
    value: "24/7",
    label: "Customer Support",
  },
  {
    value: "100%",
    label: "Commitment to Service",
  },
];

const capabilities = [
  {
    icon: Truck,
    title: "Equipment Sales",
    description:
      "Reliable construction, mining, road, forestry and material-handling equipment selected for demanding working environments.",
  },
  {
    icon: Wrench,
    title: "Parts & Service",
    description:
      "Professional maintenance, genuine replacement parts and technical support to keep your equipment working when you need it.",
  },
  {
    icon: ShieldCheck,
    title: "Equipment Solutions",
    description:
      "Practical equipment recommendations built around your application, operating conditions and long-term requirements.",
  },
];

const values = [
  {
    number: "01",
    title: "Reliability",
    description:
      "We believe equipment should work as hard as the people operating it. Every solution is selected with performance and dependability in mind.",
  },
  {
    number: "02",
    title: "Expertise",
    description:
      "Our knowledge of heavy equipment and demanding industries helps customers make informed decisions with confidence.",
  },
  {
    number: "03",
    title: "Service",
    description:
      "Our relationship does not end when equipment leaves the yard. We remain available with parts, service and practical support.",
  },
  {
    number: "04",
    title: "Integrity",
    description:
      "Clear communication, honest recommendations and dependable follow-through are at the foundation of how we work.",
  },
];

const industries = [
  "Construction",
  "Mining",
  "Road Building",
  "Forestry",
  "Agriculture",
  "Material Handling",
];

const commitments = [
  "Practical equipment recommendations",
  "Reliable machines for demanding applications",
  "Parts and technical support",
  "Long-term customer relationships",
];

export default function AboutPage() {
  return (
    <main className="w-full overflow-hidden bg-white text-[#111111]">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative min-h-[620px] bg-[#111111] pt-[68px] lg:min-h-[720px]">
        <img
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1800&h=1100&fit=crop&auto=format"
          alt="Heavy construction equipment working on a large job site"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-55"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

        <div className="relative mx-auto flex min-h-[552px] max-w-screen-xl items-end px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="mb-8 flex items-center gap-2 text-[10px] font-700 uppercase tracking-[0.18em] text-white/50">
              <Link href="/" className="transition-colors hover:text-[#F5C400]">
                Home
              </Link>

              <ChevronRight size={12} />

              <span className="text-[#F5C400]">About Us</span>
            </div>

            <p className="mb-4 text-[10px] font-700 uppercase tracking-[0.25em] text-[#F5C400]">
              About Our Company
            </p>

            <h1 className="max-w-3xl text-[42px] font-800 leading-[0.98] tracking-[-0.035em] text-white sm:text-[56px] lg:text-[72px]">
              Built Around the
              <br />
              Work That Matters.
            </h1>

            <p className="mt-6 max-w-xl text-[14px] leading-7 text-white/70 sm:text-[16px]">
              We provide dependable heavy equipment and practical equipment
              solutions for the people and businesses moving industries forward.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/equipment"
                className="inline-flex items-center justify-center gap-2 bg-[#F5C400] px-5 py-3.5 text-[11px] font-700 uppercase tracking-[0.1em] text-[#111111] transition-all duration-200 hover:gap-3 hover:bg-[#E0B000]"
              >
                Explore Equipment
                <ArrowRight size={14} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/25 px-5 py-3.5 text-[11px] font-700 uppercase tracking-[0.1em] text-white transition-colors duration-200 hover:bg-white/10"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-[#F5C400]" />
      </section>

      {/* =========================================================
          STATS
      ========================================================== */}
      <section className="border-b border-black/10 bg-[#F5F5F5]">
        <div className="mx-auto grid max-w-screen-xl grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-5 py-7 sm:px-6 sm:py-9 ${
                index !== stats.length - 1 ? "border-r border-black/10" : ""
              }`}
            >
              <p className="text-[29px] font-800 leading-none tracking-tight text-[#111111] sm:text-[36px]">
                {stat.value}
              </p>

              <p className="mt-2 text-[9px] font-700 uppercase tracking-[0.15em] text-[#6B7280] sm:text-[10px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          COMPANY STORY
      ========================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EAEAEA]">
                <img
                  src="https://images.unsplash.com/photo-1579412690850-bd41cd0af397?w=1100&h=850&fit=crop&auto=format"
                  alt="Construction equipment operating at a work site"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-5 -right-3 bg-[#F5C400] px-6 py-5 shadow-xl sm:-right-5 sm:px-8 sm:py-6">
                <p className="text-[30px] font-800 leading-none text-[#111111] sm:text-[36px]">
                  25+
                </p>

                <p className="mt-1 text-[9px] font-700 uppercase tracking-[0.16em] text-[#111111]/60">
                  Years of Experience
                </p>
              </div>
            </div>

            {/* Copy */}
            <div>
              <p className="mb-3 text-[10px] font-700 uppercase tracking-[0.22em] text-[#F5C400]">
                Who We Are
              </p>

              <h2 className="max-w-xl text-[31px] font-800 leading-[1.08] tracking-tight text-[#111111] sm:text-[40px]">
                Equipment expertise you can put to work.
              </h2>

              <div className="mt-7 space-y-5 text-[14px] leading-7 text-[#6B7280]">
                <p>
                  We are an equipment company focused on helping contractors,
                  operators and businesses find the machines and support they
                  need to get demanding work done.
                </p>

                <p>
                  From construction and mining to road building, forestry and
                  material handling, we understand that the right equipment is
                  more than a machine. It is an investment in productivity,
                  safety and the ability to keep a project moving.
                </p>

                <p>
                  That is why we combine dependable equipment with practical
                  guidance, responsive service and long-term support.
                </p>
              </div>

              <Link
                href="/equipment"
                className="mt-8 inline-flex items-center gap-2 bg-[#111111] px-5 py-3.5 text-[11px] font-700 uppercase tracking-[0.1em] text-white transition-all duration-200 hover:gap-3 hover:bg-[#292929]"
              >
                Explore Our Equipment
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LEADERSHIP / FOUNDING FAMILY
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#111111] py-16 sm:py-20 lg:py-28">
        {/* Decorative yellow block */}
        <div
          className="absolute right-0 top-0 h-48 w-48 bg-[#F5C400] opacity-10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          <div className="mb-10 max-w-3xl lg:mb-14">
            <p className="mb-3 text-[10px] font-700 uppercase tracking-[0.22em] text-[#F5C400]">
              Our Leadership
            </p>

            <h2 className="text-[32px] font-800 leading-[1.05] tracking-tight text-white sm:text-[44px]">
              Built on family.
              <br />
              Driven by experience.
            </h2>

            <p className="mt-5 max-w-2xl text-[14px] leading-7 text-white/50 sm:text-[15px]">
              CLP Equipment carries forward a family-founded tradition of hard
              work, dependable service and a commitment to helping customers get
              the job done.
            </p>
          </div>

          {/* =====================================================
              FOUNDER
          ====================================================== */}
          <div className="mb-6 grid overflow-hidden bg-[#181818] lg:grid-cols-[0.9fr_1.1fr]">
            {/* Founder Image / Legacy Panel */}
            {/* Founder Image */}
            <div className="relative min-h-[360px] sm:min-h-[450px] lg:min-h-[520px]">
              <img
                src="https://images.pexels.com/photos/29598497/pexels-photo-29598497.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Mature business executive representing the company's founding legacy"
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="lazy"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

              {/* Yellow accent */}
              <div className="absolute left-0 top-0 h-1 w-24 bg-[#F5C400]" />

              {/* Founder label */}
              <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                <p className="text-[10px] font-700 uppercase tracking-[0.2em] text-[#F5C400]">
                  Company Founder
                </p>

                <p className="mt-1 text-[13px] font-600 text-white/75">
                  The foundation of the Pavlik family business.
                </p>
              </div>
            </div>

            {/* Founder Content */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14 xl:p-16">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center bg-[#F5C400] text-[#111111]">
                  <Award size={19} strokeWidth={2} />
                </div>

                <div>
                  <p className="text-[9px] font-700 uppercase tracking-[0.18em] text-white/40">
                    Company History
                  </p>

                  <p className="mt-1 text-[11px] font-700 uppercase tracking-[0.1em] text-[#F5C400]">
                    Founder
                  </p>
                </div>
              </div>

              <h3 className="text-[36px] font-800 leading-none tracking-tight text-white sm:text-[48px]">
                Mr. John Pavlik
              </h3>

              <p className="mt-2 text-[13px] font-600 uppercase tracking-[0.14em] text-white/40">
                Founder &amp; Family Legacy
              </p>

              <div className="my-8 h-px w-full bg-white/10" />

              <p className="text-[18px] font-600 leading-[1.55] text-white/90 sm:text-[21px]">
                “The company was built on hard work, dependable equipment and
                doing right by the people we serve.”
              </p>

              <p className="mt-6 max-w-xl text-[13.5px] leading-7 text-white/50">
                The Pavlik family legacy is at the heart of CLP Equipment.
                Founded with a focus on dependable equipment and strong customer
                relationships, that foundation continues to shape the way the
                company serves its customers today.
              </p>

              {/* Founder details */}
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 border border-white/10 bg-black/10 px-4 py-3.5">
                  <History size={16} className="shrink-0 text-[#F5C400]" />

                  <div>
                    <p className="text-[8px] font-700 uppercase tracking-[0.15em] text-white/35">
                      Legacy
                    </p>

                    <p className="mt-0.5 text-[11px] font-600 text-white/80">
                      Family Founded
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 border border-white/10 bg-black/10 px-4 py-3.5">
                  <Award size={16} className="shrink-0 text-[#F5C400]" />

                  <div>
                    <p className="text-[8px] font-700 uppercase tracking-[0.15em] text-white/35">
                      Continued By
                    </p>

                    <p className="mt-0.5 text-[11px] font-600 text-white/80">
                      The Next Generation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              FAMILY CONNECTION
          ====================================================== */}
          <div className="mb-6 flex flex-col items-center justify-center gap-3 py-4 sm:flex-row sm:gap-5">
            <div className="h-px w-12 bg-white/10 sm:w-20" />

            <div className="flex items-center gap-2 text-center">
              <span className="h-1.5 w-1.5 bg-[#F5C400]" />

              <span className="text-[9px] font-700 uppercase tracking-[0.2em] text-white/35">
                A Family Business Built Across Generations
              </span>

              <span className="h-1.5 w-1.5 bg-[#F5C400]" />
            </div>

            <div className="h-px w-12 bg-white/10 sm:w-20" />
          </div>

          {/* =====================================================
              CEO
          ====================================================== */}
          <div className="grid overflow-hidden bg-[#181818] lg:grid-cols-[0.9fr_1.1fr]">
            {/* CEO Image */}
            <div className="relative min-h-[430px] sm:min-h-[520px] lg:min-h-[600px]">
              <img
                src="/images/carol.jpeg"
                alt="Portrait of Carole L Pavlik, Chief Executive Officer"
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="lazy"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* Image label */}
              <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                <p className="text-[10px] font-700 uppercase tracking-[0.2em] text-[#F5C400]">
                  Next Generation
                </p>

                <p className="mt-1 text-[13px] font-600 text-white/70">
                  Continuing the Pavlik family legacy.
                </p>
              </div>
            </div>

            {/* CEO Content */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14 xl:p-16">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center bg-[#F5C400] text-[#111111]">
                  <Award size={19} strokeWidth={2} />
                </div>

                <div>
                  <p className="text-[9px] font-700 uppercase tracking-[0.18em] text-white/40">
                    Executive Leadership
                  </p>

                  <p className="mt-1 text-[11px] font-700 uppercase tracking-[0.1em] text-[#F5C400]">
                    Chief Executive Officer
                  </p>
                </div>
              </div>

              <h3 className="text-[36px] font-800 leading-none tracking-tight text-white sm:text-[48px]">
                Carole L Pavlik
              </h3>

              <p className="mt-2 text-[13px] font-600 uppercase tracking-[0.14em] text-white/40">
                Chief Executive Officer
              </p>

              <div className="my-8 h-px w-full bg-white/10" />

              <p className="text-[18px] font-600 leading-[1.55] text-white/90 sm:text-[21px]">
                “Our business is built around one simple idea: when our
                customers succeed on the job, we succeed with them.”
              </p>

              <p className="mt-6 max-w-xl text-[13.5px] leading-7 text-white/50">
                As the next generation of the Pavlik family business, Carole L
                Pavlik continues the company&apos;s commitment to dependable
                equipment, strong customer relationships and long-term service.
              </p>

              {/* CEO details */}
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 border border-white/10 bg-black/10 px-4 py-3.5">
                  <MapPin size={16} className="shrink-0 text-[#F5C400]" />

                  <div>
                    <p className="text-[8px] font-700 uppercase tracking-[0.15em] text-white/35">
                      Based In
                    </p>

                    <p className="mt-0.5 text-[11px] font-600 text-white/80">
                      Company Headquarters
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 border border-white/10 bg-black/10 px-4 py-3.5">
                  <Phone size={16} className="shrink-0 text-[#F5C400]" />

                  <div>
                    <p className="text-[8px] font-700 uppercase tracking-[0.15em] text-white/35">
                      Leadership
                    </p>

                    <p className="mt-0.5 text-[11px] font-600 text-white/80">
                      Customer First
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex w-fit items-center gap-2 border-b border-[#F5C400] pb-1.5 text-[10px] font-700 uppercase tracking-[0.15em] text-[#F5C400] transition-all duration-200 hover:gap-3"
              >
                Connect With Our Team
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE DO
      ========================================================== */}
      <section className="bg-[#111111] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-5 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-3 text-[10px] font-700 uppercase tracking-[0.22em] text-[#F5C400]">
                What We Do
              </p>

              <h2 className="max-w-xl text-[30px] font-800 leading-[1.08] tracking-tight text-white sm:text-[40px]">
                More than equipment.
                <br />A complete solution.
              </h2>
            </div>

            <p className="max-w-sm text-[13.5px] leading-relaxed text-white/50 lg:pb-1 lg:text-right">
              From selecting the right machine to keeping it productive, we're
              here throughout the equipment lifecycle.
            </p>
          </div>

          <div className="grid gap-px bg-white/10 md:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group bg-[#111111] p-7 transition-colors duration-300 hover:bg-[#181818] sm:p-8 lg:p-10"
                >
                  <div className="mb-10 flex h-11 w-11 items-center justify-center bg-[#F5C400] text-[#111111]">
                    <Icon size={19} strokeWidth={2} />
                  </div>

                  <h3 className="text-[20px] font-800 text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-[13px] leading-6 text-white/50">
                    {item.description}
                  </p>

                  <div className="mt-8 h-px w-8 bg-[#F5C400] transition-all duration-300 group-hover:w-14" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          MISSION
      ========================================================== */}
      <section className="bg-[#F5F5F5] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="mb-3 text-[10px] font-700 uppercase tracking-[0.22em] text-[#F5C400]">
                Our Mission
              </p>

              <h2 className="text-[31px] font-800 leading-[1.08] tracking-tight text-[#111111] sm:text-[42px]">
                Keep the work moving.
              </h2>

              <div className="mt-7 h-1 w-14 bg-[#F5C400]" />
            </div>

            <div>
              <p className="text-[20px] font-700 leading-[1.45] tracking-tight text-[#111111] sm:text-[25px]">
                To provide dependable equipment, knowledgeable support and
                practical solutions that help our customers work more
                efficiently and confidently.
              </p>

              <p className="mt-6 max-w-2xl text-[14px] leading-7 text-[#6B7280]">
                We measure our work by what happens on the job site. When the
                right equipment is available, properly supported and ready to
                perform, projects move forward. Our role is to help make that
                possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          VALUES
      ========================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl lg:mb-14">
            <p className="mb-3 text-[10px] font-700 uppercase tracking-[0.22em] text-[#F5C400]">
              What Guides Us
            </p>

            <h2 className="text-[31px] font-800 leading-[1.08] tracking-tight text-[#111111] sm:text-[42px]">
              The way we work matters.
            </h2>
          </div>

          <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.number}
                className="border-b border-r border-black/10 p-6 sm:p-8 lg:p-10"
              >
                <div className="mb-7 flex items-center justify-between">
                  <span className="text-[11px] font-700 tracking-[0.15em] text-[#F5C400]">
                    {value.number}
                  </span>

                  <div className="h-px w-10 bg-black/10" />
                </div>

                <h3 className="text-[21px] font-800 text-[#111111]">
                  {value.title}
                </h3>

                <p className="mt-3 max-w-md text-[13px] leading-6 text-[#6B7280]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          INDUSTRIES
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#111111] py-16 sm:py-20 lg:py-24">
        <img
          src="https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?w=1600&h=900&fit=crop&auto=format"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-15"
          aria-hidden="true"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-[#111111]/85" />

        <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-20">
            <div>
              <p className="mb-3 text-[10px] font-700 uppercase tracking-[0.22em] text-[#F5C400]">
                Industries
              </p>

              <h2 className="text-[31px] font-800 leading-[1.08] tracking-tight text-white sm:text-[42px]">
                Equipment for the industries that keep things moving.
              </h2>

              <p className="mt-5 max-w-md text-[13.5px] leading-7 text-white/50">
                Different industries demand different machines. Our equipment
                solutions are built around the realities of the work.
              </p>
            </div>

            <div className="grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-3">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="border-b border-r border-white/10 px-4 py-5 sm:px-6 sm:py-7"
                >
                  <div className="mb-4 flex h-7 w-7 items-center justify-center bg-[#F5C400] text-[#111111]">
                    <Check size={14} strokeWidth={2.5} />
                  </div>

                  <p className="text-[12px] font-700 uppercase tracking-[0.08em] text-white sm:text-[13px]">
                    {industry}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY WORK WITH US
      ========================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <p className="mb-3 text-[10px] font-700 uppercase tracking-[0.22em] text-[#F5C400]">
                Why Work With Us
              </p>

              <h2 className="text-[31px] font-800 leading-[1.08] tracking-tight text-[#111111] sm:text-[42px]">
                The right equipment is only the beginning.
              </h2>

              <p className="mt-6 max-w-xl text-[14px] leading-7 text-[#6B7280]">
                Our goal is to make equipment ownership and operation simpler,
                more predictable and more productive.
              </p>

              <div className="mt-8 space-y-5">
                {commitments.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-[#F5C400] text-[#111111]">
                      <Check size={13} strokeWidth={2.5} />
                    </span>

                    <span className="text-[13px] font-600 text-[#333333]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden bg-[#EAEAEA]">
                <img
                  src="https://images.unsplash.com/photo-1580901368919-7738efb0f87e?w=1100&h=850&fit=crop&auto=format"
                  alt="Heavy equipment at an industrial work site"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="absolute bottom-0 left-0 max-w-[270px] bg-[#111111] p-6 sm:max-w-[300px] sm:p-7">
                <p className="text-[10px] font-700 uppercase tracking-[0.18em] text-[#F5C400]">
                  Built for the job
                </p>

                <p className="mt-2 text-[17px] font-700 leading-tight text-white">
                  Dependable equipment. Practical support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="bg-[#F5C400]">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-14 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-20">
          <div>
            <p className="mb-3 text-[10px] font-700 uppercase tracking-[0.2em] text-[#111111]/55">
              Let's Get to Work
            </p>

            <h2 className="max-w-2xl text-[30px] font-800 leading-[1.05] tracking-tight text-[#111111] sm:text-[42px]">
              Looking for the right equipment?
            </h2>

            <p className="mt-4 max-w-xl text-[13.5px] leading-6 text-[#111111]/65">
              Tell us what you're working on and we'll help you find an
              equipment solution that fits the job.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              href="/equipment"
              className="inline-flex items-center justify-center gap-2 bg-[#111111] px-5 py-3.5 text-[11px] font-700 uppercase tracking-[0.1em] text-white transition-all duration-200 hover:gap-3 hover:bg-[#292929]"
            >
              View Equipment
              <ArrowRight size={14} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-[#111111]/25 px-5 py-3.5 text-[11px] font-700 uppercase tracking-[0.1em] text-[#111111] transition-colors duration-200 hover:bg-[#111111]/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
