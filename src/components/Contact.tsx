"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { AiFillFacebook, AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import { fadeIn } from "@/utils/fadeInEffect";
import logo from "@/assets/logo.webp";

const Contact = () => {
  return (
    <div id="contact">
      {/* Contact */}
      <div className="flex flex-col w-full-2xl h-auto pb-14 pt-14 lg:pt-20 max-md:px-4 items-center">
        <div className="md:w-11/12 flex flex-col md:flex-row justify-between items-center gap-12 max-md:gap-6">
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            whileInView={"shown"}
            viewport={{ once: true, amount: 0.6 }}
            className="w-full min-w-fit flex flex-col gap-20 max-md:gap-6"
          >
            <h2 className="text-4xl max-md:text-3xl text-black font-semibold">
              Contact
            </h2>

            <ul className="w-full h-full flex flex-col gap-6 justify-between text-black text-justify">
              <li className="flex flex-row items-center gap-3">
                <FaLocationDot className="text-2xl" />
                <p className="text-md">Strada Câmpina 62, Cluj-Napoca</p>
              </li>
              <a href="mailto:contact@unda62.com">
                <li className="flex flex-row items-center gap-3 hover:text-cyan">
                  <IoMdMail className="text-2xl" />
                  <p className="text-md">contact@unda62.com</p>
                </li>
              </a>
              <a href="tel:0741319980">
                <li className="flex flex-row items-center gap-3 hover:text-cyan">
                  <FaPhone className="text-2xl" />
                  <p className="text-md">0741 319 980</p>
                </li>
              </a>
            </ul>

            <ul className="w-full h-full gap-12 flex flex-row justify-center text-5xl text-cyan-dark text-justify">
              <li className="flex flex-row">
                <a
                  href="https://www.instagram.com/unda_62/"
                  target="_blank"
                  className="hover:text-cyan"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="flex flex-row">
                <a
                  href="https://www.facebook.com/p/Unda-62-61552672377000/"
                  target="_blank"
                  className="hover:text-cyan"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="flex flex-row">
                <a
                  href="https://www.tiktok.com/@unda_62?_t=ZN-8u2iYZdo6jO&_r=1"
                  target="_blank"
                  className="hover:text-cyan hover"
                >
                  <AiFillTikTok />
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"shown"}
            viewport={{ once: true, amount: 0.6 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2731.827679458789!2d23.6233893!3d46.787999799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490d312a53197d%3A0x2286edc36280deda!2sUNDA%2062!5e0!3m2!1sro!2sro!4v1732443236421!5m2!1sro!2sro"
              className="w-[57vw] max-md:w-[93vw] h-[40vh] md:h-[60vh] m-auto 
              border-4 border-cyan-dark rounded-xl shadow-xl md:shadow-2xl"
            />
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"shown"}
          viewport={{ once: true, amount: 0.6 }}
          className="md:w-11/12"
        >
          <h2 className="text-4xl w-[93vw] md:w-11/12 mb-4 pt-10 md:pt-14 max-md:text-3xl text-black font-semibold">
            Cum ajungi la noi
          </h2>

          <div className="flex flex-col md:flex-row justify-between items-center gap-3 max-md:gap-2">
            <div className="md:w-[25vw] flex flex-col">
              <p className="w-full md:pt-7 mb-2 text-md text-black text-justify font-bold">
                Transport public:
              </p>
              <p className="w-full mb-2 text-md text-black text-justify">
                ● <b>Din P-ța Mihai Viteazu (stația Florin Piersic):</b> cu
                liniile <b>36B</b> sau <b>36L</b>
              </p>
              <p className="w-full text-md text-black text-justify">
                ● <b>Din centru (Memo):</b>
              </p>
              <p className="w-full pl-5 text-md text-black text-justify">
                ○ Liniile <b>52</b> (în timpul săptămânii) sau <b>14</b> (până
                la <b>Bobâlnei Vest</b>, apoi mergi pe jos ~9 minute).
              </p>
              <p className="w-full pl-5 mb-5 text-md text-black text-justify">
                ○ Liniile <b>46B</b>, <b>30</b>, <b>6</b>, <b>7</b> până la{" "}
                <b>Siretului</b>, de unde mai mergi ~14 minute pe jos.
              </p>
            </div>

            <Image
              alt="logo"
              src={logo}
              className="w-[25vw] rounded-full max-md:hidden"
            />

            <div className="md:w-[25vw]">
              <p className="w-full mb-2 text-md text-black text-justify font-bold">
                Cum intri în clădire:
              </p>
              <p className="w-full text-md text-black text-justify">
                Intrarea se face din curtea interioară:
              </p>
              <p className="w-full pl-5 text-md text-black text-justify">
                1. Treci pe lângă clădire pe străduța de lângă spălătoria auto.
              </p>
              <p className="w-full pl-5 text-md text-black text-justify">
                2. Intră în prima curte pe stânga.
              </p>
              <p className="w-full pl-5 mb-2 text-md text-black text-justify">
                3. Apoi, intră în clădirea principală din curte, urcă la{" "}
                <b>etajul 2</b>, și ne găsești acolo!
              </p>
              <p className="w-full text-md text-black text-justify">
                Te așteptăm cu drag! 😊
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
