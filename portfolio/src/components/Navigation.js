import React from 'react';
import '../styles/Navigation.css';

function Navigation() {
    return (
        <nav>
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" class="nav-link px-2">About Me</a></li>
                <li><a href="#" class="nav-link px-2">Portfolio</a></li>
                <li><a href="#" class="nav-link px-2">Contact</a></li>
                <li><a href="#" class="nav-link px-2">Resume</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;