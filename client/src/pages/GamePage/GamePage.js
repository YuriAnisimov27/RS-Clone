import React from "react";
import "./GamePage.css";
import PlayGame from "../../game/game";

const GamePage = () => <div id="game-wrapper" />;

const gameStart = new PlayGame();
gameStart.init();

export default GamePage;
