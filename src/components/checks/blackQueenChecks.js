import horizontalCollisionChecks from '../utilities/horizontalCollisionChecks';
import verticalCollisionChecks from '../utilities/verticalCollisionChecks'
import diagonalCollisionChecks from "../utilities/diagonalCollisionChecks";

const blackQueenChecks = (currentObj, desiredObj, posArr) => {
    if(horizontalCollisionChecks(currentObj, desiredObj, posArr) === true) return false;
    if(verticalCollisionChecks(currentObj, desiredObj, posArr) === true) return false;
    if(diagonalCollisionChecks(currentObj, desiredObj, posArr) === true) return false;

    if(desiredObj.piece.slice(0,5) === 'black') return false;

    return true;
}

export default blackQueenChecks