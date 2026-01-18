import {Routes, Route} from 'react-router-dom';
import MainPage from './main-page/MainPage';
import GamePage from './game-page/GamePage';

export default function Routing (
    { totalPlayers, setTotalPlayers, totalImpostors, setTotalImpostors, 
    playerNames, setPlayerNames, impostorIDX, setImpostorIDX, wordSet, theWord, setWord }
) {
    return (
        <Routes>
            <Route path="/" element={
                <MainPage
                totalPlayers={totalPlayers}
                setTotalPlayers={setTotalPlayers}
                totalImpostors={totalImpostors}
                setTotalImpostors={setTotalImpostors}
                playerNames={playerNames}
                setPlayerNames={setPlayerNames}
                setImpostorIDX={setImpostorIDX}
                wordSet={wordSet}
                setWord={setWord} />
            } />
            <Route path='/theGame' element={
                <GamePage 
                players={playerNames} 
                impostorIdx={impostorIDX} 
                theWord={theWord} 
                totalImpostors={totalImpostors} />
            } />
        </Routes>
    )
}