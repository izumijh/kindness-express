import React from "react";

// import required components
import Content from "../Content/Content";

// import svg Images
import haha from "../../assets/images/response-counter/haha.svg";
import smile from "../../assets/images/response-counter/smile.svg";
import wow from "../../assets/images/response-counter/wow.svg";
import repost from "../../assets/images/response-counter/repost.svg";

// import css modules
import classes from "./ReactionCounter.module.css";

const ReactionCounter = (props) => {
  // Detect if props has passed down a number, if no number, select a random number from 0-9
  const reactions = [
    {
      src: repost,
      counter: props.count
        ? props.count
        : Math.floor(Math.random() * Math.floor(9)),
    },
    {
      src: smile,
      counter: props.count
        ? props.count
        : Math.floor(Math.random() * Math.floor(9)),
    },
    {
      src: haha,
      counter: props.count
        ? props.count
        : Math.floor(Math.random() * Math.floor(9)),
    },
    {
      src: wow,
      counter: props.count
        ? props.count
        : Math.floor(Math.random() * Math.floor(9)),
    },
  ];

  let items = reactions.map((r, id) => {
    return (
      <span className={classes.reactionWrapper} key={id}>
        <img src={r.src} alt="times reposted" />
        {r.counter}
      </span>
    );
  });

  return (
    <div className={classes.container}>
      <Content>
        <p>Responses Received</p>
        {items}
      </Content>
    </div>
  );
};

export default ReactionCounter;
