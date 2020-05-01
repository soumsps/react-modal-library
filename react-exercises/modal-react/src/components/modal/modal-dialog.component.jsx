import React, { useContext } from 'react';
import ModalContext from './modal-context.component';

const Dialog = (props) => {
  return <div className="modal-dialog">{props.children}</div>;
};

export default Dialog;
