"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeInEffect";

const Donate = () => {
  return (
    <div id="donate">
      {/* Doneaza */}
      <div className="flex flex-col w-full-2xl h-auto pt-14 lg:pt-20 max-md:px-4 items-center">
        <div className="md:w-11/12 flex flex-col md:flex-row justify-between items-start gap-12 max-md:gap-6">
          {/* Desktop */}
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            whileInView={"shown"}
            viewport={{ once: true, amount: 0.25 }}
            className="max-md:hidden w-full"
          >
            <h2 className="md:hidden w-full text-left text-4xl max-md:text-3xl text-black font-semibold mb-8 max-md:mb-4">
              Donează
            </h2>

            <iframe
              id="galatom-form"
              src="https://pay.galantom.ro/widgets/donation_forms/view?id=147"
              className="w-full h-[1350px]
            border-4 border-cyan-dark rounded-xl shadow-xl md:shadow-2xl"
            ></iframe>
          </motion.div>

          {/* Mobile */}
          <motion.div
            variants={fadeIn("up")}
            initial="hidden"
            whileInView={"shown"}
            viewport={{ once: true, amount: 0.15 }}
            className="md:hidden w-full"
          >
            <h2 className="md:hidden w-full text-left text-4xl max-md:text-3xl text-black font-semibold mb-8 max-md:mb-4">
              Donează
            </h2>

            <iframe
              id="galatom-form"
              src="https://pay.galantom.ro/widgets/donation_forms/view?id=147"
              className="w-full h-[1600px]
            border-4 border-cyan-dark rounded-xl shadow-xl md:shadow-2xl"
            ></iframe>
          </motion.div>

          {/* Desktop */}
          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"shown"}
            viewport={{ once: true, amount: 0.33 }}
            className="max-md:hidden w-full md:w-3/5"
          >
            <div className="w-full flex flex-col">
              <h2 className="max-md:hidden text-4xl max-md:text-3xl text-black font-semibold mb-8 max-md:mb-4">
                Donează
              </h2>

              <p className="w-full mb-2 text-xl md:text-2xl text-black text-justify font-bold">
                Fiecare contribuție contează! Alătură-te misiunii UNDA 62
              </p>

              <p className="w-full text-md text-black text-justify">
                UNDA 62 este mai mult decât un centru de tineret din Cluj-Napoca
                – este un loc unde ideile prind viață, comunitatea se dezvoltă,
                iar tinerii găsesc sprijinul de care au nevoie pentru a-și
                îndeplini visurile.{" "}
                <b>
                  Prin donații și sponsorizări, contribui direct la sprijinirea
                  visurilor lor și la construirea unei comunități mai
                  echitabile, unde fiecare tânăr are șansa să învețe, să
                  socializeze și să aparțină unui mediu suportiv.
                </b>
              </p>

              <p className="w-full pt-5 text-xl md:text-2xl text-black text-justify font-bold">
                Modalități prin care poți sprijini UNDA 62:
              </p>

              <div className="flex gap-1 mt-2 text-md text-black font-bold items-start">
                <span>1.</span>
                <p className="w-full text-justify">
                  Redirecționează 3,5% din impozitul pe venit
                </p>
              </div>

              <p className="w-full text-md text-black text-justify">
                Poți redirecționa 3,5% din impozitul pe venit către UNDA 62.
                Este o contribuție simplă, dar cu un impact major în derularea
                activităților noastre.
              </p>

              {/* Completează formularul nostru pentru a transforma o parte din impozitul tău într-o investiție în viitor. */}
              <div className="flex gap-1 mt-2 text-md text-black font-bold items-start">
                <span>2.</span>
                <p className="w-full text-justify">Donează online</p>
              </div>

              <p className="w-full text-md text-black text-justify">
                Sprijinul tău poate ajunge rapid și sigur la noi printr-o
                donație online. Fiecare sumă contează și contribuie la
                proiectele noastre educaționale și comunitare.
              </p>

              <div className="flex gap-1 mt-2 text-md text-black font-bold items-start">
                <span>3.</span>
                <p className="w-full text-justify">
                  Donează produse și servicii
                </p>
              </div>

              <p className="w-full text-md text-black text-justify">
                Ai posibilitatea de a contribui cu produse sau servicii
                esențiale pentru activitățile noastre. ➡️ Răsfoiește{" "}
                <a
                  href="https://docs.google.com/spreadsheets/d/1UHHGol7NTvIMsWCddooAzDY7dwhVHGguHuWqGCBg7og/edit?gid=0#gid=0"
                  target="_blank"
                  className="font-bold underline text-cyan-dark hover:text-cyan"
                >
                  Lista
                </a>{" "}
                noastră de nevoi și află cum poți ajuta cu resursele tale.
              </p>

              <p className="w-full pt-5 text-xl md:text-2xl text-black text-justify font-bold">
                Implică-ți compania în misiunea noastră:
              </p>

              <div className="flex gap-1 mt-2 text-md text-black font-bold items-start">
                <span>1.</span>
                <p className="w-full text-justify">
                  Sponsorizare de până la 20% din impozitul pe profit
                </p>
              </div>

              <p className="w-full text-md text-black text-justify">
                Compania ta poate redirecționa până la 20% din impozitul pe
                profit pentru a susține proiectele UNDA 62. Descoperă
                contractele de sponsorizare disponibile și alege tipul care ți
                se potrivește: directă, retroactivă sau în produse.
              </p>

              <div className="flex gap-1 mt-2 text-md text-black font-bold items-start">
                <span>2.</span>
                <p className="w-full text-justify">
                  Sponsorizări în produse și servicii
                </p>
              </div>

              <p className="w-full text-md text-black text-justify">
                Compania ta poate sprijini direct inițiativele noastre prin
                donații de produse sau servicii esențiale. ➡️ Vezi{" "}
                <a
                  href="https://docs.google.com/spreadsheets/d/1UHHGol7NTvIMsWCddooAzDY7dwhVHGguHuWqGCBg7og/edit?gid=0#gid=0"
                  target="_blank"
                  className="font-bold underline text-cyan-dark hover:text-cyan"
                >
                  Lista
                </a>{" "}
                de nevoi și află cum putem construi împreună un viitor mai bun.
              </p>
            </div>
          </motion.div>

          {/* Mobile */}
          <motion.div
            variants={fadeIn("up")}
            initial="hidden"
            whileInView={"shown"}
            viewport={{ once: true, amount: 0.25 }}
            className="md:hidden w-full md:w-3/5"
          >
            <div className="w-full flex flex-col">
              <h2 className="max-md:hidden text-4xl max-md:text-3xl text-black font-semibold mb-8 max-md:mb-4">
                Donează
              </h2>

              <p className="w-full mb-2 text-xl md:text-2xl text-black text-justify font-bold">
                Fiecare contribuție contează! Alătură-te misiunii UNDA 62
              </p>

              <p className="w-full text-md text-black text-justify">
                UNDA 62 este mai mult decât un centru de tineret din Cluj-Napoca
                – este un loc unde ideile prind viață, comunitatea se dezvoltă,
                iar tinerii găsesc sprijinul de care au nevoie pentru a-și
                îndeplini visurile.{" "}
                <b>
                  Prin donații și sponsorizări, contribui direct la sprijinirea
                  visurilor lor și la construirea unei comunități mai
                  echitabile, unde fiecare tânăr are șansa să învețe, să
                  socializeze și să aparțină unui mediu suportiv.
                </b>
              </p>

              <p className="w-full pt-5 text-xl md:text-2xl text-black text-justify font-bold">
                Modalități prin care poți sprijini UNDA 62:
              </p>

              <div className="flex gap-1 mt-2 text-md text-black font-bold items-start">
                <span>1.</span>
                <p className="w-full text-justify">
                  Redirecționează 3,5% din impozitul pe venit
                </p>
              </div>

              <p className="w-full text-md text-black text-justify">
                Poți redirecționa 3,5% din impozitul pe venit către UNDA 62.
                Este o contribuție simplă, dar cu un impact major în derularea
                activităților noastre.
              </p>

              {/* Completează formularul nostru pentru a transforma o parte din impozitul tău într-o investiție în viitor. */}
              <div className="flex gap-1 mt-2 text-md text-black font-bold items-start">
                <span>2.</span>
                <p className="w-full text-justify">Donează online</p>
              </div>

              <p className="w-full text-md text-black text-justify">
                Sprijinul tău poate ajunge rapid și sigur la noi printr-o
                donație online. Fiecare sumă contează și contribuie la
                proiectele noastre educaționale și comunitare.
              </p>

              <div className="flex gap-1 mt-2 text-md text-black font-bold items-start">
                <span>3.</span>
                <p className="w-full text-justify">
                  Donează produse și servicii
                </p>
              </div>

              <p className="w-full text-md text-black text-justify">
                Ai posibilitatea de a contribui cu produse sau servicii
                esențiale pentru activitățile noastre. ➡️ Răsfoiește{" "}
                <a
                  href="https://docs.google.com/spreadsheets/d/1UHHGol7NTvIMsWCddooAzDY7dwhVHGguHuWqGCBg7og/edit?gid=0#gid=0"
                  target="_blank"
                  className="font-bold underline text-cyan-dark hover:text-cyan"
                >
                  Lista
                </a>{" "}
                noastră de nevoi și află cum poți ajuta cu resursele tale.
              </p>

              <p className="w-full pt-5 text-xl md:text-2xl text-black text-justify font-bold">
                Implică-ți compania în misiunea noastră:
              </p>

              <div className="flex gap-1 mt-2 text-md text-black font-bold items-start">
                <span>1.</span>
                <p className="w-full text-justify">
                  Sponsorizare de până la 20% din impozitul pe profit
                </p>
              </div>

              <p className="w-full text-md text-black text-justify">
                Compania ta poate redirecționa până la 20% din impozitul pe
                profit pentru a susține proiectele UNDA 62. Descoperă
                contractele de sponsorizare disponibile și alege tipul care ți
                se potrivește: directă, retroactivă sau în produse.
              </p>

              <div className="flex gap-1 mt-2 text-md text-black font-bold items-start">
                <span>2.</span>
                <p className="w-full text-justify">
                  Sponsorizări în produse și servicii
                </p>
              </div>

              <p className="w-full text-md text-black text-justify">
                Compania ta poate sprijini direct inițiativele noastre prin
                donații de produse sau servicii esențiale. ➡️ Vezi{" "}
                <a
                  href="https://docs.google.com/spreadsheets/d/1UHHGol7NTvIMsWCddooAzDY7dwhVHGguHuWqGCBg7og/edit?gid=0#gid=0"
                  target="_blank"
                  className="font-bold underline text-cyan-dark hover:text-cyan"
                >
                  Lista
                </a>{" "}
                de nevoi și află cum putem construi împreună un viitor mai bun.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
