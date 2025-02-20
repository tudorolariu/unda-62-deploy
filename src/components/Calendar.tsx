const Calendar = () => {
  return (
    <div id="calendar">
      {/* Calendar */}
      <div
        className="flex flex-col h-auto w-screen-2xl py-14 max-md:px-4
      justify-center items-center bg-white"
      >
        <h2 className="text-4xl max-md:text-3xl text-black font-semibold mb-8 max-md:mb-4">
          Calendar activități
        </h2>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FBucharest&showPrint=0&showTitle=0&showTz=0&hl=ro&showCalendars=0&src=Z3J1bnpvdGltaUB1bmRhNjIuY29t&color=%23039BE5"
          className="w-11/12 max-md:w-full h-[75vh]
          border-4 border-cyan-dark rounded-xl shadow-xl md:shadow-2xl"
        ></iframe>
      </div>
    </div>
  );
};

export default Calendar;
