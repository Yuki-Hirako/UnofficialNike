import React from 'react';
import '../header.css';
import './menu-lateral.css';
import '../menu/MenuBottom/Logo/logo';
import Logo from '../menu/MenuBottom/Logo/logo';
import Badge from '../../badge';

function Mobile() {
  return (
    <>
      <div className="menu-top">
        <div className="menu-lateral">
          <div className="ml"></div>
          <div className="ml"></div>
          <div className="ml"></div>
        </div>
        <Logo />
        <Badge />
      </div>
    </>
  );
}

export default Mobile;
