import horizontalCollisionChecks from '../utilities/horizontalCollisionChecks';
import verticalCollisionChecks from '../utilities/verticalCollisionChecks'
import diagonalCollisionChecks from "../utilities/diagonalCollisionChecks";

const whiteQueenChecks = (currentObj, desiredObj, posArr) => {
    console.log('horizontal')
    if(currentObj.file !== desiredObj.file && currentObj.rank !== desiredObj.rank){
        if(diagonalCollisionChecks(currentObj, desiredObj, posArr) === true) return false;
    }
    else if(currentObj.file !== desiredObj.file && currentObj.rank === desiredObj.rank){
        if(horizontalCollisionChecks(currentObj, desiredObj, posArr) === true) return false;
    }
    else if(currentObj.file === desiredObj.file && currentObj.rank !== desiredObj.rank){
        if(verticalCollisionChecks(currentObj, desiredObj, posArr) === true) return false;
    }
    
    if(desiredObj.piece.slice(0,5) === 'white') return false;
    
    return true;
}

export default whiteQueenChecks
