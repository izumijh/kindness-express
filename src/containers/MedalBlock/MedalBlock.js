import React, { useState, useEffect } from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// import radial progress bar plugin
import { CircleProgress } from "react-gradient-progress";

// import SVG image
import LV1 from "../../assets/images/medals/LV1.svg";
import LV2 from "../../assets/images/medals/LV2.svg";
import LV3 from "../../assets/images/medals/LV3.svg";
import LV4 from "../../assets/images/medals/LV4.svg";
import LV5 from "../../assets/images/medals/LV5.svg";

// import required components
import Content from "../../components/Content/Content";
import ActionButton from "../../components/ActionButton/ActionButton";

// import css modules
import classes from "./MedalBlock.module.css";

const MedalBlock = (props) => {
  const imgArray = [LV1, LV2, LV3, LV4, LV5];
  const [expBar, updateExp] = useState(0);

  const userLevel = 4;
  const userExp = 60;

  useEffect(() => {
    for (let i = expBar; i < userExp; i++) {
      updateExp(expBar + 7);
    }
  }, [expBar]);

  return (
    <Row>
      <Col xs={12} className={classes.wrapper}>
        <Content>
          <h3>My Profile</h3>
          <div className={classes.progressWrapper}>
            {/* Grey Total Progress */}
            <CircleProgress
              percentage={100 * 0.7}
              strokeWidth={16}
              fontSize={"0"}
              primaryColor={["#E8E8E8", "#E8E8E8"]}
            />

            {/* Current Progress */}
            <CircleProgress
              percentage={expBar * 0.7}
              strokeWidth={16}
              fontSize={"0"}
              primaryColor={["#C1DE8A", "#91D8C9"]}
            />

            {/* Drop Shadow */}
            <CircleProgress
              percentage={100 * 0.7}
              strokeWidth={16}
              fontSize={"0"}
              primaryColor={["#000000", "#000000"]}
            />
          </div>
          <Image
            src={imgArray[userLevel - 1]}
            alt="medal"
            className={classes.medalImg}
          />
          <div className={classes.contentText}>
            <h1>Level {userLevel}</h1>
            <p>You donated {"RM" + userLevel} to charity!</p>
            <ActionButton white fullWidth>
              How to Level Up?
            </ActionButton>
          </div>
        </Content>
      </Col>
    </Row>
  );
};

export default MedalBlock;
