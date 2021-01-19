import React from 'react';
import logo from '../../assets/UI/dinoSmall.png';
import russia from '../../assets/UI/russia.svg';
import uk from '../../assets/UI/united-kingdom.svg';
import bel from '../../assets/UI/belarus.svg';
import { changeLanguage } from './helpers';
import './Header.css';

export const Header = () => (
  <header>
    <div className='logo'>
      <div className='logoImg-container'>
        <img className='logoImg' src={logo} alt='logo' />
      </div>
      <h1> Game </h1>
    </div>
    <div className='languages'>
      <ul className='languages-selector'>
        <li className='Lselector' onClick={changeLanguage}><img src={russia} alt='rus' /></li>
        <li className='Lselector' onClick={changeLanguage}><img src={uk} alt='uk' /></li>
        <li className='Lselector' onClick={changeLanguage}><img src={bel} alt='bel' /></li>
      </ul>
    </div>
  </header>
);

