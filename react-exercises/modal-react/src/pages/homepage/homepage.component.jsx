import React, { useState } from 'react';
import SignInModal from '../../components/signin-modal/signin-modal.component';
import SignUpModal from '../../components/signup-modal/signup-modal.component';
import './homepage.styles.css';

import { navigate } from '@reach/router';

const Homepage = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isSiginInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSiginUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const closeBtn = () => {
    setIsSignInModalOpen(false);
    setIsSignUpModalOpen(false);
  };

  const handleSignInButton = () => {
    setIsSignInModalOpen(true);
  };
  const handleSignUpButton = () => {
    setIsSignUpModalOpen(true);
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

      {isSiginInModalOpen && <SignInModal />}
      {isSiginUpModalOpen && <SignUpModal />}
    </div>
  );
};

export default Homepage;
