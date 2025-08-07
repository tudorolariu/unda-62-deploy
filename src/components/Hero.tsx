import Image from "next/image";
import heroBanner from "@/assets/heroBanner.webp";

const Hero = () => {
  return (
    <>
      <div id="home" className="relative w-full h-[100svh]">
        <Image
          alt="hero-banner"
          src={heroBanner}
          className="absolute top-0 left-0 w-full h-full object-cover"
          priority
          // max-md:pt-[12vh]
        />
      </div>
      {/* <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-t from-cyan-dark"></div> */}
    </>
  );
};

export default Hero;
