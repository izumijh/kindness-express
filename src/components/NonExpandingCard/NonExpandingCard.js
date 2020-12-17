import React from "react";

// import css modules
import classes from "./NonExpandingCard.module.css";

const ExpandingCard = (props) => {
  let style = {
    //   Change the colour of the border here
    borderColor: props.borderColor ? props.borderColor : "#dff0f5",
  };

  return (
    <div onClick={props.clicked} style={style} className={classes.wrapper}>
      <p className={classes.question}>{props.question}</p>
    </div>
  );
};

export default ExpandingCard;
