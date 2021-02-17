import React, { Component } from "react";

// import Navbar Component
import Navbar from "../../containers/Navbar/Navbar";

// import Cloud Component (purely for aesthetics)
import Clouds from "../../components/Clouds/Clouds";

// import Footer Component
import Footer from "../../containers/Footer/Footer";

// import overlay for desktops
import DesktopOverlay from "../../components/DesktopOverlay/DesktopOverlay";

/* Every child is required to be wrapped in <Row></Row>. */
class Layout extends Component {
  render() {
    return (
      <>
        <Navbar
          // General Functions
          currentLocation={this.props.currentLocation}
          clickedNav={this.props.clickedNav}
          clickedBackButton={this.props.clickedBackButton}
          clickedMoreButton={this.props.clickedMoreButton}
          
          // Navigation Menu Functions
          launchFAQ={this.props.launchFAQ}
          launchNews={this.props.launchNews}
          launchAbout={this.props.launchAbout}
          launchCredits={this.props.launchCredits}
          clickedExit={this.props.clickedExit}
        />
        {this.props.children}
        <Clouds />
        <Footer />
        <DesktopOverlay />
      </>
    );
  }
}

export default Layout;
