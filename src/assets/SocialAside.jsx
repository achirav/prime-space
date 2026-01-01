import React from "react";
import "./SocialAside.css";

// List of social media links with SVG icons
const socials = [
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    icon: (
      <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H8.08v-2.9h2.36V9.41c0-2.33 1.38-3.61 3.5-3.61 1.02 0 2.09.18 2.09.18v2.3h-1.17c-1.15 0-1.51.72-1.51 1.47v1.76h2.57l-.41 2.9h-2.16v7.03C18.34 21.2 22 17.06 22 12.07z" />
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com",
    icon: (
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A4.8 4.8 0 1 0 16.8 13 4.8 4.8 0 0 0 12 8.2zM18.4 6.2a1.12 1.12 0 1 1 1.12-1.12A1.12 1.12 0 0 1 18.4 6.2z" />
    ),
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: (
      <path d="M22 5.92c-.63.28-1.3.47-2 .55a3.48 3.48 0 0 0 1.53-1.92 6.92 6.92 0 0 1-2.2.84 3.46 3.46 0 0 0-5.9 3.15 9.82 9.82 0 0 1-7.13-3.62s-3 5 3 8.1a3.51 3.51 0 0 1-1.56-.43v.04a3.5 3.5 0 0 0 2.78 3.42 3.5 3.5 0 0 1-.93.12c-.23 0-.46-.02-.69-.06a3.49 3.49 0 0 0 3.24 2.42A7 7 0 0 1 2 19.54 9.84 9.84 0 0 0 8.45 21c6.06 0 9.39-5.02 9.39-9.38v-.43A6.7 6.7 0 0 0 22 5.92z" />
    ),
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/",
    icon: (
      <path d="M20.52 3.48A11.78 11.78 0 0 0 12 0C5.37 0 .08 5.29.08 11.92a11.7 11.7 0 0 0 1.62 6L0 24l6.32-1.65A11.9 11.9 0 0 0 12 23.92c6.63 0 11.92-5.29 11.92-11.92 0-3.18-1.24-6.17-3.4-8.52z" />
    ),
  },
];

const SocialAside = () => {
  return (
    <aside className="social-aside" aria-label="Social media links">
      <ul className="social-list">
        {socials.map((item) => (
          <li key={item.name}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                {item.icon}
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SocialAside;
