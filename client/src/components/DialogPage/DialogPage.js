import React, { useState } from 'react';
import logo from '../../assets/UI/dinoSmall.png';
import buble from '../../assets/UI/buble.svg';
import cross from '../../assets/UI/cross.svg';
import { showDialog, showRegistartion } from '../../pages/AuthPage/authPageElements/helpers';
import {DonatMessage} from '../../pages/AuthPage/authPageElements/DonatMessage';
import {AboutMessage} from '../../pages/AuthPage/authPageElements/AboutMessage';
import './DialogPage.css';

export const DialogPage = () => {
  const [activeDonat, setActiveDonat] = useState(false)
  const [activeAbout, setActiveAbout] = useState(false)
  return (
  <div className='DialogPage off'>
    <DonatMessage active = {activeDonat} setActive = {setActiveDonat} />
    <AboutMessage active = {activeAbout} setActive = {setActiveAbout} />
    <div className='dinodialog'>
      <img className='dinodialog-Img' src={logo} alt='dino' />
    </div>
    <div className='dialog-buble'>
      <img className='bubledialog-Img' src={buble} alt='buble' />
      <div className='dialog-nav'>
        <div className='exitbtn' onClick={showDialog}><img className='exitimg' src={cross} alt='exit' /></div>
        <h5 className='dialog-greeting'>HELLO!</h5>
        <ul className='dialog-nav-ul'>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <li className='dialog-nav-ul__li'><a className='dialog-link signin' onClick={showRegistartion}>Sign in</a>
          </li>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <li className='dialog-nav-ul__li'><a className='dialog-link' onClick={() => {setActiveAbout(!activeAbout)}}>About</a></li>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <li className='dialog-nav-ul__li'><a className='dialog-link' onClick={() => {setActiveDonat(!activeDonat)}}>Donation</a></li>
        </ul>
      </div>
    </div>
  </div>
  )
};
