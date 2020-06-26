import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
// import { List } from "./components/List";
// import SearchBtn from "./components/Search";
// import SaveBtn from "./components/Save";
import searchPage from "./pages/searchPage"

function(App) {
  return(
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path = "/" component = {searchPage} />
        </Switch>
      </div>
    </Router>
  )
}



// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Google Book Search</h2> <Nav />
//         </div>
//         {/* <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p> */}
       
//        <List />   
//        <SaveBtn />
//        <SearchBtn />
//       </div>
//     );
//   }
// }

export default App;
