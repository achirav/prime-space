import React from "react";
import "./About.css";

function About() {
    return (
        <main className="about-page">
            <div className="about-layout">

                <section className="about-row left-focus">
                    <div className="text-box">
                        <span className="section-tag">ABOUT PRIME SPACE</span>
                        <h2>Redefining Living Spaces</h2>
                        <p>
                            Prime Space is a reliable real estate platform in Sri Lanka offering carefully selected residential properties.
                            We prioritise quality design, dependable construction, and honest, transparent service.
                        </p>
                    </div>
                    <div className="image-box">
                        <img src="/pics/about-1.webp" alt="Luxury property" />
                    </div>
                </section>

                <section className="about-row center-focus">
                    <div className="image-box large">
                        <img src="/pics/about-2.webp" alt="Our mission" />
                    </div>
                    <div className="text-box">
                        <span className="section-tag">OUR MISSION</span>
                        <h2>Foundation of Trust</h2>
                        <p>
                            Prime Space is dedicated to creating modern living environments through
                            responsible development, innovative ideas, and genuine customer care.
                        </p>

                    </div>
                </section>

                <section className="about-row right-focus">
                    <div className="text-box">
                        <span className="section-tag">OUR VISION</span>
                        <h2>Modern Communities</h2>
                        <p>
                            Prime Space focuses on developing practical and sustainable housing solutions
                            that meet the needs of today while preparing for the future.
                        </p>

                    </div>
                    <div className="image-box">
                        <img src="/pics/about-3.webp" alt="Future housing" />
                    </div>
                </section>

            </div>
        </main>
    );
}

export default About;
