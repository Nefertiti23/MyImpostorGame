import './MainPage.css';
import PlayersForm from "./PlayersForms";

function MainPage ({ totalPlayers, setTotalPlayers, totalImpostors, setTotalImpostors, playerNames, setPlayerNames, setImpostorIDX, wordSet, setWord }) {
    
    return (
        <div>
            <h2 className="font-medium text-lg">Setting Up</h2>
            <p className="text-sm text-stone-400 px-20">Choose the total number of players and add in their names.</p>
            <PlayersForm 
            totalPlayers={totalPlayers}
            setTotalPlayers={setTotalPlayers}
            totalImpostors={totalImpostors}
            setTotalImpostors={setTotalImpostors}
            playerNames={playerNames}
            setPlayerNames={setPlayerNames}
            setImpostorIDX={setImpostorIDX}
            wordSet={wordSet}
            setWord={setWord} />
        </div>
    )
}

export default MainPage;