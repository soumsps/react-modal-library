import React from 'react';
import './homepage.styles.css';
import { navigate } from '@reach/router';

const Homepage = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleSignInButton = () => {
    setIsLoggedIn(true);
    navigate('/dashboard');
  };
  const handleSignUpButton = () => {
    setIsLoggedIn(true);
    navigate('/dashboard');
  };
  return (
    <div className="homepage-container">
      <header role="heading" className="page-header">
        <h1 className="page-title">Example App Homepage</h1>
        <nav role="navigation" aria-label="Main">
          <button
            className="btn btn-signin"
            type="button"
            onClick={() => handleSignInButton()}
          >
            Sign in
          </button>
          <button
            className="btn btn-signup"
            type="button"
            onClick={() => handleSignUpButton()}
          >
            Sign up
          </button>
        </nav>
      </header>
      <div className="content-homepage">Content</div>
    </div>
  );
};

export default Homepage;
