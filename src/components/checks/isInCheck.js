import availableSquares from '../utilities/available-squares/availableSquares'
import findKingLocation from '../utilities/findKingLocation'

const isInCheck = (currentObj, desiredObj, state, setState) => {
    
    
    let currentState = state;
    let tempState = currentState
    

    tempState.position = availableSquares(tempState.position)

    let k = currentObj.piece.slice(0,5) === 'black' ? findKingLocation(tempState.position, 'black') : findKingLocation(tempState.position, 'white');

    let res = false;

    for(let r = 0; r < 7; r++){
        for(let c = 0; c < 7; c++){
            if(tempState.position[r][c].avSquares){
                let found = tempState.position[r][c].avSquares.find(element => element.rank === k.rank && element.file === k.file)
                if(found) res = true;
            }
        }
    } 
    return res;
}

export default isInCheck;
