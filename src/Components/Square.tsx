import React from "react";

const Square = (props: any) => {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    let mark;

    if(props.containsShip){
        mark = props.shoted ? "X" :  ""
        console.log('test')
    } else{
        mark = props.shoted ? "·" :  ""
    }
    return (
        <button className="square" onClick={props.onClick}>
            {mark}
            {props.x === 0 ? <span className="leftNumbersLine">{numbers[props.y]}</span> : ''}
            {props.y === 0 ? <span className="topNumbersLine">{numbers[props.x]}</span> : ''}
        </button>
    )
}

export default Square