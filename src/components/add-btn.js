import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ModalForm from './modal-form';
import Modal from './modal';

class AddBtn extends React.Component {
  state = { show: false }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div> 
        <h2>Add Meetup</h2>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <ModalForm />
        </Modal>
        <button type="button" onClick={this.showModal}>
          Open Modal button
        </button>
      </div>
    );
  }
}

export default AddBtn;