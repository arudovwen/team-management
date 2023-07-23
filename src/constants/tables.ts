export const TeamTableHeaders: { hasFilter: boolean; text: string }[] = [
  { hasFilter: false, text: "team name" },
  { hasFilter: false, text: "team code" },
  { hasFilter: false, text: "description" },
  { hasFilter: true, text: "state" },
  { hasFilter: true, text: "updated on" },
  { hasFilter: false, text: "" },
];

export const RequestTableHeaders: { hasFilter: boolean; text: string }[] = [
  { hasFilter: false, text: "request" },
  { hasFilter: true, text: "type" },
  { hasFilter: true, text: "initiator" },
  { hasFilter: true, text: "status" },
  { hasFilter: true, text: "updated on" },
  { hasFilter: false, text: "" },
];

export const DropDownOptions: any = {
  creation: [
    {
      approved: [
        {
          id: "",
          text: "View",
          icon: "FaEye",
        },
      ],
    },
    {
      "in-issue": [
        {
          id: "",
          text: "View",
          icon: "FaEye",
        },
        {
          id: "",
          text: "Modify",
          icon: "FaEdit",
        },
        {
          id: "",
          text: "Delete Request",
          icon: "FaTrash",
        },
      ],
    },
    {
      "in-review": [
        {
          id: "View",
          text: "View",
          icon: "FaEye",
        },
        {
          id: "",
          text: "Withdraw & Modify",
          icon: "FaEdit",
        },
        {
          id: "",
          text: "Withdraw & Delete Request",
          icon: "FaTrash",
        },
      ],
    },
    {
      draft: [
        {
          id: "",
          text: "Continue Request",
          icon: "FaEdit",
        },
        {
          id: "",
          text: "Delete Request",
          icon: "FaTrash",
        },
      ],
    },
  ],
  activation: [
    {
      approved: [
        {
          id: "",
          text: "View",
          icon: "FaEye",
        },
      ],
    },
    {
      "in-issue": [
        {
          id: "",
          text: "View",
          icon: "FaEye",
        },
        {
          id: "",
          text: "Modify",
          icon: "FaEdit",
        },
        {
          id: "",
          text: "Delete Request",
          icon: "FaTrash",
        },
      ],
    },
    {
      "in-review": [
        {
          id: "View",
          text: "View",
          icon: "FaEye",
        },

        {
          id: "",
          text: "Withdraw & Delete Request",
          icon: "FaTrash",
        },
      ],
    },
    {
      draft: [
        {
          id: "",
          text: "Continue Request",
          icon: "FaEdit",
        },
        {
          id: "",
          text: "Delete Request",
          icon: "FaTrash",
        },
      ],
    },
  ],
  active: [
    {
      id: "",
      text: "View",
      icon: "FaEye",
    },
    {
      id: "",
      text: "Modify",
      icon: "FaEdit",
    },
    {
      id: "",
      text: "Deactivate",
      icon: "FaBan",
    },
  ],
  inactive: [
    {
      id: "",
      text: "View",
      icon: "FaEye",
    },
    {
      id: "",
      text: "Modify",
      icon: "FaEdit",
    },
    {
      id: "",
      text: "Activate",
      icon: "FaPlayCircle",
    },
  ],
};
