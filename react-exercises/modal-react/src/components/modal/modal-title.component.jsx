import React, { useContext } from 'react';
import ModalContext from './modal-context.component';

const Title = (props) => {
  return <div className="modal-title">{props.children}</div>;
};

export default Title;
