import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getMailData } from '../actions/action';

const SendEmail = ({ getMailData }) => {
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
      alert('sorry');
    } else {
      getMailData(email, name, subject, message);
      setMail({ email: '', name: '', subject: '', message: '' });
    }
  };
  return (
    <section className="send-email" id="send-email">
      <h2>Send Email To Me</h2>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          placeholder="email"
          name="email"
          type="text"
          value={email}
          required
        />
        <input
          onChange={onChange}
          placeholder="name"
          name="name"
          type="text"
          value={name}
          required
        />
        <input
          onChange={onChange}
          placeholder="subject"
          name="subject"
          type="text"
          value={subject}
          required
        />
        <textarea
          onChange={onChange}
          placeholder="message"
          name="message"
          rows="6"
          value={message}
          required
        ></textarea>
        <input type="submit" value="send" />
      </form>
    </section>
  );
};

export default connect(null, { getMailData })(SendEmail);
