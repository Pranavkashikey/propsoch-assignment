import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import HowItWorks from "./components/Working";
import Comparison from "./components/Comparison";
import Services from "./components/Services";
import Resources from "./components/Resources";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Testimonials />
        <HowItWorks />
        <Comparison />
        <Services />
        <Resources />
      </main>
      <Footer />
    </>
  );
}
