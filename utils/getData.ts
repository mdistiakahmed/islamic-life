export const getPrayerTime = async (param: string) => {
  try {
    let prayerTime: any = {};

    switch (param) {
      case "bangladesh":
        ({ prayerTime } = await import("../data/prayer-time/bn"));
        break;
      case "canada":
        ({ prayerTime } = await import("../data/prayer-time/ca"));
        break;
      case "england":
        ({ prayerTime } = await import("../data/prayer-time/gb"));
        break;
      case "india":
        ({ prayerTime } = await import("../data/prayer-time/in"));
        break;
      case "indonasia":
        ({ prayerTime } = await import("../data/prayer-time/id"));
        break;
      case "ireland":
        ({ prayerTime } = await import("../data/prayer-time/ie"));
        break;

      case "malaysia":
        ({ prayerTime } = await import("../data/prayer-time/my"));
        break;
      case "pakistan":
        ({ prayerTime } = await import("../data/prayer-time/pk"));
        break;
      case "united-arab-emirates":
        ({ prayerTime } = await import("../data/prayer-time/ae"));
        break;
      case "saudi-arabia":
        ({ prayerTime } = await import("../data/prayer-time/sa"));
        break;
      case "sweden":
        ({ prayerTime } = await import("../data/prayer-time/se"));
        break;
      case "usa":
        ({ prayerTime } = await import("../data/prayer-time/us"));
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

export const getImportance = async (param: string) => {
  try {
    let importance: any = [];

    switch (param) {
      case "salat":
        ({ importance } = await import("../data/importance/salat-importance"));
        break;
      case "sawm":
        ({ importance } = await import("../data/importance/sawm-importance"));
        break;
      case "hajj":
        ({ importance } = await import("../data/importance/hajj-importance"));
        break;
      case "zakat":
        ({ importance } = await import("../data/importance/zakat-importance"));
        break;

      default:
        throw new Error(`No data file found for param: ${param}`);
    }

    return importance;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getDua = async (param: string) => {
  try {
    let dua: any = [];

    switch (param) {
      case "parents":
        ({ dua } = await import("../data/dua/parents"));
        break;

      case "success":
        ({ dua } = await import("../data/dua/success"));
        break;

      case "earning":
        ({ dua } = await import("../data/dua/earning"));
        break;

      case "suffering":
        ({ dua } = await import("../data/dua/suffering"));
        break;

      default:
        throw new Error(`No data file found for param: ${param}`);
    }

    return dua;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
