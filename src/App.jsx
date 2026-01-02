import { Routes, Route } from "react-router-dom";
import HomePage from "./assets/HomePage";
import Layout from "./assets/Layout";
import SearchPage from "./assets/SearchPage";
import PropertyDetails from "./assets/PropertyDetails";
import ContactAgent from "./assets/ContactAgent";
import ContactForm from "./assets/ContactForm";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="property/:id" element={<PropertyDetails />} />
        <Route path="contact" element={<ContactAgent />} />
        <Route path="contact-form" element={<ContactForm />} />
      </Route>
    </Routes>
  );
}

export default App;
