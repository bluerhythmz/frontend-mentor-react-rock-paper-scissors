import './App.css';
import Header from './components/Header';
import Picker from './components/Picker';
import RulesButton from './components/RulesButton';
import { useState, useEffect } from 'react'
import { rpsData } from './data/Data';
import Game from "./components/Game";

function App() {
  const [winCount, setWinCount] = useState(0)
  const [house, setHouse] = useState(null)
  const [pick, setPick] = useState(null);
  const [route, setRoute] = useState(null)
 

  useEffect(() => {
    
    if (pick && house) {
      setPlayerRoute(pick.name, house.name)
    }
  }, [pick, house])
  

  const handleResult = (result) => {
    if (result === "win") {
      setWinCount(prev => prev + 1)
    } else if (result === "lose"){
      setWinCount(prev => prev - 1)
    }
  }

  const handleClick = (name, img, background) => {
    const obj = {name, img, background}
    let random = rpsData[Math.floor(Math.random() * 3)];
  setHouse(random);
    setPick(prev => obj);
  };

  const setPlayerRoute = (pick, house) => {
    const routes = [["rock", "paper", "scissors"], ["paper", "scissors", "rock"], ["scissors", "rock", "paper"]];

  const playerRoute = routes.filter((route) => route[0] === pick);
  
  gameLogic(playerRoute, house)
  }

  const [resultText, setResultText] = useState("");
  const [gameOver, setGameOver] = useState(null);
  const gameLogic = (route, house) => {
    setGameOver(false)
   console.log(route, house)
    switch (route[0].indexOf(house)) {
      case 1:
        setResultText("You Lose");
        setGameOver(true);
        handleResult("lose")
        break;
      case 2:
        setResultText("You Win");
        setGameOver(true);
        handleResult("win")
        break;
      default:
        setResultText("draw!");
        setGameOver(true);
    }
  };

  const handleRestart = () => {
    setRoute(null)
    setPick(null)
  }
  
  
  

  return (
    <div className="App">
      <Header winCount={winCount} />
      { !pick ? <Picker handleResult={handleResult} handleClick={handleClick} house={house} route={route} pick={pick} handleRestart={handleRestart} />
       : <Game
          gameOver={gameOver}
          resultText={resultText}
          pick={pick}
          house={house}
          handleRestart={handleRestart}
        />}
      <RulesButton />
    </div>
  );
}

export default App;
