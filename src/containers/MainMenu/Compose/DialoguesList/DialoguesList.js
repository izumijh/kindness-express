// This menu is only shown if user is detected to be a registered user
export const defaultMenu = [
  {
    chat: [`What should I do today?`],
    response: [`Post a Story`, `Say Kind Words`],
    responseHandler: ["wantToPostStory", "wantToPostMessage"],
  },
];

// This menu is only shown for guests
export const guestMenu = [
  {
    chat: [`Please log in with your account to start sharing your stories!`],
    response: [`Register / Log in`],
    responseHandler: ["startLogin"],
  },
];
