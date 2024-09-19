import React from 'react';
import './App.css';  
import NavBar from './NavBar'; 
import SecondScreenComponent from './secondscreen';
import Typewriter from './Typewriter';
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import AboutMe from './aboutme';
import ScrollText from './ScrollText';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
      <link rel="icon" href="" />
        <div className="content">
          <h1 className='titre'>Hello & Welcome </h1>
          <h1 className='typewrite'><Typewriter toRotate='[" My name is Anass.", " I am  a Software Dev.", "I Love to Develop."]' period={100} /></h1>
        </div>
        <div className='icon'>
        <a href='https://github.com/codezforhire' target="_blank" rel="noreferrer"><FaGithub className='github' /></a>
        <a href='https://www.linkedin.com/in/anass-mrizig-597358235/' target="_blank" rel="noreferrer"><CiLinkedin className='linkedin' /></a>
        {/* <img class="mouse-move"src={require("./assets/images/274883193-28313e5d-95f1-4e38-ac49-16b4cf006014.png")} alt="" /> */}
        </div>
      </header>
      <AboutMe />
      <body className='background'>
      {/* <ScrollText /> */}
        </body>
        <SecondScreenComponent />
        
    </div>
  );
}

export default App;
