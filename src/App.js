import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"; 
import Aboutme from "./components/About"; 
import Projects from "./components/Projects"; 

function App() {
  return (
    <Router>
      <Routes>
        {/* เส้นทางไปยังหน้า Home (หน้าแรก) */}
        <Route path="/" element={<Home />} />

        {/* เส้นทางไปยังหน้า About */}
        <Route path="/about" element={<Aboutme />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
