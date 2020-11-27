import avPawnSquares from './avPawnSquares'
import avRookSquares from './avRookSquares'
import avBishopSquares from './avBishopSquares'
const availableSquares = (state, setState) => {
    console.log('AVAILABLE SQUARES')
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
                default:
                    break;
            }        
        })
    )
}

export default availableSquares
