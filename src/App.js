import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import APropos from "./pages/A-Propos";
import Err404 from "./pages/Err404";
import Fiche from "./pages/Fiche"
import Composant from "./pages/Composant"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/A Propos" element={<APropos />} />
        <Route path="/Fiche" element={<Fiche />} />
        <Route path="/Composant" element={<Composant />} />
        <Route path="/*" element={<Err404 />} />
      </Routes>
    </div>
  );
}

export default App;
