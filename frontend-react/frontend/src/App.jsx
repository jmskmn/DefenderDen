import React from 'react';
import DefenderDen from './components/DefenderDen';
import SignIn from './components/Sign-in'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefenderDen />} />
        <Route path="/second" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;