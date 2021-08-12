import "./App.css";
import Header from "./components/Header";
import Picker from "./components/Picker";
import RulesButton from "./components/RulesButton";
import RulesModal from "./components/RulesModal";
import { useState } from "react";
import { rpsData } from "./data/Data";
import Game from "./components/Game";

function App() {
  const [winCount, setWinCount] = useState(0);
  const [house, setHouse] = useState(null);
  const [pick, setPick] = useState(null);
  const [resultText, setResultText] = useState("");
  const [gameOver, setGameOver] = useState(null);
  const [clicked, setClicked] = useState(false);

  const handleClick = (name, img, background) => {
    const obj = { name, img, background };
    let random = rpsData[Math.floor(Math.random() * 3)];
    setHouse(random);
    setPick(obj);
    gameLogic(obj.name, random.name);
  };

  const gameLogic = (player, house) => {
    setGameOver(false);
    if (player === house) {
      setResultText("draw!");
      setGameOver(true);
    } else if (
      (player === "rock" && house === "scissors") ||
      (player === "paper" && house === "rock") ||
      (player === "scissors" && house === "paper")
    ) {
      setResultText("You Win");
      setGameOver(true);
      setWinCount((prev) => prev + 1);
    } else {
      setResultText("You Lose");
      setGameOver(true);
      setWinCount((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setPick(null);
    setResultText("");
  };

  const handleModal = () => {
    setClicked(!clicked);
  };

  return (
    <div className="App">
      <Header winCount={winCount} />
      {!pick ? (
        <Picker handleClick={handleClick} />
      ) : (
        <Game
          gameOver={gameOver}
          resultText={resultText}
          pick={pick}
          house={house}
          handleRestart={handleRestart}
        />
      )}
      <RulesButton handleModal={handleModal} />
      <RulesModal clicked={clicked} handleModal={handleModal} />
    </div>
  );
}

export default App;
