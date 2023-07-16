// userId can have value 12 or 18
export const userId = "12";

export const API_KEYS = {
  userActivity: 1,
  userPerformance: 2,
  userInfo: 3,
  userScore: 4,
  userAverageSessions: 5,
  userEnergies: 6,
};

export const APP_API_RESOURCE = [
  {
    url: (userId) => `user/${userId}/activity`,
    id: API_KEYS.userActivity,
  },
  {
    url: (userId) => `user/${userId}/performance`,
    id: API_KEYS.userPerformance,
  },
  {
    url: (userId) => `user/${userId}`,
    id: API_KEYS.userInfo,
  },
  {
    url: (userId) => `user/${userId}`,
    id: API_KEYS.userScore,
  },
  {
    url: (userId) => `user/${userId}`,
    id: API_KEYS.userEnergies,
  },
  {
    url: (userId) => `user/${userId}/average-sessions`,
    id: API_KEYS.userAverageSessions,
  },
];
