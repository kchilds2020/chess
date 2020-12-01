import findObjectAtLocation from '../utilities/findObjectAtLocation'
import pawnChecks from './pawnChecks'
import rookChecks from './rookChecks'
import bishopChecks from './bishopChecks'
import queenChecks from './queenChecks'
import kingChecks from './kingChecks'
import knightChecks from './knightChecks'
import kingDangerChecks from './kingDangerChecks'


const checkValidation = (currentPos, desiredPos, state, setState) => {
    let currentObj = findObjectAtLocation(currentPos, state.position);
    let desiredObj = findObjectAtLocation(desiredPos, state.position);
    let res = true;
    switch(currentObj.piece.slice(6)) {
        case 'pawn':
            res = pawnChecks(currentObj, desiredObj, state, setState);
            break;
        case 'rook':
            res = rookChecks(currentObj, desiredObj, state, setState);
            break;
        case 'bishop':
            res = bishopChecks(currentObj, desiredObj, state, setState);
            break;
        case 'queen':
            res = queenChecks(currentObj, desiredObj, state, setState);
            break;
        case 'king':
            res = kingChecks(currentObj, desiredObj, state, setState);
            break;
        case 'knight':
            res = knightChecks(currentObj, desiredObj, state, setState);
            break;
        default: 
            break;
    } 

    

    if(res === false) return false

    //check if in check after
    kingDangerChecks(currentObj,desiredObj, state.position)

    return res;

}

export default checkValidation
