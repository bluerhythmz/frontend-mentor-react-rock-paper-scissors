import './App.css';
import Header from './components/Header';
import Picker from './components/Picker';
import RulesButton from './components/RulesButton';
import RulesModal from './components/RulesModal';
import { useState, useEffect } from 'react'
import { rpsData } from './data/Data';
import Game from "./components/Game";

function App() {
  const [winCount, setWinCount] = useState(0)
  const [house, setHouse] = useState(null)
  const [pick, setPick] = useState(null);
  const [route, setRoute] = useState(null)
  const [resultText, setResultText] = useState("");
  const [gameOver, setGameOver] = useState(null);
  const [clicked, setClicked] = useState(false)
 
  /* useEffect(() => {
    if (pick && house) {
    setPlayerRoute(pick.name, house.name)
  }
    
  }, [pick, house]) */
  
  
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
    setPick(obj);
    setPlayerRoute(obj.name, random.name)
  };

  const gameLogic = (route, house) => {
    setGameOver(false)
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

  const setPlayerRoute = (pick, house) => {
    const routes = [["rock", "paper", "scissors"], ["paper", "scissors", "rock"], ["scissors", "rock", "paper"]]

  const playerRoute = routes.filter((route) => route[0] === pick);
  
  gameLogic(playerRoute, house)
  }

  const handleRestart = () => {
    setRoute(null)
    setPick(null)
    setResultText("")
  }

  const handleModal = () => {
    setClicked(!clicked)
  }
  
  return (
    <div className="App">
      <Header winCount={winCount} />
      { !pick ? <Picker  handleClick={handleClick} />
       : <Game
          gameOver={gameOver}
          resultText={resultText}
          pick={pick}
          house={house}
          handleRestart={handleRestart}
        />}
      <RulesButton handleModal={handleModal} />
      <RulesModal clicked={clicked} handleModal={handleModal} />
    </div>
  );
}

export default App;
