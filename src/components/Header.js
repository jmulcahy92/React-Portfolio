import React from 'react';
import '../styles/Header.css';
import Navigation from './Navigation'

export default function Header({ currentPage, handlePageChange }) {
    return (
        <header className="header d-flex align-items-center justify-content-between p-3">
            <div>
                <h1>Jacob Mulcahy</h1>
            </div>
            <div>
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
            </div>
        </header>
    );
}
