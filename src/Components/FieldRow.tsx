import React from "react";
import Square from "./Square";
import FieldSquareType from "../Types/FieldSquareType";

function FieldRow(props: any) {
    return(
        <div className="board-row">
            {props.row.map((square: FieldSquareType, index: number) => {
                return (
                    <Square
                        key={index}
                        x={square.x}
                        y={square.y}
                        containsShip={square.containsShip}
                        shoted={square.shoted}
                        isShipVisible={square.isShipVisible}
                        onClick={() => props.onClick(square.x, square.y)}
                    ></Square>
                )
            })}
        </div>
    )
}

export default FieldRow