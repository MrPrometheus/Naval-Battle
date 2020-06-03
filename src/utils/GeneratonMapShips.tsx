import {Ship} from "./Ship";

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const setOfShips: Array<Ship> = [];
const grid: Array<Array<number>> = [];
let rowIndexes: Array<number> = [];
let columnIndexes: Array<number> = [];
const sizeShips: Array<number> = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];

for(let i = 0; i < 10; i++){
    grid.push([])
    for(let j = 0; j < 10; j++){
        grid[i].push(0)
    }
}

let needX: number = 0;
let needY: number = 0;

for(let i = 0; i < 10; i++){
    let dir: "right" | "down" = getRandomInt(0, 30) % 2 === 0 ? "right": "down"
    for(let j = 0; j < 10; j++){
        for(let m = 0; m < 10; m++){
            if(grid[j][m] === 0){
                rowIndexes.push(m + 1)
            }
        }
        if(rowIndexes.length !==0){
            needX = rowIndexes[getRandomInt(0, rowIndexes.length)]
            for (let n = 0; n < 10; n++){
                if(grid[n][needX - 1] === 0){
                    columnIndexes.push(n + 1)
                }
            }
            if(columnIndexes.length !== 0){
                needY = columnIndexes[getRandomInt(0, columnIndexes.length)]
                let currentShipSize: number | undefined = sizeShips.pop()
                setOfShips.push(new Ship(currentShipSize, {x: needX, y: needY}, dir))

                let x1: number = needX;
                let y1: number = needY;
                let isReroll: boolean = false;

                switch (dir) {
                    case "right":
                        for(let i = 1; i < currentShipSize!; i++){
                            if((needX - 1 + i) >= 10){
                                isReroll = true;
                                break;
                            }
                            if(grid[needY - 1][needX - 1 + i] === 1){
                                isReroll = true
                                break
                            }
                        }
                        if(!isReroll){
                            x1 += currentShipSize! - 1
                        }
                        break;
                    case "down":
                        for(let i = 1; i < currentShipSize!; i++){
                            if((needY - 1 + i) >= 10) {
                                isReroll = true
                                break
                            }
                            if(grid[needY - 1 + i][needX - 1] === 1){
                                isReroll = true
                                break
                            }
                        }
                        if(!isReroll){
                            y1 += currentShipSize! - 1
                        }
                        break;
                }
                if(isReroll){
                    console.log("Reroll")
                    setOfShips.pop()
                    sizeShips.push(currentShipSize!)
                    rowIndexes = []
                    columnIndexes = []
                    continue;
                }
                for(let y = 0; y < 10; y++){
                    for(let x = 0; x < 10; x++){
                        if( ((x + 1) >= needX - 1) &&
                            ((x + 1) <= x1 + 1) &&
                            ((y + 1) >= needY - 1) &&
                            ((y + 1) <= y1 + 1)){
                            grid[y][x] = 1
                        }
                    }
                }
                for(let i = 0; i < 10; i++){
                    console.log(grid[i])
                }
                console.log("-------------------------------")
                rowIndexes = []
                columnIndexes = []
                break
            }
        }
    }
}

export default setOfShips;