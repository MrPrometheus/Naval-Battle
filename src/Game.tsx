import React from 'react';
import Navbar from "./Components/Navbar";
import PlayingField from "./Components/PlayingField";

class Game extends React.Component<any, any>{
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className="game">
                    {/*<div className="game-board">
                        <PlayingField
                            status="Поле игрока"
                            kind="player"
                        ></PlayingField>
                    </div>*/}
                    <div className="game-board">
                        <PlayingField
                            status="Поле компьютера"
                            kind="enemy"
                            onClick
                        ></PlayingField>
                    </div>
                    <div className="game-info">
                        {/*<div>{status}</div>
                        <ol>{TODO}</ol>*/}
                    </div>
                </div>
            </div>
        )
    };
}


export default Game;
