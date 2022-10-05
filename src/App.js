import React from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import MainBio from './components/MainBio'

function App() {
  return (
    <div className="App">
      <MainBio/>
      <Content/>
      
      <Footer/>
    </div>
  );
}

export default App;
