import React from 'react';

import ProjectCard from './projectCard';
import projectData from '../utils/projectData';



export default function Projects() {


    return (     
    
    <ProjectCard projects={projectData} />

    );
}