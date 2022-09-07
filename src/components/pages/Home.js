import React from 'react';
import homepic from '../../images/githubprofilepic.jpg';



export default function Home() {
    return (
        <div className="aboutme">
    <h1>I'm Joseph&thinsp;
        <span>
              Biñas
        </span>
    </h1>

    <p> Longtime contributor to the San Diego bar and restaurant industry,
        <br /> junior full stack web developer,
        <br /> and all-around problem solver.
        <br /> Welcome to my professional portfolio.  
    </p>
    
        
    <div className="image">
        <img src={homepic} alt="github profilepic" className="animation" />
    </div>
    </div>
    );
}