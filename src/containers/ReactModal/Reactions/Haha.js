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
    <svg
      id="react-haha"
      viewBox="0 0 90 70"
      style={{ transform: "translateY(-4%) translateX(15%)" }}
      onClick={props.clicked}
    >
      <g id="smiley" className={smiley}>
        <g id="Group_408" data-name="Group 408">
          <circle
            id="Ellipse_284-2"
            data-name="Ellipse 284-2"
            cx="30.05"
            cy="35.63"
            r="29.3"
            fill="#fafabf"
            stroke="#597685"
            strokeMiterlimit="10"
            strokeWidth="1.5"
          />
        </g>
        <ellipse
          id="Ellipse_294"
          data-name="Ellipse 294"
          cx="17.75"
          cy="28.44"
          rx="4"
          ry="2.2"
          fill="#fffa5a"
          opacity="0.62"
        />
        <ellipse
          id="Ellipse_295"
          data-name="Ellipse 295"
          cx="43.05"
          cy="28.44"
          rx="4"
          ry="2.2"
          fill="#fffa5a"
          opacity="0.62"
        />
        <g id="Group_409" data-name="Group 409">
          <path
            id="Path_1317"
            data-name="Path 1317"
            d="M26.59,36.8s.2-6.8,5-6.8,5,6.8,5,6.8"
            transform="translate(-13.85 -2.16)"
            fill="#fafabf"
            stroke="#597685"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <path
            id="Path_1318"
            data-name="Path 1318"
            d="M61.89,36.8s-.2-6.8-5-6.8-5,6.8-5,6.8"
            transform="translate(-13.85 -2.16)"
            fill="#fafabf"
            stroke="#597685"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <path
            id="Path_1319"
            data-name="Path 1319"
            d="M35.89,43.8a1.31,1.31,0,0,0-1.3,1.2v.2a9.52,9.52,0,0,0,18.9,0,1.24,1.24,0,0,0-1.1-1.4H35.89Z"
            transform="translate(-13.85 -2.16)"
            fill="#fbacaa"
            stroke="#597685"
            strokeMiterlimit="10"
            strokeWidth="1.5"
          />
          <ellipse
            id="Ellipse_296"
            data-name="Ellipse 296"
            cx="8.54"
            cy="37.44"
            rx="4.6"
            ry="1.7"
            fill="#fbacaa"
          />
          <ellipse
            id="Ellipse_297"
            data-name="Ellipse 297"
            cx="51.64"
            cy="37.44"
            rx="4.6"
            ry="1.7"
            fill="#fbacaa"
          />
        </g>
        <path
          id="Path_1320"
          data-name="Path 1320"
          d="M49.1,50.3c0,1.5-2.4,2.5-5.1,2.5s-4.8-1-4.8-2.5,2.2-2.7,5-2.7S49.1,48.9,49.1,50.3Z"
          transform="translate(-13.85 -2.16)"
          fill="#ffe6e6"
        />
        <path
          id="Path_1321"
          data-name="Path 1321"
          d="M37.4,11.4S22.2,15.8,19.2,29.1"
          transform="translate(-13.85 -2.16)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          id="Path_1322"
          data-name="Path 1322"
          d="M50.7,63.8s15.2-4.4,18.2-17.7"
          transform="translate(-13.85 -2.16)"
          fill="none"
          stroke="#fffa5a"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
      </g>
      <g id="effects" className={effects}>
        <line
          id="Line_42"
          data-name="Line 42"
          x1="53.05"
          y1="8.34"
          x2="58.15"
          y2="0.84"
          fill="none"
          stroke="#96b8e2"
          strokeMiterlimit="10"
          strokeWidth="3"
        />
        <line
          id="Line_43"
          data-name="Line 43"
          x1="57.15"
          y1="12.64"
          x2="65.05"
          y2="7.64"
          fill="none"
          stroke="#96b8e2"
          strokeMiterlimit="10"
          strokeWidth="3"
        />
        <line
          id="Line_44"
          data-name="Line 44"
          x1="60.15"
          y1="18.54"
          x2="69.25"
          y2="16.14"
          fill="none"
          stroke="#96b8e2"
          strokeMiterlimit="10"
          strokeWidth="3"
        />
      </g>
    </svg>
  );
};

export default Haha;
