"use client";

import dynamic from "next/dynamic";
import { useRef, useState, useEffect } from "react";

import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";

const AboutUs = dynamic(() => import("@/components/AboutUs"), { ssr: false });
const Calendar = dynamic(() => import("@/components/Calendar"), { ssr: false });
const Donate = dynamic(() => import("@/components/Donate"), { ssr: false });
const GetInvolved = dynamic(() => import("@/components/GetInvolved"), {
  ssr: false,
});
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isOverflowYHidden, setIsOverflowYHidden] = useState(true);

  //Always start at the top of the page on Refresh
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-cyan-dark flex justify-center">
      <div
        ref={scrollRef}
        className={`${
          isOverflowYHidden ? "overflow-y-hidden" : "overflow-y-auto"
        } w-full ultrawide:max-w-[1440px] h-[100svh] overflow-x-hidden scroll-smooth font-body 
        font-medium bg-white scrollbar scrollbar-thumb-cyan scrollbar-track-cyan-dark`}
      >
        <NavBar
          scrollRef={scrollRef}
          onEnableScroll={() => setIsOverflowYHidden(false)}
        />
        <Hero />
        <AboutUs />
        <Calendar />
        <Donate />
        <GetInvolved />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
