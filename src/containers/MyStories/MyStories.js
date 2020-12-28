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
  const balloonDesigns = [
    { colour: "#ABDAEA", design: 4, label:"16/11/20" },
    { colour: "#F8B67B", design: 2, label:"30/11/20" },
    { colour: "#91D8C9", design: 0, label:"2/12/20" },
  ];

  return (
    <Row className="MyStories">
      <Col xs={12} className={classes.wrapper}>
        <Content>
          <h3>My Stories</h3>
          <h3 onClick={props.clickedSeeAll}>See All</h3>
          <div className={classes.carouselContainer}>
            {balloonDesigns.map((balloon, id) => {
              return (
                <BalloonLetterCard
                  key={balloon.label + id}
                  label={balloon.label}
                  currentColour={balloon.colour}
                  currentDesign={balloon.design}
                  clicked={props.clickedViewStory}
                />
              );
            })}
          </div>
        </Content>
      </Col>
    </Row>
  );
};

export default MyStories;
