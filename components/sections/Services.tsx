"use client";

interface ServiceCard {
  label: string;
  heading: string;
  description: string;
  cta: string;
  ctaHref: string;
  image: string;
  alt: string;
}

const services: ServiceCard[] = [
  {
    label: "Sales",
    heading: "Equipment Sales",
    description:
      "Find the right equipment for your operation with guidance from experienced equipment specialists.",
    cta: "Explore Equipment",
    ctaHref: "#equipment",
    image:
      "https://images.unsplash.com/photo-1669902081596-18497f52659e?w=800&h=560&fit=crop&auto=format",
    alt: "Yellow bulldozer operating in an open field — equipment available for sale",
  },
  {
    label: "Service",
    heading: "Service & Maintenance",
    description:
      "Keep your equipment working with experienced technicians, maintenance and repair support.",
    cta: "Explore Service",
    ctaHref: "#services",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=560&fit=crop&auto=format",
    alt: "Equipment technician in a yellow hard hat inspecting machinery",
  },
  {
    label: "Support",
    heading: "Parts & Support",
    description:
      "Get the parts, technical assistance and support you need to minimize downtime.",
    cta: "Get Support",
    ctaHref: "#contact",
    image:
      "https://images.unsplash.com/photo-1660508597900-f19ae2dc6b65?w=800&h=560&fit=crop&auto=format",
    alt: "Large yellow construction vehicle on a road — parts and support available",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="services-heading"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-xl mb-12 lg:mb-14">
          <p className="text-[10px] font-700 tracking-[0.2em] text-[#F5C400] uppercase mb-3">
            Our Services
          </p>
          <h2
            id="services-heading"
            className="text-[28px] sm:text-[34px] lg:text-[40px] font-800 leading-[1.1] text-[#111111] tracking-tight mb-4"
          >
            Complete Equipment Support
          </h2>
          <p className="text-[14px] text-[#6B7280] leading-relaxed">
            From choosing the right machine to keeping it productive, our team
            supports you throughout the equipment lifecycle.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
          {services.map((svc) => (
            <article
              key={svc.label}
              className="group bg-white flex flex-col hover:shadow-lg transition-shadow duration-200"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-[#111111] h-56 sm:h-64 flex-shrink-0">
                <img
                  src={svc.image}
                  alt={svc.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Label badge */}
                <span className="absolute top-4 left-4 bg-[#F5C400] text-[#111111] text-[10px] font-700 tracking-[0.18em] uppercase px-2.5 py-1">
                  {svc.label}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 sm:p-7 border border-t-0 border-gray-100">
                <h3 className="text-[19px] font-700 text-[#111111] mb-3 leading-tight">
                  {svc.heading}
                </h3>
                <p className="text-[13.5px] text-[#555] leading-relaxed flex-1 mb-6">
                  {svc.description}
                </p>
                <a
                  href={svc.ctaHref}
                  className="inline-flex items-center gap-2 text-[12.5px] font-700 tracking-wide text-[#111111] group-hover:text-[#F5C400] transition-colors duration-150 focus:outline-none focus-visible:underline"
                >
                  {svc.cta}
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M1.5 6.5H11.5M7.5 2.5L11.5 6.5L7.5 10.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="square"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
