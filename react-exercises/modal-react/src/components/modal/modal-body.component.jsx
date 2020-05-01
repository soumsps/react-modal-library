import React, { useContext } from 'react';
import ModalContext from './modal-context.component';

const Body = (props) => {
  return <div className="modal-body">{props.children}</div>;
};

export default Body;
