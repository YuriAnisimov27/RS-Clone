import React from 'react';
import './AboutPage.css';
import PointJS from '../game/pointjs_0.2.0.6';
import Menu from '../game/menu'

const gameData = () => {
  const pjs = new PointJS(1100, 620, { backgroundColor: '' })
  const game = pjs.game;
  // const mouse = pjs.mouseControl;
  const keyboard = pjs.keyControl.initKeyControl();
  const brush = pjs.brush; // доступ к методам простого рисования
  const getRandomNumber = pjs.math.random;
  const gameHeight = game.getWH().h;
  const gameWidth = game.getWH().w;
  // const camera = pjs.camera;
  const vector = pjs.vector;
  const point = vector.point;
  let score = 0;
  // let record = 0;
  // mouse.initControl();

  const dog = game.newAnimationObject({
    animation: pjs.tiles.newImage("./images/dog.png").getAnimation(0, 0, 150, 120, 5),
    x: 200,
    y: 400,
    w: 150,
    h: 120,
    delay: 3
  });



  const forestImage1 = game.newImageObject({
    file: "images/forestImage.jpg",
    x: 0,
    y: 0,
    h : gameHeight,
    onload: function() {
      forestImage2.x = forestImage1.x + forestImage1.w
    }
  });

  const forestImage2 = game.newImageObject({
    file: "images/forestImage.jpg",
    x: 0,
    y: 0,
    h: gameHeight
  });

  const grassImage1 = game.newImageObject({
    file : './images/grassImage.png',
    x : 0,
    y : 460,
    w : gameWidth,
    onload: function() {
      grassImage2.y = grassImage1.y = gameHeight - grassImage1.h;
      grassImage2.x = grassImage1.x + grassImage1.w
    }
  });

  const grassImage2 = game.newImageObject({
    file : './images/grassImage.png',
    x : 0,
    y : 460,
    w : gameWidth
  });



  const arrayOfBarriers = [];
  let offsetByX = 500;
  for (let i = 0; i < 100; i += 1) {
    offsetByX += getRandomNumber(300, 800);
    const barrier = game.newImageObject({
      file: "images/stump.png",
      x: offsetByX,
      y: 430,
      h: 100,
    });
    arrayOfBarriers.push(barrier)
  }

  const moveBackGround = function(speed) {
    forestImage1.move(point(-speed / 2, 0));
    forestImage2.move(point(-speed / 2, 0));
    grassImage1.move(point(-speed, 0));
    grassImage2.move(point(-speed, 0));

    if (forestImage1.x + forestImage1.w < 0) {
      forestImage1.x = forestImage2.x + forestImage2.w
    }
    if (forestImage2.x + forestImage2.w < 0) {
      forestImage2.x = forestImage1.x + forestImage1.w
    }
    if (grassImage1.x + grassImage1.w < 0) {
      grassImage1.x = grassImage2.x + grassImage2.w
    }
    if (grassImage2.x + grassImage2.w < 0) {
      grassImage2.x = grassImage1.x + grassImage1.w
    }
  }

  game.newLoop('game', function () {

    if (dog.y < 400) {
      dog.y += 4;
    }

    if (keyboard.isDown('UP')) {
      if (dog.y > 200) { //TODO: setTimeout / Interval??
        dog.y -= 14;
      }
    }

    if (keyboard.isDown('RIGHT')) {
      dog.x += 2;
    }
    if (keyboard.isDown('LEFT')) {
      dog.x -= 3;
    }

    forestImage1.draw();
    forestImage2.draw();
    grassImage1.draw();
    grassImage2.draw();
    dog.draw();

    arrayOfBarriers.forEach(item => {
      item.x -= 7;
      item.draw();
      if (dog.isStaticIntersect(item.getStaticBox())) {
        game.startLoop('menu');
        // location.reload();
      }
      if (dog.x === item.x) {
        score++;
      }
    })


    brush.drawTextS({ // команда рисования
      text : 'Level: 1 Score: '+ score, // выводим саму надпись
      size : 30, // размер шрифта
      color : '#FFFFFF', // цвет текста
      strokeColor : '#002C5D', // цвет обводки текста
      strokeWidth : 1, // ширина обводки
      x : 20, y : 20, // позиция
      style : 'bold' // жирный шрифт
    });

    moveBackGround(7)
  })

  game.newLoopFromClassObject('menu', new Menu(pjs, {
    name  : 'Running Dog',
    author : 'RunTeam',
    radius : 15,
    items : {
      game  : 'Start Game',
      editor : 'Settings',
    }
  }));

  game.startLoop('game');
  game.startLoop('menu');
  game.start();

}

export const AboutPage = () => {
  gameData();
  return (
    <div className='AboutPage'>
      hello
    </div>
  );
};
