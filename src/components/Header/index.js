import React from 'react';

import './index.css';
import facebook from '../../assets/facebook.png';

function Header() {
  return (
    <header>
      <img src={facebook} alt="Facebook Logo"/>
      <a href="">Meu Perfil</a>
    </header>
  )
}

export default Header;