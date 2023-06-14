import React from 'react';
import pdf from '../../assets/Resume.pdf';

export default function Resume() {
    return (
        <main id='resume'>
            <h3>Front-End Proficiencies</h3>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Javascript ES6+</li>
                <li>Bootstrap</li>
                <li>jQuery</li>
                <li>React</li>
            </ul>
            <br></br>
            <h3>Back-End Proficiencies</h3>
            <ul>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>GraphQL</li>
            </ul>
            <br></br>
            <a href= {pdf}>Download my resume as a PDF</a>
        </main>
    );
}
