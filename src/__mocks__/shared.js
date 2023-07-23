export const auth$ = {
  subscribe: jest.fn(() => ({
    unsubscribe: jest.fn(),
  })),
};

export const isTokenValid = jest.fn();

export const TeamData = [
  {
    id: 1,
    teamName: "Team Royal",
    teamCode: "TM-01",
    description: "Leading with excellent customer se...",
    state: 1,
    updatedOn: new Date(),
  },
  {
    id: 2,
    teamName: "Team Sunshine",
    teamCode: "TM-02",
    description: "Leading with excellent customer se...",
    state: 0,
    updatedOn: new Date(),
  },
  {
    id: 3,
    teamName: "Team Pride",
    teamCode: "TM-03",
    description: "Leading with excellent customer se...",
    state: 1,
    updatedOn: new Date(),
  },
];