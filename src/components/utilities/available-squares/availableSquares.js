import avPawnSquares from './avPawnSquares'
import avRookSquares from './avRookSquares'
import avBishopSquares from './avBishopSquares'
import avKnightSquares from './avKnightSquares'
import avQueenSquares from './avQueenSquares'
import avKingSquares from './avKingSquares'

const availableSquares = (position) => {
    
    //let squaresWithPieces = []
    let temp = position;
    temp.forEach(
        row => row.forEach(col => {
            switch(col.piece.slice(6)){
                case 'pawn':
                    col.avSquares = avPawnSquares(col,temp)
                    break;
                case 'rook':
                    col.avSquares = avRookSquares(col,temp)
                    break;
                case 'bishop':
                    col.avSquares = avBishopSquares(col,temp)
                    break;
                case 'knight':
                    col.avSquares = avKnightSquares(col,temp)
                    break;
                case 'queen':
                    col.avSquares = avQueenSquares(col,temp)
                    break;
                case 'king':
                    col.avSquares = avKingSquares(col,temp)
                    break;
                default:
                    break;
            }        
        })
    )
    return temp
}

export default availableSquares
