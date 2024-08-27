import Clock from "@/components/clock/Clock";
import React from "react";

const salatTimetable = [
  {
    name: "Fazr",
    schedule: {
      start: "05:10AM",
      end: "05:50AM",
    },
  },
  {
    name: "Zuhr",
    schedule: {
      start: "12:10PM",
      end: "03:30PM",
    },
  },
  {
    name: "Asr",
    schedule: {
      start: "04:10PM",
      end: "06:10PM",
    },
  },
  {
    name: "Maghrib",
    schedule: {
      start: "06:20PM",
      end: "06:50PM",
    },
  },
  {
    name: "Isha",
    schedule: {
      start: "07:40PM",
      end: "03:50PM",
    },
  },
];

const parseTimeString = (timeString: string) => {
  const [time, modifier] = timeString.split(/(AM|PM)/i);
  let [hours, minutes] = time.split(":").map(Number);

  if (modifier.toUpperCase() === "PM" && hours < 12) {
    hours += 12;
  }

  if (modifier.toUpperCase() === "AM" && hours === 12) {
    hours = 0;
  }

  const secondRatio = 0; // Assuming time string has no seconds
  const minuteRatio = minutes / 60;
  const hourRatio = (hours % 12) / 12 + minuteRatio / 12;

  return { hourRatio, minuteRatio, secondRatio };
};

const FiveQaqtSalatComponent = () => {
  const title = "Dhaka prayer time today";

  return (
    <div className="py-5">
      <h1 className="text-2xl text-center font-bold py-2">{title}</h1>

      <div className="grid grid-cols-1 gap-10">
        {salatTimetable.map((s, index) => {
          const startTime = parseTimeString(s.schedule.start);
          const endTime = parseTimeString(s.schedule.end);
          return (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between border-2 p-4 rounded-lg"
            >
              <h2 className="text-center text-2xl text-[#004b49] underline font-bold self-center">
                {s.name}
              </h2>
              <div className="flex flex-col items-center justify-center gap-4">
                <p className="text-xl font-bold">
                  {" "}
                  Start Time: {s.schedule.start}
                </p>
                <Clock
                  hourRatio={startTime.hourRatio}
                  minuteRatio={startTime.minuteRatio}
                  secondRatio={startTime.secondRatio}
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-4 mt-8 md:mt-0">
                <p className="text-xl font-bold"> End Time: {s.schedule.end}</p>
                <Clock
                  hourRatio={endTime.hourRatio}
                  minuteRatio={endTime.minuteRatio}
                  secondRatio={endTime.secondRatio}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const countries = [
  { name: "Bangladesh" },
  { name: "India" },
  { name: "America" },
  { name: "United Arab Emirates" },
  { name: "Pakistan" },
  { name: "England" },
  { name: "Australia" },
  { name: "Malaysia" },
  { name: "Indonasia" },
  { name: "Canada" },
];

const SalatTimePage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center py-4">
        Prayer Time By Country
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        {countries.map((c, index) => (
          <div
            key={index}
            className="p-[24px] border-2 flex item-center justify-center cursor-pointer"
          >
            <span>{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalatTimePage;
