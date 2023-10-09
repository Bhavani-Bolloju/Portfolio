import React, { useState, useEffect } from "react";

import { animateScroll as scroll } from "react-scroll";

import HomePage from "./components/pages/HomePage";
import ProjectPage from "./components/pages/ProjectPage";
import BlogsPage from "./components/pages/BlogsPage";

import { Route, Routes } from "react-router-dom";
import OuranosProjectDetail from "./components/projects/ouranos/OuranosProjectDetail";
import WeatherProjectDetail from "./components/projects/weather/WeatherProjectDetail";

import ShopCartDetailPage from "./components/projects/E-commerce/ShopCartDetailPage";

import CustomCursor from "./components/ui/CustomCursor";

function App() {
  const [isModeLight, setIsModeLight] = useState(false);

  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      // Scrolling down
      scroll.scrollMore(100); // Adjust the scroll distance as needed
    } else {
      // Scrolling up
      scroll.scrollMore(0); // Adjust the scroll distance as needed
    }
  };

  useEffect(() => {
    // window.addEventListener("wheel", handleScroll);
    // return () => {
    //   window.removeEventListener("wheel", handleScroll);
    // };
  }, []);

  return (
    <div className="dark">
      <CustomCursor></CustomCursor>
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
