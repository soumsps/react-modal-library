import React, { useContext } from 'react';
import ModalContext from './modal-context.component';

const Header = (props) => {
  let { closeModalCallback, closeButton } = useContext(ModalContext);

  if (props.closeButton !== 'undefined' && typeof props.closeButton === 'boolean') {
    closeButton = props.closeButton;
  }
  const handleCloseButtonClick = () => {
    closeModalCallback(false);
  };
  return (
    <div className="modal-header">
      {props.children}
      {closeButton && (
        <button className="modal-closeBtn" onClick={() => handleCloseButtonClick()}>
          X
        </button>
      )}
    </div>
  );
};

export default Header;
