import React from 'react';
import { render , screen , fireEvent} from '@testing-library/react';
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