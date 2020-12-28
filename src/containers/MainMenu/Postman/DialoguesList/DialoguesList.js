// This chat is shown when guests click on Postman
export const defaultChat = [
  {
    postmanEmote: 0,
    chat: [`Hello there!`, `What can I do for you?`],
    response: [
      `About this campaign`,
      `What should I do now?`,
      `Install this site to my homepage`,
    ],
    responseHandler: ["aboutCampaign", "whatDoNow", "addToHomepage"],
  },
];

// About the Campaign
export const aboutCampaign = [
  {
    postmanEmote: 1,
    chat: [
      <>
        This is <b>the Kindness Express</b>!
      </>,
      `People come here to talk about their personal experiences with kindness.`,
      <b>You should come here often!</b>,
    ],
    response: [`Why?`],
    responseHandler: ["next"],
    previousResponse: defaultChat[0].response[0],
  },
  {
    postmanEmote: 3,
    chat: [
      <>
        Well, why not?
        <b>This is a Wholesome Social Media!</b>
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
      `Hehe.. why don’t you post a story today and find out?`,
      `Is there anything else I can do for you?`,
    ],
    response: defaultChat[0].response,
    responseHandler: defaultChat[0].responseHandler,
    previousResponse: `Wow, how does it work?`,
  },
];

// What should I do now?
export const whatDoNow = [
  {
    postmanEmote: 1,
    chat: [
      <b>Hm, you should try posting something!</b>,
      `Anything! Even if you have nothing to post about!`,
      <>
        Or you could <b>send kind words</b> to people who might need it today.
      </>,
    ],
    response: [`You want me to post something?`],
    responseHandler: ["next"],
    previousResponse: defaultChat[0].response[1],
  },
  {
    postmanEmote: 2,
    chat: [
      `Try it out for me, okay?`,
      `You’ll need an account for posting, but…`,
      <>
        <b>After you made an account,</b> and I'll have a new feature for you!
      </>,
    ],
    response: [`I'll try.`],
    responseHandler: ["next"],
    previousResponse: `You want me to post something?`,
  },
  {
    postmanEmote: 0,
    chat: [`I’ll be waiting! :)`, `Is there anything else I can do for you?`],
    response: defaultChat[0].response,
    responseHandler: defaultChat[0].responseHandler,
    previousResponse: `I'll try.`,
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
    previousResponse: defaultChat[0].response[2],
  },
  {
    postmanEmote: 1,
    chat: [`That's fine!`, `Just come back if you ever change your mind.`],
    response: defaultChat[0].response,
    responseHandler: defaultChat[0].responseHandler,
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

// Newbie Intro
export const newbieIntro = [
  {
    postmanEmote: 1,
    chat: [
      `Oh, hey there!`,
      `Looks like you’ve already read some kind stories by yourself!`,
    ],
    response: [`I guess I have!`],
    responseHandler: ["next"],
  },
  {
    postmanEmote: 0,
    chat: [
      `And I’m glad you have!!`,
      <b>I work here at the Kindness Express!</b>,
      `Feel free to tap on my head to see what I do here!`,
    ],
    response: [`Ok, sure!`],
    responseHandler: ["quit"],
    previousResponse: `I guess I have!`,
  },
];
