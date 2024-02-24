import React, { useState, useEffect } from 'react';
import '../App.css';
import backgroundImage from '../images/خليفة.jpg';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';
import {Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const moveUpDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const AnimatedImage = styled.img`
  max-width: 280px;
  animation: ${({ isRunning }) => (isRunning ? moveUpDown : 'none')} 1s ease-in-out infinite;
`;

const Home = () => {
  const imageUrl = '/V[GTQHX.png';
  const phrases = ["FullStack Web Developer", "FrontEnd Developer", "BackEnd Developer","Computer Engineering Student"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isAnimationRunning, setIsAnimationRunning] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isDeleting && currentCharIndex < phrases[currentPhraseIndex].length - 1) {
        setCurrentCharIndex((prevIndex) => prevIndex + 1);
        setIsAnimationRunning(true);
      } else if (isDeleting && currentCharIndex > 0) {
        setCurrentCharIndex((prevIndex) => prevIndex - 1);
        setIsAnimationRunning(true);
      } else if (currentCharIndex === phrases[currentPhraseIndex].length - 1) {
        setIsDeleting(true);
        setIsAnimationRunning(true);
      } else if (currentCharIndex === 0) {
        setIsDeleting(false);
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsAnimationRunning(true);
      }
    }, 300); 

    const cursorIntervalId = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 500);

    return () => {
      clearInterval(intervalId);
      clearInterval(cursorIntervalId);
    };
  }, [currentCharIndex, currentPhraseIndex, isDeleting]);

  return (
    <div id="home" className="app" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='divpt'>
        <div className="title">Wellcom All In My Portfolio</div>
        <div className='pareg'><p>Hi! I'm Amani Abu Shehade, {phrases[currentPhraseIndex].substring(0, currentCharIndex + 1)}{showCursor && <span>|</span>}</p></div>
        <div className='hello'>Hello Everyone , I have 7 months of experience in Web Developer</div>
        <div className="contact"><Nav.Link as={Link} to="contect" smooth={true}>Let's Connect</Nav.Link><FontAwesomeIcon icon={faArrowRight} className='iconcontact' /></div>
      </div>
      <AnimatedImage src={imageUrl} isRunning={isAnimationRunning} />
    </div>
  );
};

export default Home;
