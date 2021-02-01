import Phaser from "phaser";

class SettingsMenu extends Phaser.Scene {
  constructor() {
    super("SettingsMenu");

    this.defaultSettings = {
      music: true,
      sfx: true,
    };
  }

  create() {
    this.clickSound = this.sound.add("clickSound", { volume: 1.0 });

    this.gameSettings = JSON.parse(localStorage.getItem("gameSettings"));
    if (this.gameSettings === null || this.gameSettings.length <= 0) {
      localStorage.setItem(
        "gameSettings",
        JSON.stringify(this.defaultSettings)
      );
      this.gameSettings = this.defaultSettings;
    }

    const settingsLegend = this.add.text(900, 40, "Settings", {
      fontSize: "56px",
      color: "#000000",
    });
    this.tweens.add({
      targets: settingsLegend,
      x: 350,
      ease: "bounce.out",
      duration: 1200,
    });

    const soundLegend = this.add.text(0, 190, "Sounds", {
      fontSize: "28px",
      color: "#000000",
    });
    this.tweens.add({
      targets: soundLegend,
      x: 300,
      ease: "bounce.out",
      duration: 1200,
    });

    const soundFxButton = this.add.image(600, 200, "button").setInteractive();
    soundFxButton.scale = 0.2;
    const soundFxText = this.add.text(
      0,
      0,
      this.gameSettings.sfx === true ? "On" : "Off",
      {
        fontSize: "28px",
        color: "#000000",
      }
    );
    Phaser.Display.Align.In.Center(soundFxText, soundFxButton);

    const musicLegend = this.add.text(0, 270, "Music", {
      fontSize: "28px",
      color: "#000000",
    });
    this.tweens.add({
      targets: musicLegend,
      x: 300,
      ease: "bounce.out",
      duration: 1200,
    });

    const musicButton = this.add.image(600, 280, "button").setInteractive();
    musicButton.scale = 0.2;
    const musicText = this.add.text(
      0,
      0,
      this.gameSettings.music === true ? "On" : "Off",
      {
        fontSize: "28px",
        color: "#000000",
      }
    );
    Phaser.Display.Align.In.Center(musicText, musicButton);

    soundFxButton
      .on("pointerdown", () => {
        soundFxButton.setTexture("buttonPressed");
        this.clickSound.play();
      })
      .on("pointerup", () => {
        soundFxButton.setTexture("button");
        if (this.gameSettings.sfx) {
          this.gameSettings.sfx = false;
          soundFxText.text = "Off";
        } else {
          this.gameSettings.sfx = true;
          soundFxText.text = "On";
        }
        localStorage.setItem("gameSettings", JSON.stringify(this.gameSettings));
      });

    musicButton
      .on("pointerdown", () => {
        musicButton.setTexture("buttonPressed");
        this.clickSound.play();
      })
      .on("pointerup", () => {
        musicButton.setTexture("button");
        if (this.gameSettings.music) {
          this.gameSettings.music = false;
          musicText.text = "Off";
        } else {
          this.gameSettings.music = true;
          musicText.text = "On";
        }
        localStorage.setItem("gameSettings", JSON.stringify(this.gameSettings));
      });

    const backButton = this.add.image(50, 50, "backButton").setInteractive();
    backButton.scale = 0.05;
    backButton
      .on("pointerdown", () => {
        backButton.setTexture("backButtonPressed");
        this.clickSound.play();
      })
      .on("pointerup", () => {
        backButton.setTexture("backButton");
        this.scene.start("MainMenu");
      });
  }
}

export default SettingsMenu;
