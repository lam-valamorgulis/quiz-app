import React from 'react';
import { BiLogoReact } from 'react-icons/bi';

const Header = () => {
  return (
    <header className="app-header">
      <BiLogoReact className='logo-img'/>
      <h1>The React Quiz</h1>
    </header>
  );
};

export default Header;
