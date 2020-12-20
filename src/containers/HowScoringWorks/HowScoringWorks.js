import React from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// import required components
import SlideUpModal from "../../components/SlideUpModal/SlideUpModal";

// import required photos
import photo1 from "../../assets/images/how-scoring-works/levelup1.svg";
import photo2 from "../../assets/images/how-scoring-works/levelup2.svg";
import photo3 from "../../assets/images/how-scoring-works/levelup3.svg";

// import css module
import classes from "./HowScoringWorks.module.css";

const HowScoringWorks = (props) => {
  return (
    <SlideUpModal
      withHandle
      activateIf={props.activateIf}
      clickedExit={props.clickedExit}
    >
      <Row>
        <Col xs={12} className={classes.headerWrapper}>
          <h2>The More You Level Up,</h2>
          <h2>The More We Donate!</h2>
        </Col>
      </Row>

      <Row className={classes.itemsWrapper}>
        <Col xs={5} style={{ paddingRight: 0 }}>
          <Image src={photo1} alt="medals" fluid />
        </Col>
        <Col xs={7}>
          <h3>For each level you earn, we donate RM1 to charities!</h3>
          <p>Level 1 = RM1...</p>
          <p>Level 2 = RM2...</p>
        </Col>
      </Row>

      <Row className={classes.itemsWrapper}>
        <Col xs={5} style={{ paddingRight: 0 }}>
          <Image src={photo2} alt="levelling up" fluid />
        </Col>
        <Col xs={7}>
          <h3>Post, or Repost Kind Stories to level up!</h3>
          <p>Posting Your Story + 50%</p>
          <p>Reposting + 10%</p>
        </Col>
      </Row>

      <Row className={classes.itemsWrapper} style={{marginBottom: ".5rem"}}>
        <Col xs={5} style={{ paddingRight: 0 }}>
          <Image src={photo3} alt="instagram" fluid />
        </Col>
        <Col xs={7}>
          <h3>Lots of Participating Charities!</h3>
          <p>Learn more at our instagram: @TKindnessE</p>
        </Col>
      </Row>
    </SlideUpModal>
  );
};

export default HowScoringWorks;
