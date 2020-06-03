import React from 'react';
import Navbar from "./Components/Navbar";
import PlayingField from "./Components/PlayingField";

class Game extends React.Component<any, any>{
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className="game">
                    <div className="game-board">
                        <PlayingField
                            status="Поле компьютера"
                            kind="enemy"
                        ></PlayingField>
                    </div>
                </div>
            </div>
        )
    };
}


export default Game;
