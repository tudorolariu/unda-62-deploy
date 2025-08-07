"use client";

import Image from "next/image";
import { useEffect, useRef, useState, RefObject } from "react";
import { MdMenu } from "react-icons/md";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { navBarData } from "@/utils/navBarData";
import logo from "@/assets/logo.webp";

interface NavBarProps {
  scrollRef: RefObject<HTMLDivElement | null>;
}

const NavBar: React.FC<NavBarProps> = ({ scrollRef }) => {
  const { scrollY } = useScroll({ container: scrollRef, layoutEffect: false });
  const [hiddenNavBar, setHiddenNavBar] = useState(false);
  const [showMobileNavMenu, setShowMobileNavMenu] = useState(false);
  const mobileNavMenuRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, "change", (latestScrollValue: number) => {
    const previousScrollValue: number = scrollY.getPrevious() ?? 0;
    if (latestScrollValue > previousScrollValue && latestScrollValue > 150) {
      setHiddenNavBar(true);
    } else {
      setHiddenNavBar(false);
    }
  });

  const handleShowMobileNavMenu = () => {
    setShowMobileNavMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!mobileNavMenuRef.current?.contains(e.target as Node)) {
        setShowMobileNavMenu(false);
      }
    };

    if (showMobileNavMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMobileNavMenu]);

  useEffect(() => {
    const scrollElement = scrollRef.current;

    if (showMobileNavMenu && scrollElement) {
      scrollElement.style.overflow = "hidden";
    } else if (scrollElement) {
      scrollElement.style.overflow = "";
    }

    return () => {
      if (scrollElement) scrollElement.style.overflow = "";
    };
  }, [showMobileNavMenu, scrollRef]);

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hiddenNavBar ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky top-0 w-full flex justify-between items-center
            bg-cyan-dark text-white py-2 px-5 z-50 drop-shadow-lg"
    >
      {/* Logo */}
      <a
        href="#home"
        className="flex items-center cursor-pointer hover:text-yellow"
      >
        <Image alt="logo" src={logo} className="w-16 rounded-full" />
        <p className="px-3 font-semibold text-xl lg:text-lg">Acasă</p>
      </a>

      {/* NavBar list */}
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

      {/*  Mobile Menu button  */}
      <div
        className="md:hidden cursor-pointer"
        onMouseDown={(e) => {
          e.stopPropagation();
          handleShowMobileNavMenu();
        }}
      >
        <MdMenu className="text-4xl hover:text-yellow" />
      </div>

      {/*  Mobile NavMenu  */}
      <AnimatePresence mode="wait">
        {showMobileNavMenu && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[14vh] left-0 w-full h-screen z-10"
          >
            <div
              ref={mobileNavMenuRef}
              className="text-xl font-semibold bg-cyan-dark py-10 m-7 z-10 rounded-3xl"
            >
              <ul className="flex flex-col justify-center items-center gap-5">
                {navBarData.map((item) => {
                  const isHighlighted = item.id === 3 || item.id === 4;
                  return (
                    <li key={item.id}>
                      <a
                        href={item.link}
                        onClick={handleShowMobileNavMenu}
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
