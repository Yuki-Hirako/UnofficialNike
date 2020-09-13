import React from 'react';
import './menu-bottom.css';
import Logo from './Logo/logo';
import { List, Search } from './SecondPart';

function MenuBottom() {
  return (
    <div className="menu-bottom">
      <Logo />
      <div className="second-item">
        <List />
        <Search />
      </div>
    </div>
  );
}

export default MenuBottom;
