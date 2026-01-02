import { Routes, Route } from "react-router-dom";
import HomePage from "./assets/HomePage";
import Layout from "./assets/Layout";
import SearchPage from "./assets/SearchPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="property/:id" element={<PropertyDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
