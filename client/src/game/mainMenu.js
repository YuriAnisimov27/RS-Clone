import Phaser from "phaser";
import gameConfig from "./GameConfig";

class MainMenu extends Phaser.Scene {
  constructor() {
    super("MainMenu");
  }

  create() {
    function resize() {
      // const game = document.getElementById("game-wrapper");
      const canvas = document.querySelector("canvas");
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const windowRatio = windowWidth / windowHeight;
      const gameRatio = gameConfig.width / gameConfig.height;
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

    const backgroundImage = this.add.image(400, 300, "background");
    backgroundImage.scale = 0.7;

    this.tweens.add({
      targets: backgroundImage,
      alpha: { from: 0, to: 1 },
      duration: 1000,
    });

    const fontStyle = {
      fontFamily: "Arial",
      fontSize: 48,
      color: "#ffffff",
      fontStyle: "bold",
      padding: 16,
      shadow: {
        color: "#000000",
        fill: true,
        offsetX: 2,
        offsetY: 2,
        blur: 4,
      },
    };

    this.add.text(
      20,
      20,
      `High Score: ${localStorage.getItem("recordScore") || 0}`,
      fontStyle
    );

    const logoImage = this.add.image(300, -100, "logo");
    logoImage.scale = 0.2;
    const dinoImage = this.add.image(700, 250, "dinoImage");
    dinoImage.scale = 0.6;

    this.tweens.add({
      targets: logoImage,
      y: 250,
      ease: "bounce.out",
      duration: 1200,
    });

    this.input.once("pointerdown", () => {
      this.scene.start("PlayGame");
    });
  }
}

export default MainMenu;
