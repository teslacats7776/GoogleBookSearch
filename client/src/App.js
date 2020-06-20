import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { List } from "./components/List";
import SearchBtn from "./components/Search";
import SaveBtn from "./components/Save";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Google Book Search</h2> <Nav />
        </div>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
       
       <p>Container placeholder<List /></p> 
       <p>save button placeholder<SaveBtn /></p> 
       <p>search button placeholder <SearchBtn /></p>
      </div>
    );
  }
}

export default App;
