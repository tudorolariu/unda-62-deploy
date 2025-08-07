import Image from "next/image";
import logoTO from "@/assets/logoTO.webp";

const Footer = () => {
  return (
    <div
      className="flex justify-between lg:justify-center w-full
        items-center bg-cyan-dark text-white text-center font-semibold text-md p-2 z-10"
    >
      <p className="lg:pr-2">Website crafted by</p>
      <a
        href="https://tudorolariu.com/"
        target="_blank"
        className="flex items-center hover:text-yellow"
      >
        <Image alt="logo" src={logoTO} className="w-11 lg:w-10 rounded-full" />
        <p className="pl-2">Tudor Olariu</p>
      </a>
      <p className="pl-20">Copyright © 2025, UNDA 62</p>
    </div>
  );
};

export default Footer;
