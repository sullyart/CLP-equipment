import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import FinalCTA from "@/components/sections/CompanyShowcase";
import { MessageCircle } from "lucide-react";
import CompanyShowcase from "@/components/sections/CompanyShowcase";
import CompanyIntro from "@/components/sections/CompanyIntro";
import PeopleSection from "@/components/sections/PeopleSection";
import Services from "@/components/sections/Services";
import Locations from "@/components/sections/Locations";
export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <CompanyIntro />
      <CompanyShowcase />
      <PeopleSection />
      <Services />
      <Locations />
      {/* <FinalCTA /> */}
      <Footer />
      {/* <a
        href="#estimate"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-[9px] bg-[#18A2DF] px-5 py-3 text-sm font-bold tracking-wide text-[#0F1923] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#E2C06A]"
      >
        <MessageCircle size={17} />
        Let's Chat
      </a> */}
      <main></main>
    </>
  );
}
