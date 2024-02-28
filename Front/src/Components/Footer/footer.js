import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'lightblue',
    color: '#000',
    textAlign: 'center',
    padding: '20px',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  };


  return (
    <div style={footerStyle}>
      <p>&copy; 2024 Weather App. All rights reserved for Spark Engineers Club.</p>
    </div>
  );
};

export default Footer;
