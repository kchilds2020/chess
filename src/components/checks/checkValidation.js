import findObjectAtLocation from '../utilities/findObjectAtLocation'
import pawnChecks from './pawnChecks'
import rookChecks from './rookChecks'
import bishopChecks from './bishopChecks'
import queenChecks from './queenChecks'
import kingChecks from './kingChecks'
import knightChecks from './knightChecks'


const checkValidation = (currentPos, desiredPos, state, setState) => {
    console.log('CHECK VALIDATION: ', currentPos, desiredPos, state.position);
    let currentObj = findObjectAtLocation(currentPos, state.position);
    let desiredObj = findObjectAtLocation(desiredPos, state.position);

    console.log(currentObj.piece, desiredObj.rank,currentObj.rank)

    switch(currentObj.piece.slice(6)) {
        case 'pawn':
            return pawnChecks(currentObj, desiredObj, state, setState);
        case 'rook':
            return rookChecks(currentObj, desiredObj, state, setState);
        case 'bishop':
            return bishopChecks(currentObj, desiredObj, state, setState);
        case 'queen':
            return queenChecks(currentObj, desiredObj, state, setState);
        case 'king':
            return kingChecks(currentObj, desiredObj, state, setState);
        case 'knight':
            return knightChecks(currentObj, desiredObj, state, setState);
        default: 
        break;
    } 

    return true;

}

export default checkValidation
