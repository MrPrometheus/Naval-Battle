import FieldSquareType from "../Types/FieldSquareType";
import {Ship} from "../utils/Ship"

function matchShipToDield(field: Array<Array<FieldSquareType>>, ship: Ship) {
    switch (ship.direction) {
        case "down":
            for (let i = ship.startPoint.y - 1; i < ship.startPoint.y - 1 + ship.size!; i++) {
                field[i][ship.startPoint.x - 1].containsShip = true;
                field[i][ship.startPoint.x - 1].shipId = ship.id;
            }
            break;
        case "right":
            for (let i = ship.startPoint.x - 1; i < ship.startPoint.x - 1 + ship.size!; i++) {
                field[ship.startPoint.y - 1][i].containsShip = true;
                field[ship.startPoint.y - 1][i].shipId = ship.id;
            }
            break;
    }
}
export default matchShipToDield