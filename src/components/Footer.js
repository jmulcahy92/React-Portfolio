import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
    return (
        <footer className="py-3">
            <ul className="nav justify-content-center pb-3 mb-3">
                <li className="nav-item">
                    <a href="https://github.com/jmulcahy92/" className="nav-link px-2">GitHub</a>
                </li>
                <li className="nav-item">
                    <a href="https://www.linkedin.com/in/jacob-mulcahy-a96a0b164/" className="nav-link px-2">LinkedIn</a>
                </li>
                <li className="nav-item">
                    <a href="https://stackoverflow.com/users/21523262/jmulcahy92" className="nav-link px-2">Stack Overflow</a>
                </li>
            </ul>
        </footer>
    )
}
