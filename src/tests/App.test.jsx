import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import Navbar from "../assets/Navbar";
import SearchPage from "../assets/SearchPage";
import PropertyDetails from "../assets/PropertyDetails";
import SocialAside from "../assets/SocialAside";

import { vi } from "vitest";

const mockData = {
  properties: [
    {
      id: "prop1",
      type: "House",
      price: 300000,
      bedrooms: 3,
      bathrooms: 2,
      area: 1200,
      location: "London",
      picture: "test.jpg",
      short: "Test property",
      description: "Test description",
      added: { month: "January", day: 1, year: 2024 }
    }
  ]
};

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockData),
  })
);


/* Utility wrapper for router-based components */
const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("React Application Basic Tests", () => {

  /* ✅ Test 1: Navbar renders correctly */
  test("Navbar displays navigation links", () => {
    renderWithRouter(<Navbar />);

    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/search/i)).toBeInTheDocument();
    expect(screen.getByText(/favourites/i)).toBeInTheDocument();
  });

  /* ✅ Test 2: SearchPage renders filter section */
  test("SearchPage renders filter inputs", () => {
    renderWithRouter(<SearchPage />);

    expect(screen.getByText(/property type/i)).toBeInTheDocument();
    expect(screen.getByText(/min price/i)).toBeInTheDocument();
    expect(screen.getByText(/max price/i)).toBeInTheDocument();
  });

  /* ✅ Test 3: SearchPage shows property cards after render */
  test("SearchPage displays property listings", async () => {
    renderWithRouter(<SearchPage />);

    const properties = await screen.findAllByText(/bedroom/i);
    expect(properties.length).toBeGreaterThan(0);
  });

  /* ✅ Test 4: PropertyDetails renders property information */
  test("PropertyDetails component loads correctly", () => {
    renderWithRouter(<PropertyDetails />);

    expect(screen.getByText(/property details/i)).toBeInTheDocument();
  });

  /* ✅ Test 5: SocialAside renders social media icons */
  test("SocialAside renders social icons", () => {
    render(<SocialAside />);

    expect(screen.getByRole("link", { name: /facebook/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /instagram/i })).toBeInTheDocument();
  });

});
