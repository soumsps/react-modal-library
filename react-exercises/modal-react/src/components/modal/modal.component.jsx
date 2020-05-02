import React, { useEffect, useCallback } from 'react';
import ModalContext from './modal-context.component';
import Backdrop from './modal-backdrop.component';
import Body from './modal-body.component';
import Dialog from './modal-dialog.component';
import Header from './modal-header.component';
import Title from './modal-title.component';
import Footer from './modal-footer.component';
import './modal.styles.css';

const defaultValues = {
  backdrop: true,
  closeButton: true,
  onEscapeClose: true,
  backdropModalCloseId: 'modal-container',
  maxWidth: 350,
  maxHeight: 400,
};

const { Provider } = ModalContext;

const Modal = (props) => {
  const newModalValue = { ...defaultValues, ...props };

  const handleModalCloseOnEscPress = useCallback((event) => {
    if (event.keyCode === 27 && newModalValue.onEscapeClose) {
      newModalValue.closeModalCallback(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleModalCloseOnEscPress, false);
    return () => {
      document.removeEventListener('keydown', handleModalCloseOnEscPress, false);
    };
  }, []);

  return (
    <Provider value={newModalValue}>
      <Backdrop>
        <div id={newModalValue.backdropModalCloseId} className="modal-container">
          <Dialog>{props.children}</Dialog>
        </div>
      </Backdrop>
    </Provider>
  );
};

Modal.Header = Header;
Modal.Title = Title;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
