import Phaser from "phaser";
// import mainMenu from "./mainMenu";
import platform from "./assets/images/platformRemovebgPreview.png";
import dino from "./assets/images/dino.png";
import dinoJump from "./assets/images/dinoJump.png";
import dinoFall from "./assets/images/dinoFall.png";
import dinoFallSound from "./assets/audio/dinoFallSound.mp3";
import coin from "./assets/images/coinSpriteRemovebgPreview.png";
import coinSound from "./assets/audio/p-ping.mp3";
import fire from "./assets/images/fire.png";
import mountain from "./assets/images/mountain.png";
import background from "./assets/images/00088750.png";
import logo from "./assets/images/jurassicworldlogo.png";
import dinoImage from "./assets/images/green_dino.png";
import music from "./assets/audio/music.mp3";
import fallingSound from "./assets/audio/laugh.mp3";
import jumpSound from "./assets/audio/jumpSound.mp3";

// preloadGame scene
class preloadGame extends Phaser.Scene {
  constructor() {
    super("PreloadGame");
  }

  preload() {
    this.load.audio("coinSound", coinSound);
    this.load.audio("dinoFallSound", dinoFallSound);
    this.load.audio("music", music);
    this.load.audio("fallingSound", fallingSound);
    this.load.audio("jumpSound", jumpSound);

    this.load.image("platform", platform);
    this.load.image("background", background);
    this.load.image("logo", logo);
    this.load.image("dinoImage", dinoImage);

    // player is a sprite sheet made by 24x48 pixels
    this.load.spritesheet("player", dino, {
      frameWidth: 100,
      frameHeight: 93,
    });

    this.load.spritesheet("jump", dinoJump, {
      frameWidth: 100,
      frameHeight: 93,
    });

    this.load.spritesheet("fall", dinoFall, {
      frameWidth: 110,
      frameHeight: 102,
    });

    // the coin is a sprite sheet made by 20x20 pixels
    this.load.spritesheet("coin", coin, {
      frameWidth: 50,
      frameHeight: 50,
    });

    // the firecamp is a sprite sheet made by 32x58 pixels
    this.load.spritesheet("fire", fire, {
      frameWidth: 40,
      frameHeight: 70,
    });

    // mountains are a sprite sheet made by 512x512 pixels
    this.load.spritesheet("mountain", mountain, {
      frameWidth: 512,
      frameHeight: 512,
    });
  }

  create() {
    // setting player animation
    this.anims.create({
      key: "run",
      frames: this.anims.generateFrameNumbers("player", {
        start: 0,
        end: 8,
      }),
      frameRate: 16,
      repeat: -1,
    });

    this.anims.create({
      key: "jump",
      frames: this.anims.generateFrameNumbers("jump", {
        start: 0,
        end: 12,
      }),
      frameRate: 20,
      repeat: 0,
    });

    this.anims.create({
      key: "fall",
      frames: this.anims.generateFrameNumbers("fall", {
        start: 0,
        end: 5,
      }),
      frameRate: 10,
      repeat: 0,
    });

    // setting coin animation
    this.anims.create({
      key: "rotate",
      frames: this.anims.generateFrameNumbers("coin", {
        start: 0,
        end: 5,
      }),
      frameRate: 10,
      yoyo: true,
      repeat: -1,
    });

    // setting fire animation
    this.anims.create({
      key: "burn",
      frames: this.anims.generateFrameNumbers("fire", {
        start: 0,
        end: 3,
      }),
      frameRate: 15,
      repeat: -1,
    });

    this.scene.start("mainMenu");
  }
}

export default preloadGame;
