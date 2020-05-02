import React from 'react';
import { render , screen , fireEvent, getByTestId} from '@testing-library/react';
import App from './App';


test('Sign in Button present in DOM', () => {
  const { getByText } = render(<App />);
  const signinBtn = screen.getByText(/sign in/i);
  //fireEvent.click(signinBtn)

  const SignBtn = screen.getByRole("button",{"name":"Sign In"})
  expect(SignBtn).toBeInTheDocument();
});

test('Sign Up Button present in DOM', () => {
  const { getByText } = render(<App />);
  const signUpBtn = screen.getByText(/sign Up/i);
  //fireEvent.click(signinBtn)

  const SignUpBtn = screen.getByRole("button",{"name":"Sign In"})
  expect(SignUpBtn).toBeInTheDocument();
});


test('modal pop up on sign in buton click', () => {
  const { getByText } = render(<App />);
  const signinBtn = screen.getByText(/sign in/i);
  fireEvent.click(signinBtn)

  const modalPopUp = screen.getByLabelText(/model-title/i)
  expect(modalPopUp).toBeInTheDocument();
});

test('modal pop up on sign in buton click', () => {
  const { getByText } = render(<App />);
  const signinBtn = screen.getByText(/sign in/i);
  fireEvent.click(signinBtn)

  const modalPopUp = screen.getByLabelText(/model-title/i)
  expect(modalPopUp).toBeInTheDocument();
});

test('modal close on click of X button', () => {
  const { getByText } = render(<App />);
  const signinBtn = screen.getByText(/sign in/i);
  fireEvent.click(signinBtn)

  const modalPopUp = screen.getByLabelText(/model-title/i)

  const modalClose = screen.getByRole("button",{"name":"modal-closeBtn"})
  fireEvent.click(modalClose)
  expect(modalPopUp).toBeInTheDocument(false);
});

/*
it('should take a snapshot', () => {
  const { asFragment } = render(<App />)
  
  expect(asFragment(<App />)).toMatchSnapshot()
 })
 */

test('Sign In modal containing input fields', () => {
  const { getByText } = render(<App />);
  const signinBtn = screen.getByText(/sign in/i);
  fireEvent.click(signinBtn)

  const modalPopUp = screen.getByLabelText(/model-title/i)
  expect(modalPopUp).toBeInTheDocument();

  const usernameLbl = screen.getByText(/username/i)
  expect(usernameLbl).toBeInTheDocument();
  const passwordLbl = screen.getByText(/password/i)
  expect(passwordLbl).toBeInTheDocument();
  const signinBtn_M = screen.getByRole("button",{"name":"signinBtn"})
  expect(signinBtn_M).toBeInTheDocument();

  //expect(getByTestId('signIn').textContent).toBe("SIGN IN")
});

test('Sign Up modal containing input fields', () => {
  const { getByText } = render(<App />);
  const signupBtn_O = screen.getByText(/sign up/i);
  fireEvent.click(signupBtn_O)

  const modalPopUp = screen.getByLabelText(/model-title/i)
  expect(modalPopUp).toBeInTheDocument();

  const usernameLbl = screen.getByText(/username/i)
  expect(usernameLbl).toBeInTheDocument();
  const passwordLbl = screen.getAllByLabelText(/password/i)
  expect(passwordLbl.length).toBe(3);
  const re_passwordLbl = screen.getAllByLabelText(/re-password/i)
  expect(re_passwordLbl.length).toBe(1);
  const signupBtn_M = screen.getByRole("button",{"name":"signupBtn"})
  expect(signupBtn_M).toBeInTheDocument();

  //expect(getByTestId('signIn').textContent).toBe("SIGN IN")
});