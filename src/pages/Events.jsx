import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Ladies from "./Ladies";
import Wednesday from "./Wednesday";
import Kids from "./Kids";
import Private from "./Private";
import Team from "./Team";
import Couple from "./Couple";
import PaintingCourse from "./PaintingCourse";
import "../styles/Events.css"; // Import CSS file for styling

function Events() {
  return (
    <div className="events-container">
      <ul className="events-list">
        <li>
          <Link to="/Events/Wednesday">
            <img className="event-image" src="/BRAKES.png" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/Events/Ladies">
            <img className="event-image" src="/Ladies Night.png" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/Events/Kids">
            <img className="event-image" src="/kids.png" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/Events/Private">
            <img className="event-image" src="/private.png" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/Events/Team">
            <img className="event-image" src="/team.png" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/Events/Couple">
            <img className="event-image" src="/couple.png" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/Events/PaintingCourse">
            <img className="event-image" src="/paintingcourse.png" alt="" />
          </Link>
        </li>
      </ul>
      <Routes>
        <Route path="/Events/Ladies" element={<Ladies />} />
        <Route path="/Events/Wednesday" element={<Wednesday />} />
        <Route path="/Events/Kids" element={<Kids />} />
        <Route path="/Events/Private" element={<Private />} />
        <Route path="/Events/Team" element={<Team />} />
        <Route path="/Events/Couple" element={<Couple />} />
        <Route path="/Events/PaintingCourse" element={<PaintingCourse />} />
      </Routes>
    </div>
  );
}

export default Events;
