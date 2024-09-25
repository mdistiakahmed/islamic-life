import { capitalize, parseSchedule } from "@/utils/converters";

const ThisMonthPrayerTime = ({ cityPrayerTime, city }: any) => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1; // Months are zero-based in JavaScript

  const thisMonthSalatTimes = cityPrayerTime
    .filter((item: any) => {
      const [year, month] = item.date.split("-").map(Number);
      return year === currentYear && month === currentMonth;
    })
    .map((item: any) => {
      return { date: item.date, schedule: parseSchedule(item.schedule) };
    });

  return (
    <div>
      <h3 className="text-xl text-center py-5 font-bold">
        {`This Month Prayer Time in (${capitalize(city)})`}
      </h3>
      {thisMonthSalatTimes.map((item: any, index: any) => (
        <div key={index}>
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-2">
            <div className="border-2 my-2 text-center flex items-center justify-center bg-[#004b49] text-white ">
              <p>{item.date}</p>
            </div>
            {item.schedule.map((s: any, index2: any) => (
              <div className="border-2 my-2 text-center text-sm" key={index2}>
                <p>{s.name}</p>
                <span className="whitespace-nowrap">{s.schedule.start}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThisMonthPrayerTime;
