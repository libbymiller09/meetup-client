import React from 'react';
import ModalForm from './modal-form';
import ModalStatic from './modal-static';

class Modal extends React.Component {
  render() {
    return (
      <div className="modal">
        <ModalForm />
        <ModalStatic />
      </div>
    );
  }
}

export default Modal;