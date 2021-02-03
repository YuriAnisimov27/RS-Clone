import Phaser from "phaser";
import GameOptions from "./GameOptions";
import gameConfig from "./GameConfig";

// PlayGame scene
class PlayGame extends Phaser.Scene {
  constructor() {
    super("Level2");
  }

  init() {
    // game variables
    this.score = +localStorage.getItem("currentScore");
    this.recordScore = localStorage.getItem("recordScore") || 0;
  }

  create() {
    this.mymusic = this.sound.add("musicLevel2", { volume: 0.5 });
    this.jumpSound = this.sound.add("jumpSound", { volume: 0.5 });
    this.laughSound = this.sound.add("laughSound", { volume: 1.0 });
    this.coinSound = this.sound.add("coinSound", { volume: 0.5 });
    this.dinoRoaringSound = this.sound.add("dinoRoaringSound", { volume: 0.5 });
    if (JSON.parse(localStorage.getItem("gameSettings")).music) {
      this.mymusic.play({ loop: true });
    }

    // add score text & game text to screen
    this.game = document.querySelector("canvas");
    this.scoreText = this.add.text(
      gameConfig.width - 200,
      30,
      `score: ${this.score}`,
      {
        fontSize: "24px",
        fill: "#fff",
      }
    );

    this.recordScoreText = this.add.text(
      gameConfig.width - 200,
      60,
      `record: ${this.recordScore}`,
      {
        fontSize: "24px",
        fill: "#fff",
      }
    );

    // group with all active Clouds.
    this.cloudsGroup = this.add.group();

    // group with all active platforms.
    this.platformGroup = this.add.group({
      // once a platform is removed, it's added to the pool
      removeCallback: (platform) => {
        platform.scene.platformPool.add(platform);
      },
    });

    // platform pool
    this.platformPool = this.add.group({
      // once a platform is removed from the pool, it's added to the active platforms group
      removeCallback: (platform) => {
        platform.scene.platformGroup.add(platform);
      },
    });

    // group with all active coins.
    this.coinGroup = this.add.group({
      // once a coin is removed, it's added to the pool
      removeCallback: (coin) => {
        coin.scene.coinPool.add(coin);
      },
    });

    // coin pool
    this.coinPool = this.add.group({
      // once a coin is removed from the pool, it's added to the active coins group
      removeCallback: (coin) => {
        coin.scene.coinGroup.add(coin);
      },
    });

    // group with all active firecamps.
    this.fireGroup = this.add.group({
      // once a firecamp is removed, it's added to the pool
      removeCallback: (fire) => {
        fire.scene.firePool.add(fire);
      },
    });

    // fire pool
    this.firePool = this.add.group({
      // once a fire is removed from the pool, it's added to the active fire group
      removeCallback: (fire) => {
        fire.scene.fireGroup.add(fire);
      },
    });

    // group with all active pterodactyl.
    this.pterodactylGroup = this.add.group({
      // once a pterodactyl is removed, it's added to the pool
      removeCallback: (pterodactyl) => {
        pterodactyl.scene.pterodactylPool.add(pterodactyl);
      },
    });

    // pterodactyl pool
    this.pterodactylPool = this.add.group({
      // once a pterodactyl is removed from the pool, it's added to the active pterodactyl group
      removeCallback: (pterodactyl) => {
        pterodactyl.scene.pterodactylGroup.add(pterodactyl);
      },
    });

    // adding a Clouds
    this.addClouds();

    // adding a Pterodactyl
    this.addPterodactyl();

    // keeping track of added platforms
    this.addedPlatforms = 0;

    // number of consecutive jumps made by the player so far
    this.playerJumps = 0;

    // adding a platform to the game, the arguments are platform width, x position and y position
    this.addPlatform(
      gameConfig.width,
      gameConfig.width / 2,
      gameConfig.height * GameOptions.platformVerticalLimit[1]
    );

    // adding the player;
    this.player = this.physics.add.sprite(
      GameOptions.playerStartPosition,
      gameConfig.height * 0.7,
      "player"
    );
    this.player.setGravityY(GameOptions.playerGravity);
    this.player.setDepth(2);

    // the player is not dying
    this.dying = false;

    // setting collisions between the player and the platform group
    this.platformCollider = this.physics.add.collider(
      this.player,
      this.platformGroup,
      () => {
        // play "run" animation if the player is on a platform
        if (!this.player.anims.isPlaying) {
          this.player.anims.stop();
          this.player.anims.play("run");
        }
      },
      null,
      this
    );

    // setting collisions between the player and the coin group
    this.physics.add.overlap(
      this.player,
      this.coinGroup,
      (player, coin) => {
        this.score += 1;
        this.scoreText.setText(`score: ${this.score}`);
        if (JSON.parse(localStorage.getItem("gameSettings")).sfx) {
          this.coinSound.play();
        }
        if (this.score > this.recordScore) {
          localStorage.setItem("recordScore", this.score);
          this.recordScoreText.setText(`record: ${this.score}`);
        }
        // this.end();

        this.tweens.add({
          targets: coin,
          y: coin.y - 100,
          alpha: 0,
          duration: 800,
          ease: "Cubic.easeOut",
          callbackScope: this,
          onComplete: () => {
            this.coinGroup.killAndHide(coin);
            this.coinGroup.remove(coin);
          },
        });
      },
      null,
      this
    );

    // setting collisions between the player and the fire group
    this.physics.add.overlap(
      this.player,
      this.fireGroup,
      () => {
        this.dying = true;
        this.player.anims.stop();
        if (JSON.parse(localStorage.getItem("gameSettings")).sfx) {
          this.dinoRoaringSound.play();
        }
        // this.player.setFrame(2);
        this.player.anims.play("burn");
        this.player.body.setVelocityY(-50);
        this.physics.world.removeCollider(this.platformCollider);
      },
      null,
      this
    );

    // setting collisions between the player and the pterodactyl group
    this.physics.add.overlap(
      this.player,
      this.pterodactylGroup,
      () => {
        this.dying = true;
        this.player.anims.stop();
        if (JSON.parse(localStorage.getItem("gameSettings")).sfx) {
          this.dinoRoaringSound.play();
        }
        // this.player.setFrame(2);
        this.player.anims.play("fall");
        this.player.body.setVelocityY(-50);
        this.physics.world.removeCollider(this.platformCollider);
      },
      null,
      this
    );

    // checking for input
    this.input.on("pointerdown", this.jump, this);

    // game progress ----------------------------------------------------------------------------------------
    this.text = this.add.text(20, 20, " ", { fontSize: "20px", fill: "#fff" });
    this.timerEvents = [];

    this.timerEvents.push(
      this.time.addEvent({
        delay: 60000,
        loop: false,
      })
    );

    this.progressLine = this.add.graphics({ x: 10, y: 10 });
    this.fullGameLine = this.add.graphics({ x: 10, y: 10 });

    this.levelText = this.add.text(20, 50, `Level 2`, {
      fontSize: "24px",
      fill: "#fff",
    });
    //-------------------------------------------------------------------------------------------------------
  }

  // adding Clouds
  addClouds() {
    const rightmostClouds = this.getRightmostClouds();
    if (rightmostClouds < gameConfig.width * 2) {
      const clouds = this.physics.add.sprite(
        rightmostClouds + Phaser.Math.Between(100, 300),
        gameConfig.height - Phaser.Math.Between(100, 300),
        "clouds"
      );
      clouds.setOrigin(0.1, 0.1);
      clouds.body.setVelocityX(GameOptions.cloudsSpeed * -1);
      this.cloudsGroup.add(clouds);
      if (Phaser.Math.Between(0, 1)) {
        clouds.setDepth(1);
      }
      clouds.setFrame(Phaser.Math.Between(0, 7));
      this.addClouds();
    }
  }

  // getting rightmost Clouds x position
  getRightmostClouds() {
    let rightmostClouds = -200;
    this.cloudsGroup.getChildren().forEach((clouds) => {
      rightmostClouds = Math.max(rightmostClouds, clouds.x);
    });
    return rightmostClouds;
  }

  // adding Pterodactyl
  addPterodactyl() {
    const rightmostPterodactyl = this.getRightmostPterodactyl();
    if (rightmostPterodactyl < gameConfig.width * 2) {
      const pterodactyl = this.physics.add.sprite(
        rightmostPterodactyl + Phaser.Math.Between(1000, 2000),
        gameConfig.height - Phaser.Math.Between(50, 350),
        "Pterodactyl"
      );
      pterodactyl.setOrigin(0.1, 0.1);
      pterodactyl.body.setVelocityX(GameOptions.pterodactylSpeed * -1);
      this.pterodactylGroup.add(pterodactyl);
      // if (Phaser.Math.Between(0, 1)) {
      pterodactyl.setDepth(3);
      pterodactyl.setSize(10, 5, true);
      // }
      pterodactyl.anims.play("fly");
      this.addPterodactyl();
    }
  }

  // getting rightmost Pterodactyl x position
  getRightmostPterodactyl() {
    let rightmostPterodactyl = -200;
    this.pterodactylGroup.getChildren().forEach((pterodactyl) => {
      rightmostPterodactyl = Math.max(rightmostPterodactyl, pterodactyl.x);
    });
    return rightmostPterodactyl;
  }

  // the core of the script: platform are added from the pool or created on the fly
  addPlatform(platformWidth, posX, posY) {
    this.addedPlatforms += 1;
    let platform;
    if (this.platformPool.getLength()) {
      platform = this.platformPool.getFirst();
      platform.x = posX;
      platform.y = posY;
      platform.active = true;
      platform.visible = true;
      this.platformPool.remove(platform);
      // let newRatio =  platformWidth / platform.displayWidth;
      platform.displayWidth = platformWidth;
      platform.tileScaleX = 1 / platform.scaleX;
    } else {
      platform = this.add.tileSprite(posX, posY, platformWidth, 32, "platform");
      this.physics.add.existing(platform);
      platform.body.setImmovable(true);
      platform.body.setVelocityX(
        Phaser.Math.Between(
          GameOptions.platformSpeedRange[0],
          GameOptions.platformSpeedRange[1]
        ) * -1
      );
      platform.setDepth(2);
      this.platformGroup.add(platform);
    }
    this.nextPlatformDistance = Phaser.Math.Between(
      GameOptions.spawnRange[0],
      GameOptions.spawnRange[1]
    );
    // if this is not the starting platform...
    if (this.addedPlatforms > 1) {
      // is there a coin over the platform?
      if (Phaser.Math.Between(1, 100) <= GameOptions.coinPercent) {
        if (this.coinPool.getLength()) {
          const coin = this.coinPool.getFirst();
          coin.x = posX;
          coin.y = posY - 96;
          coin.alpha = 1;
          coin.active = true;
          coin.visible = true;
          this.coinPool.remove(coin);
        } else {
          const coin = this.physics.add.sprite(posX, posY - 96, "coin");
          coin.setImmovable(true);
          coin.setVelocityX(platform.body.velocity.x);
          coin.anims.play("rotate");
          coin.setDepth(2);
          this.coinGroup.add(coin);
        }
      }

      // is there a fire over the platform?
      if (Phaser.Math.Between(1, 100) <= GameOptions.firePercent) {
        if (this.firePool.getLength()) {
          const fire = this.firePool.getFirst();
          fire.x =
            posX - platformWidth / 2 + Phaser.Math.Between(1, platformWidth);
          fire.y = posY - 46;
          fire.alpha = 1;
          fire.active = true;
          fire.visible = true;
          this.firePool.remove(fire);
        } else {
          const fire = this.physics.add.sprite(
            posX - platformWidth / 2 + Phaser.Math.Between(1, platformWidth),
            posY - 46,
            "fire"
          );
          fire.setImmovable(true);
          fire.setVelocityX(platform.body.velocity.x);
          fire.setSize(8, 2, true);
          fire.anims.play("fire");
          fire.setDepth(2);
          this.fireGroup.add(fire);
        }
      }
    }
  }

  // the player jumps when on the ground, or once in the air as long as there are jumps left and the first jump was on the ground
  // and obviously if the player is not dying
  jump() {
    if (
      !this.dying &&
      (this.player.body.touching.down ||
        (this.playerJumps > 0 && this.playerJumps < GameOptions.jumps))
    ) {
      if (this.player.body.touching.down) {
        this.playerJumps = 0;
      }
      this.player.setVelocityY(GameOptions.jumpForce * -1);
      this.playerJumps += 1;
      // stops animation
      this.player.anims.stop();
      this.player.anims.play("jump");
      if (JSON.parse(localStorage.getItem("gameSettings")).sfx) {
        this.jumpSound.play();
      }
    }
  }

  update() {
    // game over
    if (this.player.y > gameConfig.height) {
      this.mymusic.stop();
      if (JSON.parse(localStorage.getItem("gameSettings")).sfx) {
        this.laughSound.play();
      }
      localStorage.setItem("currentScore", this.score);
      this.scene.start("GameOver");
    }

    this.player.x = GameOptions.playerStartPosition;

    // recycling platforms
    let minDistance = gameConfig.width;
    let rightmostPlatformHeight = 0;
    this.platformGroup.getChildren().forEach((platform) => {
      const platformDistance =
        gameConfig.width - platform.x - platform.displayWidth / 2;
      if (platformDistance < minDistance) {
        minDistance = platformDistance;
        rightmostPlatformHeight = platform.y;
      }
      if (platform.x < -platform.displayWidth / 2) {
        this.platformGroup.killAndHide(platform);
        this.platformGroup.remove(platform);
      }
    }, this);

    // recycling coins
    this.coinGroup.getChildren().forEach((coin) => {
      if (coin.x < -coin.displayWidth / 2) {
        this.coinGroup.killAndHide(coin);
        this.coinGroup.remove(coin);
      }
    }, this);

    // recycling fire
    this.fireGroup.getChildren().forEach((fire) => {
      if (fire.x < -fire.displayWidth / 2) {
        this.fireGroup.killAndHide(fire);
        this.fireGroup.remove(fire);
      }
    }, this);

    // recycling Pterodactyl
    this.pterodactylGroup.getChildren().forEach((hill) => {
      const pterodactyl = hill;
      if (pterodactyl.x < -pterodactyl.displayWidth) {
        const rightmostPterodactyl = this.getRightmostPterodactyl();
        pterodactyl.x = rightmostPterodactyl + Phaser.Math.Between(1000, 2000);
        pterodactyl.y = gameConfig.height - Phaser.Math.Between(50, 350);
        pterodactyl.anims.play("fly");
        pterodactyl.setSize(10, 5, true);
        pterodactyl.setDepth(3);
      }
    }, this);

    // recycling Clouds
    this.cloudsGroup.getChildren().forEach((hill) => {
      const clouds = hill;
      if (clouds.x < -clouds.displayWidth) {
        const rightmostClouds = this.getRightmostClouds();
        clouds.x = rightmostClouds + Phaser.Math.Between(100, 300);
        clouds.y = gameConfig.height - Phaser.Math.Between(100, 300);
        clouds.setFrame(Phaser.Math.Between(0, 7));
        if (Phaser.Math.Between(0, 1)) {
          clouds.setDepth(1);
        }
      }
    }, this);

    // adding new platforms
    if (minDistance > this.nextPlatformDistance) {
      const nextPlatformWidth = Phaser.Math.Between(
        GameOptions.platformSizeRange[0],
        GameOptions.platformSizeRange[1]
      );
      const platformRandomHeight =
        GameOptions.platformHeighScale *
        Phaser.Math.Between(
          GameOptions.platformHeightRange[0],
          GameOptions.platformHeightRange[1]
        );
      const nextPlatformGap = rightmostPlatformHeight + platformRandomHeight;
      const minPlatformHeight =
        gameConfig.height * GameOptions.platformVerticalLimit[0];
      const maxPlatformHeight =
        gameConfig.height * GameOptions.platformVerticalLimit[1];
      const nextPlatformHeight = Phaser.Math.Clamp(
        nextPlatformGap,
        minPlatformHeight,
        maxPlatformHeight
      );
      this.addPlatform(
        nextPlatformWidth,
        gameConfig.width + nextPlatformWidth / 2,
        nextPlatformHeight
      );
    }

    // game progress-----------------------------------------------------------------------------------------
    const output = [];

    this.progressLine.clear();
    this.fullGameLine.clear();

    this.passingPercentage = Math.round(
      this.timerEvents[0].getProgress().toString().substr(0, 4) * 100
    );

    output.push(`progress: ${this.passingPercentage}%`);
    this.text.setText(output);

    this.fullGameLine.fillStyle("0xFFFFFF", 1);
    this.fullGameLine.fillRect(
      925 * this.timerEvents[0].getProgress(),
      0,
      925 - 925 * this.timerEvents[0].getProgress(),
      8
    );

    this.progressLine.fillStyle("0x06799F", 1);
    this.progressLine.fillRect(
      0,
      0,
      925 * this.timerEvents[0].getProgress(),
      8
    );

    if (this.passingPercentage === 100) {
      localStorage.setItem("currentScore", this.score);
      localStorage.setItem("isGameFinish", true);
      this.scene.start("Legend");
      this.mymusic.stop();
    }
    //-------------------------------------------------------------------------------------------------------
  }
}

export default PlayGame;
