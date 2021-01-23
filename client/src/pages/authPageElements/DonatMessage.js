import React from 'react';
import './Messages.css';

export const DonatMessage = ({ active, setActive }) => {
  return (
    <>
      <div className='donatmes' style={active ? { left: 0 } : { left: -8000 }}>
        <p className='donation-text'>We are pleased that you have pressed this button. If you really want to donate use this link.</p>
        <a className='btn-floating btn-large waves-effect waves-light green donatlink' href='https://opencollective.com/rsschool#section-contribute'><i className="material-icons dimg">$</i></a>
      </div>
      <div className='shadow' style={active ? { display: 'block' } : { display: 'none' }} onClick={() => { setActive(false) }}>
      </div>
    </>
  )
};