import React, { useState, useEffect } from 'react';
import './ContactForm.css'; 

function ContactForm({ isVisible }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={`contact-form ${isVisible ? 'visible' : 'hidden'}`}>
        <h1 style={{paddingBottom:"20px",fontSize:"48px"}}>Get In Touch</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" />
        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" />
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email Address" />
        <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone No." />
        <textarea rows="6" value={message} onChange={e => setMessage(e.target.value)} placeholder="Message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;