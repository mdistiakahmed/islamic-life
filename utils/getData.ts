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
