import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Calendar from "@/components/Calendar";
import Donate from "@/components/Donate";
import GetInvolved from "@/components/GetInvolved";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden scroll-smooth font-body font-medium">
        <NavBar />
        <Hero />
        <AboutUs />
        <Calendar />
        <Donate />
        <GetInvolved />
        <Contact />
      </div>
    </>
  );
}
