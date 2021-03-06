import React from "react";

// import css modules
import classes from "./Reactions.module.css";

const Haha = (props) => {
  const smiley = props.isActive
    ? `${classes.smiley} ${classes.active}`
    : `${classes.smiley}`;

  const effects = props.isActive
    ? `${classes.effects} ${classes.active}`
    : `${classes.effects}`;

  return (
    <svg id="react-stars" viewBox="0 0 90 70" onClick={props.clicked}>
      <g id="smiley" className={smiley}>
        <g id="Group_402" data-name="Group 402">
          <circle
            id="Ellipse_283-2"
            data-name="Ellipse 283-2"
            cx="43.14"
            cy="32.88"
            r="29.3"
            fill="#fafabf"
            stroke="#597685"
            strokeMiterlimit="10"
            strokeWidth="1.5"
          />
        </g>
        <ellipse
          id="Ellipse_283"
          data-name="Ellipse 283"
          cx="21"
          cy="35.1"
          rx="3.4"
          ry="1.3"
          fill="#fbacaa"
        />
        <ellipse
          id="Ellipse_284"
          data-name="Ellipse 284"
          cx="65.2"
          cy="35.1"
          rx="3.4"
          ry="1.3"
          fill="#fbacaa"
        />
        <ellipse
          id="Ellipse_285"
          data-name="Ellipse 285"
          cx="44"
          cy="43.2"
          rx="6.1"
          ry="5"
          fill="#fbacaa"
          stroke="#597685"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
        <path
          id="Path_1307"
          data-name="Path 1307"
          d="M38.2,11.2S23,15.6,20,28.9"
          transform="translate(-1 -4.7)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          id="Path_1308"
          data-name="Path 1308"
          d="M51.6,63.6s15.2-4.4,18.2-17.7"
          transform="translate(-1 -4.7)"
          fill="none"
          stroke="#fffa5a"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
        <g id="Group_405" data-name="Group 405">
          <g id="Group_403" data-name="Group 403">
            <circle
              id="Ellipse_286"
              data-name="Ellipse 286"
              cx="29.99"
              cy="28.81"
              r="6.3"
              fill="#4e7096"
              opacity="0.99"
            />
            <ellipse
              id="Ellipse_287"
              data-name="Ellipse 287"
              cx="29.39"
              cy="32.01"
              rx="3.6"
              ry="2.7"
              fill="#7999b5"
            />
            <circle
              id="Ellipse_288"
              data-name="Ellipse 288"
              cx="33.59"
              cy="29.51"
              r="0.7"
              fill="#7999b5"
            />
            <ellipse
              id="Ellipse_289"
              data-name="Ellipse 289"
              cx="29.39"
              cy="33.81"
              rx="1.8"
              ry="0.9"
              fill="#9eb5c6"
            />
            <path
              id="Path_1309"
              data-name="Path 1309"
              d="M32.39,28.21l.7,1.3c0,.1.1.1.2.1l1.5.2a.22.22,0,0,1,.2.2.1.1,0,0,1-.1.1l-1.1,1c-.1,0-.1.1-.1.2l.2,1.5a.22.22,0,0,1-.2.2h-.1l-1.3-.6h-.2l-1.3.7c-.1.1-.2,0-.3-.1v-.1l.2-1.5c0-.1,0-.1-.1-.2l-1-1a.19.19,0,0,1,0-.3l.1-.1,1.5-.2c.1,0,.1-.1.2-.1l.7-1.3q0-.3.3,0C32.29,28.11,32.39,28.11,32.39,28.21Z"
              transform="translate(-1 -4.7)"
              fill="#f8fdff"
            />
          </g>
          <g id="Group_404" data-name="Group 404">
            <circle
              id="Ellipse_290"
              data-name="Ellipse 290"
              cx="56.43"
              cy="28.81"
              r="6.3"
              fill="#4e7096"
              opacity="0.99"
            />
            <ellipse
              id="Ellipse_291"
              data-name="Ellipse 291"
              cx="55.83"
              cy="32.01"
              rx="3.6"
              ry="2.7"
              fill="#7999b5"
            />
            <circle
              id="Ellipse_292"
              data-name="Ellipse 292"
              cx="60.03"
              cy="29.51"
              r="0.7"
              fill="#7999b5"
            />
            <ellipse
              id="Ellipse_293"
              data-name="Ellipse 293"
              cx="55.83"
              cy="33.81"
              rx="1.8"
              ry="0.9"
              fill="#9eb5c6"
            />
            <path
              id="Path_1310"
              data-name="Path 1310"
              d="M58.83,28.21l.7,1.3c0,.1.1.1.2.1l1.5.2a.22.22,0,0,1,.2.2.1.1,0,0,1-.1.1l-1.1,1c-.1,0-.1.1-.1.2l.2,1.5a.22.22,0,0,1-.2.2H60l-1.3-.6h-.2l-1.3.7c-.1.1-.2,0-.3-.1v-.1l.2-1.5c0-.1,0-.1-.1-.2l-1-1a.19.19,0,0,1,0-.3l.1-.1,1.5-.2c.1,0,.1-.1.2-.1l.7-1.3q0-.3.3,0C58.73,28.11,58.83,28.11,58.83,28.21Z"
              transform="translate(-1 -4.7)"
              fill="#f8fdff"
            />
          </g>
        </g>
        <path
          id="Path_1311"
          data-name="Path 1311"
          d="M48.9,45.1c0,.8-1.7,1.4-3.9,1.4s-3.9-.5-3.9-1.4,1.7-1.5,3.9-1.5S48.9,44.3,48.9,45.1Z"
          transform="translate(-1 -4.7)"
          fill="#ffe6e6"
        />
      </g>
      <g id="effects" className={effects}>
        <path
          id="Path_1312"
          data-name="Path 1312"
          d="M80.9,13.6l-.1-.1c-2.3-1.4-4.1-4.4-5-8.3l-.1-.5h0c-.8,3.9-2.6,7.1-4.9,8.6l-.3.2h0c2.4,1.4,4.2,4.5,5.1,8.5l.1.3v-.2c.9-4,2.7-7.1,5-8.6Z"
          transform="translate(-1 -4.7)"
          fill="#ddd8ea"
        />
        <path
          id="Path_1313"
          data-name="Path 1313"
          d="M86.6,22.9h0a6.38,6.38,0,0,1-2.5-4.1l-.1-.3h0a6.23,6.23,0,0,1-2.4,4.2l-.2.1h0A6,6,0,0,1,83.9,27v.1a8.28,8.28,0,0,1,2.7-4.2Z"
          transform="translate(-1 -4.7)"
          fill="#f2b1af"
        />
        <path
          id="Path_1314"
          data-name="Path 1314"
          d="M79.4,54.7h0a6.38,6.38,0,0,1-2.5-4.1l-.1-.3h0a6.23,6.23,0,0,1-2.4,4.2l-.2.1h0a6,6,0,0,1,2.5,4.2v.1a8.28,8.28,0,0,1,2.7-4.2Z"
          transform="translate(-1 -4.7)"
          fill="#c1d6f3"
        />
        <path
          id="Path_1315"
          data-name="Path 1315"
          d="M11.4,50.5l-.1-.1C9,49,7.2,46,6.3,42.1l-.1-.5h0c-.8,3.9-2.6,7.1-4.9,8.6l-.3.2H1c2.4,1.4,4.2,4.5,5.1,8.5l.1.3V59c.9-4,2.7-7.1,5-8.6Z"
          transform="translate(-1 -4.7)"
          fill="#f2b1af"
        />
        <path
          id="Path_1316"
          data-name="Path 1316"
          d="M17.2,59.8h0a6.38,6.38,0,0,1-2.5-4.1l-.1-.3h0a6.23,6.23,0,0,1-2.4,4.2l-.2.1h0a6,6,0,0,1,2.5,4.2V64a7.68,7.68,0,0,1,2.7-4.2Z"
          transform="translate(-1 -4.7)"
          fill="#ddd8ea"
        />
      </g>
    </svg>
  );
};

export default Haha;
