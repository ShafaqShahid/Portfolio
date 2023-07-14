import React from 'react';
import logo from './images/Logo.png';
import './Navbar.css';
const Navbar = () => {
    return (
        <nav>
            <div className="logo">
            <img src={logo} alt="logo" /></div>
            <div className="website-name">Shafaq Shahid Portfolio</div>
            <div className="nav-links">
                <a href="#home">Home</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
