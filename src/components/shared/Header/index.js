import React from 'react';
import Nav from '../Nav/index';

function Header({ children }) {
  return (
    <header className='header'>
      <Nav />
      {children}
    </header>
  );
}

export default Header;
