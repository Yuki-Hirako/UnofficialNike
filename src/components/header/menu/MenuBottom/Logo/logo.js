import React from 'react';
import NikeIcon from '../../../../../assets/nike.svg';
import './logo.css';

function Logo() {
  return (
    <div className="NikeLogo">
      <img src={NikeIcon} alt="Nike Não-Oficial" className="nike-icon" />
    </div>
  );
}

export default Logo;
