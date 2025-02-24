

import HomePage from './pages/homepage/homepage';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import ContentForm from './pages/contentForm/contentForm'; // Adjust the path as necessary
import Navbar from './components/navbar/navbar';
import Dashboard from './components/dashboard/dashboard';






function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<ContentForm />} />
        <Route path="/blogs" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;

