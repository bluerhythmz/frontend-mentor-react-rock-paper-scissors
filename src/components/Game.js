import React from "react";
import Choice from "./Choice";
/* import { useState, useEffect } from "react"; */
import { AnimatePresence, motion } from "framer-motion";

const Game = ({ pick, house, gameOver, resultText, handleRestart }) => {
  const results = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: .2 }
    },
  };

  return (
    <AnimatePresence>
      <section className="game">
        <div className="game__column">
          <Choice
            img={pick.img}
            background={pick.background}
            gameOver={gameOver}
          />
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
        <motion.div
         className="results"
         variants={results}
         initial="hidden"
         animate="visible"
         >
          <div className="results__text">{resultText}</div>
          <button className="results__button" onClick={handleRestart}>
            Play Again
          </button>
        </motion.div>
        )
      </section>
    </AnimatePresence>
  );
};

export default Game;
