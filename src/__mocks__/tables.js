export const TeamData = [
  {
    id: 1,
    teamName: "Team Royal",
    teamCode: "TM-01",
    description: "Leading with excellent customer se...",
    state:  "active",
    updatedOn: new Date(),
    isNew: false,
    isNameEdited: true,
  },
  {
    id: 2,
    teamName: "Team Sunshine",
    teamCode: "TM-02",
    description: "Leading with excellent customer se...",
    state:  "inactive",
    updatedOn: new Date(),
    isNew: false,
    isNameEdited:false
  },
  {
    id: 3,
    teamName: "Team Pride",
    teamCode: "TM-03",
    description: "Leading with excellent customer se...",
    state:  "active",
    updatedOn: new Date(),
    isNew: true,
    isNameEdited:false
  },
];

export const RequestData = [
  {
    id: 1,
    request: "Creation of Team Royal",
    type: "Creation",
    initiator: "John wick",
    status: "approved",
    updatedOn: new Date(),
  },
  {
    id: 6,
    request: "Creation of Team Royal",
    type: "Creation",
    initiator: "John wick",
    status: "in-review",
    updatedOn: new Date(),
  },
  {
    id: 2,
    request: "Deactivation of Sunshine",
    type: "Bulk Creation",
    initiator: "John wick",
    status:  "in-review",
    updatedOn: new Date(),
  },
  {
    id: 3,
    request: "Creation of Team 1, Team 2, Team 3,...",
    type: "Deactivation",
    initiator: "John wick",
    status: "in-issue",
    updatedOn: new Date(),
  },
  {
    id: 4,
    request: "Creation of Team Royal",
    type: "Activation",
    initiator: "John wick",
    status: "draft",
    updatedOn: new Date(),
  },
  {
    id: 5,
    request: "Creation of Team Royal",
    type: "Modification",
    initiator: "John wick",
    status: "approved",
    updatedOn: new Date(),
  },
];
