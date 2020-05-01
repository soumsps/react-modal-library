import React, { useContext } from 'react';
import ModalContext from './modal-context.component';

const Header = (props) => {
  return <div className="modal-header">{props.children}</div>;
};

export default Header;
