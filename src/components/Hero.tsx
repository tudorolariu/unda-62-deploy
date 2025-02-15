import Image from "next/image";
import heroBanner from "../assets/heroBanner.jpg";

const Hero = () => {
  return (
    <>
      <div id="home" className="w-screen h-screen">
        <Image
          alt="hero-banner"
          src={heroBanner}
          className="top-0 left-0 w-screen h-screen object-cover max-md:pt-[12vh]"
          // max-md:pt-[12vh]
        />
      </div>
      {/* <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-t from-cyan-dark"></div> */}
    </>
  );
};

export default Hero;
