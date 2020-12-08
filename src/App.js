import React, { Component } from "react";

// import React Router Package
import { BrowserRouter, Route, Redirect } from "react-router-dom";

// import animated routing plugin
import { AnimatedSwitch } from "react-router-transition";

// import react bootstrap required css
import "bootstrap/dist/css/bootstrap.min.css";

// Import Pages
import HomePage from "./pages/HomePage/HomePage";
import PostaMessage from "./pages/PostaMessage/PostaMessage";
import PostaStory from "./pages/PostaStory/PostaStory";
import PostingProcess from "./pages/PostingProcess/PostingProcess";
import LetterInterface from "./pages/LetterInterface/LetterInterface";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

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
          <Route path="/post-kind-words" component={PostaMessage} exact />
          <Route path="/post-a-story" component={PostaStory} exact />
          <Route
            path="/post-a-story/process"
            component={PostingProcess}
            exact
          />
          <Route path="/login" component={RegistrationPage} exact />
          <Route path="/letter" component={LetterInterface} exact />
          <Route path="/" component={HomePage} />
          <Redirect to="/" />
        </AnimatedSwitch>
      </BrowserRouter>
    );
  }
}

export default App;
