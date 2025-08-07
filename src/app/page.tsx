"use client";

import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Calendar from "@/components/Calendar";
import Donate from "@/components/Donate";
import GetInvolved from "@/components/GetInvolved";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { useRef } from "react";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="min-h-screen bg-cyan-dark flex justify-center">
        <div
          ref={scrollRef}
          className="w-full max-w-[1920px] h-[100svh] overflow-x-hidden scroll-smooth 
          font-body font-medium bg-white scrollbar scrollbar-thumb-cyan scrollbar-track-cyan-dark"
        >
          <NavBar scrollRef={scrollRef} />
          <Hero />
          <AboutUs />
          <Calendar />
          <Donate />
          <GetInvolved />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
