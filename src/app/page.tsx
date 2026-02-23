import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectsGrid from "@/components/ProjectsGrid";
import MarketingMedia from "@/components/MarketingMedia";
import OperationalTools from "@/components/OperationalTools";
import CurrentlyLearning from "@/components/CurrentlyLearning";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ProjectsGrid />
        <MarketingMedia />
        <OperationalTools />
        <CurrentlyLearning />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
