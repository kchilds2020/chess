
const findLocationAtObject = (square, state) => {
    let r = parseInt(square.rank) - 1;
    let c = state.position[r - 1].findIndex(element => element.file === square.file)

    return {row: r, col: c}
}

const availablePawnSquares = (square, state, setState) => {
    let avArr = []
    let location = findLocationAtObject(square,state);
    let posArr = state.position;
   if(square.piece.slice(0,5) === 'white'){
       for(let i = location.col - 1; i < location.col + 2; i++){
            //if square in front of pawn is empty
            if((posArr[location.row +1][i].piece === '' && i === location.col)){
                avArr.push(`${posArr[location.row+1][i].file}${posArr[location.row+1][i].rank}`)
            }
            else if(posArr[location.row + 1][i].piece.slice(0,5) === 'black' && i !== location.col){
                avArr.push(`${posArr[location.row+1][i].file}${posArr[location.row+1][i].rank}`)
                
                //removeAvailabilityFromPiece
            }
       }
   }else{

   }


   return avArr
}

const availableSquares = (square, state, setState) => {
    let avArr = [];
    console.log('AVAILABLESQUARES', square, square.piece.slice(6))
    switch(square.piece.slice(6)){
        case 'pawn':
         avArr = availablePawnSquares(square, state, setState);
        break;
        default:
            break;
    }

    return avArr;
}

export default availableSquares
