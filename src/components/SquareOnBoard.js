import React from 'react'
import styled from 'styled-components' 
import checkValidation from './checkValidation'

function SquareOnBoard({ position, updateBoard, state, setState /*posArr, turn*/}) {

    const drag = (ev) => {
        console.log(ev.target);
      ev.dataTransfer.setData("text", ev.target.id);
    }
    
    const allowDrop = (ev) => ev.preventDefault();
      
    const drop = (ev) => {
        ev.preventDefault();
        //get piece ID and new Square ID and update position array
        let piece = document.getElementById(ev.dataTransfer.getData("text"));
        let destinationSquare = document.getElementById(ev.target.id);
        
        if(checkValidation(piece.id.slice(-2), destinationSquare.id.slice(-2), state, setState) === true){
            updateBoard( piece.id.slice(-2), destinationSquare.id.slice(-2));

            //update image id
            let row = destinationSquare.id.slice(0,1);
            let col = destinationSquare.id.slice(1);
            piece.id = `${position.piece}>${row}${col}`; 
        }
    };

    return (
        <Square style={{backgroundColor: `${position.squareColor}`}} id={`${position.file}${position.rank}`} className = 'square' onDrop={drop} onDragOver={allowDrop}>
                {position.piece !== '' ? 
                    state.turn === position.piece.slice(0,5) ? 
                        <Img id={`${position.piece}>${position.file}${position.rank}`} src = {require(`../images/${position.piece}.png`)} alt={`${position.piece}`} draggable="true" onDragStart={drag}/> :
                        <Img id={`${position.piece}>${position.file}${position.rank}`} src = {require(`../images/${position.piece}.png`)} alt={`${position.piece}`} draggable="false"/>
                        : <></>}
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
