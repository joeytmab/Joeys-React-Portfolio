import React from 'react';
import  '../../styles/styles.css';
import resumescreenshot from '../../images/resumescreenshot.png';

export default function Contact() {
    return (

        <div className="container-fluid">
        
            <div className="row contactmecontainer">
            <div className="col-md-6 contactmebio">
                
                
                <h1>Click on image to&thinsp;
                    <span>
                    download PDF.
                    </span>
                </h1>
            </div>
            

            <div className="col-md-6 emailcontainer contactmebio">   
                <a href="https://drive.google.com/file/d/1UrRc0PrQ5a4pqEEhxTZcplQOyvQ2ECGn/view?usp=sharing" target="_blank" rel="noreferrer">
                <img src={resumescreenshot} alt="ResumeLink" className='animation2 fadeInLeft'/></a>
            </div> 
            
        </div>        
        </div>
        
        
        
        );
    }