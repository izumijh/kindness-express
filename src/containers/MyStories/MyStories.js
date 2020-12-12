import React from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import required components
import Content from "../../components/Content/Content";
import BalloonLetterCard from "../../components/BalloonLetterCard/BalloonLetterCard";

// import css modules
import classes from "./MyStories.module.css";

const MyStories = (props) => {
  return (
    <Row className="MyStories">
      <Col xs={12} className={classes.wrapper}>
        <Content>
          <h3>My Stories</h3>
          <div className={classes.carouselContainer}>
            <BalloonLetterCard />
            <BalloonLetterCard />
            <BalloonLetterCard />
            <BalloonLetterCard />
            <BalloonLetterCard />
          </div>
        </Content>
      </Col>
    </Row>
  );
};

export default MyStories;
