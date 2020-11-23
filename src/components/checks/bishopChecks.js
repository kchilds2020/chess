import diagonalCollisionChecks from "../utilities/diagonalCollisionChecks";
import findLocationFromObject from '../utilities/findLocationFromObject'

const bishopChecks = (currentObj, desiredObj, state, setState) => {
    const c = findLocationFromObject(currentObj);
    const d = findLocationFromObject(desiredObj);
    console.log(c.file,c.rank,d.file,d.rank)

    if(Math.abs(c.rank - d.rank) !== Math.abs(c.file - d.file)) return false;

    if(diagonalCollisionChecks(currentObj, desiredObj, state.position) === true) return false;

    console.log('DESIRED  PIECE', desiredObj.piece)
    if(desiredObj.piece.slice(0,5) === currentObj.piece.slice(0,5)) return false;
    
    return true;
}

export default bishopChecks