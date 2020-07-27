import React from 'react';
import logo from '../../assets/img/logo.png'

const Logo = () => {
  return (
    <div className='logo-area'>
      <a href='/'>
        <img src={logo} alt='Argus-Logo' />
      </a>
    </div>
  );
};

export default Logo;
