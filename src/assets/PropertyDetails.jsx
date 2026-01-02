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
                setProperty(found);
                setImageIndex(0); // Reset image carousel
            });
    }, [id]);

    // Show loading until property data is fetched
    if (!property) {
        return <div className="loading">Loading properties…</div>;
    }

    // Prepare all available images for the gallery
    const images = [
        property.img1,
        property.img2,
        property.img3,
        property.img4,
        property.img5,
        property.img6,
        property.img7,
    ].filter(Boolean);

    return (
        <section className="property-view">

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

                {/* Thumbnail strip to switch images */}
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

                {/* LEFT COLUMN: Details and sections */}
                <div className="property-main">
                    <h1 className="property-heading">
                        {property.type}
                        <span>{property.location}</span>
                    </h1>

                    {/* Meta info row */}
                    <div className="meta-row">
                        <span>{property.bedrooms} Beds</span>
                        <span>{property.bathrooms} Baths</span>
                        <span>{property.area} sqft</span>
                        <span>{property.tenure}</span>
                    </div>

                    {/* Section navigation buttons */}
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

                    {/* Section content */}
                    <div className="section-content">
                        {section === "overview" && (
                            <p className="description-text">
                                {property.description} {/* Property description */}
                            </p>
                        )}

                        {section === "plan" && (
                            property.floorMap ? (
                                <img
                                    src={property.floorMap}
                                    alt="Floor plan"
                                    className="floor-image"
                                />
                            ) : (
                                <p>No floor plan available.</p>
                            )
                        )}

                        {section === "map" && (
                            property.map ? (
                                <iframe
                                    src={property.map} // Embedded Google Map
                                    title="Map"
                                    loading="lazy"
                                ></iframe>
                            ) : (
                                <p>Map unavailable.</p>
                            )
                        )}
                    </div>
                </div>

                {/* RIGHT COLUMN: Price + CTA + Info */}
                <aside className="property-sidebar">
                    <div className="price-card">
                        <p className="price-label">Asking Price</p>
                        <h2 className="price">
                            £{Number(property.price).toLocaleString()}
                        </h2>

                        {/* CTA buttons */}
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

                    {/* Property meta info */}
                    <div className="info-card">
                        <p><strong>Property ID:</strong> {property.id}</p>
                        <p>
                            <strong>Listed:</strong>{" "}
                            {property.added?.month} {property.added?.day},{" "}
                            {property.added?.year}
                        </p>
                    </div>
                </aside>
            </div>

        </section>
    );
}

export default PropertyDetails;
