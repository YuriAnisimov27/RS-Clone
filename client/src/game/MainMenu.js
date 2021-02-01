import Phaser from "phaser";

class MainMenu extends Phaser.Scene {
  constructor() {
    super("MainMenu");
  }

  create() {
    this.clickSound = this.sound.add("clickSound", { volume: 1.0 });

    const backgroundImage = this.add.image(400, 300, "background");
    backgroundImage.scale = 0.7;

    this.tweens.add({
      targets: backgroundImage,
      alpha: { from: 0, to: 1 },
      duration: 2000,
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

    const button = this.add.image(700, 280, "button").setInteractive();
    button.scale = 0.2;
    const buttonText = this.add.text(0, 0, "Settings", {
      color: "#000",
      fontSize: "28px",
    });
    Phaser.Display.Align.In.Center(buttonText, button);
    button
      .on("pointerdown", () => {
        button.setTexture("buttonPressed");
        this.clickSound.play();
      })
      .on("pointerup", () => {
        button.setTexture("button");
        this.scene.start("SettingsMenu");
      });

    const playButton = this.add.image(700, 200, "button").setInteractive();
    playButton.scale = 0.2;
    const playButtonText = this.add.text(0, 0, "Play", {
      color: "#000",
      fontSize: "28px",
    });
    Phaser.Display.Align.In.Center(playButtonText, playButton);
    playButton
      .on("pointerdown", () => {
        playButton.setTexture("buttonPressed");
        this.clickSound.play();
      })
      .on("pointerup", () => {
        this.scene.start("PlayGame");
      });

    // const dinoImage = this.add.image(700, 250, "dinoImage");
    // dinoImage.scale = 0.6;

    this.tweens.add({
      targets: logoImage,
      y: 250,
      ease: "bounce.out",
      duration: 1200,
    });

    // this.input.once("pointerdown", () => {
    //   this.scene.start("PlayGame");
    // });
  }
}

export default MainMenu;
