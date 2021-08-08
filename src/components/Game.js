import React from "react";
import Choice from "./Choice";
/* import { useState, useEffect } from "react"; */

const Game = ({ pick, house, gameOver, resultText, handleRestart }) => {

  return (
      <>
    <section className="game">
      <div className="game__column">
        <Choice img={pick.img} background={pick.background} gameOver={gameOver} />
        <div className="game__text">You Picked</div>
      </div>
      <div className="game__column">
        
          <Choice
            img={house.img}
            background={house.background}
            absolute="absolute"
            gameOver={gameOver}
          />
        
        <div className="loading"></div>
        <div className="game__text">The House Picked</div>
      </div>
      
        <div className="results">
          <div className="results__text">{resultText}</div>
          <button className="results__button" onClick={ handleRestart} >Play Again</button>
        </div>
      )
    </section>
    </>
  );
};

export default Game;
