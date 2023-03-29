import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { FlowerDetail } from "./pages/FlowerDetail";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          // path=':categoryName/:flowerName'
          path="category/flower"
          element={<FlowerDetail />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
