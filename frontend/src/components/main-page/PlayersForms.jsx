import './MainPage.css'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

export default function PlayersForm (
    { totalPlayers, setTotalPlayers, totalImpostors, setTotalImpostors, 
        playerNames, setPlayerNames, setImpostorIDX, wordSet, setWord }
    ) {
    const navigate = useNavigate();
    const [err, seterror] = useState('');

    useEffect(() => {
        let wordIdx = Math.floor(Math.random() * wordSet.length);
        setWord(wordSet[wordIdx]);
    }, [])

    useEffect(() => {
        setPlayerNames(prevNames => {
            var newNames = Array(totalPlayers).fill('');

            for (let i = 0; i < Math.min(prevNames.length, totalPlayers); i++) {
                newNames[i] = prevNames[i];
            }
            return newNames;
        });
    }, [totalPlayers]);

    const handleNameChange = (idx, name) => {
        setPlayerNames(prevNames => {
            const names = [...prevNames];
            names[idx] = name;
            return names;
        });
    }

    const checkNames = () => {
        for (let element of playerNames) {
            if (element === "" || element === " ") {
                console.log("Invalid name for one or more players.");
                seterror("Invalid name for one or more players.");
                return false;
            }
        }
        return true;
    }

    // code taken from https://dev.to/niero/generating-unique-random-numbers-in-javascript-using-sets-2dcd
    const setUniqueImpostors = () => {
        const uniqueNumbers = new Set();
        while (uniqueNumbers.size < totalImpostors) {
            const randomNumber = Math.floor(Math.random() * totalPlayers);
            uniqueNumbers.add(randomNumber);
        }
        return uniqueNumbers;
    }

    const setImpostorIndexes = () => {
        const numImpostors = totalImpostors === "Random" 
            ? Math.floor(Math.random() * (totalPlayers - 1)) + 1 
            : Number(totalImpostors);
        setTotalImpostors(numImpostors);
        const impostors = [...setUniqueImpostors()];
        console.log("Total impostors:", numImpostors);
        console.log("Impostors:", impostors);
        setImpostorIDX(impostors);
    }

    return (
        <form onSubmit={(e) => { e.preventDefault(); }}
        className="w-full mt-6 flex flex-col gap-6 box-border">

            <div className="in-form-box" id="total-members">
                <label>Choose number of players:</label>
                <select name="number" id="number" value={totalPlayers}
                onChange={(e) => setTotalPlayers(Number(e.target.value))}>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                </select>
            </div>

            <div className="in-form-box" id="total-members">
                <label>Choose number of impostors:</label>
                <select name="number" id="number" value={totalImpostors}
                onChange={(e) => setTotalImpostors(e.target.value)}>
                    {[...Array(totalPlayers-1)].map((_, i) => (
                        <option key={i} value={i+1}>{i+1}</option>
                    ))}
                    <option value={"Random"}>Random</option>
                </select>
            </div>

            <div className="in-form-box" id="members-names">
                {[...Array(totalPlayers)].map((e, i) => {
                    return (
                        <div key={i} className="flex flex-row justify-between">
                            <label>Name of player {i+1}</label>
                            <input type="text" placeholder="Name" className="w-3/5 md:w-70"
                            onChange={(e) => handleNameChange(i, e.target.value)} />
                        </div>
                    )
                })}
            </div>
            
            <button id='primary' onClick={() => {
                console.log(playerNames);
                setImpostorIndexes();
                checkNames() ? navigate('/theGame') : null;
            }} className='start-btn'>Start</button>
            <p className="text-sm text-red-400">{err}</p>
        </form>
    )
}