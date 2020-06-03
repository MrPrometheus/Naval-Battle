function RectangleContainsPoint(x0: number, y0:number, x1: number, y1: number, xP: number, yP: number): boolean {
    if( ((xP + 1) >= x0) &&
        ((xP + 1) <= x1) &&
        ((yP + 1) >= y0) &&
        ((yP + 1) <= y1)){
        return true;
    }
    else{
        return false;
    }
}

export default RectangleContainsPoint