"use client";

import { capitalize, parseSchedule, parseTimeString } from "@/utils/converters";
import Clock from "./clock/Clock";
import { useEffect, useState } from "react";

const FiveQaqtSalatComponent = ({ cityPrayerTime, city }: any) => {
  const [currentSchedule, setCurrentSchedule] = useState<any>(null);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0]; // Get current date in 'YYYY-MM-DD' format

    const match = cityPrayerTime.find((item: any) => item.date === today);

    if (match) {
      const parsedSchedule = parseSchedule(match.schedule);
      setCurrentSchedule(parsedSchedule);
    }
  }, []);

  const title = `${capitalize(
    city
  )} prayer time today ${new Date().toLocaleDateString()}`;

  return (
    <div className="py-5 flex flex-col items-center">
      <h1 className="text-xl text-center font-bold py-2">{title}</h1>

      {currentSchedule ? (
        <div className="flex flex-col md:flex-row gap-2">
          {currentSchedule?.map((s: any, index: any) => {
            const startTime = parseTimeString(s.schedule.start);

            return (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-around border-2 p-4 px-16 md:px-4 rounded-lg"
              >
                <div className="flex flex-col items-center justify-center gap-4">
                  <h2 className="text-center text-lg text-[#004b49] underline font-bold self-center">
                    {s.name}
                  </h2>
                  <Clock
                    hourRatio={startTime.hourRatio}
                    minuteRatio={startTime.minuteRatio}
                    secondRatio={startTime.secondRatio}
                  />
                  <p className="text-md font-bold text-center whitespace-nowrap">
                    {" "}
                    Start: {s.schedule.start}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-2xl font-bold text-center p-10">Loading...</div>
      )}
    </div>
  );
};

export default FiveQaqtSalatComponent;
