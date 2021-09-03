import React from 'react';
import './App.css';

import Navigation from "./components/Navigation";
import Greetings from "./containers/Greetings";
import Skills from "./containers/Skills";
import Education from "./containers/Education";
import Experience from "./containers/Experience";
import Projects from "./containers/Projects";
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/css/argon-design-system-react.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Greetings/>
      <Skills/>
      <Education/>
      <Experience/>
      <Projects/>
      <footer>
        <span>
          Created By Dev Krishna Sadana | <span class="fa fa-copyright"></span>{" "}
          2021 All rights reserved.
        </span>
      </footer>
    </div>
  );
}

export default App;
