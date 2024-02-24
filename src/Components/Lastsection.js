import React from "react";
import { Facebook, Instagram, Linkedin } from 'react-feather';
import '../App.css';

const lastSection = () => {
    return (
       <div className="gradient-background">
        <div><h1 className="logo2">LOGO</h1></div>

        <div>
        <div className="social-icons2">
          <a href="https://www.facebook.com/profile.php?id=100089384563643&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <Facebook size={20} />
          </a>
          <a href="https://www.instagram.com/amani.abu.shehade?igsh=MTJwMHBxNWt6Y2dvNg== " target="_blank" rel="noopener noreferrer">
            <Instagram size={20} />
          </a>
          <a href="#" rel="noopener noreferrer">
            <Linkedin size={20} />
          </a>
        </div>
            <div className="lastp" >--Copyrights 2024-- All Rights Reserved By Amani Abdelhamed Abu Shehade</div>
        </div>
       </div>
    )
};

export default lastSection;