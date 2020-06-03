import {Ship} from "../utils/Ship";
import FieldSquareType from "./FieldSquareType"

type PlayingFieldStateType = {
    status: string,
    kind: "player" | "enemy",
    field: Array<Array<FieldSquareType>>,
    ships: Array<Ship> | [],
    gameOver: boolean,
}

export default PlayingFieldStateType