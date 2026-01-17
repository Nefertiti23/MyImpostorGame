import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './components/Routing';
import './App.css'
import { words } from './data/words';

function Heading () {
    return (
        <div>
            <h1>Impostor 2</h1>
            <p className="py-2">The Impostor game, but with massive improvements.</p>
        </div>
    )
}

function App() {
  const [totalPlayers, setTotalPlayers] = useState(3);
  const [totalImpostors, setTotalImpostors] = useState(1);
  const [playerNames, setPlayerNames] = useState(Array(3).fill(''));
  const [impostorIDX, setImpostor] = useState([0]);
  const [theWord, setWord] = useState('null');
  
  return (
    <BrowserRouter basename="/MyImpostorGame">
      <Heading />
      <div className="border rounded-lg py-4 w-100 md:w-180 my-4 h-[70vh] box-border overflow-scroll">
        <Routing
        totalPlayers={totalPlayers}
        setTotalPlayers={setTotalPlayers}
        totalImpostors={totalImpostors}
        setTotalImpostors={setTotalImpostors}
        playerNames={playerNames}
        setPlayerNames={setPlayerNames}
        impostorIDX={impostorIDX}
        setImpostorIDX={setImpostor}
        wordSet={words}
        theWord={theWord}
        setWord={setWord} />
      </div>
    </BrowserRouter>
  )
}

export default App
