import React, { useState, useEffect } from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

// import Font Awesome Package
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import Kind Tasks List
import { KindTasksList } from "./KindTasksList";

// import required components
import Content from "../../components/Content/Content";
import ActionButton from "../../components/ActionButton/ActionButton";

// import css modules
import classes from "./DailyKindTasks.module.css";

const DailyKindTasks = (props) => {
  const [currentTasks, newTasks] = useState([]);

  useEffect(() => {
    let duplicateTaskList = [...KindTasksList];
    let available = duplicateTaskList.length - 3;
    let randomisedTasks = duplicateTaskList.splice(
      Math.floor(Math.random() * available),
      3
    );

    newTasks(randomisedTasks);
  }, []);

  return (
    <Row className="KindTasks">
      <Col xs={12} className={classes.wrapper}>
        <Content>
          <h3>Daily Kind Tasks</h3>
          <Carousel controls={false} interval={null}>
            {currentTasks.map((task, id) => {
              return (
                <Carousel.Item className={classes.carouselPage} key={task + id}>
                  <div style={{ backgroundColor: task.colour }}>
                    <FontAwesomeIcon icon={task.icon} />
                    <p>{task.task}</p>
                    <ActionButton clicked={props.clickedPost}>
                      Post a Story about This!
                    </ActionButton>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Content>
      </Col>
    </Row>
  );
};

export default DailyKindTasks;
