import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} <br/>Harshith Gamini</p>
      </div>
    </footer>
  );
}

export default Footer;