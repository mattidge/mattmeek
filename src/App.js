import logo from './logo.svg';
import './App.css';
import React from "react";
import ClickableImage from './components/clickableimage/ClickableImage';
import linkedin from "./assets/images/linkedin.png";
import facebook from "./assets/images/facebook.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClickableImage image={linkedin} url={"https://www.linkedin.com/in/matthew-meek-564797160"} />
        <ClickableImage image={facebook} url={"https://www.facebook.com/matthew.l.meek/"}/>
      </header>
    </div>
  );
}

export default App;
