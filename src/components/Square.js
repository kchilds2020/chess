import React, {useContext, useState} from 'react'
import styled from 'styled-components' 
import checkValidation from './checks/checkValidation'
import MatchState from './state/MatchState'
import highlightAvSquares from './utilities/available-squares/highlightAvSquares'
import resetBoardColor from './utilities/resetBoardColors'
import findObjectAtLocation from './utilities/findObjectAtLocation'

function Square({ position, updateBoard }) {
    
    const {state, setState} = useContext(MatchState)
    
    const drag = (ev) => {
      ev.dataTransfer.setData("text", ev.target.id);
    }
    
    const allowDrop = (ev) => ev.preventDefault();
      
    const drop = (ev) => {
        ev.preventDefault();
        //get piece ID and new Square ID and update position array
        let piece = document.getElementById(ev.dataTransfer.getData("text"));
        let destinationSquare = document.getElementById(ev.target.id);

        let currentObj = findObjectAtLocation(piece.id.slice(-2), state.position);
        let desiredObj = findObjectAtLocation(destinationSquare.id.slice(-2), state.position);

        if(checkValidation(currentObj, desiredObj, state, setState) === true){
            updateBoard( currentObj, desiredObj, state, setState);

            //update image id
            /* let row = destinationSquare.id.slice(0,1);
            let col = destinationSquare.id.slice(1);
            piece.id = `${position.piece}>${row}${col}` */; 
        }
    };
 
    /* const highlight = (e) => {
        if(position.avSquares){
            highlightAvSquares(position, state, setState)
        }
    } */

    const placePiece = (e) => {
        e.preventDefault();
        console.log(state.pieceClicked, e.target)
    }

    const movePiece = (e) => {
        e.preventDefault();
        
        if((state.turn === e.target.id.slice(0,5) && state.pieceClicked === '') || (state.turn !== e.target.id.slice(0,5) && state.pieceClicked !== '')){
            let location = e.target.id.length <= 2 ? e.target.id : e.target.parentElement.id;
            if(state.pieceClicked === ''){
                if(position.avSquares){
                    highlightAvSquares(position, state, setState)
                }
                setState({...state, pieceClicked: location});
            }else{
                //check validation
                let desiredObj = findObjectAtLocation(`${location}`, state.position)
                let currentObj = findObjectAtLocation(state.pieceClicked, state.position)
                if(checkValidation(currentObj, desiredObj, state, setState) === true){
                    updateBoard( currentObj, desiredObj, state, setState);
                }
            }
        }
    }

    /* const resetBoard = (e) => {
        resetBoardColor(state,setState)
    } */

    return (
        <SquareDiv style={{backgroundColor: `${position.squareColor}`}} id={`${position.file}${position.rank}`} className = 'square' onDrop={drop} onDragOver={allowDrop} onClick = {movePiece}>
                {position.piece !== '' ? 
                    state.turn === position.piece.slice(0,5) ? 
                        <Img id={`${position.piece}>${position.file}${position.rank}`} src = {require(`../images/${position.piece}.png`)} alt={`${position.piece}`} draggable="true" onDragStart={drag} /> :
                        <Img id={`${position.piece}>${position.file}${position.rank}`} src = {require(`../images/${position.piece}.png`)} alt={`${position.piece}`} draggable="false"/>
                        : <></>}
        </SquareDiv>
    )
}

const SquareDiv = styled.div`
    position: relative;
    background-color: blue;
    padding-top: 100%;
`
const Img = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`
//dfsdf

export default Square
