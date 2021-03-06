import React from "react";

// import css modules
import classes from "./BalloonLetter.module.css";

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
    <span onClick={props.clicked}>
      <svg className={`${classes.wrapper} ${classes.animation}`} preserveAspectRatio="none">
        <filter
          xmlns="http://www.w3.org/2000/svg"
          id="dropshadow"
          height="130%"
        >
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="2" dy="2" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.2" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <g id="envelope">
          <g id="body" data-name="Path 219-2" filter="url(#dropshadow)">
            <path
              className={`${classes.cls2}`}
              // change the fill colour to yellow if needed
              style={props.currentDesign === 4 ? { fill: "#FFEEC9" } : null}
              d="M77,208l-4.13-.57-1.51-.21-5.53-.75h0l-1.49-.21-5.16-.7-1.51-.21-5.16-.71-1.51-.2-4.42-.61h0l-1.49-.2h0L40.25,203l-1.49-.2h0L34,202.17,32.52,202h0l-4.77-.65-1.48-.2-4.76-.66h0L20,200.27l-3.57-.51a2.76,2.76,0,0,1-.93-.31,2.26,2.26,0,0,1-.78-.66,2.45,2.45,0,0,1-.57-1.82l.13-1.44.08-1.16.31-3.73.1-1.17.31-3.73.1-1.15h0l.3-3.72.1-1.19.3-3.71.1-1.17.31-3.73.1-1.16h0l.29-3.72.1-1.17.32-3.83.1-1.19.28-3.31v-.34a2.58,2.58,0,0,1,.34-1A2.7,2.7,0,0,1,20.1,154h.42l1.15.15,4.33.53,1.51.19,5,.62,1.51.18,4.83.6,1.51.19,4.86.6,1.51.19,4.85.6h0l1,.13.48.06h0l4.81.59h0l1.52.19,24.8,3.08a2.69,2.69,0,0,1,2.35,3h0L79.75,206A2.43,2.43,0,0,1,77,208Z"
            />
          </g>
          <path
            className={classes.cls3}
            d="M77.34,209.06h-.53l-11-1.51h0l-1.62-.23L16.3,200.75a4.13,4.13,0,0,1-1.27-.42,3.26,3.26,0,0,1-1.09-.93,3.43,3.43,0,0,1-.77-2.52l3.34-40.61a3.38,3.38,0,0,1,.49-1.44A3.68,3.68,0,0,1,20.07,153h.57l38.93,4.82,24.79,3.08A3.68,3.68,0,0,1,87.58,165h0l-6.84,41.15A3.43,3.43,0,0,1,77.34,209.06ZM77,207h.11a1.44,1.44,0,0,0,1.62-1.22l6.84-41.08a1.7,1.7,0,0,0-.35-1.23,1.67,1.67,0,0,0-1.12-.62L53.1,159h0l-1.67-.21-31-3.84h-.22a1.67,1.67,0,0,0-1.44.85,1.6,1.6,0,0,0-.23.63v.29l-2.29,27.82h0l-1,12.48a1.45,1.45,0,0,0,.34,1.09,1.33,1.33,0,0,0,.47.41,1.69,1.69,0,0,0,.62.21l4.88.68h.16Z"
          />
          <polygon
            className={classes.cls4}
            points="84.04 181.95 30.39 175.52 19.8 154.44 21.59 153.54 31.69 173.67 84.28 179.97 84.04 181.95"
          />
          <g
            id="redBlueSeams"
            data-name="Group 511"
            style={
              props.currentDesign === 4 || props.currentDesign === 3
                ? { opacity: 1 }
                : { opacity: 0 }
            }
          >
            <rect
              id="Rectangle_387"
              data-name="Rectangle 387"
              className={classes.cls7}
              x="65.11"
              y="175.63"
              width="3"
              height="6.76"
              transform="translate(-119.14 223.49) rotate(-83.06)"
            />
            <rect
              id="Rectangle_390"
              data-name="Rectangle 390"
              className={classes.cls7}
              x="78.01"
              y="177.2"
              width="3"
              height="6.76"
              transform="translate(-109.35 237.69) rotate(-83.06)"
            />
            <rect
              id="Rectangle_388"
              data-name="Rectangle 388"
              className={classes.cls8}
              x="58.65"
              y="175.09"
              width="3"
              height="6.24"
              transform="translate(-124.02 216.39) rotate(-83.06)"
            />
            <rect
              id="Rectangle_387-2"
              data-name="Rectangle 387-2"
              className={classes.cls7}
              x="52.4"
              y="174.04"
              width="3"
              height="6.76"
              transform="translate(-128.73 209.49) rotate(-83.06)"
            />
            <rect
              id="Rectangle_388-2"
              data-name="Rectangle 388-2"
              className={classes.cls8}
              x="45.95"
              y="173.52"
              width="3"
              height="6.24"
              transform="translate(-133.63 202.4) rotate(-83.06)"
            />
            <rect
              id="Rectangle_387-3"
              data-name="Rectangle 387-3"
              className={classes.cls7}
              x="39.51"
              y="172.47"
              width="3"
              height="6.76"
              transform="translate(-138.51 195.31) rotate(-83.06)"
            />
            <polygon
              id="Rectangle_388-3"
              data-name="Rectangle 388-3"
              className={classes.cls8}
              points="31.89 173.09 37.85 173.81 37.48 176.79 30.31 175.67 31.89 173.09"
            />
            <rect
              id="Rectangle_387-4"
              data-name="Rectangle 387-4"
              className={classes.cls7}
              x="23.14"
              y="159.37"
              width="3"
              height="6.12"
              transform="translate(-69.79 27.99) rotate(-26.46)"
            />
            <polygon
              id="Rectangle_388-4"
              data-name="Rectangle 388-4"
              className={classes.cls8}
              points="22.39 155.13 24.61 159.03 21.93 160.37 19.48 155.09 20.07 154.96 22.39 155.13"
            />
            <polygon
              id="Rectangle_387-5"
              data-name="Rectangle 387-5"
              className={classes.cls7}
              points="29.76 169.36 31.89 173.09 30.31 175.67 27.07 170.69 29.76 169.36"
            />
            <rect
              id="Rectangle_388-5"
              data-name="Rectangle 388-5"
              className={classes.cls8}
              x="25.73"
              y="164.7"
              width="3"
              height="5.65"
              transform="translate(-71.79 29.68) rotate(-26.46)"
            />
            <rect
              id="Rectangle_389"
              data-name="Rectangle 389"
              className={classes.cls8}
              x="71.55"
              y="176.68"
              width="3"
              height="6.24"
              transform="translate(-114.26 230.59) rotate(-83.06)"
            />
          </g>
        </g>
        <g id="balloon">
          <path
            id="Path_220-2"
            data-name="Path 220-2"
            style={balloonColour}
            className={classes.transition}
            d="M53.8,108a12.43,12.43,0,0,0-1.7,7.63,48,48,0,0,0,9.81-.11c2.56-.46,2-3.82.62-6.55Z"
          />
          <path
            className={classes.cls4}
            d="M56.46,116.87c-1.49,0-3-.07-4.45-.21l-.82-.07-.08-.82a13.51,13.51,0,0,1,1.83-8.24l.33-.55,9.9,1.1.24.47c.49.94,2,4.17.92,6.36a3,3,0,0,1-2.25,1.64A50.28,50.28,0,0,1,56.46,116.87Zm-3.41-2.13a46.41,46.41,0,0,0,8.74-.17,1,1,0,0,0,.75-.54c.39-.8.12-2.4-.67-4.08l-7.52-.84A11.35,11.35,0,0,0,53.05,114.74Z"
          />
          <path
            id="balloonColour"
            data-name="Path 221-2"
            filter="url(#dropshadow)"
            style={balloonColour}
            className={classes.transition}
            d="M109.41,69.18A50.13,50.13,0,0,1,98.83,92.12,44.75,44.75,0,0,1,60.5,108.81c-22.58-2-36.54-28.45-31.94-53.49a49.66,49.66,0,0,1,17.73-30,39.34,39.34,0,0,1,31.05-8.4C99.64,20.72,114,44.14,109.41,69.18Z"
          />
          <path
            className={classes.cls4}
            d="M63.89,109.94a31.05,31.05,0,0,1-3.47-.13C51.22,109,42.76,104,36.59,95.9c-8.32-11-11.69-26.2-9-40.76A50.62,50.62,0,0,1,45.66,24.51a40.33,40.33,0,0,1,31.83-8.6,39,39,0,0,1,25.4,16.47c7.19,10.3,9.93,23.78,7.5,37A51.19,51.19,0,0,1,99.6,92.75,45.7,45.7,0,0,1,63.89,109.94Zm7.3-92.53a38.34,38.34,0,0,0-24.27,8.66A48.52,48.52,0,0,0,29.55,55.5c-2.58,14,.65,28.67,8.63,39.19,5.91,7.79,13.66,12.33,22.41,13.12A43.67,43.67,0,0,0,98,91.49,49.08,49.08,0,0,0,108.42,69h0c2.33-12.68-.28-25.61-7.17-35.48A37,37,0,0,0,77.17,17.88,37.47,37.47,0,0,0,71.19,17.41Z"
          />
          <path
            className={classes.cls4}
            filter="url(#dropshadow)"
            d="M48.25,204.68c-8.13-7.53,1.14-48.49,4.49-59.41,4.17-13.6,4.3-30.31,4.31-30.47h2c0,.17-.14,17.16-4.4,31.05-4.43,14.45-11.49,51.38-5,57.36Z"
          />
          <path
            className={classes.cls6}
            d="M69.56,102.08a11.83,11.83,0,0,1-1.68-.09,1,1,0,1,1,.27-2,23.73,23.73,0,0,0,11.61-2.26c6-2.69,14.43-9.06,20.65-24.12a1,1,0,0,1,1.85.76c-6.5,15.75-15.44,22.42-21.81,25.24A27.14,27.14,0,0,1,69.56,102.08Z"
          />
          <path
            className={classes.cls2}
            d="M35.51,54.54a.76.76,0,0,1-.3,0,1,1,0,0,1-.66-1.25A45.17,45.17,0,0,1,69.07,22.36a1,1,0,1,1,.38,2,43.19,43.19,0,0,0-33,29.52A1,1,0,0,1,35.51,54.54Z"
          />
        </g>
        <g id="accessories">
          <path
            id="Ribbon"
            data-name="Path 840"
            className={classes.cls5}
            style={ribbonColor}
            d="M66.21,181.55l-3.16,11.17s8.8-1.06,11.14.61L71.74,181Z"
          />
          <path
            className={classes.cls4}
            d="M75.29,195l-1.53-1.09c-1.54-1.09-7.33-.87-10.62-.48L62,193.6l3.6-12.75,6.72-.71Zm-6.74-3.4a19,19,0,0,1,4.63.46l-2-10.31-4.35.46-2.72,9.61c1-.07,2.71-.19,4.44-.19Z"
          />
          <g
            id="heartDecor"
            style={props.currentDesign === 2 ? { opacity: 1 } : { opacity: 0 }}
          >
            <path
              id="heartFill"
              data-name="Path 841"
              className={classes.cls9}
              d="M68.74,175.11l-.41.51-.5-.43c-1.64-1.39-4.14-2-5.49-.36h0a4,4,0,0,0,.52,5.57l.49.42,5.93,5.06,5.31-6.59a4,4,0,0,0-.52-5.57h0C72.43,172.33,70.09,173.43,68.74,175.11Z"
            />
            <path
              className={classes.cls4}
              d="M69.38,187l-7-6a4.77,4.77,0,0,1-.62-6.61,3.4,3.4,0,0,1,2.38-1.26,5.78,5.78,0,0,1,4.1,1.45,5.9,5.9,0,0,1,3.76-2.2,3.45,3.45,0,0,1,2.56.8,4.77,4.77,0,0,1,.62,6.61Zm-4.87-12.37h-.24a1.89,1.89,0,0,0-1.35.71,3.28,3.28,0,0,0,.43,4.53l5.83,5,4.82-6a3.27,3.27,0,0,0-.42-4.53,1.91,1.91,0,0,0-1.45-.44,4.5,4.5,0,0,0-2.81,1.73l-.9,1.12-1.08-.94a4.59,4.59,0,0,0-2.83-1.23Z"
            />
          </g>
          <g
            id="RoundDecor"
            style={props.currentDesign === 2 ? { opacity: 0 } : { opacity: 1 }}
          >
            <path
              id="Path_1594"
              data-name="Path 1594"
              className={classes.cls10}
              style={badgeColor}
              d="M68.28,173.77a5.74,5.74,0,1,1-5,6.4A5.73,5.73,0,0,1,68.28,173.77Z"
            />
            <path
              className={classes.cls3}
              d="M69,186.21a6.74,6.74,0,1,1,.83-.05A7.7,7.7,0,0,1,69,186.21Zm0-11.49a2.91,2.91,0,0,0-.59,0,4.64,4.64,0,1,0,.59,0Z"
            />
          </g>
        </g>
      </svg>
    </span>
  );
};

export default BalloonLetter;
