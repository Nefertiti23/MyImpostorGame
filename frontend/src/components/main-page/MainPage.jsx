import './MainPage.css';
import PlayersForm from "./PlayersForms";

function MainPage (
    { totalPlayers, setTotalPlayers, totalImpostors, setTotalImpostors, 
    playerNames, setPlayerNames, setImpostorIDX, wordSet, setWord }
) {
    
    return (
        <div className="box-border">
            <h2 className="font-medium text-lg text-left">Setting Up</h2>
            <p className="text-sm text-stone-400 text-left">
                Choose the total number of players and add in their names.
            </p>
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