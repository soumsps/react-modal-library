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
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="" required />
          </div>
          <div className="form-input">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="" required />
          </div>
          <div className="form-input">
            <span>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </span>
          </div>
          <button className="btn btn-signin" type="submit">
            Sign In Now
          </button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <small style={{ textAlign: 'center' }}>
          By continuing, you agree to React-modal's Conditions of Use and{' '}
          <a href="/privacy-notice">Privacy Notice</a>.
        </small>
      </Modal.Footer>
    </Modal>
  );
};

export default SignInModal;
