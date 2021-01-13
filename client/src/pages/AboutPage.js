import React from 'react';
import './AboutPage.css';

export const AboutPage = () => {
const onKeyPressHandler = () => {
  console.log('presset');
}
// const dino = document.getElementById('dino_wrapper');
// const cactus = document.getElementById('cactus');
// const dog = document.getElementById('img');

// const jump = function() {
//   if (dino.classList !== 'jump') {
//     dino.classList.add('jump');
//     setTimeout(function() {
//       dino.classList.remove('jump')
//     },1000)
//   }
// }

// let x = 0;
// setInterval(() => {
//   x += 1;
//   dog.src = `./assets/images/dog${x%4}.png`;
// }, 100);

// const isAlive = setInterval(function() {
//   const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
//   console.log(dinoTop);
//   const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
//   if (cactusLeft < 170 && cactusLeft > 55 && dinoTop >= 220) {
//     alert('Game Over!')
//   }
// }, 30)

// document.addEventListener('keydown', function(event) {
//   jump();
// })

  return (
    <div className='AboutPage game' onKeyUp={onKeyPressHandler}>
        <div className="background"/>
          <div className="dino_wrapper">
            <div className="dino">
              <img className="img" src="./assets/images/dog1.png" alt=""/>
            </div>
          </div>
          <div className="cactus"/>
      <div className="ground"/>
    </div>
  );
};
