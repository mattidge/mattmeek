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
        <img src={logo} className="App-logo" alt="logo" />
        <ClickableImage image={linkedin} url={"https://www.linkedin.com/in/matthew-meek-564797160"} />
        <ClickableImage image={facebook} url={"https://www.facebook.com/matthew.l.meek/"}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
