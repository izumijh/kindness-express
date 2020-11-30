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
    <svg id="react-love" viewBox="0 0 90 70" onClick={props.clicked}>
      <g id="smiley" className={smiley}>
        <circle
          id="Ellipse_285-2"
          data-name="Ellipse 285-2"
          cx="37.96"
          cy="31.9"
          r="29.3"
          fill="#fafabf"
          stroke="#597685"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
        <path
          id="Path_1323"
          data-name="Path 1323"
          d="M37.2,11.1S22,15.5,19,28.8"
          transform="translate(-5.92 -5.55)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          id="Path_1324"
          data-name="Path 1324"
          d="M50.5,63.5s15.2-4.4,18.2-17.7"
          transform="translate(-5.92 -5.55)"
          fill="none"
          stroke="#fffa5a"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
        <ellipse
          id="Ellipse_298"
          data-name="Ellipse 298"
          cx="26.11"
          cy="29.45"
          rx="2.2"
          ry="4.6"
          fill="#4e7096"
          opacity="0.99"
        />
        <ellipse
          id="Ellipse_299"
          data-name="Ellipse 299"
          cx="49.17"
          cy="29.45"
          rx="2.2"
          ry="4.6"
          fill="#4e7096"
          opacity="0.99"
        />
        <path
          id="Path_1325"
          data-name="Path 1325"
          d="M40,45.7s7.5,6.5,14.2-.8"
          transform="translate(-5.92 -5.55)"
          fill="none"
          stroke="#597685"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
        <ellipse
          id="Ellipse_300"
          data-name="Ellipse 300"
          cx="18.78"
          cy="35.45"
          rx="4.6"
          ry="1.7"
          fill="#fbacaa"
        />
        <ellipse
          id="Ellipse_301"
          data-name="Ellipse 301"
          cx="57.28"
          cy="35.45"
          rx="4.6"
          ry="1.7"
          fill="#fbacaa"
        />
      </g>
      <g id="effects" className={effects}>
        <path
          id="Path_841"
          data-name="Path 841"
          d="M76.8,8.8l-.6.3L76,8.5c-.8-2-2.7-3.7-4.6-2.6h0a4.74,4.74,0,0,0-2.1,5.7l.2.6,2.8,7.4L80,15.2a4.74,4.74,0,0,0,2.1-5.7h0C81.3,7.5,78.8,7.6,76.8,8.8Z"
          transform="translate(-5.92 -5.55)"
          fill="#fbacaa"
        />
        <path
          id="Path_841-2"
          data-name="Path 841-2"
          d="M9.7,14l-.1.4-.4-.2c-1.2-.7-2.7-.7-3.1.6h0a3.09,3.09,0,0,0,1.3,3.6l.4.2L12,21l1.8-5.1a3.09,3.09,0,0,0-1.3-3.6h0C11.3,11.6,10.2,12.7,9.7,14Z"
          transform="translate(-5.92 -5.55)"
          fill="#fbacaa"
        />
        <path
          id="Path_841-3"
          data-name="Path 841-3"
          d="M82.4,22.3h-.3V22c.1-.9-.2-1.8-1.2-1.7h0A2.23,2.23,0,0,0,79,22.1v.3l-.4,3.2,3.6-.5a2.23,2.23,0,0,0,1.9-1.8h0C84.3,22.5,83.3,22.2,82.4,22.3Z"
          transform="translate(-5.92 -5.55)"
          fill="#fbacaa"
        />
      </g>
    </svg>
  );
};

export default Haha;
