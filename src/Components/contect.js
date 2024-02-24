
import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import ContactForm from "./ContactForm.js";
import ContactImag from "./ContactImag.js";
import './ContactForm.css';

const Contect = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setIsVisible(false);
      }, 50);
      setTimeout(() => {
        setIsVisible(true);
      }, 50);
    } else {
      setIsVisible(false);
    }
  }, [inView]);

  return (
    <div id="contect" ref={ref}>
      <div style={{ width: '38%', height: '500px', paddingTop:"50px", paddingBottom:"20px",paddingLeft:"12px",paddingRight:"12px"}}>
        <ContactImag isVisible={inView} />
      </div>
      <ContactForm isVisible={isVisible} />
    </div>
  );
};

export default Contect;