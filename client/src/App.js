import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Import Components
import Nav from "./components/Nav/Nav"
import Header from "./components/Header"
import Wrapper from "./components/Wrapper"

//Import Pages
import Search from "./pages/searchPage"

import "./App.css";

class App extends Component {
  render () {
    return(
      <Router>
        <div>
          <Nav />
          <Header />

          <Wrapper>
            <Route exact path = "/" component = {Search} />
            <Route exact path = "/search" component = {Search} />
          </Wrapper>
        </div>
      </Router>
    )
  }
}

export default App;
