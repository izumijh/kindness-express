import React from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import required components
import Content from "../../components/Content/Content";
import BalloonLetterCard from "../../components/BalloonLetterCard/BalloonLetterCard";

// import css modules
import classes from "./RecentStories.module.css";

const RecentStories = (props) => {
  return (
    <Row className="RecentStories">
      <Col xs={12} className={classes.wrapper}>
        <Content>
          <h3>Recent Stories</h3>
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

export default RecentStories;
