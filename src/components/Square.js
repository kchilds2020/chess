import React from 'react'
import '../App.css';
import Piece from './Piece';

export default function Square(props){
    const { bgrdColor, square, squares, updateBoard } = props;

    const fileIndex = (rank, file) =>{
        for(let i = 0; i < 8; i++){
            if(squares[rank-1][i].col === file){
                return i;
            }
        }
    }
    const movePiece = (string, currentPosition, desiredPosition, piece) => {
        console.log('MOVEPIECE',string,currentPosition,desiredPosition,piece);
        let existingSquare = document.getElementById(desiredPosition);
        console.log(existingSquare);
        if(existingSquare.className !== 'square'){
            let desSquare = existingSquare.parentElement;
            console.log(desSquare);
            existingSquare.remove();
            desSquare.appendChild(piece);
        }else{
            existingSquare.appendChild(piece);
        }
    }

    const checks = (string, currentPosition, desiredPosition) => {
    
        let color = string.slice(0,5);
        let piece = string.slice(6);
        //let currentRank = parseInt(currentPosition.slice(2));
        let currentRank = currentPosition.length > 2 ? parseInt(currentPosition.slice(2)) : parseInt(currentPosition.slice(1));
        let currentFile = currentPosition.slice(0,1);
        let desiredFile = desiredPosition.slice(0,1);
        let desiredRank = desiredPosition.length > 2 ? parseInt(desiredPosition.slice(2)) : parseInt(desiredPosition.slice(1));

        console.log(`currentPosition: ${currentPosition}, desiredPosition: ${desiredPosition}, currentRank: ${currentRank}, currentFile: ${currentFile}, desiredRank: ${desiredRank}, desiredFile: ${desiredFile}`);
        let currentLetterIndex = fileIndex(currentRank, currentFile);
        let desiredLetterIndex = fileIndex(desiredRank, desiredFile);
        console.log(squares);
        console.log(desiredRank-1,currentLetterIndex,squares[parseInt(desiredRank-1)][currentLetterIndex].piece);
        if(piece === 'Pawn'){
            if(color === 'White'){
                console.log('TEST',squares[desiredRank-1][currentLetterIndex].piece);
                if(desiredRank - currentRank <= 0 || Math.abs(desiredRank - currentRank) > 2 || squares[desiredRank-1][currentLetterIndex].piece !== ''){   
                        return false;
                }else if(currentFile !== desiredFile){
                    if(Math.abs(currentLetterIndex - desiredLetterIndex) > 1 || (Math.abs(desiredRank - currentRank) > 1 && Math.abs(currentLetterIndex - desiredLetterIndex) === 1) || ((Math.abs(desiredRank - currentRank) === 1 && Math.abs(currentLetterIndex - desiredLetterIndex) === 1 && squares[desiredRank-1][desiredLetterIndex].piece === ''))){
                        return false;
                    }
                }
            }else{
                if(desiredRank - currentRank >= 0 || Math.abs(desiredRank - currentRank) > 2 || squares[desiredRank-1][currentLetterIndex].piece !== ''){   
                    return false;
                }else if(currentFile !== desiredFile){
                    console.log('TESTING BLACK',Math.abs(currentLetterIndex - desiredLetterIndex) > 1, Math.abs(desiredRank - currentRank) > 1 && Math.abs(currentLetterIndex - desiredLetterIndex) === 1, Math.abs(desiredRank - currentRank) === 1 && Math.abs(currentLetterIndex - desiredLetterIndex) === 1 && squares[desiredRank-1][desiredLetterIndex].piece === '');
                    console.log('TESTING SECTION 3', Math.abs(desiredRank - currentRank) === 1, Math.abs(currentLetterIndex - desiredLetterIndex) === 1 , squares[desiredRank-1][desiredLetterIndex].piece === '');
                    console.log(squares[desiredRank-1][desiredLetterIndex].piece);
                    if(Math.abs(currentLetterIndex - desiredLetterIndex) > 1 || (Math.abs(desiredRank - currentRank) > 1 && Math.abs(currentLetterIndex - desiredLetterIndex) === 1) || ((Math.abs(desiredRank - currentRank) === 1 && Math.abs(currentLetterIndex - desiredLetterIndex) === 1 && squares[desiredRank-1][desiredLetterIndex].piece === ''))){
                        return false;
                    }
                }
            }
           /* console.log(`currentFile: ${currentFile}, currentRank: ${currentRank}, desiredFile: ${desiredFile}, desiredRank: ${desiredRank}`) */
        }
        return true;
    }
    
    const toggleDrag = () => {
        let whiteElements = document.getElementsByClassName('White');
        let blackElements = document.getElementsByClassName('Black');
        
        Array.prototype.forEach.call(whiteElements, element => {
            element.draggable === true ? element.setAttribute('draggable', false) : element.setAttribute('draggable', true);
        })
    
        Array.prototype.forEach.call(blackElements, element => {
            element.draggable === true ? element.setAttribute('draggable', false) : element.setAttribute('draggable', true);
        })
    
        
    }
    
    const allowDrop = (ev) => {
        ev.preventDefault();
    }
      
 
      
    const drop = (ev) => {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        let piece = document.getElementById(data);
        let id = ev.target.id;
        let file = id.slice(0,1);
        let rank = id.length > 2 ? id.slice(2) : id.slice(1);
    
        
    
        if (checks(piece.className,piece.id,ev.target.id) === true){
            piece.id = `${file}:${rank}`;
            movePiece(piece.className,piece.id,ev.target.id, piece);
            updateBoard(piece.id, ev.target.id);
            
            toggleDrag();
        }
        
    
    };
    
    


    return (
        <div className = "square" id = {`${square.col}${square.row}`} style={{backgroundColor: bgrdColor}} onDrop= {drop} onDragOver={allowDrop}>
           {/* {addImage(data)} */}
           <Piece square = {square}/>
        </div>
    )
}