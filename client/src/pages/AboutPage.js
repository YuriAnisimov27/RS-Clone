import React from 'react';
import './AboutPage.css';
import PointJS from '../game/pointjs_0.2.0.6'

import dragon from '../assets/images/dragon.png'
import cactus from '../assets/images/cactus.png'
import background from '../assets/images/background.png'


export const AboutPage = () => {

  const pjs = new PointJS(1100, 620, { backgroundColor: '' })

  const game = pjs.game;
  const mouse = pjs.mouseControl;
  const getRandomNumber = pjs.math.random;
  const width = pjs.game.getWH();
  mouse.initControl();

  const player = game.newAnimationObject({
    animation: pjs.tiles.newImage("dragon").getAnimation(0, 0, 88, 94, 6),
    x: 200,
    y: 400,
    w: 88,
    h: 94,
    delay: 3
  });




  const backgroundImage = game.newImageObject({
    file: background,
    x: 0,
    y: 0,
  });



  const arrayOfBarriers = [];
  let offsetByX = 500;
  for (let i = 0; i < 100; i += 1) {
    offsetByX += getRandomNumber(300, 800);
    const barier = game.newImageObject({
      file: cactus,
      x: offsetByX,
      y: 400,
    });
    arrayOfBarriers.push(barier)
  }



  game.newLoop('menu', function () {

    if (player.y < 400) {
      player.y += 4;
    }


    if (mouse.isDown('LEFT')) {
      if (player.y > 200) { //TODO: setTimeout / Interval??
        player.y -= 14;
      }
    }

    pjs.presets.bgCycle(backgroundImage, -2);
    backgroundImage.draw();
    player.draw();
    arrayOfBarriers.forEach(item => {
      item.x -= 4;
      item.draw();
      if (player.isStaticIntersect(item.getStaticBox())) {
        alert('You lose! \n ---Reload this page to start new game.---');
        location.reload();
      }
    })


  })


  game.setLoop('menu');
  game.start();




  return (
    <div className='AboutPage'>
      hello
    </div>
  );
};
