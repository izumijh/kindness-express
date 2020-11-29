import React from "react";

// import required components
import Content from "../Content/Content";

// import svg icons
import repost from "../../assets/images/buttons/repost-btn.svg";
import send from "../../assets/images/buttons/send-btn.svg";

// import css modules
import classes from "./ReactionToolbar.module.css";

const ReactionToolbar = (props) => {
  return (
    <div className={classes.container}>
      <Content>
        <p>Feel inspired? Spread the positivity!</p>
        <button className={classes.button}>
          <img src={repost} alt="repost icon" className={classes.repostBtn} />
          Pass this story on
        </button>
        <button className={classes.button}>
          <img src={send} alt="send icon" className={classes.sendBtn} />
          Send them a response!
        </button>
      </Content>
    </div>
  );
};

export default ReactionToolbar;
