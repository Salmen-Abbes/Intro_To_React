import React from 'react';

const Header = () => {
  const headerStyle = {
    backgroundColor: 'lightblue',
    textAlign: 'center',
    padding: '10px',
  };

  return (
    <div style={headerStyle}>
      <h1>Simple Random Weather App</h1>
    </div>
  );
};

export default Header;
