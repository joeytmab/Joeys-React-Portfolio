import React from 'react';
import  '../../styles/styles.css';

export default function Contact() {
    return (
        <div className="container-fluid">
        
            <div className="row contactmecontainer">
            <div className="col-md-6 contactmebio">
                
                
                <h7>Contact&thinsp;
                    <span>
                    Me!
                    </span>
                </h7>
            </div>
            

            <div className="col-md-6 emailcontainer contactmebio animation2 fadeInLeft">   
                <ul>
                    <li><a href="tel:+8189174663" target="_blank" rel="noreferrer"><i class="fa-solid fa-square-phone"></i>  (818) 917-4663</a></li>
                    <li><a href="Mailto:joseph.t.binas@gmail.com"><i class="fa-solid fa-envelope"></i>  joseph.t.binas@gmail.com</a></li>
                    <li><a href="https://github.com/joeytmab" target="_blank" rel="noreferrer"><i class="fa-brands fa-github-square"></i>  Github</a></li>
                    <li><a href="https://www.linkedin.com/in/joseph-binas-941a1623b/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i>  LinkedIn</a></li>
                    <li><a href="https://www.instagram.com/joeythomasunofficial/" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram-square"></i>  Instagram</a></li>
                    <li><a href="https://www.facebook.com/joeybinas" target="_blank" rel="noreferrer"><i class="fa-brands fa-facebook-square"></i>  Facebook</a></li>
                    </ul>
            </div> 
            
        </div>        
        </div>
        );
    }