
import React from 'react';
import './navbar.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id="id1" className="bar">
      <h2>Blog app</h2>
      <div className="nav-links">
        <Link to="/create">Create Blog</Link>
        <Link to="/blogs">View all Blogs</Link>
      </div>
    </div>
  );
};

export default Navbar;
