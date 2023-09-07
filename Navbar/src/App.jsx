import React from "react";
import "./App.css";
import Navbar1 from "./Components/Navbar1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Services from "./Components/Pages/Services";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Navbar2 from "./Components/Pages/Navbar2";
import Menu from "./Components/Facebook/Menu";

function App() {
  return (
    <div>
      <Navbar1 />

      <Router>
        <Navbar2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

      <Menu />
    </div>
  );
}

export default App;
