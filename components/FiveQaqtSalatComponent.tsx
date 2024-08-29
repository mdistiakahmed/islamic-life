"use client";

import { capitalize, parseSchedule, parseTimeString } from "@/utils/converters";
import Clock from "./clock/Clock";
import { useEffect, useState } from "react";

const FiveQaqtSalatComponent = ({ cityPrayerTime, city }: any) => {
  const [currentSchedule, setCurrentSchedule] = useState<any>(null);

  useEffect(() => {
    const today = "2024-09-01"; //new Date().toISOString().split("T")[0]; // Get current date in 'YYYY-MM-DD' format

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
    <div className="py-5">
      <h1 className="text-2xl text-center font-bold py-2">{title}</h1>

      {currentSchedule ? (
        <div className="grid grid-cols-1 gap-10">
          {currentSchedule?.map((s: any, index: any) => {
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
                  <p className="text-xl font-bold">
                    {" "}
                    End Time: {s.schedule.end}
                  </p>
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
      ) : (
        <div className="text-2xl font-bold text-center p-10">Loading...</div>
      )}
    </div>
  );
};

export default FiveQaqtSalatComponent;
