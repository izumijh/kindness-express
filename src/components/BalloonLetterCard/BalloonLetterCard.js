import React from "react";

// import css modules
import classes from "./BalloonLetterCard.module.css";

const BalloonLetter = (props) => {
  // default setting
  let balloonColour = { fill: "#abdaea" };
  let badgeColor = { fill: "#FEF79A" };
  let ribbonColor = { fill: "#A4D6E6" };

  // Change Balloon Colour
  if (props.currentColour) {
    balloonColour = { fill: props.currentColour };
  }

  // Change Envelope Design
  if (props.currentDesign === 1) {
    badgeColor = { fill: "#A4D6E6" }; // blue
    ribbonColor = { fill: "#FEF79A" }; // yellow
  } else if (props.currentDesign === 2) {
    ribbonColor = { fill: "#ABDAEA" }; // blue
  } else if (props.currentDesign === 3) {
    badgeColor = { fill: "#91D8C9" }; // green
    ribbonColor = { fill: "#FEF79A" }; // yellow
  } else if (props.currentDesign === 4) {
    badgeColor = { fill: "#FEF79A" }; // yellow
    ribbonColor = { fill: "#91D8C9" }; // green
  }

  return (
    <>
      <svg id="Layer_1" x="0px" y="0px" viewBox="0 0 199 139.3">
        <filter
          xmlns="http://www.w3.org/2000/svg"
          id="dropshadow"
          height="130%"
        >
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="1" dy="1" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.2" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <g id="background">
          <linearGradient
            id="SVGID_1_"
            gradientUnits="userSpaceOnUse"
            x1="-579.279"
            y1="451.9612"
            x2="-579.279"
            y2="450.9612"
            gradientTransform="matrix(181 0 0 -103 104949 46576.2969)"
          >
            <stop offset="0" style={{ stopColor: "#F2F7FF" }} />
            <stop offset="9.900000e-02" style={{ stopColor: "#F0F9FC" }} />
            <stop offset="0.744" style={{ stopColor: "#F7F7F7" }} />
            <stop offset="1" style={{ stopColor: "#F6F5FF" }} />
          </linearGradient>
          <path
            className={classes.st0}
            filter="url(#dropshadow)"
            d="M19,24.3h161c5.5,0,10,4.5,10,10v83c0,5.5-4.5,10-10,10H19c-5.5,0-10-4.5-10-10v-83C9,28.8,13.5,24.3,19,24.3
			z"
          />
        </g>
        <circle
          id="white-circle"
          className={classes.st1}
          cx="58.5"
          cy="85"
          r="38.5"
        />
        <text
          transform="matrix(1 0 0 1 115 86)"
          className={`${classes.st2} ${classes.st3} ${classes.st4}`}
        >
          A’s Story
        </text>
        <g id="envelope_1_">
          <g id="envelope">
            <g id="Path_219-2_1_">
              <path
                className={classes.st5}
                style={props.currentDesign === 4 ? { fill: "#FFEEC9" } : null}
                d="M66.1,115.6l-2.1-0.6l-0.8-0.2l-2.8-0.8l0,0l-0.8-0.2l-2.6-0.7l-0.8-0.2l-2.6-0.7L53,112l-2.2-0.6l0,0
				l-0.8-0.2l0,0l-2.4-0.7l-0.8-0.2l0,0l-2.4-0.6l-0.7-0.2l0,0l-2.4-0.7l-0.7-0.2l-2.4-0.7l0,0l-0.8-0.2l-1.8-0.5
				c-0.2,0-0.3-0.1-0.5-0.2c-0.1-0.1-0.3-0.2-0.4-0.4c-0.2-0.3-0.2-0.6-0.2-1l0.2-0.7l0.1-0.6l0.4-1.9l0.1-0.6l0.4-1.9l0.1-0.6l0,0
				l0.4-1.9l0.1-0.6l0.4-1.9l0.1-0.6l0.4-1.9l0.1-0.6l0,0l0.4-1.9l0.1-0.6l0.4-1.9l0.1-0.6l0.4-1.7l0-0.2c0-0.2,0.1-0.3,0.2-0.5
				c0.3-0.4,0.8-0.6,1.3-0.5l0.2,0l0.6,0.2l2.2,0.6l0.8,0.2l2.5,0.7l0.8,0.2l2.4,0.6l0.8,0.2l2.5,0.6l0.8,0.2l2.4,0.6l0,0l0.5,0.1
				l0.2,0.1l0,0l2.4,0.6l0,0l0.8,0.2l12.5,3.3c0.7,0.2,1.2,0.9,1,1.7c0,0,0,0,0,0l0,0l-6.3,20.6C67.5,115.4,66.8,115.8,66.1,115.6z"
              />
            </g>
            <path
              className={classes.st6}
              d="M66.2,116.2l-0.3,0l-5.5-1.5l0,0l-0.8-0.2l-24.1-6.6c-0.2-0.1-0.4-0.2-0.6-0.3c-0.2-0.1-0.4-0.3-0.5-0.6
			c-0.3-0.4-0.3-0.9-0.2-1.3L38.6,85c0.1-0.3,0.2-0.5,0.3-0.7c0.4-0.5,1-0.8,1.7-0.7l0.3,0l19.6,5.1L73.1,92c1,0.3,1.6,1.3,1.4,2.3
			c0,0,0,0,0,0l0,0l-6.3,20.6C67.9,115.8,67.1,116.3,66.2,116.2z M66.2,115.1L66.2,115.1c0.5,0.1,0.9-0.1,1-0.5L73.5,94
			c0.1-0.2,0-0.5-0.1-0.7c-0.1-0.2-0.3-0.3-0.5-0.4l-15.6-4.1l0,0l-0.8-0.2l-15.6-4.1l-0.1,0c-0.3,0-0.6,0.1-0.8,0.3
			c-0.1,0.1-0.1,0.2-0.2,0.3l0,0.1l-3.1,14.1l0,0l-1.4,6.3c0,0.2,0,0.4,0.1,0.6c0.1,0.1,0.1,0.2,0.2,0.2c0.1,0.1,0.2,0.1,0.3,0.1
			l2.5,0.7l0.1,0L66.2,115.1z"
            />
            <polygon
              className={classes.st7}
              points="71.5,102.7 44.4,95.8 40.4,84.3 41.4,83.9 45.2,94.9 71.7,101.7 		"
            />
          </g>
          <g id="balloon">
            <path
              id="Path_220-2_1_"
              className={classes.st8}
              style={balloonColour}
              d="M61,62.7c-0.9,1.1-1.3,2.4-1.4,3.8c1.7,0.4,3.3,0.6,5,0.6c1.3-0.1,1.3-1.8,0.8-3.3
			L61,62.7z"
            />
            <path
              className={classes.st7}
              d="M61.8,67.5c-0.8-0.1-1.5-0.2-2.3-0.4L59.1,67l0-0.4c0-1.5,0.6-2.9,1.5-4.1l0.2-0.3l5,1.2l0.1,0.3
			c0.2,0.5,0.7,2.3,0,3.3c-0.3,0.4-0.8,0.7-1.3,0.7C63.7,67.7,62.7,67.6,61.8,67.5z M60.2,66.1c1.5,0.3,3,0.5,4.5,0.5
			c0.2,0,0.3-0.1,0.4-0.2c0.3-0.4,0.2-1.2-0.1-2.1l-3.8-0.9C60.6,64.2,60.3,65.1,60.2,66.1z"
            />
            <path
              id="balloon-fill"
              className={classes.st8}
              style={balloonColour}
              d="M92.2,46.6c-1.3,4.2-3.8,8-7,11c-5.5,5.3-13.3,7.5-20.8,6C52.9,61,47.6,46.5,51.6,34
			c1.9-5.9,5.8-11,11.1-14.2c4.9-3.1,10.9-3.8,16.5-2.2C90.5,21.1,96.2,34.1,92.2,46.6z"
            />
            <path
              className={classes.st7}
              d="M66.1,64.4c-0.6-0.1-1.2-0.2-1.8-0.3c-4.7-1-8.7-4.2-11.3-8.8c-3.5-6.2-4.2-14.2-1.8-21.5
			c1.9-6,5.9-11.2,11.4-14.5c5.1-3.1,11.2-3.9,16.9-2.2c5.2,1.7,9.5,5.3,11.9,10.2c3,5.8,3.5,12.9,1.3,19.5
			c-1.4,4.3-3.8,8.2-7.1,11.3C80.4,63,73.2,65.4,66.1,64.4z M76.1,17.4c-4.5-0.6-9.1,0.4-13,2.8c-5.2,3.2-9.1,8.1-10.9,13.9
			c-2.3,7-1.6,14.8,1.8,20.7c2.5,4.4,6.2,7.3,10.6,8.3c7.3,1.5,14.9-0.6,20.3-5.8c3.2-3,5.5-6.7,6.9-10.8l0,0
			c2.1-6.3,1.6-13.2-1.3-18.7c-2.3-4.6-6.4-8.1-11.3-9.7C78.1,17.8,77.1,17.6,76.1,17.4z"
            />
            <path
              className={classes.st7}
              d="M51.6,112c-3.7-4.4,3.9-24.8,6.3-30.2c3.1-6.7,4.3-15.3,4.3-15.3l1,0.1c0,0.1-1.2,8.8-4.4,15.6
			c-3.3,7.1-9.4,25.6-6.5,29.1L51.6,112z"
            />
            <path
              className={classes.st9}
              d="M69.5,60.8c-0.3,0-0.6-0.1-0.9-0.2c-0.3-0.1-0.4-0.4-0.4-0.6c0.1-0.3,0.4-0.4,0.6-0.4c2,0.4,4.1,0.3,6.1-0.4
			c3.3-1,8-3.7,12.2-11c0.1-0.2,0.5-0.3,0.7-0.2c0.2,0.1,0.3,0.5,0.2,0.7c-4.4,7.6-9.4,10.5-12.9,11.5C73.4,60.8,71.4,61,69.5,60.8z
			"
            />
            <path
              className={classes.st5}
              d="M55.3,34.1c-0.1,0-0.1,0-0.2,0c-0.3-0.1-0.4-0.4-0.3-0.7c3.6-7.8,11.2-13,19.8-13.5c0.3,0,0.5,0.2,0.6,0.5
			c0,0.3-0.2,0.5-0.5,0.6c-8.2,0.5-15.5,5.4-18.9,12.9C55.7,34,55.5,34.1,55.3,34.1z"
            />
          </g>
          <g id="accessories">
            <g
              id="RedBlueSeams"
              style={
                props.currentDesign === 4 || props.currentDesign === 3
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
            >
              <rect
                id="Rectangle_387"
                x="62"
                y="98.3"
                transform="matrix(0.2503 -0.9682 0.9682 0.2503 -49.8095 135.7488)"
                className={classes.st10}
                width="1.6"
                height="3.5"
              />
              <rect
                id="Rectangle_390"
                x="68.5"
                y="100"
                transform="matrix(0.2503 -0.9682 0.9682 0.2503 -46.5627 143.3239)"
                className={classes.st10}
                width="1.6"
                height="3.5"
              />
              <rect
                id="Rectangle_388"
                x="58.7"
                y="97.6"
                transform="matrix(0.2503 -0.9682 0.9682 0.2503 -51.4376 131.9633)"
                className={classes.st11}
                width="1.6"
                height="3.2"
              />
              <rect
                id="Rectangle_387-2"
                x="55.6"
                y="96.6"
                transform="matrix(0.2503 -0.9682 0.9682 0.2503 -52.9964 128.2879)"
                className={classes.st10}
                width="1.6"
                height="3.5"
              />
              <rect
                id="Rectangle_388-2"
                x="52.3"
                y="95.9"
                transform="matrix(0.2503 -0.9682 0.9682 0.2503 -54.6256 124.5038)"
                className={classes.st11}
                width="1.6"
                height="3.2"
              />
              <rect
                id="Rectangle_387-3"
                x="49.1"
                y="94.9"
                transform="matrix(0.2503 -0.9682 0.9682 0.2503 -56.2451 120.7223)"
                className={classes.st10}
                width="1.6"
                height="3.5"
              />
              <polygon
                id="Rectangle_388-3"
                className={classes.st11}
                points="45.3,94.6 48.3,95.4 48,96.9 44.4,95.9 			"
              />
              <rect
                id="Rectangle_387-4"
                x="41.6"
                y="87.1"
                transform="matrix(0.9461 -0.324 0.324 0.9461 -26.4479 18.5038)"
                className={classes.st10}
                width="1.6"
                height="3.2"
              />
              <polygon
                id="Rectangle_388-4"
                className={classes.st11}
                points="41.7,84.8 42.6,86.9 41.1,87.4 40.2,84.6 40.5,84.5 			"
              />
              <polygon
                id="Rectangle_387-5"
                className={classes.st10}
                points="44.5,92.6 45.3,94.6 44.4,95.9 43,93.1 			"
              />
              <rect
                id="Rectangle_388-5"
                x="42.6"
                y="90"
                transform="matrix(0.9461 -0.324 0.324 0.9461 -27.2994 18.9723)"
                className={classes.st11}
                width="1.6"
                height="2.9"
              />
              <rect
                id="Rectangle_389"
                x="65.2"
                y="99.3"
                transform="matrix(0.2503 -0.9682 0.9682 0.2503 -48.1954 139.5335)"
                className={classes.st11}
                width="1.6"
                height="3.2"
              />
            </g>
            <g id="RibbonAccessory">
              <path
                id="Path_840_1_"
                className={classes.st8}
                style={ribbonColor}
                d="M62.4,101.3l-2.4,5.5c0,0,4.6,0.1,5.7,1.1l-0.4-6.5L62.4,101.3z"
              />
              <path
                className={classes.st7}
                d="M66.1,108.8l-0.7-0.7c-0.7-0.7-3.7-0.9-5.4-1l-0.6,0l2.7-6.3l3.5,0.1L66.1,108.8z M62.9,106.6
				c0.8,0.1,1.6,0.3,2.3,0.6l-0.3-5.4l-2.3-0.1l-2,4.7C61.1,106.5,62,106.5,62.9,106.6L62.9,106.6z"
              />
            </g>
            <g
              id="HeartAccessory"
              style={
                props.currentDesign === 2 ? { opacity: 1 } : { opacity: 0 }
              }
            >
              <path
                id="heart"
                className={classes.st12}
                d="M64.1,98.2l-0.2,0.2l-0.2-0.3c-0.7-0.8-2-1.3-2.8-0.6l0,0c-0.8,0.8-0.9,2.1-0.1,2.9l0.2,0.2
				l2.7,3l3.2-3c0.8-0.8,0.9-2.1,0.1-2.9l0,0C66.2,97,64.9,97.4,64.1,98.2z"
              />
              <path
                className={classes.st7}
                d="M63.6,104.3l-3.2-3.6c-0.9-1-0.8-2.5,0.1-3.4c0.4-0.3,0.8-0.5,1.3-0.5c0.8,0.1,1.5,0.4,2,1
				c0.6-0.5,1.3-0.9,2.1-0.9c0.5,0,0.9,0.2,1.3,0.6c0.9,1,0.8,2.5-0.1,3.4L63.6,104.3z M62,97.7l-0.1,0c-0.3,0-0.5,0.1-0.7,0.3
				c-0.7,0.6-0.7,1.7-0.1,2.4l2.7,3l2.9-2.8c0.7-0.6,0.7-1.7,0.1-2.4c-0.2-0.2-0.4-0.3-0.7-0.3c-0.6,0-1.1,0.3-1.6,0.7L63.8,99
				l-0.5-0.6C63,98,62.5,97.7,62,97.7L62,97.7z"
              />
            </g>
            <g
              id="RoundAccessory"
              style={
                props.currentDesign === 2 ? { opacity: 0 } : { opacity: 1 }
              }
            >
              <path
                id="Path_1594"
                className={classes.st13}
                style={badgeColor}
                d="M64,97.5c1.6,0,3,1.4,2.9,3c0,1.6-1.4,3-3,2.9c-1.6,0-3-1.4-2.9-3
				C61,98.8,62.3,97.5,64,97.5C64,97.5,64,97.5,64,97.5z"
              />
              <path
                className={classes.st6}
                d="M63.5,103.9c-1.9-0.3-3.2-2-3-3.9c0.3-1.9,2-3.2,3.9-3s3.2,2,3,3.9c-0.2,1.7-1.7,3-3.5,3
				C63.8,103.9,63.6,103.9,63.5,103.9z M64.3,98c-0.1,0-0.2,0-0.3,0c-1.3-0.1-2.5,0.9-2.6,2.2c-0.1,1.3,0.9,2.5,2.2,2.6
				c1.3,0.1,2.5-0.9,2.6-2.2C66.3,99.3,65.5,98.2,64.3,98z"
              />
            </g>
          </g>
        </g>
      </svg>
    </>
  );
};

export default BalloonLetter;
