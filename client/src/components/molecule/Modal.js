import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { element, func, bool } from 'prop-types';
import styled from 'styled-components';
import { X as Close } from 'react-feather';

import Box from '../atom/Box';
import Button from './Button';

const modalRoot = document.getElementById('modal-root');

const Portal = ({ children }) => {
  const el = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  });
  return createPortal(children, el);
};

Portal.propTypes = {
  children: element
};

const StyledModal = styled('div')(({ theme: { space } }) => ({
  background: '#fff',
  position: 'absolute',
  left: '0',
  right: '0',
  top: '0',
  bottom: '0',
  margin: '50px auto',
  width: '60%',
  boxShadow: '0 5px 10px 2px rgba(195,192,192,.5)',
  padding: space[4]
}));

const Modal = ({ children, onClose, show }) => {
  if (!show) return null;

  return (
    <StyledModal>
      <Box flex={1} display="flex" justifyContent="flex-end">
        <Button variant="clear" onClick={onClose}>
          <Close />
        </Button>
      </Box>
      {children}
    </StyledModal>
  );
};

Modal.propTypes = {
  children: element,
  onClose: func,
  show: bool
};

export default Modal;
