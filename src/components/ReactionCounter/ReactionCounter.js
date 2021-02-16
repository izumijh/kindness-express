import React, { useState } from "react";

// import svg components
import Haha from "./Reactions/Haha";
import Love from "./Reactions/Love";
import Wow from "./Reactions/Wow";

// import css modules
import classes from "./ReactionCounter.module.css";

const ReactionCounter = (props) => {
  const [selectedReactions, select] = useState([false, false, false]);

  // Detect if props has passed down a number, if no number, select a random number from 0-9
  const reactions = [
    {
      name: "love",
      selected: selectedReactions[0],
      counter: selectedReactions[0] ? props.count[0] + 1 : props.count[0],
    },
    {
      name: "haha",
      selected: selectedReactions[1],
      counter: selectedReactions[1] ? props.count[1] + 1 : props.count[1],
    },
    {
      name: "wow",
      selected: selectedReactions[2],
      counter: selectedReactions[2] ? props.count[2] + 1 : props.count[2],
    },
  ];

  const icons = [Love, Haha, Wow];

  const clickedReact = (id) => {
    let newArray = [...selectedReactions];
    newArray[id] = !newArray[id];
    select(newArray);
  };

  let items = reactions.map((r, id) => {
    let Component = icons[id];

    return (
      <button
        className={
          r.selected
            ? `${classes.reactionWrapper} ${classes.active}`
            : `${classes.reactionWrapper}`
        }
        key={id}
        onClick={() => clickedReact(id)}
      >
        <Component isActive={r.selected ? true : false} />
        {r.counter}
      </button>
    );
  });

  return <div className={classes.container}>{items}</div>;
};

export default ReactionCounter;
