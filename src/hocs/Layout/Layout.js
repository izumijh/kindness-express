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
  state = {
    isDesktop: false,
  }

  checkScreenRes = () => {
    this.setState({ isDesktop: window.innerWidth >= 500 });
  }

  componentDidMount = () => {
    this.checkScreenRes();
    window.addEventListener("resize", this.checkScreenRes);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkScreenRes);
  }

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

        {this.state.isDesktop ? <DesktopOverlay /> : null}
      </>
    );
  }
}

export default Layout;
