import React, { useContext } from 'react';
import ModalContext from './modal-context.component';

const Backdrop = (props) => {
  const { backdrop, closeModalCallback } = useContext(ModalContext);

  const handleCloseOnBackdropArea = () => {
    closeModalCallback(false);
  };

  return backdrop ? (
    <div className="modal-backdrop" onClick={() => handleCloseOnBackdropArea()}>
      {props.children}
    </div>
  ) : (
    <>{props.children}</>
  );
};

export default Backdrop;
