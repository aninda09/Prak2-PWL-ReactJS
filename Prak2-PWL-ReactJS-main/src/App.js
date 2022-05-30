import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

// import page
import Landing from './component/landing/landing';
import Skills from './component/skills/skills';

function App() {
  return (
  <div>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Router>
      {/* <Landing/>
    <Skills/> */}
    </div>
  </div>
  );
}

export default App;
