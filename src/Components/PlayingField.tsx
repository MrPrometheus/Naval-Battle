import React from "react";
import FieldRow from "./FieldRow";
import GenerationMapShips from "../utils/GeneratonMapShips";
import PlayingFieldStateType from "../Types/PlayingFieldStateType";
import PutShipOnField from "../utils/PutShipOnField"
import FieldSquareType from "../Types/FieldSquareType";
import RectangleContainsPoint from "../utils/RectangleContainsPoint";


class PlayingField extends React.Component<any, PlayingFieldStateType>{
    constructor(props: any) {
        super(props);
        this.state = {
            status: props.status,
            kind: props.kind,
            field: [],
            ships: props.kind === "enemy" ? [...GenerationMapShips]: [],
            gameOver: false,
        }

        for(let i = 0; i < 10; i++){
            this.state.field.push([]);
        }

        for(let i = 0; i < 10; i++){
            for(let j = 0; j < 10; j++){
                this.state.field[i].push({
                    x: j,
                    y: i,
                    containsShip: false,
                    shoted: false,
                    isShipVisible: false,
                    shipId: null,
                })
            }
        }
        if(this.state.kind === "enemy") {
            this.state.ships.forEach(ship => {
                PutShipOnField(this.state.field, ship)
            });
        }


    }
    handleClick(x: number, y: number): void{
        if(this.state.field[y][x].shoted){
            return;
        }
        if(this.state.gameOver){
            console.log("You Won!!!")
            return;
        }

        let gameOver = false;
        const field = [...this.state.field];
        field[y][x].shoted = true;
        field[y][x].isShipVisible = true;

        const ships = [...this.state.ships]
        if(field[y][x].containsShip && field[y][x].shoted){
            const hittedShip = ships.find(ship => (ship.id === field[y][x].shipId));
            hittedShip!.hit();
            if(hittedShip!.hp! <= 0){
                const x0 = hittedShip!.startPoint.x - 1
                const y0 = hittedShip!.startPoint.y - 1
                let x1 = x0;
                let y1 = y0;
                if(hittedShip!.direction === "right"){
                    x1 += hittedShip!.size! + 1
                    y1 += 2
                } else{
                    x1 += 2
                    y1 += hittedShip!.size! + 1
                }
                for(let y = 0; y < 10; y++){
                    for(let x = 0; x < 10; x++){
                        if(RectangleContainsPoint(x0, y0, x1, y1, x, y)){
                            field[y][x].shoted = true;
                            field[y][x].isShipVisible = true;
                        }
                    }
                }
            }
        }

        if(ships.every(ship => (ship.hp! <= 0))){
            gameOver = true;
        }

        this.setState(() => {
            return {
                field: field,
                ships: ships,
                gameOver: gameOver,
            }
        })
    }

    render() {
        return (
            <div>
                <h4 className="status">{this.state.status}</h4>
                {this.state.field.map((row: Array<FieldSquareType>, index: number) => {
                    return(
                        <FieldRow
                            key={index}
                            row={row}
                            onClick={(x: number, y: number) => this.handleClick(x, y)} />
                    )
                })}
            </div>
        )
    }
}

export default PlayingField;