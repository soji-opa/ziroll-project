import React from "react";
import Content from "./components/Content";
import MainBio from './components/MainBio'

function App() {
  return (
    <div className="App container">
    <MainBio/>
    <Content/>
      <h1>Hello React</h1>
      <p>Is the rehashing done</p>
    </div>
  );
}

export default App;
