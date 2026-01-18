import { useState } from "react";
import './GamePage.css';

export default function PlayerCard ({ name, impostorBool, theWord }) {
    const [wordDisplay, setWordDisplay] = useState('hidden');
    
    const changeWordDisplay = () => {
        wordDisplay === 'hidden' ? setWordDisplay('visible') : setWordDisplay('hidden')
    }

    return (
        <div className="player-card">
            <div className="name">{name}</div>
            <div className="word" style={{visibility: wordDisplay}}>{impostorBool ? 'Impostor' : theWord}</div>
            <button id="primary" onClick={
                changeWordDisplay
            }>{wordDisplay === 'hidden' ? 'Show' : 'Hide'}</button>
        </div>
    )
}