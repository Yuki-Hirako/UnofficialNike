import './menu-top.css';
import React from 'react';
import LeftSide from './Left/left';
import RightSide from './Right/right';

function MenuTop() {
  return (
    <div className="menu-top">
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default MenuTop;
