import React from 'react';
import rslogo from '../../assets/UI/rs_school_js.svg';
import './Footer.css';

export const Footer = () => (
  <footer>
    <div className='rslogo'>
      <a href='https://rs.school/'>
        <img className='rsimg' src={rslogo} alt='rslogo' />
      </a>
    </div>
    <div className='materials'>
      <h5>2021</h5>
      <hr />
      <ul className='materials-ul'>
        <li className='material-ul__li'><a className='materials__link youtube' href='/'>YOUTUBE</a></li>
        <li className='material-ul__li'><a className='materials__link' href='/'>MEDIUM</a></li>
      </ul>
    </div>
    <div className='developers'>
      <h5>DEVELOPERS</h5>
      <hr />
      <ul className='developers-ul'>
        <li className='developers-ul__li'><a className='developers__link' href='/'>Yuri Anisimov</a></li>
        <li className='developers-ul__li'><a className='developers__link' href='/'>Alexander Kovbenya</a></li>
        <li className='developers-ul__li'><a className='developers__link' href='/'>Alex Martinkevich</a></li>
        <li className='developers-ul__li'><a className='developers__link' href='/'>Alexander Chazov</a></li>
      </ul>
    </div>
  </footer>
);
