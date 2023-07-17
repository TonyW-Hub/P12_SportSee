import { API_KEYS } from "./appAPIResource";

export const mapper = {
  [API_KEYS.userInfo]: (obj) => {
    return obj.data.userInfos;
  },
  [API_KEYS.userScore]: (obj) => {
    if (obj?.data?.score) {
      return obj?.data?.score * 100;
    }

    return obj?.data?.todayScore * 100;
  },
  [API_KEYS.userEnergies]: (obj) => {
    return obj?.data?.keyData;
  },
  [API_KEYS.userActivity]: (obj) => {
    const newObj = obj?.data?.sessions?.map((current, index) => {
      return { ...current, key: index + 1 };
    });

    return newObj;
  },
  [API_KEYS.userPerformance]: (obj) => {
    const goodName = {
      1: "Cardio",
      2: "Energie",
      3: "Endurance",
      4: "Force",
      5: "Vitesse",
      6: "Intensité",
    };

    const newObj = obj?.data?.data?.map((current) => {
      current.kind = goodName[current.kind];
      return current;
    });

    return newObj;
  },
  [API_KEYS.userAverageSessions]: (obj) => {
    switch (obj.data.sessions.day) {
      case 0:
        obj.data.sessions[0].day = "L";
        break;

      default:
        break;
    }

    const setCurrentDayLetter = obj.data.sessions.map((session, index) => {
      switch (index) {
        case 0:
          session.day = "L";
          break;
        case 1:
          session.day = "M";
          break;
        case 2:
          session.day = "M";
          break;
        case 3:
          session.day = "J";
          break;
        case 4:
          session.day = "V";
          break;
        case 5:
          session.day = "S";
          break;
        case 6:
          session.day = "D";
          break;

        default:
          break;
      }

      return session;
    });

    obj.data.sessions = setCurrentDayLetter;

    return obj.data.sessions;
  },
};
