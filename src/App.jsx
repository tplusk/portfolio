import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Contact />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
