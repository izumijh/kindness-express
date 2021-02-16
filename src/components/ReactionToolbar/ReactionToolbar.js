import React from "react";

// import required components
import Content from "../Content/Content";
import ReactionCounter from "../../components/ReactionCounter/ReactionCounter";

// import svg icons
import repost from "../../assets/images/buttons/repost-btn.svg";
import reposted from "../../assets/images/buttons/reposted-btn.svg";

// import css modules
import classes from "./ReactionToolbar.module.css";

const ReactionToolbar = (props) => {
  // Give a "passingOn" props to its parent JSX to set the Repost button text
  return (
    <div className={classes.container}>
      <Content>
        <h3>What an amazing story!</h3>
        <button className={classes.button} onClick={props.clickedRepost}>
          {props.isReposted ? (
            <>
              <img
                src={reposted}
                alt="repost icon"
                className={classes.repostBtn}
                style={{ top: "22%" }}
              />
              {props.passingOn.charAt(0).toUpperCase() +
                props.passingOn.slice(1)}{" "}
              reposted!
            </>
          ) : (
            <>
              <img
                src={repost}
                alt="repost icon"
                className={classes.repostBtn}
              />
              Repost this {props.passingOn} for others to see!
            </>
          )}
        </button>
        <div style={{ height: "1rem" }}></div>
        <h3>Leave a reaction on this story?</h3>
        <ReactionCounter count={props.count} />
      </Content>
    </div>
  );
};

export default ReactionToolbar;
