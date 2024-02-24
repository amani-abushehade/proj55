import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./Components/header.js";
import Home from "./Components/home.js";
import Projects from "./Components/projects.js";
import Contect from "./Components/contect.js";
import Skills from "./Components/skills.js";
import Mine from './Components/mine.js';



const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Mine />} />
        <Route path="contect" element={<Contect />} />
        <Route path="home" element={<Home />} />
        <Route path="projects/*" element={<Projects />}/>
        <Route path="skills" element={<Skills />} />
      </Routes>
    </Router>
  );
}

export default App;
