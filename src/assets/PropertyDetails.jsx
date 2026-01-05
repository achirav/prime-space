import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./PropertyDetails.css";

function PropertyDetails() {
    const { id } = useParams(); // Get property ID from URL
    const navigate = useNavigate(); // For navigating back or to contact

    const [property, setProperty] = useState(null); // Current property data
    const [imageIndex, setImageIndex] = useState(0); // Tracks which image is active
    const [section, setSection] = useState("overview"); // Current section (overview, plan, map)

    // Fetch property data on component mount or when ID changes
    useEffect(() => {
        fetch("/properties.json")
            .then(res => res.json())
            .then(data => {
                const found = data.properties.find(p => p.id === id);
                if (!found) {
                    navigate("/search");
                    return;
                }
                setProperty(found);
                setImageIndex(0); // Reset image carousel
            });
    }, [id, navigate]);

    // Prepare all available images for the gallery
    const images = property
        ? [
              property.img1,
              property.img2,
              property.img3,
              property.img4,
              property.img5,
              property.img6,
              property.img7,
          ].filter(Boolean)
        : [];

    // Render
    return (
        <section className="property-view">
            <h2>Property Details</h2>

            {!property ? (
                <div className="loading">Loading properties…</div>
            ) : (
                <>
                    {/* HERO SECTION: Main image + image strip */}
                    <div className="property-hero">
                        <button className="back-link" onClick={() => navigate("/search")}>
                            ← Back to listings
                        </button>

                        <img
                            src={images[imageIndex] || property.picture}
                            alt="Property"
                            className="hero-image"
                        />

                        <div className="image-strip">
                            {images.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt={`Preview ${i}`}
                                    className={i === imageIndex ? "active" : ""}
                                    onClick={() => setImageIndex(i)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* MAIN CONTENT + SIDEBAR */}
                    <div className="property-body">
                        {/* LEFT COLUMN */}
                        <div className="property-main">
                            <h1 className="property-heading">
                                {property.type}
                                <span>{property.location}</span>
                            </h1>

                            <div className="meta-row">
                                <span>{property.bedrooms} Beds</span>
                                <span>{property.bathrooms} Baths</span>
                                <span>{property.area} sqft</span>
                                <span>{property.tenure}</span>
                            </div>

                            <div className="section-nav">
                                <button
                                    className={section === "overview" ? "active" : ""}
                                    onClick={() => setSection("overview")}
                                >
                                    Overview
                                </button>
                                <button
                                    className={section === "plan" ? "active" : ""}
                                    onClick={() => setSection("plan")}
                                >
                                    Floor Plan
                                </button>
                                <button
                                    className={section === "map" ? "active" : ""}
                                    onClick={() => setSection("map")}
                                >
                                    Location
                                </button>
                            </div>

                            <div className="section-content">
                                {section === "overview" && (
                                    <p className="description-text">{property.description}</p>
                                )}

                                {section === "plan" &&
                                    (property.floorMap ? (
                                        <img
                                            src={property.floorMap}
                                            alt="Floor plan"
                                            className="floor-image"
                                        />
                                    ) : (
                                        <p>No floor plan available.</p>
                                    ))}

                                {section === "map" &&
                                    (property.map ? (
                                        <iframe
                                            src={property.map}
                                            title="Map"
                                            loading="lazy"
                                        ></iframe>
                                    ) : (
                                        <p>Map unavailable.</p>
                                    ))}
                            </div>
                        </div>

                        {/* RIGHT COLUMN */}
                        <aside className="property-sidebar">
                            <div className="price-card">
                                <p className="price-label">Asking Price</p>
                                <h2 className="price">£{Number(property.price).toLocaleString()}</h2>

                                <button
                                    className="cta primary"
                                    onClick={() => navigate("/contact")}
                                >
                                    Request Information
                                </button>

                                <button
                                    className="cta secondary"
                                    onClick={() =>
                                        window.open(
                                            `https://wa.me/?text=I'm interested in ${property.type} at ${property.location}`,
                                            "_blank"
                                        )
                                    }
                                >
                                    WhatsApp Agent
                                </button>
                            </div>

                            <div className="info-card">
                                <p>
                                    <strong>Property ID:</strong> {property.id}
                                </p>
                                <p>
                                    <strong>Listed:</strong> {property.added?.month} {property.added?.day},{" "}
                                    {property.added?.year}
                                </p>
                            </div>
                        </aside>
                    </div>
                </>
            )}
        </section>
    );
}

export default PropertyDetails;
