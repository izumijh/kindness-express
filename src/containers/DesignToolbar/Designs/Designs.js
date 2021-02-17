import React from "react";

// import React Bootstrap components
import Image from "react-bootstrap/Image";

// import required images for Designs
import D0 from "../../../assets/images/envelope-designs/n-1.svg";
import D1 from "../../../assets/images/envelope-designs/n-2.svg";
import D2 from "../../../assets/images/envelope-designs/n-3.svg";
import D3 from "../../../assets/images/envelope-designs/v-1.svg";
import D4 from "../../../assets/images/envelope-designs/v-2.svg";

// import css modules
import classes from "./Designs.module.css";

const Designs = (props) => {
  const designs = [D0, D1, D2, D3, D4];

  return (
    <>
      {designs.map((design, id) => (
        <Image
          fluid
          src={design}
          className={classes.choice}
          key={id}
          // grab svg images from array and turn them into choices
          // find currentDesign and outline it
          style={
            props.currentDesign === id
              ? { border: "3px solid #547394" }
              : { opacity: "0.5", border: "3px dashed #547394" }
          }
          // clicking on design sets the design for balloon in parent JSX
          onClick={() => props.setDesign(id)}
        />
      ))}
    </>
  );
};

export default Designs;
