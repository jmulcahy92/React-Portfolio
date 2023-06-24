import React from 'react';
import pdf from '../../assets/Resume.pdf';

export default function Resume() {
    return (
        <main id='resume'>
            <a href= {pdf}>Download my resume as a PDF</a>
        </main>
    );
}
