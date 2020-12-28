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
    { colour: "#F8B67B", design: 0, label: "A's Story" },
    { colour: "#ABDAEA", design: 2, label: "B's Story" },
    { colour: "#91D8C9", design: 4, label: "C's Story" },
  ];

  return (
    <Row className="RecentStories">
      <Col xs={12} className={classes.wrapper}>
        <Content>
          <h3>Recent Stories</h3>
          <h3 onClick={props.clickedSeeAll}>See All</h3>
          <div className={classes.carouselContainer}>
            {balloonDesigns.map((balloon, id) => {
              return (
                <>
                  <BalloonLetterCard
                    key={balloon.label + id}
                    label={balloon.label}
                    currentColour={balloon.colour}
                    currentDesign={balloon.design}
                    clicked={props.clickedViewStory}
                  />
                </>
              );
            })}
          </div>
        </Content>
      </Col>
    </Row>
  );
};

export default RecentStories;
