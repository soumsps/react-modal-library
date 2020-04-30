import React from 'react';
import './homepage.styles.css';

const Homepage = () => (
  <div className="homepage-container">
    <header role="heading" className="page-header">
      <h1 className="page-title">Example App Homepage</h1>
      <nav role="navigation" aria-label="Main">
        <button className="btn btn-signin" type="button">
          Sign in
        </button>
        <button className="btn btn-signup" type="button">
          Sign up
        </button>
      </nav>
    </header>
    <div className="content-homepage">Content</div>
  </div>
);

export default Homepage;
