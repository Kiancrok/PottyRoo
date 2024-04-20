import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuestLayout from "./layout/GuestLayout";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Ladies from "./pages/Ladies";
import Wednesday from "./pages/Wednesday";
import Terms from "./pages/Terms";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import "./App.css";
import Painted from "./pages/Painted";
import Unpainted from "./pages/Unpainted";
import Pots from "./pages/Pots";
import Children from "./pages/Kids";
import Private from "./pages/Private"
import Team from "./pages/Team"
import Couple from "./pages/Couple"
import PaintingCourse from "./pages/PaintingCourse"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GuestLayout />}>
          <Route index element={<Home />} />
          <Route path="/Terms" element={<Terms />} />
          {/* Add a trailing "*" to the parent route path */}
          <Route path="/Gallery/*" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
          {/* Add more routes as needed */}
          <Route path="/Events/*" element={<Events />} />
          <Route path="/Events/Ladies" element={<Ladies />} />
          <Route path="/Events/Wednesday" element={<Wednesday />} />
          <Route path="/Gallery/Painted" element={<Painted />} />
          <Route path="/Gallery/Unpainted" element={<Unpainted />} />
          <Route path="/Gallery/Pots" element={<Pots />} />
          <Route path="/Events/Kids" element={<Children />} />
        <Route path="/Events/Private" element={<Private />} />
        <Route path="/Events/Team" element={<Team />} />
        <Route path="/Events/Couple" element={<Couple />} />
        <Route path="/Events/PaintingCourse" element={<PaintingCourse />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
