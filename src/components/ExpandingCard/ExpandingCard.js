import React from "react";

// import css modules
import classes from "./ExpandingCard.module.css";

const ExpandingCard = (props) => {
  let style = {
    //   Change the colour of the border here
    borderColor: props.borderColor ? props.borderColor : "#dff0f5",
  };

  return (
    <div
      onClick={props.clicked}
      style={style}
      className={
        props.active
          ? `${classes.wrapper} ${classes.active}`
          : `${classes.wrapper}`
      }
    >
      {/* Parent will ask question prop to be rendered */}
      <p className={classes.question}>{props.question}</p>
      <p
        className={
          props.active
            ? `${classes.answer} ${classes.active}`
            : `${classes.answer}`
        }
      >
        {/* Parent will ask answer prop to be rendered */}
        {props.answer}
      </p>
    </div>
  );
};

export default ExpandingCard;
