import React from "react";

// import React Bootstrap components
import Image from "react-bootstrap/Image";

// import SVG images
import bigsmile from "../../../../assets/images/postman-emotes/big-smile.svg"; //0
import xd from "../../../../assets/images/postman-emotes/xd.svg"; //1
import smile from "../../../../assets/images/postman-emotes/smile.svg"; //2
import cry from "../../../../assets/images/postman-emotes/cry.svg"; //3
import notif from "../../../../assets/images/postman-emotes/notif.svg"; //4

// import css modules
import classes from "./PostmanEmotes.module.css";

const PostmanEmotes = (props) => {
  const emotes = [bigsmile, xd, smile, cry, notif];

  let emoting = bigsmile;
  if (props.postmanEmote) {
    emoting = emotes[props.postmanEmote];
  }

  return (
    <Image
      src={emoting}
      alt="postman icon"
      onClick={props.clicked}
      className={classes.animated}
    />
  );
};

export default PostmanEmotes;
