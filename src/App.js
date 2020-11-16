import React, { Component } from "react";

// import React Router Package
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import react bootstrap required css
import "bootstrap/dist/css/bootstrap.min.css";

// Import Layout
import Layout from "./hocs/Layout/Layout";

// Import Pages
import HomePage from "./pages/HomePage/HomePage";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
