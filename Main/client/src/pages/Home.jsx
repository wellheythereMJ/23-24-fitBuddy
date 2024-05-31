import { Link } from 'react-router-dom';
import React from 'react';

const Home = () => {
  return (
    <div className="home-container"> 
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Signup">Signup</Link>
          </li>
        </ul>
      </nav>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
