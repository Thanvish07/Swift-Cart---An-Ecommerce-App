import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="text-center">All Rights Reserved &copy; JTV</h1>
      <p className="text-center mt-3">
        <Link to="/about">About</Link> |
        <Link to="/contact">Contact</Link> |
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </footer>
  );
};

export default Footer;
