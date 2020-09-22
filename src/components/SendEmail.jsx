import React, { useState } from 'react';
import axios from 'axios';

const SendEmail = () => {
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
    let dataMail = {
      email,
      name,
      subject,
      message,
    };
    console.log(dataMail);
    axios
      .post('/api/forma', dataMail)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log('message not sent' + error));
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
          rows="8"
          value={message}
        ></textarea>
        <input type="submit" value="send" />
      </form>
    </section>
  );
};

export default SendEmail;
