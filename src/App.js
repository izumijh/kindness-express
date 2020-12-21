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
import MessageInterface from "./pages/MessageInterface/MessageInterface";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import Profile from "./pages/Profile/Profile";
import FAQPage from "./pages/FAQPage/FAQPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import CreditsPage from "./pages/CreditsPage/CreditsPage";

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
          <Route path="/profile" component={Profile} exact />
          <Route path="/post-kind-words" component={PostaMessage} exact />
          <Route path="/post-a-story" component={PostaStory} exact />
          <Route
            path="/post-a-story/process"
            component={PostingProcess}
            exact
          />
          <Route path="/login" component={RegistrationPage} exact />
          <Route path="/paperplane" component={MessageInterface} exact />
          <Route path="/letter" component={LetterInterface} exact />
          <Route path="/faq" component={FAQPage} exact />
          <Route path="/news" component={NewsPage} exact />
          <Route path="/about" component={AboutPage} exact />
          <Route path="/credits" component={CreditsPage} exact />
          <Route path="/" component={HomePage} />
          <Redirect to="/" />
        </AnimatedSwitch>
      </BrowserRouter>
    );
  }
}

export default App;
