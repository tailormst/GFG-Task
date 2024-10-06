// Footer.js
import React from 'react';
import logo from '../Images/logo.png';
import instaImg from '../Images/instaimg.png';
import twitterImg from '../Images/twitterX.png';
import discordImg from '../Images/discord.png';
import githubImg from '../Images/github.png';
import './Footer.css'; // Ensure the CSS file is in the same directory

const Footer = () => {
    return (
        <>
        <footer>
            <div className="footer">
                <div className="left-foot">
                    <div className="first-left">
                        <div><img src={logo} alt="logo" /></div>
                        <div>GFGXPYHACK</div>
                    </div>
                    <div className="sec-left">
                        <p>
                            PyHack provides a wide range of resources and hands-on experience to help you master Python-based
                            game development. Explore new techniques, share your creations, and collaborate with fellow
                            developers. Whether you're looking to build indie games or start a career in the gaming
                            industry, PyHack is the place to begin.
                        </p>
                    </div>
                    <div className="third-left">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src={instaImg} alt="Instagram" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src={twitterImg} alt="Twitter" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src={discordImg} alt="Discord" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src={githubImg} alt="Github" />
                        </a>
                    </div>
                </div>
                <div className="right-foot">
                    <div className="col-1">
                        <div className="row-1">
                            <h4>Resources</h4>
                        </div>
                        <div className="row-2">
                            <a href="/">Brand</a>
                            <a href="/">FAQ</a>
                            <a href="/">Help & Support</a>
                            <a href="/">Governance</a>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="row-1">
                            <h4>Developers</h4>
                        </div>
                        <div className="row-2">
                            <a href="/">Technical Paper</a>
                            <a href="/">Security</a>
                            <a href="/">Design</a>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="row-1">
                            <h4>Company</h4>
                        </div>
                        <div className="row-2">
                            <a href="/">Privacy Policy</a>
                            <a href="/">Term Of Use</a>
                            <a href="/">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
        </>
    );
};

export default Footer;