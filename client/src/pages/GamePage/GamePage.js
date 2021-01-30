import React from "react";
import Phaser from "phaser";
import "./GamePage.css";
import Boot from "../../game/Boot";
import PlayGame from "../../game/PlayGame";
import PreloadGame from "../../game/Preloader";
import MainMenu from "../../game/MainMenu";
// import gameConfig from "../../game/GameConfig";

const GamePage = () => {
  window.onload = () => {
    const config = {
      type: Phaser.AUTO,
      width: 950,
      height: 400,
      parent: "game-wrapper",
      scene: [Boot, PreloadGame, MainMenu, PlayGame],
      // mode: Phaser.Scale.FIT,
      backgroundColor: 0x87ceeb,

      // physics settings
      physics: {
        default: "arcade",
      },
      audio: {
        disableWebAudio: true,
      },
    };
    const game = new Phaser.Game(config);
    game.scene.start("Boot");
  };
  return <div id="game-wrapper" />;
};

export default GamePage;
