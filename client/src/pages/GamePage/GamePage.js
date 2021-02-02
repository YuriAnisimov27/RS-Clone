import React, { useEffect } from "react";
import Phaser from "phaser";
import "./GamePage.css";
import Boot from "../../game/Boot";
import Level1 from "../../game/Level1";
import Level2 from "../../game/Level2";
import PreloadGame from "../../game/Preloader";
import MainMenu from "../../game/MainMenu";
import SettingsMenu from "../../game/SettingsMenu";
import GameOver from "../../game/GameOver";
import Legend from "../../game/Legend";

const GamePage = () => {
  useEffect(() => {
    // window.onload = () => {
    const config = {
      type: Phaser.AUTO,
      width: 950,
      height: 400,
      parent: "game-wrapper",
      scene: [
        Boot,
        PreloadGame,
        MainMenu,
        SettingsMenu,
        Level1,
        Level2,
        GameOver,
        Legend,
      ],
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
