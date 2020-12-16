import React from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// import Font Awesome Package
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import solid icons
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

// import regular icons
import {
  faQuestionCircle,
  faStar,
  faNewspaper,
} from "@fortawesome/free-regular-svg-icons";

// import required svg images
import back from "../../assets/images/Back.svg";

// import css modules
import classes from "./NavigationMenu.module.css";

const NavigationMenu = (props) => {
  return (
    <>
      <Row>
        {/* Content */}
        <Col
          className={
            props.activateIf
              ? `${classes.wrapper} ${classes.active}`
              : `${classes.wrapper}`
          }
        >
          <div
            onClick={props.clickedExit}
            style={{ padding: "4rem 0.3rem 2rem" }}
          >
            <Image src={back} alt="back button" />
            <p className={classes.backtext}> GO BACK TO HOME</p>
          </div>
          <ul className={classes.menu}>
            <li onClick={props.launchFAQ}>
              <FontAwesomeIcon icon={faQuestionCircle} />
              <p>FAQ</p>
            </li>
            <li onClick={props.launchNews}>
              <FontAwesomeIcon icon={faNewspaper} />
              <p>NEWS</p>
            </li>
            <li onClick={props.launchAbout}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <p>ABOUT US</p>
            </li>
            <li onClick={props.launchCredits}>
              <FontAwesomeIcon icon={faStar} />
              <p>CREDITS </p>
            </li>
          </ul>
        </Col>

        {/* Background Blur */}
        <Col
          className={
            props.activateIf
              ? `${classes.container} ${classes.active}`
              : `${classes.container}`
          }
          onClick={props.clickedExit}
        ></Col>
      </Row>
    </>
  );
};

export default NavigationMenu;
