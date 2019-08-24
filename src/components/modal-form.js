import React from 'react';
import { reduxForm, Field, SubmissionError, focus } from 'redux-form';
import Input from './input';
import {required, nonEmpty} from '../validators';

export class ModalForm extends React.Component {
  onSubmit(values) {
    console.log(values);
    return fetch('/api/meetups', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (!res.ok) {
        if (
          res.headers.has('content-type') && res.headers
            .get('content-type')
            .startsWith('application/json')
        ) {
          return res.json().then(err => Promise.reject(err));
        }
        return Promise.reject({
          code: res.status,
          message: res.statusText
        });
      }
      return;
    })
    .then(() => console.log('Submitted with values', values))
    .catch(err => {
      const {reason, message, location} = err;
      if (reason === 'ValidationError') {
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        );
      }
      return Promise.reject(
        new SubmissionError({
          _error: 'Error submitting message'
        })
      );
    });
  }

  render() {
    let successMessage;
    if (this.props.submitSucceeded) {
      successMessage = (
        <div className="message message-success">
          Message Submitted successfully
        </div>
      );
    }

    let errorMessage;
    if (this.props.error) {
      errorMessage = (
        <div className="message message-error">{this.props.error}</div>
      );
    }

    return (
      <form
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
        )}>
        <Field 
          name="subject" 
          id="subject" 
          type="text"
          label="subject" 
          component={Input}
          validate={[required, nonEmpty]}  
        />
        <Field 
          name="location" 
          id="location" 
          type="text" 
          label="location"
          component="input" 
          validate={[required, nonEmpty]}  
        />
        <Field 
          name="time" 
          id="time" 
          type="text" 
          label="time"
          component="input"
          validate={[required, nonEmpty]} 
        />
        <button 
          type="submit"
          disabled={this.props.pristine || this.props.submitting}>
          Add meetup
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'modal',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('contact', Object.keys(errors)[0]))
})(ModalForm);