import React from "react";
import './Main.css'; 
import barSvg from '../Images/bar.svg';
import feat1 from '../Images/feat-1.svg';
import feat2 from '../Images/feat-2.svg';
import feat3 from '../Images/feat-3.svg';
import feat4 from '../Images/feat-4.svg';
import emoji1 from '../Images/emoji-1.svg';
import emoji2 from '../Images/emoji-2.svg';
import emoji3 from '../Images/emoji-3.svg';

const Main = () => {
    const toggleAnswer = (e) => {
        const button = e.currentTarget;
        const answer = button.nextElementSibling;
        const plusSign = button.querySelector(".plus");

        if (answer.style.display === "block") {
            answer.style.display = "none";
            plusSign.textContent = "+";
        } else {
            answer.style.display = "block";
            plusSign.textContent = "-";
        }
    };

    return (
        <main>
            <section className="one">
                <div className="sec-one">
                    <span className="sec-nav">
                        Introducing an era of new and exciting game development &nbsp;&nbsp;&bull;&nbsp;&nbsp;
                        <a href="#">Read more&nbsp;&nbsp;➔</a>
                    </span>

                    <div className="content">
                        <h1>Access the full power of Python Game Development.</h1>
                        <p className="subheading">The ultimate game dev workshop for Python enthusiasts. Learn, create, and innovate with the most versatile pl.</p>
                        <button className="cta-btn">Get Started ➔</button>
                    </div>

                    <div className="chart">
                        <img src={barSvg} alt="Bar-svg" />
                    </div>
                </div>
            </section>

            <section className="two">
                <h1>Workshop Features</h1>
                <div className="feature-grid">
                    <div className="feature-card">
                        <img src={feat1} alt="feature-1" />
                        <h2>Game Mechanics</h2>
                        <p>Master physics, collision detection, AI, and game loops.</p>
                    </div>
                    <div className="feature-card">
                        <img src={feat2} alt="feature-2" />
                        <h2>Visual Effects</h2>
                        <p>Create 2D/3D graphics and animations.</p>
                    </div>
                    <div className="feature-card">
                        <img src={feat3} alt="feature-3" />
                        <h2>Game Balancing</h2>
                        <p>Balance difficulty and progression.</p>
                    </div>
                    <div className="feature-card">
                        <img src={feat4} alt="feature-4" />
                        <h2>Cross-Platform Dev</h2>
                        <p>Deploy games on PC, web, and mobile.</p>
                    </div>
                </div>
            </section>

            <section className="three about-section">
                <div className="about-text">
                    <h1>About PyHack</h1>
                    <p>PyHack is a dynamic, community-driven workshop designed to teach game development using Python.</p>
                    <a href="#" className="learn-more">Learn More &rarr;</a>
                </div>
                <div className="em">
                    <div>
                        <div className="em-1">
                            <img src={emoji1} alt="emoji-1" />
                        </div>
                    </div>
                    <div className="about-em">
                        <div className="em-2">
                            <img src={emoji2} alt="emoji-2" />
                        </div>
                        <div className="em-3">
                            <img src={emoji3} alt="emoji-3" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="four faq-section">
                <div className="faq-header">
                    <h2>FAQs</h2>
                </div>
                <div className="faq-content">
                    <div className="faq-item">
                        <button className="faq-question" onClick={toggleAnswer}>What is PyHack? <span className="plus">+</span></button>
                        <div className="faq-answer">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id commodi illum cupiditate debitis quos sint dolor blanditiis excepturi consequatur iste, magnam tenetur recusandae necessitatibus dolore quis atque ab nemo mollitia.
                        </div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-question" onClick={toggleAnswer}>Where will the workshops be held? <span className="plus">+</span></button>
                        <div className="faq-answer">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id commodi illum cupiditate debitis quos sint dolor blanditiis excepturi consequatur iste, magnam tenetur recusandae necessitatibus dolore quis atque ab nemo mollitia.
                        </div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-question" onClick={toggleAnswer}>What will I learn at PyHack? <span className="plus">+</span></button>
                        <div className="faq-answer">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id commodi illum cupiditate debitis quos sint dolor blanditiis excepturi consequatur iste, magnam tenetur recusandae necessitatibus dolore quis atque ab nemo mollitia.
                        </div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-question" onClick={toggleAnswer}>Do I need prior Python experience? <span className="plus">+</span></button>
                        <div className="faq-answer">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id commodi illum cupiditate debitis quos sint dolor blanditiis excepturi consequatur iste, magnam tenetur recusandae necessitatibus dolore quis atque ab nemo mollitia.
                        </div>
                    </div>
                    <a href="#" className="see-more">See More &rarr;</a>
                </div>
            </section>
        </main>
    );
};

export default Main;