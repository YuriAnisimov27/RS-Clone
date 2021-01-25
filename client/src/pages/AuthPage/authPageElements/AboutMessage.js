import React from 'react';
import './Messages.css';
export const AboutMessage = ({active, setActive}) => {
  return (
    <>
    <div className='donatmes' style={active ? {left: 0}: {left: -8000 }}>
    <p className='donation-text'>Hello we are developers of this app</p>
  </div>
<div className='shadow'  style={active ? {display: 'block'}: {display: 'none' }} onClick= {() => {setActive(false)}}>
</div>
</>
  )
};