import React from 'react';
import logo from '../Images/logo.png'; 
import './Header.css'; 

const Header = () => {
    return (
        <header>
            <nav className="nav">
                <div className="left-nav">
                    <a href="/">
                        <img src={logo} alt="GFG-logo" />
                    </a>
                </div>
                <div className="right-nav">
                    <a href="/product">Product</a>
                    <a href="/resources">Resources</a>
                    <a href="/developers">Developers</a>
                    <a href="/app">
                        <button>Open App</button>
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;