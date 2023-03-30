import React from 'react';
import '../styles/Header.css';
import Navigation from './Navigation'

function Header() {
    return (
        <header class="d-flex align-items-center p-3">
            <div class="container">
                <div class="d-flex flex-wrap align-items-center justify-content-between">
                    <h1 class="d-flex align-items-center mb-2 mb-lg-0 text-decoration-none px-2">Jacob Mulcahy</h1>

                    <Navigation />
                </div>
            </div>
        </header>
    );
}

export default Header;