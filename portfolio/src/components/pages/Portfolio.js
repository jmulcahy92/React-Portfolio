import React from 'react';
import Project from '../Project';
import projectsArray from '../../assets/projectData';

export default function Portfolio() {
    return (
        <main className="d-flex flex-wrap">
            {projectsArray.map((projectData) => <Project projectData={projectData} /> )}
        </main>
    );
}
