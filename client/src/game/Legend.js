import Phaser from "phaser";

class SettingsMenu extends Phaser.Scene {
  constructor() {
    super("Legend");
  }

  create() {
    this.clickSound = this.sound.add("clickSound", { volume: 1.0 });
    this.victory = this.sound.add("victory", { volume: 1.0 });
    this.victory.play();

    const congratulationStyle = {
      fontFamily: "Arial",
      fontSize: 80,
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

    const congratulationText = this.add.text(
      100,
      -100,
      `Congratulations!!!`,
      congratulationStyle
    );

    this.tweens.add({
      targets: congratulationText,
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
      280,
      150,
      `Your score: ${localStorage.getItem("currentScore", this.score) || 0}`,
      scoreStyle
    );

    this.add.text(
      280,
      200,
      `High Score: ${localStorage.getItem("recordScore") || 0}`,
      scoreStyle
    );

    const button = this.add.image(475, 320, "button").setInteractive();
    button.scale = 0.2;
    const buttonText = this.add.text(
      0,
      0,
      localStorage.getItem("isGameFinish") === "true" ? "MainMenu" : "Level 2",
      {
        fontSize: "28px",
        color: "#000000",
      }
    );
    Phaser.Display.Align.In.Center(buttonText, button);

    button
      .on("pointerdown", () => {
        button.setTexture("buttonPressed");
        this.clickSound.play();
      })
      .on("pointerup", () => {
        button.setTexture("button");
        if (localStorage.getItem("isGameFinish") === "true") {
          this.scene.start("MainMenu");
        } else {
          this.scene.start("Level2");
        }
      });
  }
}

export default SettingsMenu;
