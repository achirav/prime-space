import React from "react";
import { Link } from "react-router-dom";
import { Home, TrendingUp, Users } from "lucide-react";
import "./HomePage.css";
import SocialAside from "./SocialAside";

function HomePage() {
    return (
        <main className="editorial-home">

            {/* Social media links shown on the side for quick access */}
            <SocialAside />

            <section className="statement">
                <h1>
                    We don’t just sell spaces.
                    <span> We design the way you live.</span>
                </h1>

                <p>
                    At Prime Space, we connect people with quality homes, elegant residences,
                    and valuable property investments across Sri Lanka.
                </p>

                {/* Link to property search page */}

                <Link to="/search" className="statement-link">
                    Find Your Space →
                </Link>
            </section>

            {/* FULL WIDTH IMAGE BREAK */}
            <section className="image-break">
                <img src="/pics/main.webp" alt="Luxury living" />
            </section>


            {/* describing the company and its values */}
            <section className="story">
                <div className="story-text">
                    <h2>Who We Are</h2>
                    <p>
                        At Prime Space, we focus on creating meaningful living experiences by offering
                        well-designed residences that combine lifestyle appeal with investment
                        security.
                    </p>

                </div>

                {/* stats to show experience */}
                <div className="story-stats">
                    <div>
                        <strong>1,400+</strong>
                        <span>Properties</span>
                    </div>
                    <div>
                        <strong>30+</strong>
                        <span>Expert Agents</span>
                    </div>
                    <div>
                        <strong>10+</strong>
                        <span>Years Experience</span>
                    </div>
                </div>
            </section>

            {/* Horizontal scroll bar gallery of property images */}
            <section className="horizontal-gallery">
                {Array.from({ length: 7 }).map((_, i) => (
                    <img
                        key={i}
                        src={`/Property 1/pic-${i + 1}.webp`} 
                        alt={`Property view ${i + 1}`}
                        loading="lazy"
                        decoding="async"
                    />
                ))}
            </section>


            {/* VALUE PROPOSITION */}
            <section className="values">
                <div className="value">
                    <Home size={28} />
                    <h3>Curated Living</h3>
                    <p>Only premium developments in prime locations.</p>
                </div>

                <div className="value">
                    <TrendingUp size={28} />
                    <h3>Smart Investment</h3>
                    <p>Designed to grow value over time.</p>
                </div>

                <div className="value">
                    <Users size={28} />
                    <h3>Personal Guidance</h3>
                    <p>Support from consultation to ownership.</p>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="closing-cta">
                <h2>Discover homes that fit your lifestyle.</h2>
                <Link to="/contact" className="cta-btn">
                    Talk to Prime Space
                </Link>
            </section>

        </main>
    );
}

export default HomePage;
