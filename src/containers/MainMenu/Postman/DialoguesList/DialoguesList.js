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
      `I think you should come here often!`,
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
      `All the good news and good people 
      live here.`,
      `Besides, we are donating to Malaysia’s biggest charities depending on how posts people have made.`,
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
      `Or send kind words to wish someone a great day!`,
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
      `Come back to me after you made an account, and I will have a new feature for you!`,
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
      `I can do that for you!`,
      `So that you can launch this website anytime! Like an app on your phone!`,
      `Would you like me to do that for you?`,
    ],
    response: [`Yes, install`, `No, not now`],
    responseHandler: ["next", "next"],
    previousResponse: defaultChat[0].response[2],
  },
  {
    postmanEmote: 0,
    chat: [
      `Done! Hope to see more of you soon!`,
      `Is there anything else I can do for you?`,
    ],
    response: defaultChat[0].response,
    responseHandler: defaultChat[0].responseHandler,
    previousResponse: `Undo install`,
  },
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
      `I work here at the Kindness Express!`,
      `Feel free to tap on my head to see what I do here!`,
    ],
    response: [`Ok, sure!`],
    responseHandler: ["quit"],
    previousResponse: `I guess I have!`,
  },
];
