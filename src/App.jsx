import HomePage from "./components/pages/HomePage";
import ProjectPage from "./components/pages/ProjectPage";
import BlogsPage from "./components/pages/BlogsPage";

import { Route, Routes } from "react-router-dom";
import OuranosProjectDetail from "./components/projects/ouranos/OuranosProjectDetail";
import WeatherProjectDetail from "./components/projects/weather/WeatherProjectDetail";
import ShopCartDetailPage from "./components/projects/E-commerce/ShopCartDetailPage";

import LittleLemonDetailPage from "./components/projects/little-lemon/LittleLemonDetailPage";

import BookSpotLight from "./components/projects/bookSpotLight/BookSpotLight";

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
          <Route path="littleLemon" element={<LittleLemonDetailPage />} />
          <Route path="bookSpotLight" element={<BookSpotLight />} />
        </Route>
        <Route path="/blog" element={<BlogsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
