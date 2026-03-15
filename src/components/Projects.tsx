"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeInEffect";
import proiectExplorareWEBP1 from "@/assets/proiectExplorare1.webp";
import proiectExplorareWEBP2 from "@/assets/proiectExplorare2.webp";

const Projects = () => {
  return (
    <div>
      {/* Explorare prin arta - Articol */}
      <div className="flex w-full-2xl h-auto pt-14 lg:pt-20 max-md:px-4 items-center">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 max-md:gap-3">
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            whileInView={"shown"}
            viewport={{ once: true, amount: 0.3 }}
            className="max-md:hidden w-2/4 max-md:w-full"
          >
            <Image
              alt="proiecte-explorare-prin-arta"
              src={proiectExplorareWEBP1}
              className="w-full mb-4 rounded-xl"
            />
            <Image
              alt="proiecte-explorare-prin-arta"
              src={proiectExplorareWEBP2}
              className="w-full rounded-xl"
            />
          </motion.div>

          {/* Desktop */}
          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"shown"}
            viewport={{ once: true, amount: 0.3 }}
            className="max-md:hidden w-3/5 gap-3"
          >
            <h2 className="text-4xl max-md:text-3xl text-black font-semibold mb-4">
              Explorare prin artă
            </h2>
            <p className="w-full mb-2 text-md text-black text-justify">
              Cum pot adolescenții să vorbească despre emoții într-un mod
              autentic? Și cum pot arta și creativitatea să devină instrumente
              pentru înțelegerea propriilor trăiri?
            </p>
            <p className="w-full mb-2 text-md text-black text-justify">
              Proiectul <b>„Explorare prin artă”</b>, coordonat de{" "}
              <b>Asociația Unda 62</b> în colaborare cu{" "}
              <b>Stația Teatru/Muzical</b>, a adus împreună adolescenți de la{" "}
              <b>Școala Profesională din Răscruci</b> într-un parcurs creativ de
              explorare a emoțiilor prin teatru, muzică și scriere creativă.
            </p>
            <p className="w-full mb-2 text-md text-black text-justify">
              Pe parcursul proiectului au avut loc{" "}
              <b>cinci ateliere interdisciplinare</b>, în care adolescenții au
              explorat emoții precum: furia, tristețea, frica, încrederea,
              rușinea și bucuria.
            </p>
            <p className="w-full mb-2 text-md text-black text-justify">
              Folosind{" "}
              <b>
                improvizație teatrală, exerciții de muzică experimentală și
                scriere creativă
              </b>
              , tinerii au reflectat asupra propriilor experiențe și au
              experimentat moduri noi de exprimare.
            </p>

            <p className="w-full text-md text-black text-justify">
              Activitățile au fost construite astfel încât participanții să:
            </p>
            <div className="flex gap-1 text-md text-black items-start">
              <span>●</span>
              <p className="w-full text-justify">
                observe cum apar emoțiile în corp și în relațiile cu ceilalți
              </p>
            </div>
            <div className="flex gap-1 text-md text-black items-start">
              <span>●</span>
              <p className="w-full text-justify">
                descopere instrumente creative de exprimare
              </p>
            </div>
            <div className="flex gap-1 text-md text-black items-start">
              <span>●</span>
              <p className="w-full text-justify">
                își dezvolte încrederea și capacitatea de reflecție
              </p>
            </div>
            <div className="mb-2 flex gap-1 text-md text-black items-start">
              <span>●</span>
              <p className="w-full text-justify">își activeze creativitatea</p>
            </div>

            <p className="w-full mb-2 text-md text-black text-justify">
              La început, atmosfera a fost marcată de timiditate și reținere.
              Dar pe parcursul întâlnirilor, grupul a devenit tot mai deschis,
              iar discuțiile au devenit mai sincere și mai curajoase.
            </p>
            <p className="w-full mb-2 text-md text-black text-justify">
              Un element important al proiectului este{" "}
              <b>„Kitul de Supraviețuire Emoțională”</b> - o colecție de idei,
              exerciții și instrumente creative, colectate de tineri pe
              parcursul activiăților, care le pot ajuta să își gestioneze
              emoțiile.
            </p>
            <p className="w-full mb-2 text-md text-black text-justify">
              Proiectul s-a încheiat printr-un eveniment dedicat
              participanților, care a inclus o <b>expoziție foto</b> realizată
              pe parcursul atelierelor, proiecția unui <b>scurt documentar</b>{" "}
              despre procesul proiectului, și discuții cu tinerii despre
              experiența lor.
            </p>
            <p className="w-full mb-2 text-md text-black text-justify">
              Unul dintre cele mai frumoase momente ale finalului a fost
              întrebarea venită chiar de la participanți:{" "}
              <b>„Când mai facem un program ca acesta?”</b>
            </p>
            <p className="w-full mb-2 text-md text-black text-justify">
              Experiența proiectului <b>„Explorare prin artă”</b> a fost
              sintetizată într-un <b>ghid metodologic</b> dedicat celor care
              lucrează cu adolescenți și doresc să abordeze emoțiile prin
              activități creative. Acesta include exemple de activități,
              explicații metodologice și idei practice pentru facilitatori,
              profesori, artiști sau lucrători de tineret.
            </p>
            <p className="w-full text-md text-black text-justify">
              Proiectul <b>„Explorare prin artă”</b> este coordonat de{" "}
              <b>Asociația Unda 62</b>, în parteneriat cu{" "}
              <b>Stația Teatru/Muzical</b>, și a fost finanțat prin programul{" "}
              <b>În Stare de Bine</b>, susținut de <b>Kaufland România</b> și
              implementat de{" "}
              <b>Fundația pentru Dezvoltarea Societății Civile</b>.
            </p>
          </motion.div>

          {/* Mobile */}
          <motion.div
            variants={fadeIn("up")}
            initial="hidden"
            whileInView={"shown"}
            viewport={{ once: true, amount: 0.1 }}
            className="md:hidden w-full gap-3"
          >
            <h2 className="text-4xl max-md:text-3xl text-black font-semibold mb-4">
              Explorare prin artă
            </h2>
            <p className="w-full mb-2 text-md text-black text-justify">
              Cum pot adolescenții să vorbească despre emoții într-un mod
              autentic? Și cum pot arta și creativitatea să devină instrumente
              pentru înțelegerea propriilor trăiri?
            </p>
            <p className="w-full mb-2 text-md text-black text-justify">
              Proiectul <b>„Explorare prin artă”</b>, coordonat de{" "}
              <b>Asociația Unda 62</b> în colaborare cu{" "}
              <b>Stația Teatru/Muzical</b>, a adus împreună adolescenți de la{" "}
              <b>Școala Profesională din Răscruci</b> într-un parcurs creativ de
              explorare a emoțiilor prin teatru, muzică și scriere creativă.
            </p>
            <p className="w-full mb-2 text-md text-black text-justify">
              Pe parcursul proiectului au avut loc{" "}
              <b>cinci ateliere interdisciplinare</b>, în care adolescenții au
              explorat emoții precum: furia, tristețea, frica, încrederea,
              rușinea și bucuria.
            </p>
            <p className="w-full mb-2 text-md text-black text-justify">
              Folosind{" "}
              <b>
                improvizație teatrală, exerciții de muzică experimentală și
                scriere creativă
              </b>
              , tinerii au reflectat asupra propriilor experiențe și au
              experimentat moduri noi de exprimare.
            </p>

            <Image
              alt="proiecte-explorare-prin-arta"
              src={proiectExplorareWEBP1}
              className="w-full mb-2 rounded-xl"
            />

            <p className="w-full text-md text-black text-justify">
              Activitățile au fost construite astfel încât participanții să:
            </p>
            <div className="flex gap-1 text-md text-black items-start">
              <span>●</span>
              <p className="w-full text-justify">
                observe cum apar emoțiile în corp și în relațiile cu ceilalți
              </p>
            </div>
            <div className="flex gap-1 text-md text-black items-start">
              <span>●</span>
              <p className="w-full text-justify">
                descopere instrumente creative de exprimare
              </p>
            </div>
            <div className="flex gap-1 text-md text-black items-start">
              <span>●</span>
              <p className="w-full text-justify">
                își dezvolte încrederea și capacitatea de reflecție
              </p>
            </div>
            <div className="mb-2 flex gap-1 text-md text-black items-start">
              <span>●</span>
              <p className="w-full text-justify">își activeze creativitatea</p>
            </div>

            <p className="w-full mb-2 text-md text-black text-justify">
              La început, atmosfera a fost marcată de timiditate și reținere.
              Dar pe parcursul întâlnirilor, grupul a devenit tot mai deschis,
              iar discuțiile au devenit mai sincere și mai curajoase.
            </p>
            <p className="w-full mb-2 text-md text-black text-justify">
              Un element important al proiectului este{" "}
              <b>„Kitul de Supraviețuire Emoțională”</b> - o colecție de idei,
              exerciții și instrumente creative, colectate de tineri pe
              parcursul activiăților, care le pot ajuta să își gestioneze
              emoțiile.
            </p>
            <p className="w-full mb-2 text-md text-black text-justify">
              Proiectul s-a încheiat printr-un eveniment dedicat
              participanților, care a inclus o <b>expoziție foto</b> realizată
              pe parcursul atelierelor, proiecția unui <b>scurt documentar</b>{" "}
              despre procesul proiectului, și discuții cu tinerii despre
              experiența lor.
            </p>
            <p className="w-full mb-2 text-md text-black text-justify">
              Unul dintre cele mai frumoase momente ale finalului a fost
              întrebarea venită chiar de la participanți:{" "}
              <b>„Când mai facem un program ca acesta?”</b>
            </p>
            <p className="w-full mb-2 text-md text-black text-justify">
              Experiența proiectului <b>„Explorare prin artă”</b> a fost
              sintetizată într-un <b>ghid metodologic</b> dedicat celor care
              lucrează cu adolescenți și doresc să abordeze emoțiile prin
              activități creative.
            </p>
            <p className="w-full mb-2 text-md text-black text-justify">
              ➡️ Răsfoiește{" "}
              <a
                href="https://drive.google.com/file/d/1D-0_U6tesMJjwS1TdR_jUWdcJN-p84LA/view?usp=sharing"
                target="_blank"
                className="font-bold underline text-cyan-dark hover:text-cyan"
              >
                Ghidul metodologic
              </a>{" "}
              și descoperă metodele și exercițiile folosite în proiect.
            </p>
            <p className="w-full mb-2 text-md text-black text-justify">
              Ghidul include exemple de activități, explicații metodologice și
              idei practice pentru facilitatori, profesori, artiști sau
              lucrători de tineret.
            </p>
            <p className="w-full mb-2 text-md text-black text-justify">
              Proiectul <b>„Explorare prin artă”</b> este coordonat de{" "}
              <b>Asociația Unda 62</b>, în parteneriat cu{" "}
              <b>Stația Teatru/Muzical</b>, și a fost finanțat prin programul{" "}
              <b>În Stare de Bine</b>, susținut de <b>Kaufland România</b> și
              implementat de{" "}
              <b>Fundația pentru Dezvoltarea Societății Civile</b>.
            </p>

            <Image
              alt="proiecte-explorare-prin-arta"
              src={proiectExplorareWEBP2}
              className="w-full rounded-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Explorare prin arta - PDF - Google Drive link */}
      <div className="max-md:hidden w-full-2xl h-auto pt-14 max-md:px-4 items-center">
        <div className="md:w-11/12 mx-auto justify-between items-center gap-12">
          <motion.div
            variants={fadeIn("up")}
            initial="hidden"
            whileInView={"shown"}
            viewport={{ once: true, amount: 0.35 }}
            className="flex flex-col h-auto w-full-2xl max-md:px-4 justify-center items-center"
          >
            <iframe
              src="https://drive.google.com/file/d/1D-0_U6tesMJjwS1TdR_jUWdcJN-p84LA/preview"
              className="w-full h-[90vh] border-4 border-cyan-dark rounded-xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
