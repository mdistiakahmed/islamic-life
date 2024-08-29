export const parseTimeString = (timeString: string) => {
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

export const capitalize = (input: string): string => {
  if (!input) return "";
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
};

export const parseSchedule = (scheduleStr: any) => {
  return scheduleStr
    .split(";")
    .filter((entry: any) => entry)
    .map((entry: any) => {
      const [name, start, end] = entry.split("-");
      return {
        name: name,
        schedule: {
          start: start,
          end: end,
        },
      };
    });
};
