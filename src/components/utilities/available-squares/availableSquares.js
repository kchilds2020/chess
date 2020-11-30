import avPawnSquares from './avPawnSquares'
import avRookSquares from './avRookSquares'
import avBishopSquares from './avBishopSquares'
import avKnightSquares from './avKnightSquares'
import avQueenSquares from './avQueenSquares'
import avKingSquares from './avKingSquares'

const availableSquares = (state, setState) => {
    
    //let squaresWithPieces = []

    state.position.forEach(
        row => row.forEach(col => {
            switch(col.piece.slice(6)){
                case 'pawn':
                    col.avSquares = avPawnSquares(col,state)
                    break;
                case 'rook':
                    col.avSquares = avRookSquares(col,state)
                    break;
                case 'bishop':
                    col.avSquares = avBishopSquares(col,state)
                    break;
                case 'knight':
                    col.avSquares = avKnightSquares(col,state)
                    break;
                case 'queen':
                    col.avSquares = avQueenSquares(col,state)
                    break;
                case 'king':
                    col.avSquares = avKingSquares(col,state)
                    break;
                default:
                    break;
            }        
        })
    )
    console.log('AVAILABLE SQUARES', state)
}

export default availableSquares
