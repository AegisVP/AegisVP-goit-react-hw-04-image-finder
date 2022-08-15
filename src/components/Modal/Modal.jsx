import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContent } from './Modal.styled';

const modalRoot = document.getElementById('modal-portal');

export const Modal = ({ onKeyDown, children, onCloseModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);

  return createPortal(
    <Overlay onClick={onCloseModal}>
      <ModalContent>{children}</ModalContent>
    </Overlay>,
    modalRoot
  );
};
