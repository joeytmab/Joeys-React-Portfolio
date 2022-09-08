import React from 'react';
import '../../styles/styles';

import ProjectCard from './projectCard';
import projectData from '../utils/projectData';



export default function Projects() {


    return (     
    
    <ProjectCard projects={projectData} />

    );
}