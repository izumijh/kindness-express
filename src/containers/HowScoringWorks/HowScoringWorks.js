import React from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";

// import Lottie
import Lottie from "react-lottie-wrapper";

// import required components
import SlideUpModal from "../../components/SlideUpModal/SlideUpModal";

// import required photos
import photo1 from "../../assets/images/how-scoring-works/howto1.svg";
import * as photo2 from "../../assets/animations/how-to-level-up/how.json";
import photo3 from "../../assets/images/how-scoring-works/charities.svg";

// import css module
import classes from "./HowScoringWorks.module.css";

const HowScoringWorks = (props) => {
  const currentLevel = 2;

  const options = {
    loop: true,
    autoplay: true,
    animationData: JSON.parse(JSON.stringify(photo2.default)),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <SlideUpModal
      withHandle
      activateIf={props.activateIf}
      clickedExit={props.clickedExit}
    >
      <Row>
        <Col xs={12}>
          <Carousel controls={false} interval={null}>
            <Carousel.Item className={classes.carouselPage}>
              <div style={{ backgroundColor: "#F0F2FF" }}>
                <h2> Wow, look at that! </h2>
                <div style={{ textAlign: "center" }}>
                  <Image
                    src={photo1}
                    alt="How to Level Up"
                    style={{ maxHeight: "20vh" }}
                  />
                </div>
                <h2>You’re now at Level {currentLevel}!</h2>
                <p>
                  Because of you, we will be donating an extra{" "}
                  <span className={classes.cash}>RM {currentLevel} </span>to
                  charities at the end of this campaign!
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item className={classes.carouselPage}>
              <div style={{ backgroundColor: "#FFF6DE" }}>
                <h2 style={{ margin: "0" }}> How to Level Up? </h2>
                <div style={{ marginTop: "-10%" }}>
                  <Lottie options={options} width={"100%"} height={"30vh"} />
                </div>
                <h2 style={{ marginTop: "-10%" }}>Post or Repost Stories!</h2>
                <p>
                  Posting will always fill up half of the gauge, while reposting
                  fills up lesser.
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item className={classes.carouselPage}>
              <div style={{ backgroundColor: "#EBFFE5" }}>
                <h2>Participating Charities</h2>
                <Image src={photo3} alt="charities" />
                <p style={{ marginTop: "1.5rem" }}>
                  Collected funds will be divided amongst these charities.{" "}
                </p>
              </div>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </SlideUpModal>
  );
};

export default HowScoringWorks;
