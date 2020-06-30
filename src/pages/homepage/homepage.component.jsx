import React, { useState } from 'react';
import SignInModal from '../../components/signin-modal/signin-modal.component';
import SignUpModal from '../../components/signup-modal/signup-modal.component';
import './homepage.styles.css';

const Homepage = ({ setIsLoggedIn }) => {
  const [isSiginInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSiginUpModalOpen, setIsSignUpModalOpen] = useState(false);

  return (
    <div className="homepage-container">
      <header role="heading" className="page-header">
        <h1 className="page-title">Example App Homepage</h1>
        <nav role="navigation" aria-label="Main">
          <button
            className="btn btn-signin"
            type="button"
            aria-label="Sign In"
            onClick={() => setIsSignInModalOpen(true)}
          >
            Sign in
          </button>
          <button
            className="btn btn-signup"
            type="button"
            aria-label="Sign Up"
            onClick={() => setIsSignUpModalOpen(true)}
          >
            Sign up
          </button>
        </nav>
      </header>
      <div className="content-homepage">Content</div>

      {isSiginInModalOpen && (
        <SignInModal
          setIsLoggedIn={setIsLoggedIn}
          closeModalCallback={setIsSignInModalOpen}
        />
      )}
      {isSiginUpModalOpen && (
        <SignUpModal
          setIsLoggedIn={setIsLoggedIn}
          closeModalCallback={setIsSignUpModalOpen}
        />
      )}
    </div>
  );
};

export default Homepage;
