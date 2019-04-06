import React, { Component } from "react";

import "./App.css";

import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h4>Content</h4>
        <Footer />
      </div>
    );
  }
}

export default App;
