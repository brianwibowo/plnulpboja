import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickAccess from "@/components/QuickAccess";
import Profile from "@/components/Profile";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Media from "@/components/Media";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ flex: "1 0 auto" }}>
        <Hero />
        <QuickAccess />
        <Profile />
        <Services />
        <FAQ />
        <Media />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
