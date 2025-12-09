"use client";

import { useEffect, useRef, useState, RefObject } from "react";
import {
  useAnimate,
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { MdMenu } from "react-icons/md";
import Image from "next/image";
import logo from "@/assets/logo.webp";
import { navBarData } from "@/utils/navBarData";

interface NavBarProps {
  scrollRef: RefObject<HTMLDivElement | null>;
  onEnableScroll?: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ scrollRef, onEnableScroll }) => {
  //Loading Screen Animation
  const [scope, animate] = useAnimate();

  const handleLoadingAnimation = async () => {
    await animate("#rotatingLogo", { rotate: 1080 }, { duration: 2.5 });
    await animate("#stillLogo", { display: "none" });
    if (onEnableScroll) onEnableScroll();
    await Promise.all([
      animate(
        "#rotatingLogo",
        { width: 64, top: 8, left: 20, x: 0, y: 0 },
        { duration: 0.45 }
      ),
      animate(scope.current, { height: 80 }, { duration: 0.5 }),
      animate("#homeButton", { y: 0 }, { duration: 0.5 }),
      animate("#navbarList", { y: 0 }, { duration: 0.5 }),
      animate("#mobileMenuButton", { y: 0 }, { duration: 0.5 }),
    ]);
    await animate("#navbarLogo", { opacity: 1 });
    await animate("#rotatingLogo", { display: "none" });
  };

  //Begin Loading Animation when page is accessed
  useEffect(() => {
    handleLoadingAnimation();
  }, []);

  //Hide & Show NavBar
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

  //Click outside Mobile Nav Menu
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

  //Freeze Scroll if Mobile Nav Menu is displayed
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
      ref={scope}
      className="sticky top-0 w-full h-[100svh] flex justify-between items-center
                bg-cyan-dark text-white py-2 px-5 z-10 drop-shadow-lg"
    >
      {/* Loading Animation Elements */}
      <motion.div
        id="rotatingLogo"
        className="absolute z-20 will-change-transform"
        style={{ top: "50%", left: "50%" }}
        initial={{ x: "-50%", y: "-50%" }}
      >
        <Image
          alt="logo"
          src={logo}
          className="w-[400px] max-md:w-[250px] rounded-full"
        />
      </motion.div>

      <motion.div
        id="stillLogo"
        className="absolute z-30 w-[400px] [clip-path:inset(45px_round_50%)]
        max-md:w-[210px] max-md:[clip-path:inset(25px_round_50%)]"
        style={{ top: "50%", left: "50%" }}
        initial={{ x: "-50%", y: "-50%" }}
      >
        <Image alt="logo" src={logo} />
      </motion.div>

      {/* Logo */}
      <motion.a
        href="#home"
        id="homeButton"
        className="flex items-center cursor-pointer hover:text-yellow"
        initial={{ y: "-60vh" }}
      >
        <div id="navbarLogo" className="opacity-0">
          <Image alt="logo" src={logo} className="w-16 rounded-full" />
        </div>
        <p className="px-3 font-semibold text-xl lg:text-lg">Acasă</p>
      </motion.a>

      {/* NavBar list */}
      <motion.ul
        id="navbarList"
        className="hidden md:flex items-center font-semibold text-lg"
        initial={{ y: "-60vh" }}
      >
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
      </motion.ul>

      {/*  Mobile Menu button  */}
      <motion.div
        id="mobileMenuButton"
        className="md:hidden cursor-pointer"
        initial={{ y: "-60vh" }}
        onMouseDown={(e) => {
          e.stopPropagation();
          handleShowMobileNavMenu();
        }}
      >
        <MdMenu className="text-4xl hover:text-yellow" />
      </motion.div>

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
