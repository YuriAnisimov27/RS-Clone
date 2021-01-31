import React, { useEffect } from "react";
import Phaser from "phaser";
import "./GamePage.css";
import Boot from "../../game/Boot";
import PlayGame from "../../game/PlayGame";
import PreloadGame from "../../game/Preloader";
import MainMenu from "../../game/MainMenu";

const GamePage = () => {
  useEffect(() => {
    // window.onload = () => {
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

    function resize() {
      const canvas = document.querySelector("canvas");
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const windowRatio = windowWidth / windowHeight;
      const gameRatio = config.width / config.height;
      if (windowRatio < gameRatio) {
        canvas.style.width = `${windowWidth * 0.55}px`;
        canvas.style.height = `${(windowWidth / gameRatio) * 0.55}px`;
      } else {
        canvas.style.width = `${windowHeight * gameRatio * 0.55} px`;
        canvas.style.height = `${windowHeight * 0.55} px`;
      }
    }

    window.focus();
    resize();
    window.addEventListener("resize", resize, false);

    // };
    return () => {
      window.removeEventListener("resize", resize, false);
    };
  }, []);

  return <div id="game-wrapper" />;
};

export default GamePage;
