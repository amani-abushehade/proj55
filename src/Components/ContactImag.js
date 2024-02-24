import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './ContactForm.css';

const ContactImag = ({ isVisible }) => {
  const [showImage, setShowImage] = useState(false);
  const imageUrl = "/w.png";

  useEffect(() => {
    setShowImage(isVisible);
  }, [isVisible]);

  return (
    <CSSTransition
      in={showImage}
      timeout={400}
      classNames="fade"
      unmountOnExit
    >
      <img src={imageUrl} alt="Image" style={{ width: '100%', height: '100%'}} />
    </CSSTransition>
  );
}

export default ContactImag;
