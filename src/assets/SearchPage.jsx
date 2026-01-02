import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SearchPage.css";

const SearchPage = () => {
  /* Stores all filter values entered by the user */
  const [filters, setFilters] = useState({
    propertyType: "Any",
    minPrice: "",
    maxPrice: "",
    minBedrooms: "",
    maxBedrooms: "",
    addedMonth: "",
    addedYear: "",
    location: "",
  });

  /* All properties loaded from JSON */
  const [properties, setProperties] = useState([]);

  /* Properties after applying filters */
  const [filteredProperties, setFilteredProperties] = useState([]);

  /* Favourites are stored in localStorage to persist user selections */
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favourites")) || []
  );

  /* Fetch property data once when the page loads */
  useEffect(() => {
    fetch("/properties.json")
      .then(res => res.json())
      .then(data => {
        setProperties(data.properties);
        setFilteredProperties(data.properties);
      });
  }, []);

  /* Update localStorage whenever favourites change */
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  /* Updates filter state dynamically based on input name */
  const handleInputChange = e => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  /* Applies all filter conditions when the user searches */
  const handleSearch = e => {
    e.preventDefault();

    const filtered = properties.filter(property => {
      const matchesType =
        filters.propertyType === "Any" ||
        property.type.toLowerCase() === filters.propertyType.toLowerCase();

      const matchesMinPrice =
        !filters.minPrice || property.price >= parseInt(filters.minPrice);

      const matchesMaxPrice =
        !filters.maxPrice || property.price <= parseInt(filters.maxPrice);

      const matchesMinBedrooms =
        !filters.minBedrooms ||
        property.bedrooms >= parseInt(filters.minBedrooms);

      const matchesMaxBedrooms =
        !filters.maxBedrooms ||
        property.bedrooms <= parseInt(filters.maxBedrooms);

      const matchesAddedMonth =
        !filters.addedMonth ||
        property.added.month.toLowerCase() ===
          filters.addedMonth.toLowerCase();

      const matchesAddedYear =
        !filters.addedYear ||
        property.added.year.toString() === filters.addedYear;

      const matchesLocation =
        !filters.location ||
        property.location
          .toLowerCase()
          .includes(filters.location.toLowerCase());

      return (
        matchesType &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesMinBedrooms &&
        matchesMaxBedrooms &&
        matchesAddedMonth &&
        matchesAddedYear &&
        matchesLocation
      );
    });

    setFilteredProperties(filtered);
  };

  /* Adds property to favourites if it is not already added */
  const addToFavourites = property => {
    if (!favourites.some(fav => fav.id === property.id)) {
      setFavourites([...favourites, property]);
    }
  };

  /* Removes a selected favourite */
  const removeFavourite = id => {
    setFavourites(favourites.filter(fav => fav.id !== id));
  };

  /* Clears all favourites at once */
  const clearFavourites = () => setFavourites([]);

  /* Enables drag-and-drop functionality */
  const handleDragStart = (e, property) => {
    e.dataTransfer.setData("property", JSON.stringify(property));
  };

  const handleDrop = e => {
    e.preventDefault();
    const property = JSON.parse(e.dataTransfer.getData("property"));
    addToFavourites(property);
  };

  const handleDragOver = e => e.preventDefault();

  return (
    <div className="search-page">

      {/* Page heading */}
      <h1 className="page-title">Find Your Dream Property</h1>

      {/* Filter form for searching properties */}
      <form className="filters" onSubmit={handleSearch}>
        <select
          name="propertyType"
          value={filters.propertyType}
          onChange={handleInputChange}
        >
          <option value="Any">Any Type</option>
          <option value="House">House</option>
          <option value="Flat">Flat</option>
        </select>

        <input
          type="number"
          placeholder="Min Price"
          name="minPrice"
          value={filters.minPrice}
          onChange={handleInputChange}
        />

        <input
          type="number"
          placeholder="Max Price"
          name="maxPrice"
          value={filters.maxPrice}
          onChange={handleInputChange}
        />

        <input
          type="number"
          placeholder="Min Bedrooms"
          name="minBedrooms"
          value={filters.minBedrooms}
          onChange={handleInputChange}
        />

        <input
          type="number"
          placeholder="Max Bedrooms"
          name="maxBedrooms"
          value={filters.maxBedrooms}
          onChange={handleInputChange}
        />

        <input
          type="text"
          placeholder="Added Month"
          name="addedMonth"
          value={filters.addedMonth}
          onChange={handleInputChange}
        />

        <input
          type="number"
          placeholder="Added Year"
          name="addedYear"
          value={filters.addedYear}
          onChange={handleInputChange}
        />

        <input
          type="text"
          placeholder="Location"
          name="location"
          value={filters.location}
          onChange={handleInputChange}
        />

        <button type="submit">Search</button>
      </form>

      {/* Favourites section supports drag-and-drop */}
      <div
        className="favourites"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <h2>Favourites</h2>

        <button
          className="clear-btn"
          onClick={clearFavourites}
          disabled={!favourites.length}
        >
          Clear All
        </button>

        <div className="favourites-list">
          {favourites.map(fav => (
            <div className="fav-card" key={fav.id}>
              <img src={fav.picture} alt="Property" />
              <div className="fav-info">
                <p>£{fav.price.toLocaleString()}</p>
                <span>{fav.short}</span>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFavourite(fav.id)}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Search results section */}
      <h2 className="results-title">Search Results</h2>

      {filteredProperties.length === 0 ? (
        <div className="no-results">
          <p>No properties match your search criteria.</p>
          <button
            onClick={() => {
              setFilteredProperties(properties);
              setFilters({
                propertyType: "Any",
                minPrice: "",
                maxPrice: "",
                minBedrooms: "",
                maxBedrooms: "",
                addedMonth: "",
                addedYear: "",
                location: "",
              });
            }}
          >
            Show All Properties
          </button>
        </div>
      ) : (
        <div className="results-grid">
          {filteredProperties.map(property => (
            <div
              className="property-card"
              key={property.id}
              draggable
              onDragStart={e => handleDragStart(e, property)}
            >
              <div className="card-image">
                <img src={property.picture} alt="Property" />
                <div className="card-badges">
                  <span>🛏 {property.bedrooms}</span>
                  <span>🛁 {property.bathrooms}</span>
                  <span>📐 {property.area}p</span>
                </div>
              </div>

              <div className="card-content">
                <p className="price">
                  £{property.price.toLocaleString()}
                </p>
                <p className="short">{property.short}</p>
              </div>

              <div className="card-actions">
                <button
                  className={`heart-btn ${
                    favourites.some(f => f.id === property.id)
                      ? "active"
                      : ""
                  }`}
                  onClick={() => addToFavourites(property)}
                  aria-label="Add to favourites"
                >
                  ♥
                </button>

                <Link
                  to={`/property/${property.id}`}
                  className="details-btn"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
