import React from 'react';
import '../../styles/styles';

// import Card from './Card';
// import projectData from '../utils/projectData';
import woofscreenshot from '../../images/woofscreenshot2.png';
import marvelquizscreenshot from '../../images/marvelquizscreenshot2.png';
import weatherforecastscreenshot from '../../images/weatherforecastscreenshot.png';
import passwordgen from '../../images/passwordgenscreenshot.png';



export default function Projects() {


    return (     
    
    <div className="container workprojects">
    <div className="row align-items-center justify-content-center">
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail animation2 fadeInLeft">
            <img src={woofscreenshot} alt="woof screenshot" className="woofproject" />
            <div className="caption">
                <h3>W.O.O.F.</h3>
                <p>"We Out Of Food!" Web-based application using APIS to locate dog-friendly restaurants.</p>
                <p><a href="https://github.com/joeytmab/Restaurant-Picker-Project" className="btn btn-primary" target="_blank" rel="noreferrer">Github
                    <i className="fa-brands fa-github fa-2xl"></i></a>
                    <a href="https://joeytmab.github.io/Restaurant-Picker-Project/" className="btn btn-default" target="_blank" rel="noreferrer">Demo  
                    </a>
                </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-4">
            <div className="thumbnail animation2 fadeInLeft">
              <img src={marvelquizscreenshot} alt="ironman screenshot" className="quizproject" />
              <div className="caption">
                <h3>Marvel Movie Quiz</h3>
                <p>Test your Marvel Cinematic Universe trivia skills! Very challenging, even for the seasoned fanatic.</p>
                <p>
                  <a href="https://github.com/joeytmab/MCU-Trivia-Quiz-With-Web-APIs" className="btn btn-primary" target="_blank" rel="noreferrer">Github  
                  <i className="fa-brands fa-github fa-2xl"></i></a>
                  <a href="https://joeytmab.github.io/MCU-Trivia-Quiz-With-Web-APIs/" className="btn btn-default" target="_blank" rel="noreferrer">Demo
                  </a>
                </p>
              </div>
            </div>
          </div>
      </div>

      <div className="row">
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail animation2 fadeInLeft">
            <img src={weatherforecastscreenshot} alt="weatherforecastscreenshot" className="weatherproject" />
            <div className="caption">
              <h3>Weather Forecast App</h3>
              <p>Realtime and 5 day forecasts for a US location that can be saved locally.</p>
                <p><a href="https://github.com/joeytmab/Realtime-Weather-Dashboard" className="btn btn-primary" target="_blank" rel="noreferrer">Github  
                  <i className="fa-brands fa-github fa-2xl"></i></a> 
                  <a href="https://joeytmab.github.io/Realtime-Weather-Dashboard/" className="btn btn-default" target="_blank" rel="noreferrer">Demo</a>
                </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-4">
            <div className="thumbnail animation2 fadeInLeft">
              <img src={passwordgen} alt="passwordgenscreenshot" className="passwordproject" />
              <div className="caption">
                <h3>Password Generator</h3>
                <p>A generator that produces a randomly created password according to user parameters. </p>
                <p><a href="https://github.com/joeytmab/Password-Generator-JS-" className="btn btn-primary" target="_blank" rel="noreferrer">Github  
                  <i className="fa-brands fa-github fa-2xl"></i></a>
                  <a href="https://joeytmab.github.io/Password-Generator-JS-/" className="btn btn-default" target="_blank" rel="noreferrer">Demo</a>
                </p>
              </div>
            </div>
          </div>
      </div>
</div>

    );
}