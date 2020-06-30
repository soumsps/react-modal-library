import React from 'react';
import Modal from '../modal/modal.component';
import { navigate } from '@reach/router';

const SignInModal = (props) => {
  const handleSignInFormSubmit = (event) => {
    event.preventDefault();
    props.setIsLoggedIn(true);
    navigate('/dashboard');
  };
  return (
    <Modal closeModalCallback={props.closeModalCallback}>
      <Modal.Header closeButton>
        <Modal.Title>SIGN IN</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={(event) => handleSignInFormSubmit(event)}>
          <div className="form-input">
            <label htmlFor="username" aria-label="username">
              Username
            </label>
            <input
              tabIndex="1"
              type="text"
              id="username"
              placeholder="Enter username"
              required
              data-first-focusable="true"
            />
          </div>
          <div className="form-input">
            <label htmlFor="password" aria-label="password">
              Password
            </label>
            <input
              tabIndex="2"
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-input">
            <span>
              <input tabIndex="3" type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </span>
          </div>
          <button
            tabIndex="4"
            className="btn btn-signin"
            type="submit"
            aria-label="signinBtn"
          >
            Sign In Now
          </button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <small style={{ textAlign: 'center' }}>
          By continuing, you agree to React-modal's Conditions of Use and{' '}
          <a tabIndex="5" href="/privacy-notice" data-last-focusable="true">
            Privacy Notice
          </a>
          .
        </small>
      </Modal.Footer>
    </Modal>
  );
};

export default SignInModal;
