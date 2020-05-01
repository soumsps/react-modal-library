import React, { useContext } from 'react';
import ModalContext from './modal-context.component';

const Backdrop = (props) => {
  const { backdrop } = useContext(ModalContext);

  return backdrop ? (
    <div className="modal-backdrop">{props.children}</div>
  ) : (
    <>{props.children}</>
  );
};

export default Backdrop;
