import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/WorksDetails"
import AboutUs from "./pages/AboutUs.tsx";


const AppRoutes: React.FC = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Works" element={<Works />} />
                <Route path="/aboutus" element={<AboutUs />} />
            </Routes>
    );
};

export default AppRoutes;