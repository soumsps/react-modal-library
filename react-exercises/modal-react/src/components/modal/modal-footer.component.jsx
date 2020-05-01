import React, { useContext } from 'react';
import ModalContext from './modal-context.component';

const Footer = (props) => {
  return <div className="modal-footer">{props.children}</div>;
};

export default Footer;
