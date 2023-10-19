import React from "react";

import HomePage from "./components/pages/HomePage";
import ProjectPage from "./components/pages/ProjectPage";
import BlogsPage from "./components/pages/BlogsPage";

import { Route, Routes } from "react-router-dom";
import OuranosProjectDetail from "./components/projects/ouranos/OuranosProjectDetail";
import WeatherProjectDetail from "./components/projects/weather/WeatherProjectDetail";

import ShopCartDetailPage from "./components/projects/E-commerce/ShopCartDetailPage";

import CustomCursor from "./components/ui/CustomCursor";

function App() {
  return (
    <div className="dark">
      <CustomCursor />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/project" element={<ProjectPage />}>
          <Route path="ouranos" element={<OuranosProjectDetail />} />
          <Route path="weather" element={<WeatherProjectDetail />} />
          <Route path="shopCart" element={<ShopCartDetailPage />} />
        </Route>
        <Route path="/blog" element={<BlogsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
