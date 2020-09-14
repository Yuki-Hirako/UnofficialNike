import React from 'react';
import CartIcon from '../assets/carticon.png';

function Badge() {
  return (
    <div className="cart">
      <img src={CartIcon} alt="Carrinho" className="cart-icon" />
      <div className="badge">2</div>
    </div>
  );
}

export default Badge;
