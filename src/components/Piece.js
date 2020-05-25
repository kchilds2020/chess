import React from 'react'
import '../App.css';


export default function Piece({square}){

    const drag = (ev) => {
        console.log(ev.target);
      ev.dataTransfer.setData("text", ev.target.id);
  }

    if(square.piece !== ''){
        let color = square.piece.slice(0,5);
        let piece = square.piece.slice(5);
        let img = color === 'White' ? <img src={require(`../images/${square.piece}.png`)} className={`${color} ${piece}`}  id = {`${square.row}:${square.col}`} alt="" draggable="true" onDragStart={drag} /> : <img src={require(`../images/${square.piece}.png`)} className={`${color} ${piece}`} id = {`${square.row}:${square.col}`} alt="" draggable="false" onDragStart={drag} />
        return img;
    }
    else{
        return<div></div>;
    }
}