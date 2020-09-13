import React from 'react';
import MenuBottom from './menu/MenuBottom';
import MenuTop from './menu/MenuTop';
import './header-desktop.css';

function Header() {
  return (
    <header className="header-desktop">
      <MenuTop />
      <MenuBottom />
    </header>
  );
}

export default Header;
