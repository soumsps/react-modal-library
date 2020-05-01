import React from 'react';
import Modal from '../modal/modal.component';

const SignInModal = (props) => {
  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>SIGN IN</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-input">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="" required />
          </div>
          <div className="form-input">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="" required />
          </div>
          <div className="form-input">
            <input type="checkbox" id="remember" required />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <button className="btn btn-signin" type="button">
            Sign In Now
          </button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <small style={{ 'text-align': 'center' }}>
          By continuing, you agree to React-modal's Conditions of Use and{' '}
          <a href="/privacy-notice">Privacy Notice</a>.
        </small>
      </Modal.Footer>
    </Modal>
  );
};

export default SignInModal;
