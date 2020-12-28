import React, { Component, lazy, Suspense } from "react";

// import React Router Package
import { BrowserRouter, Route, Redirect } from "react-router-dom";

// import animated routing plugin
import { AnimatedSwitch } from "react-router-transition";

// import react bootstrap required css
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

// Import Pages
import LandingPage from "./pages/LandingPage/LandingPage";
import HomePage from "./pages/HomePage/HomePage";
import PostaMessage from "./pages/PostaMessage/PostaMessage";
import PostaStory from "./pages/PostaStory/PostaStory";
import LetterInterface from "./pages/LetterInterface/LetterInterface";
import MessageInterface from "./pages/MessageInterface/MessageInterface";
import Profile from "./pages/Profile/Profile";
import PostingProcess from "./pages/PostingProcess/PostingProcess";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
const FAQPage = lazy(() => import("./pages/FAQPage/FAQPage"));
const NewsPage = lazy(() => import("./pages/NewsPage/NewsPage"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const CreditsPage = lazy(() => import("./pages/CreditsPage/CreditsPage"));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<></>}>
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
            <Route path="/landing" component={LandingPage} exact />
            <Route path="/" component={HomePage} />
            <Redirect to="/" />
          </AnimatedSwitch>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
