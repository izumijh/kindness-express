import React from "react";

// import css modules
import classes from "./Reactions.module.css";

const Wow = (props) => {
  const smiley = props.isActive
    ? `${classes.smiley} ${classes.active}`
    : `${classes.smiley}`;

  const effects = props.isActive
    ? `${classes.effects} ${classes.active}`
    : `${classes.effects}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
      viewBox="0 0 86.25 72.09"
    >
      <g style={{ isolation: "isolate" }}>
        <g id="wow">
          <g id="smiley" className={smiley}>
            <image
              width="73"
              height="73"
              transform="translate(6.89 2.12)"
              opacity="0.2"
              xlinkHref="data:image/png;base64,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"
              style={{ mixBlendMode: "multiply" }}
            />
            <path
              d="M42.38,7.91A29.27,29.27,0,1,1,13.11,37.18h0A29.27,29.27,0,0,1,42.38,7.91Z"
              fill="#fafabf"
            />
            <path
              d="M42.38,7.91A29.27,29.27,0,1,1,13.11,37.18h0A29.27,29.27,0,0,1,42.38,7.91Z"
              fill="none"
              stroke="#597685"
              strokeMiterlimit="10"
              strokeWidth="3"
            />
            <ellipse cx="20.22" cy="39.4" rx="3.42" ry="1.3" fill="#fbacaa" />
            <ellipse cx="64.4" cy="39.4" rx="3.42" ry="1.3" fill="#fbacaa" />
            <ellipse
              cx="43.17"
              cy="47.51"
              rx="6.06"
              ry="5.02"
              fill="#fbacaa"
              stroke="#597685"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <path
              d="M36.43,10.77S21.18,15.2,18.21,28.5"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <path
              d="M49.75,63.18S65,58.74,68,45.44"
              fill="none"
              stroke="#fffa5a"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <circle
              cx="29.17"
              cy="33.06"
              r="6.31"
              fill="#4e7096"
              opacity="0.99"
              style={{ isolation: "isolate" }}
            />
            <ellipse cx="28.58" cy="36.29" rx="3.59" ry="2.71" fill="#7999b5" />
            <circle cx="32.8" cy="33.75" r="0.69" fill="#7999b5" />
            <ellipse cx="28.58" cy="38.1" rx="1.81" ry="0.89" fill="#9eb5c6" />
            <path
              d="M30.58,27.74l.66,1.32a.2.2,0,0,0,.16.12l1.46.21a.22.22,0,0,1,.18.25.14.14,0,0,1-.06.12l-1.06,1a.22.22,0,0,0-.06.19l.25,1.46a.23.23,0,0,1-.17.25.22.22,0,0,1-.14,0L30.49,32a.23.23,0,0,0-.2,0L29,32.67a.2.2,0,0,1-.29-.09.2.2,0,0,1,0-.13L28.92,31a.19.19,0,0,0-.07-.19l-1.06-1a.22.22,0,0,1,0-.3.21.21,0,0,1,.12-.07l1.47-.21a.2.2,0,0,0,.16-.12l.66-1.32a.22.22,0,0,1,.29-.1A.18.18,0,0,1,30.58,27.74Z"
              fill="#f8fdff"
            />
            <circle
              cx="55.6"
              cy="33.06"
              r="6.31"
              fill="#4e7096"
              opacity="0.99"
              style={{ isolation: "isolate" }}
            />
            <ellipse cx="55.01" cy="36.29" rx="3.59" ry="2.71" fill="#7999b5" />
            <circle cx="59.23" cy="33.75" r="0.69" fill="#7999b5" />
            <ellipse cx="55.01" cy="38.1" rx="1.81" ry="0.89" fill="#9eb5c6" />
            <path
              d="M57,27.74l.66,1.32a.2.2,0,0,0,.16.12l1.47.21a.22.22,0,0,1,.18.25.27.27,0,0,1-.06.12l-1.06,1a.19.19,0,0,0-.06.19l.25,1.46a.23.23,0,0,1-.18.25.22.22,0,0,1-.14,0L56.92,32a.23.23,0,0,0-.2,0l-1.31.69a.21.21,0,0,1-.29-.09.2.2,0,0,1,0-.13L55.35,31a.21.21,0,0,0-.06-.19l-1.06-1a.2.2,0,0,1,0-.3.19.19,0,0,1,.12-.07l1.46-.21a.2.2,0,0,0,.16-.12l.66-1.32a.22.22,0,0,1,.29-.1A.18.18,0,0,1,57,27.74Z"
              fill="#f8fdff"
            />
            <path
              d="M47.07,44.72c0,.84-1.74,1.35-3.9,1.35s-3.9-.51-3.9-1.35,1.75-1.5,3.9-1.5S47.07,43.87,47.07,44.72Z"
              fill="#ffe6e6"
            />
          </g>
          <g id="effects" className={effects}>
            <path
              d="M78.2,11.86l-.1-.07c-2.28-1.41-4.09-4.42-5-8.26L73,3v.05c-.81,3.93-2.59,7.06-4.86,8.58l-.32.22h0c2.36,1.4,4.24,4.52,5.12,8.52l.07.32,0-.21c.85-4,2.69-7.1,5-8.56Z"
              fill="#ddd8ea"
            />
            <path
              d="M84,21.17l0,0a6.43,6.43,0,0,1-2.46-4.09l-.06-.25v0A6.66,6.66,0,0,1,79,21.06l-.15.1h0a6.43,6.43,0,0,1,2.52,4.21l0,.16,0-.1a6.58,6.58,0,0,1,2.48-4.23Z"
              fill="#f2b1af"
            />
            <path
              d="M77.65,54.31l-.05,0a6.43,6.43,0,0,1-2.46-4.09l-.06-.25v0a6.7,6.7,0,0,1-2.4,4.24l-.16.1h0a6.43,6.43,0,0,1,2.53,4.21l0,.16,0-.1a6.52,6.52,0,0,1,2.47-4.23Z"
              fill="#c1d6f3"
            />
            <path
              d="M12,54.34l-.1-.07c-2.28-1.41-4.09-4.42-5-8.26l-.12-.52v0c-.81,3.93-2.59,7.06-4.86,8.59l-.32.21h0c2.37,1.4,4.24,4.52,5.12,8.52l.07.32,0-.21c.85-4,2.69-7.1,5-8.55Z"
              fill="#f2b1af"
            />
            <path
              d="M17.72,63.65l0,0a6.43,6.43,0,0,1-2.46-4.08l-.06-.25v0a6.64,6.64,0,0,1-2.4,4.24l-.15.11h0a6.38,6.38,0,0,1,2.53,4.2l0,.16,0-.1a6.5,6.5,0,0,1,2.47-4.22Z"
              fill="#ddd8ea"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Wow;
