"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import ceFacem1 from "@/assets/ceFacem1.webp";
import ceFacem2 from "@/assets/ceFacem2.webp";
import ceFacem3 from "@/assets/ceFacem3.webp";
import ceFacem4 from "@/assets/ceFacem4.webp";

const carouselSlides = [ceFacem1, ceFacem2, ceFacem3, ceFacem4];

const Carousel = ({ autoSlide = false, autoSlideInterval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === 0 ? carouselSlides.length - 1 : currentSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === carouselSlides.length - 1 ? 0 : currentSlide + 1
    );
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="max-w-3xl h-100 rounded-xl overflow-hidden relative">
      <div
        className="flex flex-row  transition ease-out duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {carouselSlides.map((item, index) => (
          <Image alt="item" src={item} key={index} className="w-3xl h-100" />
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-3">
        <button
          onClick={previousSlide}
          className="p-1 rounded-full shadow bg-white/80 text-gray hover:bg-white"
        >
          <MdChevronLeft className="text-4xl" />
        </button>
        <button
          onClick={nextSlide}
          className="p-1 rounded-full shadow bg-white/80 text-gray hover:bg-white"
        >
          <MdChevronRight className="text-4xl" />
        </button>
      </div>

      <div className="absolute bottom-3 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {carouselSlides.map((item, index) => (
            <div
              key={`circle-${index}`}
              onClick={() => {
                setCurrentSlide(index);
              }}
              className={`transition-all w-3 h-3 cursor-pointer bg-white rounded-full
                ${currentSlide === index ? "p-2" : "bg-opacity-50"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
