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
  const balloonDesigns = [
    { colour: "#F8B67B", design: 0 },
    { colour: "#ABDAEA", design: 2 },
    { colour: "#91D8C9", design: 4 },
  ];

  return (
    <Row className="RecentStories">
      <Col xs={12} className={classes.wrapper}>
        <Content>
          <h3>Recent Stories</h3>
          <div className={classes.carouselContainer}>
            {balloonDesigns.map((balloon, id) => {
              return (
                <BalloonLetterCard
                  key={balloon + id}
                  currentColour={balloon.colour}
                  currentDesign={balloon.design}
                />
              );
            })}
          </div>
        </Content>
      </Col>
    </Row>
  );
};

export default RecentStories;
