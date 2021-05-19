import React from 'react';
import Navbar from "./Components/Navbar";
import PlayingField from "./Components/PlayingField";

const Game = () => {
    return (
        <div>
            <Navbar />
            <div className="game">
                <div className="game-board">
                    <PlayingField status="Поле компьютера" kind="enemy" />
                </div>
            </div>
        </div>
    )
}


export default Game;
