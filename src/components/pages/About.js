import React from 'react';
// import styles from '../../styles/styles';
import barprog from '../../images/barprogramconsultant.jpg';

export default function About() {
    return (
        <div className="aboutmebio">
                    <div>
                        <h1>Hello there!&thinsp;
                            <span>
                            A bit about me:
                            </span>
                        </h1>

                    <p> I am a bar manager and have excelled in the San Diego bar industry for over ten years. <br />Originally from the Los Angeles area, I have lived in San Diego since 2007, acquiring my B.S. in Human Biology at UC San Diego in 2011. 
                    To this day I am happy to consider "America's Finest City" home with my two dogs.
                    </p>
                    <br />
                    <p> More recently, I am currently enrolled in the UC San Diego Full Stack Program. <br />I am committed to getting a position
                    as a software engineer. Moreover, I am excited to merge both the interpersonal skills I've gained in the hospitality industry and my coding abilities to create
                    opportunities for myself and my team. I would love to utilize my skills and become a Technical Project Manager one day.
                    </p>
                    <br />
                    <p>Adept in HTML, CSS, Javascript, MySQL, and the MERN stack (MongoDB, Express.JS, React, Node.JS). Experienced in web application development, both in front-end and back-end design.</p>
      
            <div className="image">
                <img src={barprog} alt='barman' className="animation"/>
            </div>
                </div>
            </div>
    );
}