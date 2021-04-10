import React, { Component } from "react";
import "./App.css";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
