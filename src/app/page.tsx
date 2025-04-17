import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Calendar from "@/components/Calendar";
import Donate from "@/components/Donate";
import GetInvolved from "@/components/GetInvolved";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden scroll-smooth font-body font-medium bg-white">
        <NavBar />
        <Hero />
        <AboutUs />
        <Calendar />
        <Donate />
        <GetInvolved />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
