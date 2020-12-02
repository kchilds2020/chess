import avPawnSquares from './avPawnSquares'
import avRookSquares from './avRookSquares'
import avBishopSquares from './avBishopSquares'
import avKnightSquares from './avKnightSquares'
import avQueenSquares from './avQueenSquares'
import avKingSquares from './avKingSquares'

const availableSquares = (position, setState) => {
    
    //let squaresWithPieces = []

    position.forEach(
        row => row.forEach(col => {
            switch(col.piece.slice(6)){
                case 'pawn':
                    col.avSquares = avPawnSquares(col,position)
                    break;
                case 'rook':
                    col.avSquares = avRookSquares(col,position)
                    break;
                case 'bishop':
                    col.avSquares = avBishopSquares(col,position)
                    break;
                case 'knight':
                    col.avSquares = avKnightSquares(col,position)
                    break;
                case 'queen':
                    col.avSquares = avQueenSquares(col,position)
                    break;
                case 'king':
                    col.avSquares = avKingSquares(col,position)
                    break;
                default:
                    break;
            }        
        })
    )
    console.log('AVAILABLE SQUARES', position)
}

export default availableSquares
