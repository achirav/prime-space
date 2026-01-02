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
    return <div className="loading">Loading property…</div>;
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
    
  );
}

export default PropertyDetails;
