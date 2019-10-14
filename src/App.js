import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import Header from "./components/Header";
import Projects from "./components/Projects";
import HomePage from "./components/HomePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Projects></Projects>
    </div>
  );
}

export default App;
