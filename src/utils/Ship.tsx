type StartPointType = {
    x: number
    y: number
}

class Ship {
    startPoint: StartPointType;
    size: number | undefined
    direction: "right" | "down"
    id: number
    hp: number | undefined
    static latestId: number = 0
    hit() : void{
        if(this.hp){
            this.hp--;
        }
    }
    constructor(size: number | undefined, startPoint: StartPointType, direction: "right" | "down") {
        this.startPoint = startPoint;
        this.size = size;
        this.hp = size;
        this.direction = direction;
        this.id = Ship.incrementId();
    }
    static incrementId(): number{
        if (Ship.latestId === 0) {
            Ship.latestId = 1;
        } else {
            Ship.latestId++;
        }
        return Ship.latestId
    }
}

export {Ship};