import React from "react";

// import css modules
import classes from "./Reactions.module.css";

const Love = (props) => {
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
        <g id="love">
          <g id="effects" className={effects}>
            <path
              d="M75,8.21l-.6.34-.24-.62c-.78-2-2.66-3.7-4.61-2.58h0a4.87,4.87,0,0,0-2.12,5.74l.24.62,2.82,7.42,7.65-4.4A4.87,4.87,0,0,0,80.25,9h0C79.47,6.94,76.93,7.09,75,8.21Z"
              fill="#fbacaa"
            />
            <path
              d="M7.86,13.42l-.15.4-.35-.2c-1.16-.66-2.68-.71-3.14.59h0a3.06,3.06,0,0,0,1.26,3.56l.36.2L10,20.38l1.82-5.1a3,3,0,0,0-1.26-3.55h0C9.44,11.06,8.32,12.12,7.86,13.42Z"
              fill="#fbacaa"
            />
            <path
              d="M80.55,21.78l-.28,0,0-.27c.12-.89-.24-1.79-1.17-1.67h0a2.28,2.28,0,0,0-1.88,1.82l0,.27-.41,3.21,3.63-.48a2.26,2.26,0,0,0,1.88-1.83h0C82.42,22,81.47,21.66,80.55,21.78Z"
              fill="#fbacaa"
            />
          </g>
          <g id="smiley" className={smiley}>
            <image
              width="73"
              height="73"
              transform="translate(6.77 1.12)"
              opacity="0.2"
              xlinkHref="data:image/png;base64,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"
              style={{ mixBlendMode: "multiply" }}
            />
            <path
              d="M42,7.64A29.28,29.28,0,1,1,12.75,36.91h0A29.27,29.27,0,0,1,42,7.64Z"
              fill="#fafabf"
            />
            <path
              d="M42,7.64A29.28,29.28,0,1,1,12.75,36.91h0A29.27,29.27,0,0,1,42,7.64Z"
              fill="none"
              stroke="#597685"
              strokeMiterlimit="10"
              strokeWidth="3"
            />
            <path
              d="M35.36,10.5S20.11,14.93,17.14,28.23"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <path
              d="M48.68,62.91S63.93,58.47,66.9,45.17"
              fill="none"
              stroke="#fffa5a"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <ellipse
              cx="30.23"
              cy="34.49"
              rx="2.24"
              ry="4.6"
              fill="#4e7096"
              opacity="0.99"
              style={{ isolation: "isolate" }}
            />
            <ellipse
              cx="53.3"
              cy="34.49"
              rx="2.24"
              ry="4.6"
              fill="#4e7096"
              opacity="0.99"
              style={{ isolation: "isolate" }}
            />
            <path
              d="M38.2,45.17s7.55,6.49,14.17-.8"
              fill="none"
              stroke="#597685"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <ellipse cx="22.83" cy="40.43" rx="4.57" ry="1.74" fill="#fbacaa" />
            <ellipse cx="61.38" cy="40.43" rx="4.57" ry="1.74" fill="#fbacaa" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Love;
