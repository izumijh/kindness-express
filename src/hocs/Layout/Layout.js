import React, { Component } from "react";

// import Navbar Component
import Navbar from "../../components/Navbar/Navbar";

// import Footer Component
import Footer from "../../components/Footer/Footer";

//Layout Template for Entire Website
class Layout extends Component {
  render() {
    return (
      <>
        <Navbar />
        {this.props.children}
        <Footer />
      </>
    );
  }
}

export default Layout;
