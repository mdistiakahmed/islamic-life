export const getPrayerTime = async (param: string) => {
  try {
    let prayerTime: any = {};

    switch (param) {
      case "bangladesh":
        ({ prayerTime } = await import("../data/prayer-time/bn"));
        break;
      case "america":
        ({ prayerTime } = await import("../data/prayer-time/bn"));
        break;
      case "birthday":
        break;
      case "cat":
        break;
      case "thumbs-up":
        break;
      case "drake":
        break;
      case "spiderman":
        break;
      case "side-eye":
        break;
      default:
        throw new Error(`No data file found for param: ${param}`);
    }

    return prayerTime;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
