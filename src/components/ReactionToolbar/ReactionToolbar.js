import React from "react";

// import required components
import Content from "../Content/Content";
import ReactionCounter from "../../components/ReactionCounter/ReactionCounter";

// import svg icons
import repost from "../../assets/images/buttons/repost-btn.svg";
import reposted from "../../assets/images/buttons/reposted-btn.svg";
import info from "../../assets/images/info-btn.svg";

// import css modules
import classes from "./ReactionToolbar.module.css";

const ReactionToolbar = (props) => {
  // Give a "passingOn" props to its parent JSX to set the Repost button text
  return (
    <div className={classes.container}>
      <Content>
        <h3 className={classes.miniheader}>
          What an amazing {props.isMessage ? "message" : "story"}!
        </h3>
        <span className={classes.infoBtn} onClick={props.clickedInfo}>
          <img src={info} alt="info button" />
        </span>
        <button
          className={
            props.isReposted
              ? `${classes.button} ${classes.active}`
              : classes.button
          }
          onClick={props.clickedRepost}
        >
          {props.isReposted ? (
            <>
              <img
                src={reposted}
                alt="repost icon"
                className={classes.repostBtn}
                style={{ top: "22%" }}
              />
              {props.isMessage ? "Message" : "Story"} reposted!
            </>
          ) : (
            <>
              <img
                src={repost}
                alt="repost icon"
                className={classes.repostBtn}
              />
              Repost {props.isMessage ? "message" : "this story"} for others to
              see!
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
