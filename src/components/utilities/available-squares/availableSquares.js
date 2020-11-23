import avPawnSquares from './avPawnSquares'
const availableSquares = (state, setState) => {
    console.log('AVAILABLE SQUARES')
    let squaresWithPieces = []

    state.position.forEach(
        row => row.forEach(col => {
            switch(col.piece.slice(6)){
                case 'pawn':
                    col.avSquares = avPawnSquares(col,state)
                    break;
                default:
                    break;
            }        
        })
    )
}

export default availableSquares
