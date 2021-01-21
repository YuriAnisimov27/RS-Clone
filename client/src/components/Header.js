import React from 'react';
import logo from '../../src/assets/UI/dinoSmall.png';
import russia from '../../src/assets/UI/russia.svg';
import uk from '../../src/assets/UI/united-kingdom.svg';
import bel from '../../src/assets/UI/belarus.svg';
import {changeLanguage} from '../pages/authPageElements/helpers';
import './Header.css';


export const Header = () => (
  <header>
    <div className='logo'>
      <div className='logoImg-container'>
        <img className='logoImg' src={logo} alt='logo'/>
      </div>
      <h1> Game </h1>
    </div>
    <div className='languages'>
      <ul className='languages-selector'>
        <li className='Lselector' onClick={changeLanguage}><img src={russia} alt='rus'/></li>
        <li className='Lselector' onClick={changeLanguage}><img src={uk} alt='uk'/></li>
        <li className='Lselector' onClick={changeLanguage}><img src={bel} alt='bel'/></li>
      </ul>
    </div>
  </header>
);
