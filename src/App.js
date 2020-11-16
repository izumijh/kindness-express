import React, { Component } from "react";

// import React Router Package
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import react bootstrap required css
import "bootstrap/dist/css/bootstrap.min.css";

// Import Layout
import Layout from "./hocs/Layout/Layout";

// Import Main Menu
import MainMenu from "./containers/MainMenu/MainMenu";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" component={MainMenu} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
