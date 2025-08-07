"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeInEffect";
import cineSuntemJPG from "@/assets/cineSuntem.webp";
import Carousel from "@/components/Carousel";

const AboutUs = () => {
  return (
    <div id="about-us">
      <div className="w-full h-2 bg-cyan-dark"></div>
      {/* Cine suntem */}
      <div className="flex w-full-2xl h-auto pt-14 max-md:px-4 items-center">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 max-md:gap-3">
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            whileInView={"shown"}
            viewport={{ once: true, amount: 0.6 }}
            className="md:w-3/5 gap-3"
          >
            <h2 className="text-4xl max-md:text-3xl text-black font-semibold mb-4">
              Cine suntem?
            </h2>
            <p className="w-full mb-2 text-md text-black text-justify">
              UNDA 62 este un spațiu dedicat activităților gratuite pentru
              tineri, unde poți veni să îți petreci timpul liber.
            </p>
            <p className="w-full mb-2 text-md text-black text-justify">
              Suntem o echipă entuziastă de lucrători de tineret și voluntari
              care lucrează împreună pentru a crea un loc primitor, sigur și
              liber, cu resurse ce te ajută să te dezvolți și să descoperi
              moduri noi de a te bucura de timpul liber.
            </p>
            <p className="w-full mb-2 text-md text-black text-justify">
              Avem un scop comun: să creăm un loc care să fie cu adevărat{" "}
              <i>al nostru</i>.
            </p>
            <p className="w-full mb-2 text-md text-black text-justify">
              Visăm la o comunitate în care toți tinerii au șanse egale să
              crească și să lase un impact pozitiv, într-un mediu incluziv și
              plin de sprijin.
            </p>
            <p className="w-full text-md text-black text-justify">
              Cea mai tare parte? Totul aici este creat{" "}
              <b>de tineri, pentru tineri</b>, cu programe gratuite adaptate
              nevoilor și intereselor voastre.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"shown"}
            viewport={{ once: true, amount: 0.6 }}
            className="w-2/4 max-md:w-full"
          >
            <Image
              alt="cine-suntem"
              src={cineSuntemJPG}
              className="w-full rounded-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Ce facem */}
      <div className="w-full-2xl h-auto pt-14 max-md:px-4 items-center">
        <div className="md:w-11/12 mx-auto justify-between items-center gap-12">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12 max-md:gap-3">
            <motion.div
              variants={fadeIn("right")}
              initial="hidden"
              whileInView={"shown"}
              viewport={{ once: true, amount: 0.6 }}
            >
              <Carousel autoSlide={true} />
            </motion.div>

            <motion.div
              variants={fadeIn("left")}
              initial="hidden"
              whileInView={"shown"}
              viewport={{ once: true, amount: 0.7 }}
              className="md:w-5/12"
            >
              <h2 className="text-4xl max-md:text-3xl text-black font-semibold mb-4 mp:w-4/5">
                Ce facem?
              </h2>
              <p className="w-full mb-2 text-md text-black text-justify">
                La UNDA 62, te ajutăm să descoperi și să dezvolți abilități
                importante pentru viața de zi cu zi:
              </p>
              <p className="w-full text-md text-black text-justify">
                ● <b>Autocunoaștere:</b> să afli ce contează pentru tine, să-ți
                descoperi punctele forte și resursele.
              </p>
              <p className="w-full text-md text-black text-justify">
                ● <b>Abilități sociale:</b> încredere, curaj și cum să comunici
                ușor cu cei din jur.
              </p>
              <p className="w-full text-md text-black text-justify">
                ● <b>Gestionarea vieții:</b> de la cum să-ți organizezi
                programul, și la cum să faci alegeri sănătoase, până la cum să
                te descurci cu problemele neașteptate sau să găsești ajutor
                atunci când ai nevoie.
              </p>
            </motion.div>
          </div>
          <p className="w-full mt-6 max-md:mt-2 mb-2 text-md text-black text-justify">
            Organizăm săptămânal activități educative și recreative care te
            ajută să crești și să te conectezi cu alții. Dar centrul nostru nu e
            doar despre „program”; e un loc deschis mereu, cu cărți, jocuri și
            tot felul de materiale creative care te fac să te simți acasă.
          </p>
          <p className="w-full text-md text-black text-justify">
            Toate activitățile noastre sunt făcute <b>împreună cu voi</b>, pe
            baza nevoilor și intereselor voastre. Strângem idei prin
            chestionare, întâlniri și discuții directe, dar cel mai fain e când
            vă implicați activ în organizare și implementare. Așa construim
            împreună un spațiu unde ideile voastre devin realitate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
