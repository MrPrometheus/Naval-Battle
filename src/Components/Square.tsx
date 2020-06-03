import React from "react";

function Square(props: any) {
    let mark;
    if(props.containsShip){
        mark = props.shoted ? "X" :  ""
    } else{
        mark = props.shoted ? "." :  ""
    }
    return (
        <button className="square" onClick={props.onClick}>
            {mark}
        </button>
    );
}

export default Square