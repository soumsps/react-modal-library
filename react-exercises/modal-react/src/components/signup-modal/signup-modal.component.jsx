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
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>SIGN UP</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={(event) => handleSignUpFormSubmit(event)}>
          <div className="form-input">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="" required />
          </div>
          <div className="form-input">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="" required />
          </div>
          <div className="form-input">
            <label htmlFor="reEnterPassword">Re enter password</label>
            <input type="password" id="reEnterPassword" placeholder="" required />
          </div>
          <button className="btn btn-signup" type="submit">
            Sign Up Now
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

export default SignUpModal;
