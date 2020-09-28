import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getMailData } from '../actions/action';
import Alert from './Alert';

const SendEmail = ({ getMailData }) => {
  const [alert, setAlert] = useState({ msg: '', isAlerted: false });
  const [mail, setMail] = useState({
    email: '',
    name: '',
    subject: '',
    message: '',
  });
  const onChange = (e) => {
    setMail({ ...mail, [e.target.name]: e.target.value });
  };
  const { email, name, subject, message } = mail;
  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || name === '' || subject === '' || message === '') {
      setAlert({ msg: 'Please fill the all fields', isAlerted: true });
      setTimeout(() => {
        setAlert({ msg: 'Please fill the all fields', isAlerted: false });
      }, 3000);
    } else {
      getMailData(email, name, subject, message);
      setAlert({ msg: 'Your mail has been sent', isAlerted: true });
      setTimeout(() => {
        setAlert({ msg: 'Your mail has been sent', isAlerted: false });
      }, 3000);
      setMail({ email: '', name: '', subject: '', message: '' });
    }
  };
  return (
    <section className="send-email" id="send-email">
      <h2>
        Send Email To Me <i className="fas fa-envelope"></i>
      </h2>
      <Alert msg={alert.msg} active={alert.isAlerted} />
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          placeholder="email"
          a
          name="email"
          type="email"
          value={email}
        />
        <input
          onChange={onChange}
          placeholder="name"
          name="name"
          type="text"
          value={name}
        />
        <input
          onChange={onChange}
          placeholder="subject"
          name="subject"
          type="text"
          value={subject}
        />
        <textarea
          onChange={onChange}
          placeholder="message"
          name="message"
          rows="6"
          value={message}
        ></textarea>
        <input type="submit" value="send" />
      </form>
    </section>
  );
};

export default connect(null, { getMailData })(SendEmail);
