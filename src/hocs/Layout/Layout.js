import React, { Component } from "react";

// import Navbar Component
import Navbar from "../../containers/Navbar/Navbar";

// import Cloud Component (purely for aesthetics)
import Clouds from "../../components/Clouds/Clouds";

// import Footer Component
import Footer from "../../containers/Footer/Footer";

/* Every child is required to be wrapped in <Row></Row>. */
class Layout extends Component {
  render() {
    return (
      <>
        <Navbar
          currentLocation={this.props.currentLocation}
          clickedBackButton={this.props.clickedBackButton}
          clickedMoreButton={this.props.clickedMoreButton}
        />
        {this.props.children}
        <Clouds />
        <Footer />
      </>
    );
  }
}

export default Layout;
