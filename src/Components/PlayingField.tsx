import React from "react";
import FieldRow from "./FieldRow";
import GenerationMapShips from "../utils/GeneratonMapShips";
import PlayingFieldStateType from "../Types/PlayingFieldStateType";
import PutShipOnField from "../utils/PutShipOnField"
import FieldSquareType from "../Types/FieldSquareType";


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

        const field = [...this.state.field];
        field[y][x].shoted = true;
        field[y][x].isShipVisible = true;

        const ships = [...this.state.ships]
        if(field[y][x].containsShip && field[y][x].shoted){
            const hittedShip = ships.find(ship => (ship.id === field[y][x].shipId));
            hittedShip!.hit();
        }

        this.setState(state => {
            return{
                field: field,
                ships: ships,
            }
        })
    }

    render() {
        return (
            <div>
                <div className="status">{this.state.status}</div>
                {this.state.field.map((row: Array<FieldSquareType>, index: number) => {
                    return(
                        <FieldRow
                            key={index}
                            row={row}
                            onClick={(x: number, y: number) => this.handleClick(x, y)}
                        ></FieldRow>
                    )
                })}
            </div>
        );
    }
}

export default PlayingField;