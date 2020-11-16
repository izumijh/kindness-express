import React, { Component } from "react";

// import Navbar Component
import Navbar from "../../components/Navbar/Navbar";

// import Cloud Component (purely for aesthetics)
import Clouds from "../../components/Clouds/Clouds";

// import Footer Component
import Footer from "../../components/Footer/Footer";

/* Every child is required to be wrapped in <Row></Row>. */
class Layout extends Component {
  render() {
    return (
      <>
        <Navbar />
        {this.props.children}
        <Clouds />
        <Footer />
      </>
    );
  }
}

export default Layout;
