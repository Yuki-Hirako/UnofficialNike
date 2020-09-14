import React from 'react';
import './right.css';
import ChatIcon from '../../../../../assets/chaticon.png';
import Badge from '../../../../badge';

function RightSide() {
  return (
    <div>
      <ul className="list right-list">
        <li className="right-list-items">Acompanhar pedidos</li>
        <li className="right-list-items">Login / Inscreva-se</li>
        <li className="right-list-items">Ajuda</li>
        <li className="right-list-items">
          <span className="chat">
            <img src={ChatIcon} alt="Chat" className="chat-icon" />
            Chat Online
          </span>
        </li>
        <li className="right-list-items">
          <Badge />
        </li>
      </ul>
    </div>
  );
}

export default RightSide;
