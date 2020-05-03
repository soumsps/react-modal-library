import React from 'react';
import Modal from '../modal/modal.component';
import { navigate } from '@reach/router';

const SignUpModal = (props) => {
  const handleSignUpFormSubmit = (event) => {
    event.preventDefault();
    props.setIsLoggedIn(true);
    navigate('/dashboard');
  };
  return (
    <Modal closeModalCallback={props.closeModalCallback}>
      <Modal.Header closeButton>
        <Modal.Title>SIGN UP</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={(event) => handleSignUpFormSubmit(event)}>
          <div className="form-input">
            <label htmlFor="username" aria-label="username">
              Username
            </label>
            <input
              tabIndex="1"
              type="text"
              name="username"
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
              name="password"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="reEnterPassword" aria-label="re-password">
              Re enter password
            </label>
            <input
              tabIndex="3"
              type="password"
              id="reEnterPassword"
              placeholder="Please re-enter password"
              required
            />
          </div>
          <button
            tabIndex="4"
            className="btn btn-signup"
            type="submit"
            aria-label="signupBtn"
          >
            Sign Up Now
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

export default SignUpModal;
