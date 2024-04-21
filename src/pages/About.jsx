import React from 'react';
import '../css/about.css';
import { NavLink } from 'react-router-dom';

function About() {
  return (
    <>
      <div className="nav-left" style={{ marginLeft: '5%', display: 'flex', gap: '10px', border: '2px solid rgb(114, 101, 235)', width: '250px', fontSize: '20px', padding: '10px', boxShadow: '2px 4px 0px white' }}>
        <NavLink exact to="/" >Home</NavLink>
        <NavLink to="/about" >About</NavLink>
        <NavLink to="/ErrorPage" >Error test</NavLink>
      </div>
      <br></br>
      <hr style={{ margin: '0', border: 'none', borderTop: '1px solid rgb(114, 101, 235)' }} />
      <div className="about-container" style={{ textAlign: 'center' }}>
        <h1>Hello!. I'm Confidence.</h1>
        <div className="social-links">
          <a href="https://github.com/Confidentwebs" target="_blank" rel="noopener noreferrer" className="social-link">
            <div className="icon-container">
              <i className="fab fa-github"></i>
              <span>Checkout my GitHub</span>
            </div>
          </a>
          <a href="https://twitter.com/just_confie" target="_blank" rel="noopener noreferrer" className="social-link">
            <div className="icon-container">
              <i className="fab fa-twitter"></i>
              <span>Follow me on Twitter</span>
            </div>
          </a>
          {/* Add more social links as needed */}
        </div>
      </div>
    </>
  );
}

export default About;

