import diagonalCollisionChecks from "../utilities/diagonalCollisionChecks";

const blackBishopChecks = (currentObj, desiredObj, state, setState) => {
    if(currentObj.rank === desiredObj.rank || currentObj.file === desiredObj.file) return false

    if(diagonalCollisionChecks(currentObj, desiredObj, state.position) === true) return false;

    console.log('DESIRED  PIECE', desiredObj.piece)
    if(desiredObj.piece.slice(0,5) === 'black') return false;
    
    return true;
}

export default blackBishopChecks
