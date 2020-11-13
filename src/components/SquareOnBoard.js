import React from 'react'
import styled from 'styled-components' 

function SquareOnBoard({ position, updateBoard}) {

    const drag = (ev) => {
        console.log(ev.target);
      ev.dataTransfer.setData("text", ev.target.id);
    }
    
    const allowDrop = (ev) => {
        ev.preventDefault();
    }
      
 
      
    const drop = (ev) => {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        console.log('DATA', data)
        let piece = document.getElementById(data);
        let destinationSquare = document.getElementById(ev.target.id);
        let row = destinationSquare.id.slice(0,1);
        let col = destinationSquare.length <= 2 ? destinationSquare.id.slice(1) : destinationSquare.id.slice(2);

        console.log(piece, destinationSquare);
        updateBoard( piece.id.slice(-2), destinationSquare.id);
        piece.id = `${position.piece}>${row}${col}`; 
        
    
    };

    return (
        <Square style={{backgroundColor: `${position.squareColor}`}} id={`${position.file}${position.rank}`} className = 'square' onDrop={drop} onDragOver={allowDrop}>
                {position.piece !== '' ? <Img id={`${position.piece}>${position.file}${position.rank}`} src = {require(`../images/${position.piece}.png`)} alt={`${position.piece}`} draggable="true" onDragStart={drag}/> : <></>}
        </Square>
    )
}

const Square = styled.div`
    position: relative;
    background-color: blue;
    padding-top: 100%;
`
const Label = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`
const Img = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

export default SquareOnBoard
