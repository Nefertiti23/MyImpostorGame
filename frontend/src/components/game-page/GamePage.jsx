import './GamePage.css';
import { useState } from 'react';
import PlayerCard from './PlayerCard';

export default function GamePage ({ players, impostorIdx, theWord, totalImpostors }) {
    const [idx, setIdx] = useState(0);

    const nextPlayer = () => {
        idx < players.length-1 ? setIdx((prevIdx) => prevIdx+1) : null;
    }

    const prevPlayer = () => {
        idx > 0 ? setIdx((prevIdx) => prevIdx-1) : null;
    }

    const showPlayerCard = () => {
        return (
            <>
                <div className="flex flex-col">
                    <div className="font-semibold text-lg text-left">Player {idx+1}</div>
                    <p className="text-sm text-stone-400 text-left">
                        Take a peek at your word. Don't forget to hide it before the next player sees it.
                    </p>
                </div>
                <PlayerCard name={players[idx]} impostorBool={impostorIdx.includes(idx) ? true : false} theWord={theWord} />
            </>
        )
    }

    return (
        <div className="players-box">
            {showPlayerCard()}
            <div className="flex flex-row gap-10 mt-8">
                <button id="secondary" onClick={() => prevPlayer()}>Previous player</button>
                <button id="secondary" onClick={() => nextPlayer()}>Next player</button>
            </div>
        </div>
    )
}