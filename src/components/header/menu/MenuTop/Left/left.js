import React from 'react';
import './left.css';
import SpIcon from '../../../../../assets/SP+icon.svg';
import Jordan from '../../../../../assets/jordan.png';

function LeftSide() {
  return (
    <div>
      <ul className="list">
        <li className="left-list-items">
          <img src={SpIcon} alt="sp-icon" className="sp-icon" />
        </li>
        <li className="left-list-items">NikePlus</li>
        <li className="left-list-items">
          <img src={Jordan} alt="Jordan" className="jordan-icon" />
        </li>
      </ul>
    </div>
  );
}

export default LeftSide;
