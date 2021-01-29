import React from "react";
import "./GamePage.css";
// import PlayGame from "../../game/game";

const GamePage = () => {
  const gameStart = new PlayGame();
  gameStart.init();
  return <div id="game-wrapper" />;
};

export default GamePage;
