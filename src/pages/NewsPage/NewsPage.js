import React, { Component } from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// Import Router Props
import { withRouter } from "react-router-dom";

// Import All Posts
import { news } from "./AllNews";

// import layout and top spacing component
import Layout from "../../hocs/Layout/Layout";
import TopSpacing from "../../components/TopSpacing/TopSpacing";

// import required component
import Content from "../../components/Content/Content";
import ActionButton from "../../components/ActionButton/ActionButton";

// import blog post images
import post1 from "../../assets/images/news-page/Post_1.png";
import post2 from "../../assets/images/news-page/Post_2.png";

// import CSS modules
import classes from "./NewsPage.module.css";

class NewsPage extends Component {
  state = {
    selectedPost: null,
  };

  clickedBackButtonHandler = () => {
    this.props.history.push("/");
  };

  expandPostHandler = (index) => {
    this.setState({ selectedPost: index });
  };

  render() {
    return (
      <>
        <Layout
          currentLocation={this.props.location.pathname}
          clickedBackButton={this.clickedBackButtonHandler}
        >
          <TopSpacing />
          <Row
            className={
              this.state.selectedPost === null
                ? `${classes.firstPage} ${classes.active}`
                : classes.firstPage
            }
          >
            <Col xs={12} className={classes.wrapper}>
              <Content>
                <h2>News</h2>
              </Content>
            </Col>
            <Col cs={12}>
              <div
                className={classes.post}
                onClick={() => this.expandPostHandler(1)}
              >
                <Content>
                  <p className={classes.date}> 30 December 2020</p>
                  <Image src={post2} alt="photo showing kindness" fluid />
                  <h3>Types of Everyday Kindness</h3>
                  <p className={classes.text}>
                    Kindness is not limited to giving out donations. In fact,
                    kindness is somethi…
                  </p>
                </Content>
              </div>

              <div
                className={classes.post}
                onClick={() => this.expandPostHandler(0)}
              >
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
          <Row className={classes.secondPage}>
            <Col
              xs={12}
              className={
                this.state.selectedPost !== null
                  ? `${classes.expandedPost} ${classes.active}`
                  : classes.expandedPost
              }
            >
              <Content>
                <p className={classes.date}>
                  {this.state.selectedPost !== null
                    ? news[this.state.selectedPost].date
                    : null}
                </p>
                
                {this.state.selectedPost !== null ? (
                  <Image
                    src={news[this.state.selectedPost].image}
                    alt="photo showing kindness"
                    fluid
                  />
                ) : null}

                <h3>
                  {this.state.selectedPost !== null
                    ? news[this.state.selectedPost].headline
                    : null}
                </h3>
                <span className={classes.text}>
                  {this.state.selectedPost !== null
                    ? news[this.state.selectedPost].post
                    : null}
                </span>
                {this.state.selectedPost !== null ? (
                  <ActionButton
                    clicked={() => this.setState({ selectedPost: null })}
                  >
                    Done Reading
                  </ActionButton>
                ) : null}
              </Content>
            </Col>
          </Row>
        </Layout>
      </>
    );
  }
}

export default withRouter(NewsPage);
