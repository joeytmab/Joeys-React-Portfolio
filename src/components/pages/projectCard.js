import React from 'react';

const style = {
    buttonFont: {
        fontSize: '10px'
    }
}

export default function projectCard(props) {
    return (
        <div className='workprojects animation2 fadeInLeft'>
            
                {props.projects.map(item => (
            
            <div className='thumbnail' key={item.id}>
                <img src={item.picture} alt={item.title} />
                <div className="caption">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p><a href={item.git} className="btn btn-primary" styles={style.buttonFont} role="button">
                            Github
                        <i className="fa-brands fa-github fa-2xl"></i></a>
                        <a href={item.demo} className="btn btn-default" styles={style.buttonFont} role="button">
                            Demo  
                        </a>
                    </p>
                </div>
            </div>
                ))}
        </div>
    )
}