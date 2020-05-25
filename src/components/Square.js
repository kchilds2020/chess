import React from 'react'
import '../App.css';
import Piece from './Piece';

export default function Square(props){
    const { bgrdColor, square, squares, updateBoard} = props;

    const movePiece = (desiredPosition, piece) => {
        console.log(desiredPosition,piece);
        desiredPosition.innerHTML = '';
        desiredPosition.appendChild(piece);

    }

    const checks = (string, currentPosition, desiredPosition) => {
        const color = string.slice(0,5);
        const piece = string.slice(6);
        const currentRow = parseInt(currentPosition.slice(0,1));
        const desiredRow = parseInt(desiredPosition.slice(0,1));
        const currentCol = parseInt(currentPosition.slice(2));
        const desiredCol = parseInt(desiredPosition.slice(1));

        console.log(currentRow,desiredRow,currentCol,desiredCol);
        if(piece === 'Pawn'){
            //check if attempted to move two squares on first move
            //console.log(Math.abs(desiredRow - currentRow) > 2 && ((currentRow !== 1 && color === 'White') || (currentRow !== 6 && color === 'Black')));
            if(Math.abs(desiredRow - currentRow) > 2 && ((currentRow !== 1 && color === 'White') || (currentRow !== 6 && color === 'Black'))){
                return false;
            }
            //console.log(Math.abs(desiredRow - currentRow) > 2);
            //check if attempting to move more than 2 at any given time
            if(Math.abs(desiredRow - currentRow) > 2){
                return false;
            }

            //console.log((desiredRow - currentRow <= 0 && color === 'White') || (desiredRow - currentRow >= 0 && color === 'Black'));
            //check if attempted to move backwards
            if((desiredRow - currentRow <= 0 && color === 'White') || (desiredRow - currentRow >= 0 && color === 'Black')){
                return false;
            }

            //check if staying in column
            //console.log(Math.abs(desiredRow-currentRow),Math.abs(desiredCol-currentCol),squares[desiredRow][desiredCol].piece !== '');
            if(currentCol !== desiredCol){
                    if(Math.abs(desiredRow-currentRow) === Math.abs(desiredCol-currentCol) && squares[desiredRow][desiredCol].piece !== ''){
                        return true;
                    }else{
                        return false;
                    }
            }

            //check if piece is blocking you
            for(let i = 0; i < Math.abs(desiredRow - currentRow); i++){
                if(color === 'White'){
                    if(squares[currentRow+i+1][currentCol].piece !== ''){
                        return false;
                    }
                }else{
                    if(squares[currentRow-i-1][currentCol].piece !== ''){
                        return false;
                    }
                }
            }
            
            
            

        }
        
        if(piece === 'Knight'){
            console.log(Math.abs(desiredRow - currentRow) === 2,Math.abs(desiredRow - currentRow) === 1, Math.abs(desiredCol - currentCol) === 2, Math.abs(desiredCol - currentCol) === 1 );
            if((Math.abs(desiredRow - currentRow) === 2 || Math.abs(desiredRow - currentRow) === 1) && (Math.abs(desiredCol - currentCol) === 2 || Math.abs(desiredCol - currentCol) === 1) && Math.abs(desiredCol - currentCol) !== Math.abs(desiredRow - currentRow) && squares[desiredRow][desiredCol].piece.slice(0,5) !== color){
                return true;
            }else{
                return false;
            }
        }
        
        if(piece === 'Bishop'){
            if(Math.abs(desiredRow - currentRow) === Math.abs(desiredCol - currentCol)){
                let xaxis = desiredCol - currentCol;
                let yaxis = desiredRow - currentRow;
                console.log(xaxis,yaxis);
                if(xaxis > 0 ){
                    //moving right
                    if(yaxis > 0){
                        //moving right
                        for(let i = 0; i < Math.abs(desiredRow - currentRow); i++){
                            if(squares[currentRow + 1 + i][currentCol+1+i].piece.slice(0,5) === color){
                                return false;
                            }
                        }
                    }else{
                        //moving down
                        for(let i = 0; i < Math.abs(desiredRow - currentRow); i++){
                            if(squares[currentRow - 1 - i][currentCol+1+i].piece.slice(0,5) === color){
                                return false;
                            }
                        }
                    }
                }
                else{
                    //moving left
                    if(yaxis>0){
                        //moving up
                        for(let i = 0; i < Math.abs(desiredRow - currentRow); i++){
                            if(squares[currentRow + 1 + i][currentCol-1-i].piece.slice(0,5) === color){
                                return false;
                            }
                        }
                    }else{
                        //moving down
                        for(let i = 0; i < Math.abs(desiredRow - currentRow); i++){
                            if(squares[currentRow - 1 - i][currentCol-1-i].piece.slice(0,5) === color){
                                return false;
                            }
                        }
                    }
                }
            }else{
                return false;
            }
        }
    
        if(piece === 'Rook'){
            //check if moves linear
            if(Math.abs(desiredRow - currentRow) !== 0 && Math.abs(desiredCol - currentCol) !== 0){
                return false;
            }else if(desiredRow === currentRow && desiredCol - currentCol > 0){
                //moving right
                for(let i = 1; i <= Math.abs(desiredCol - currentCol); i++){
                    if(squares[desiredRow][currentCol + i].piece.slice(0,5) === color){
                        return false;
                    }
                }
            }else if(desiredRow === currentRow && desiredCol - currentCol < 0){
                //moving left
                for(let i = 1; i <= Math.abs(desiredCol - currentCol); i++){
                    if(squares[desiredRow][currentCol - i].piece.slice(0,5) === color){
                        return false;
                    }
                }
            }else if(desiredCol === currentCol && desiredRow - currentRow < 0){
                //moving down
                for(let i = 1; i < Math.abs(desiredRow - currentRow); i++){
                    if(squares[currentRow - i][desiredCol].piece.slice(0,5) === color){
                        return false;
                    }
                }
            }else if(desiredCol === currentCol && desiredRow - currentRow > 0){
                //moving up
                for(let i = 1; i < Math.abs(desiredRow - currentRow); i++){
                    if(squares[currentRow + i][desiredCol].piece.slice(0,5) === color){
                        return false;
                    }
                }
            }
        }
        if(piece === 'Queen'){
            //Queens Pieces
        }
        if(piece === 'King'){
            if(squares[desiredRow][desiredCol].piece.slice(0,5) === color || Math.abs(desiredRow-currentRow) > 1 ){
                return false;
            }else if(Math.abs(desiredCol-currentCol) > 1){
                if(desiredCol - currentCol > 0){
                    //king side castle
                    if(desiredCol - currentCol === 2){
                        for(let i =0; i < 2; i++){
                            if(squares[desiredRow][desiredCol].piece.slice(0,5) === color){
                                return false;
                            }
                        }
                        if(color === 'White'){
                            movePiece(document.getElementById('05'),document.getElementById('0:7'));
                        }else{
                            movePiece(document.getElementById('75'),document.getElementById('7:7'));
                        }
                        return true;
                    }
                    return false;
                }else{
                    //queen side castle
                    if(desiredCol - currentCol === -2){
                        for(let i =1; i > -2; i--){
                            if(squares[desiredRow][desiredCol].piece.slice(0,5) === color){
                                return false;
                            }
                        }
                        if(color === 'White'){
                            movePiece(document.getElementById('03'),document.getElementById('0:0'));
                        }else{
                            movePiece(document.getElementById('73'),document.getElementById('7:0'));
                        }
                        return true;
                    }
                    return false;
                    
                }
            }
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
        let destinationSquare = document.getElementById(ev.target.id).className !== 'square' ? document.getElementById(ev.target.id).parentElement : document.getElementById(ev.target.id);
        let row = destinationSquare.id.slice(0,1);
        let col = destinationSquare.id.length > 2 ? destinationSquare.id.slice(2) : destinationSquare.id.slice(1);

    
        if (checks(piece.className,piece.id,destinationSquare.id) === true){
            console.log(piece.id, destinationSquare.id);
            movePiece(destinationSquare, piece);
            updateBoard(piece.id, destinationSquare.id);
            piece.id = `${row}:${col}`; 
            toggleDrag();
            //updatePlayer;
        }
        
    
    };
    
    
    


    return (
        <div className = "square" id = {`${square.row}${square.col}`} style={{backgroundColor: bgrdColor}} onDrop= {drop} onDragOver={allowDrop}>
           {/* {addImage(data)} */}
           <Piece square = {square}/>
        </div>
    )
}