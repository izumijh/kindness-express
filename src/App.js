import React, { Component } from "react";

// import React Router Package
import { BrowserRouter, Route } from "react-router-dom";

// import animated routing plugin
import { AnimatedSwitch } from "react-router-transition";

// import react bootstrap required css
import "bootstrap/dist/css/bootstrap.min.css";

// Import Pages
import HomePage from "./pages/HomePage/HomePage";
import PostaStory from "./pages/PostaStory/PostaStory";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route path="/compose/post-a-story" component={PostaStory} />
          <Route path="/" component={HomePage} />
        </AnimatedSwitch>
      </BrowserRouter>
    );
  }
}

export default App;
