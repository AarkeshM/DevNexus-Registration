import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home';
import Info from './components/Info';
import Hackathon from './components/Hackathon';
import GenAi from './components/GenAi';
import Debug from './components/Debug';
import About from './components/About';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/info" element={<Info />} />
                <Route path='/hackathon' element={<Hackathon />} />
                <Route path='/genai' element={<GenAi />} />
                <Route path='/debug' element={<Debug />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;
