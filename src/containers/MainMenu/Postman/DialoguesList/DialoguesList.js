// This chat is shown when guests click on Postman
export const defaultChat = [
  {
    postmanEmote: 0,
    chat: [`Hello there!`, `What can I do for you?`],
    response: [`About this campaign`, `What should I do now?`],
    responseHandler: ["aboutCampaign", "whatDoNow"],
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
        Well, why not? <b>This is a Wholesome Social Media!</b>
      </>,
      <>
        Besides,{" "}
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
      `Post about a kind experience, or send someone some kind words!`,
    ],
    response: [`You want me to post something?`],
    responseHandler: ["next"],
    previousResponse: defaultChat[0].response[1],
  },
  {
    postmanEmote: 2,
    chat: [
      `Try it out for me, okay?`,
      `You’ll need to log in, but trust me it'll be worth it.`,
      <>
        <b>Come back when you've successfully logged in,</b> and I'll have a new
        feature for you!
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

// Newbie Intro
export const newbieIntro = [
  {
    postmanEmote: 1,
    chat: [
      `Oh, hey there!`,
      `Looks like you’ve already caught some balloons by yourself!`,
    ],
    response: [`What do you mean?`],
    responseHandler: ["next"],
  },
  {
    postmanEmote: 2,
    chat: [
      <>
        See those balloons? They are{" "}
        <b>
          kind stories that the people at your current location have shared with
          us!
        </b>
      </>,
      `You could call this place a social media for kindness.`,
    ],
    response: [`Ah, I see.`],
    responseHandler: ["next"],
    previousResponse: `What do you mean?`,
  },
  {
    postmanEmote: 0,
    chat: [
      `That's all you need to know for now.`,
      `You can tap on my head if you ever need help.`,
    ],
    response: [`Ok, sure!`],
    responseHandler: ["quit"],
    previousResponse: `Ah, I see.`,
  },
];
