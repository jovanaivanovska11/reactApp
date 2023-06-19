import React from 'react';
import './style.css'; 

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
      Together<br />through all.
      </div>
      <div className="footer-right">
        <a href="https://www.facebook.com">
          <img src="https://habitatsnohomish.org/wp-content/uploads/2020/09/Facebook-logo-Blue.png" alt="Facebook" className="social-logo" />
        </a>
        <a href="https://www.linkedin.com">
          <img src="https://habitatsnohomish.org/wp-content/uploads/2020/09/Linked-IN-Logo-Blue.png" alt="LinkedIn" className="social-logo" />
        </a>
        <a href="https://www.instagram.com">
          <img src="https://habitatsnohomish.org/wp-content/uploads/2020/09/Instagram-logo-blue.png" alt="Instagram" className="social-logo" />
        </a>
        <button className="contact-button">Contact Us</button>
      </div>
      <div></div>
    </footer>
  );
}

export default Footer;
