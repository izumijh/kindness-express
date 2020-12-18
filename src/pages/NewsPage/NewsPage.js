import React, { Component } from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// Import Router Props
import { withRouter } from "react-router-dom";

// import layout and top spacing component
import Layout from "../../hocs/Layout/Layout";
import TopSpacing from "../../components/TopSpacing/TopSpacing";

// import required component
import Content from "../../components/Content/Content";
import FeatureWIPModal from "../../containers/FeatureWIPModal/FeatureWIPModal";

// import blog post images
import post1 from "../../assets/images/news-page/Post_1.png";
import post2 from "../../assets/images/news-page/Post_2.png";

// import CSS modules
import classes from "./NewsPage.module.css";

class NewsPage extends Component {
  state = {
    featureNotAvailable: false,
  };

  clickedBackButtonHandler = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <Layout
          currentLocation={this.props.location.pathname}
          clickedBackButton={this.clickedBackButtonHandler}
        >
          <TopSpacing />
          <Row>
            <Col xs={12} className={classes.wrapper}>
              <Content>
                <h2>News</h2>
              </Content>
            </Col>
            <Col cs={12}>
              <div className={classes.post}>
                <Content>
                  <p className={classes.date}> 30 December 2020</p>
                  <Image src={post2} alt="photo showing kindness" fluid />
                  <h3>Stories that remind us of empathy</h3>
                  <p className={classes.text}>
                    We hope everyone had fun in the web application today! Feel
                    free to visit us…
                  </p>
                </Content>
              </div>

              <div className={classes.post}>
                <Content>
                  <p className={classes.date}> 17 December 2020</p>
                  <Image src={post1} alt="kindness express logo" fluid />
                  <h3>Welcome to the Kindness Express!</h3>
                  <p className={classes.text}>
                    We hope everyone had fun in the web application today! Feel
                    free to visit us…
                  </p>
                </Content>
              </div>
            </Col>
          </Row>
          <FeatureWIPModal
            activateIf={this.state.featureNotAvailable}
            clickedExit={() => this.setState({ featureNotAvailable: false })}
          />
        </Layout>
      </>
    );
  }
}

export default withRouter(NewsPage);
