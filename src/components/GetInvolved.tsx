"use client";

import { useState } from "react";
import getInvolvedBackground from "../assets/getInvolvedBackground.jpg";

const GetInvolved = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "Tânăr" },
    { id: "tab2", label: "Organizație" },
    { id: "tab3", label: "Comunitate" },
  ];

  const tabContent: any = {
    tab1: (
      <div>
        <p className="w-full md:pt-5 mb-2 text-md text-black text-justify">
          Vrei să faci parte din ce se întâmplă la UNDA 62? Devino voluntar!
          Poți propune activități, dezvolta abilități precum planificarea de
          evenimente, crearea de conținut sau comunicarea, și să lucrezi alături
          de o echipă de tineri ca tine.
        </p>
        <p className="w-full mb-2 text-md text-black text-justify">
          Ce înseamnă?
        </p>
        <p className="w-full text-md text-black text-justify">
          ● Întâlniri lunare cu echipa (unde facem planuri și mâncăm bunătăți).
        </p>
        <p className="w-full text-md text-black text-justify">
          ● Ore flexibile, care se potrivesc cu programul tău.
        </p>
        <p className="w-full text-md text-black text-justify">
          ● Șansa să faci o diferență în comunitate.
        </p>
        <p className="w-full text-md text-black text-justify">
          ● Libertatea să-ți pui ideile în practică.
        </p>
        <p className="w-full mt-2 mb-4 text-md text-black text-justify">
          Dacă te atrage ideea, vino în echipa noastră de voluntari! Hai să ne
          cunoști și să vezi cum e să fii pe undă cu noi.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeleZ3YjdmOkZ_lRFx3WVAlkvcNRU1U1oFDvoD1YIE1w0MDWg/viewform"
          target="_blank"
          className="hover:text-cyan text-black font-bold"
        >
          Vreau să devin voluntar!
        </a>
      </div>
    ),
    tab2: (
      <div>
        <p className="w-full md:pt-5 mb-2 text-md text-black text-justify">
          Noi, la UNDA 62, iubim colaborările! Dacă:
        </p>

        <p className="w-full text-md text-black text-justify">
          ● Ai nevoie de un spațiu pentru activități de tineret,
        </p>
        <p className="w-full text-md text-black text-justify">
          ● Plănuiești o acțiune locală și vrei un partener,
        </p>
        <p className="w-full text-md text-black text-justify">
          ● Sau vrei să construim împreună un proiect,
        </p>
        <p className="w-full mt-2 text-md text-black text-justify">
          suntem aici să discutăm idei și să găsim cea mai bună cale de a le
          pune în practică!
        </p>
        <p className="w-full mt-2 mb-4 text-md text-black text-justify"></p>
        <a href="#contact" className="hover:text-cyan  text-black font-bold">
          Contactează-ne pentru detalii!
        </a>
      </div>
    ),
    tab3: (
      <div>
        <p className="w-full md:pt-5 mb-2 text-md text-black text-justify">
          Există multe moduri în care poți susține UNDA 62:
        </p>
        <p className="w-full text-md text-black text-justify">
          ● Donații: Contribuie cu donații unice, recurente sau în materiale
          (vezi lista noastră de necesități).
        </p>
        <p className="w-full text-md text-black text-justify">
          ● Împărtășește ceea ce știi: Ai o pasiune sau un talent? De la arte la
          marketing, IT sau sănătate, ne-ar plăcea să te avem ca invitat pentru
          un eveniment!
        </p>
        <p className="w-full mb-4 text-md text-black text-justify">
          ● Descoperă-ne: Dacă vrei să afli mai multe despre ce facem, dar nu
          știi cum ai vrea să te implici, dă-ne un semn. Suntem bucuroși să te
          cunoaștem și să-ți arătăm centrul nostru!
        </p>
        <a href="#contact" className="hover:text-cyan text-black font-bold">
          Contactează-ne pentru detalii!
        </a>
      </div>
    ),
  };

  return (
    <div id="get-involved">
      {/* Implica-te */}
      <div
        className="flex flex-col h-auto w-screen-2xl py-14 max-md:px-4
      justify-center items-center bg-white"
      >
        <h2 className="text-4xl max-md:text-3xl text-black font-semibold mb-8 max-md:mb-4">
          Cum te poți implica?
        </h2>

        <div
          className="w-11/12 max-md:w-full h-auto lg:h-[63vh] border-4 border-cyan-dark rounded-xl
           bg-white px-3 md:px-14 py-3 md:py-10 shadow-xl md:shadow-2xl space-y-5"
        >
          <div className="grid grid-flow-col justify border-b-2 border-black">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`md:py-2 text-xl md:text-2xl font-semibold ${
                  activeTab === tab.id
                    ? "border-b-4 border-cyan text-cyan"
                    : "text-gray hover:text-cyan"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div>{tabContent[activeTab]}</div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
