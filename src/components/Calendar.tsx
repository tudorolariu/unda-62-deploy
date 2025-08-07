import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeInEffect";

const Calendar = () => {
  return (
    <div id="calendar">
      {/* Calendar */}
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"shown"}
        viewport={{ once: true, amount: 0.45 }}
        className="flex flex-col h-auto w-full-2xl pt-14 max-md:px-4 justify-center items-center"
      >
        <h2 className="max-md:hidden text-4xl max-md:text-3xl text-black font-semibold mb-8">
          Calendar activități
        </h2>

        <h2 className="md:hidden w-full text-left text-4xl max-md:text-3xl text-black font-semibold mb-8">
          Calendar activități
        </h2>

        {/* <p className="md:w-11/12 max-md:mt-2 mb-6 text-md text-black text-justify">
          Aruncă o privire peste evenimentele care urmează la centrul nostru de
          tineret. Dacă vrei să vii, dar nu te regăsești în activitățile din
          calendar, spune-ne AICI ce ți-ar plăcea să facem – suntem mereu
          deschiși la idei noi!
        </p> */}

        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FBucharest&showPrint=0&showTitle=0&showTz=0&showCalendars=0&hl=ro&src=Y19iN2MzYmM1NDhjZGYyMTEyOTFmZGZhZmE3YjY5N2NhYTU1NGNkNjA1YTVkOTgyMDdmMDQ5MTRhNjg4Y2ZmZDM2QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23009688"
          className="max-md:hidden w-11/12 h-[75vh]
          border-4 border-cyan-dark rounded-xl shadow-xl md:shadow-2xl"
        ></iframe>

        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FBucharest&showPrint=0&showTitle=0&showCalendars=0&showTz=0&mode=AGENDA&hl=ro&src=Y19iN2MzYmM1NDhjZGYyMTEyOTFmZGZhZmE3YjY5N2NhYTU1NGNkNjA1YTVkOTgyMDdmMDQ5MTRhNjg4Y2ZmZDM2QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23009688"
          className="md:hidden w-full h-[80vh]
          border-4 border-cyan-dark rounded-xl shadow-xl md:shadow-2xl"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default Calendar;
