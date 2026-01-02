import { Routes, Route } from "react-router-dom";
import HomePage from "./assets/HomePage";
import Layout from "./assets/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
