import About from "@/components/About";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServiceSection";
import Contact from "@/components/Contact";
import Portfolio from "@/components/Portfolio";

const page = () => {
  return (
    <>
      <Hero />
      <Portfolio />
      <ServicesSection />
      <About />
      <Contact />
    </>
  );
};

export default page;
