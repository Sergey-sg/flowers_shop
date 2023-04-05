import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { FlowerDetail } from "./pages/FlowerDetail";
import FlowersCatalogPage from "./pages/FlowersCatalogPage";

function App() {  
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:flowerSlug" element={<FlowerDetail />} />
        <Route path="/flowers-catalog" element={<FlowersCatalogPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
