'use client';

import logo from 'public/logo.jpg';

export const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav_brand">
                <img src={logo} alt='logo' height={36} />
                <h4 className="nav_title">Alex Grimes</h4>
                <h4 className="nav_title xs">Alex G.</h4>
            </div>
            <div className="nav_links">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
};

