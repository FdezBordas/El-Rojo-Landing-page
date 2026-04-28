import About from "@/components/About";
import Audience from "@/components/Audience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import StrongCTA from "@/components/StrongCTA";
import WhyWork from "@/components/WhyWork";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <WhyWork />
      <Packages />
      <Portfolio />
      <Audience />
      <StrongCTA />
      <Contact />
      <Footer />
    </main>
  );
}
