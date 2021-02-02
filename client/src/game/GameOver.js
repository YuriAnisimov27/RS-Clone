import Phaser from "phaser";

class SettingsMenu extends Phaser.Scene {
  constructor() {
    super("GameOver");
  }

  create() {
    this.clickSound = this.sound.add("clickSound", { volume: 1.0 });
    this.gameOverSound = this.sound.add("gameOverSound", { volume: 1.0 });
    this.gameOverSound.play();

    const gameOverStyle = {
      fontFamily: "Arial",
      fontSize: 100,
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

    const gameOverText = this.add.text(200, -100, `Game Over`, gameOverStyle);

    this.tweens.add({
      targets: gameOverText,
      y: 20,
      ease: "bounce.out",
      duration: 1200,
    });

    const scoreStyle = {
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
      290,
      150,
      `Your score: ${localStorage.getItem("currentScore", this.score) || 0}`,
      scoreStyle
    );

    this.add.text(
      290,
      200,
      `High Score: ${localStorage.getItem("recordScore") || 0}`,
      scoreStyle
    );

    // this.tweens.add({
    //   targets: settingsLegend,
    //   y: 150,
    //   ease: "bounce.out",
    //   duration: 1200,
    // });

    const button = this.add.image(475, 320, "button").setInteractive();
    button.scale = 0.2;
    const buttonText = this.add.text(0, 0, "Main menu", {
      fontSize: "28px",
      color: "#000000",
    });
    Phaser.Display.Align.In.Center(buttonText, button);

    button
      .on("pointerdown", () => {
        button.setTexture("buttonPressed");
        this.clickSound.play();
      })
      .on("pointerup", () => {
        button.setTexture("button");
        this.scene.start("MainMenu");
      });
  }
}

export default SettingsMenu;
