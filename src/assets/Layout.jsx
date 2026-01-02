import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";
import DemoWarning from "./DemoWarning";
import "./Layout.css";

const Layout = () => {
    const [showWarning, setShowWarning] = useState(true);

    return (
        <div className="app-shell">
            {showWarning && <DemoWarning onClose={() => setShowWarning(false)} />}

            <Navbar />

            <main className="page-content">
                <Outlet />
            </main>

            {/* Footer section */}
            <footer className="site-footer">
                <div className="footer-inner">

                    {/* Brand name and about */}
                    <div className="footer-brand">
                        <h3>PRIME SPACE</h3>
                        <p>
                            Prime Space provides well-designed apartments, premium residences, and
                            reliable property investments throughout Sri Lanka.
                        </p>
                    </div>

                    {/* Quick Links of the website*/}
                    <div className="footer-links">
                        <h4>PRIME SPACE</h4>
                        <Link to="/">Home</Link>
                        <Link to="/search">Search</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact Us</Link>
                    </div>

                    {/* CONTACT */}
                    <div className="footer-contact">
                        <h4>Contact</h4>
                        <p>+94 76 887 1461</p>
                        <p>No.196 Primrose road,<br />Kandy, Sri Lanka</p>
                    </div>
                </div>

                {/* FOOTER BOTTOM */}
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} PRIME SPACE. All rights reserved.</p>
                    <span>Created by Achira Vitharanage</span>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
