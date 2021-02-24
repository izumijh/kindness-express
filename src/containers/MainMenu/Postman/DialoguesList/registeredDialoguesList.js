// Registered User Profile Intro
export const profileIntro = [
  {
    postmanEmote: 1,
    chat: [
      <b>Oh my gosh!</b>,
      `You actually made an account!`,
      <b>You’re now one of us!!</b>,
    ],
    response: [`Yeah!!`],
    responseHandler: ["next"],
  },
  {
    postmanEmote: 0,
    chat: [
      <b>As promised, I have a new feature for you!</b>,
      <>
        You can access your <b>Kindness Profile</b> anytime, through me!
      </>,
    ],
    response: [`Got it!`],
    responseHandler: ["next"],
    previousResponse: `Yeah!!`,
  },
  {
    postmanEmote: 2,
    chat: [`So, what can I do for you today?`],
    response: [
      `View My Profile`,
      `About this campaign`,
      `Install this site to my homepage`,
    ],
    responseHandler: ["viewMyProfile", "newAboutCampaign", "addToHomepage"],
    previousResponse: `Got it!`,
  },
];

export const newDefaultChat = [
  {
    postmanEmote: 0,
    chat: [`Hello there!`, `What can I do for you?`],
    response: [
      `View My Profile`,
      `About this campaign`,
      `Install this site to my homepage`,
    ],
    responseHandler: ["viewMyProfile", "newAboutCampaign", "addToHomepage"],
  },
];

// About the Campaign
export const newAboutCampaign = [
  {
    postmanEmote: 1,
    chat: [
      <>
        This is <b>the Kindness Express</b>!
      </>,
      `People come here to talk about their personal experiences with kindness.`,
      <b>you should come here often!</b>,
    ],
    response: [`Why?`],
    responseHandler: ["next"],
    previousResponse: `About this campaign`,
  },
  {
    postmanEmote: 3,
    chat: [
      <>
        Well, why not? <b>This is a Wholesome Social Media!</b>
      </>,
      <>
        Besides,
        <b>
          we are donating to Malaysian charities based on how many posts people
          have made.
        </b>
      </>,
    ],
    response: [`Wow, how does it work?`],
    responseHandler: ["next"],
    previousResponse: `Why?`,
  },
  {
    postmanEmote: 1,
    chat: [
      <>
        Hehe.. you can find out more through your <b>Kindness Profile!</b>
      </>,
      `Anything else I can do for you?`,
    ],
    response: newDefaultChat[0].response,
    responseHandler: newDefaultChat[0].responseHandler,
    previousResponse: `Wow, how does it work?`,
  },
];

// Add to Homepage
export const addToHomepage = [
  {
    postmanEmote: 1,
    chat: [
      `After installing, you can launch this website like an app on your phone!`,
      `Would you like that?`,
    ],
    response: [`Yes, install`, `No, not now`],
    responseHandler: ["featureNotAvailable", "next"],
    previousResponse: newDefaultChat[0].response[2],
  },
  {
    postmanEmote: 0,
    chat: [`That's fine!`, `Just come back if you ever change your mind.`],
    response: newDefaultChat[0].response,
    responseHandler: newDefaultChat[0].responseHandler,
    previousResponse: `No, not now`,
  },
  // {
  //   postmanEmote: 0,
  //   chat: [
  //     `Done! Hope to see more of you soon!`,
  //     `Is there anything else I can do for you?`,
  //   ],
  //   response: defaultChat[0].response,
  //   responseHandler: defaultChat[0].responseHandler,
  //   previousResponse: `Undo install`,
  // },
];
