"use client";

import { useEffect, useState } from "react";
import logo from "../assets/logo.webp";
import { navBarData } from "@/utils/navBarData";
import { MdMenu } from "react-icons/md";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";

const NavBar = () => {
  const { scrollY } = useScroll();
  // const [hideNavBar, setHideNavBar] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);

  // useMotionValueEvent(scrollY, "change", (latestScrollValue: any) => {
  //   const previousScrollValue: any = scrollY.getPrevious();
  //   if (latestScrollValue > previousScrollValue) {
  //     setHideNavBar(true);
  //   } else {
  //     setHideNavBar(false);
  //   }
  // });

  const handleShowSideBar = () => {
    setShowSideBar(!showSideBar);
    if (!showSideBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <motion.div
      // variants={{
      //   visible: { y: 0 },
      //   hidden: { y: "-100%" },
      // }}
      // animate={hideNavBar ? "hidden" : "visible"}
      // transition={{ duration: 0.35, ease: "easeInOut" }}

      // Change VVV absolute with sticky
      className="fixed flex justify-between max-md:h-[12vh] w-screen
        items-center bg-cyan-dark text-white py-2 px-5 z-10
        drop-shadow-lg"
    >
      {/* Logo */}
      <a
        href="#home"
        className="flex items-center cursor-pointer hover:text-yellow"
      >
        <Image alt="logo" src={logo} className="w-16 rounded-full" />
        <p className="px-3 font-semibold text-xl lg:text-lg">Acasă</p>
      </a>

      {/* NavBar menu */}
      <ul className="hidden md:flex items-center font-semibold text-lg">
        {navBarData.map((item) => {
          const isHighlighted = item.id === 3 || item.id === 4;
          return (
            <li key={item.id}>
              <a
                href={item.link}
                className={`mx-2 px-3 py-2 hover:text-yellow rounded-xl ${
                  isHighlighted ? "bg-cyan" : ""
                }`}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>

      {/*  Mobile menu button  */}
      <div className="md:hidden cursor-pointer" onClick={handleShowSideBar}>
        <MdMenu className="text-4xl hover:text-yellow" />
      </div>

      {/*  Mobile Nav Bar  */}
      <AnimatePresence mode="wait">
        {showSideBar && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[14vh] left-0 w-screen h-screen z-10"
          >
            <div className="text-xl font-semibold bg-cyan-dark py-10 m-7 z-10 rounded-3xl">
              <ul className="flex flex-col justify-center items-center gap-5">
                {navBarData.map((item) => {
                  const isHighlighted = item.id === 3 || item.id === 4;
                  return (
                    <li key={item.id}>
                      <a
                        href={item.link}
                        onClick={handleShowSideBar}
                        className={`my-1 px-2 py-1 hover:text-yellow rounded-xl ${
                          isHighlighted ? "bg-cyan" : ""
                        }`}
                      >
                        {item.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NavBar;
