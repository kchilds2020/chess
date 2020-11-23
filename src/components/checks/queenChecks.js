import horizontalCollisionChecks from '../utilities/horizontalCollisionChecks';
import verticalCollisionChecks from '../utilities/verticalCollisionChecks'
import diagonalCollisionChecks from "../utilities/diagonalCollisionChecks";
import findLocationFromObject from '../utilities/findLocationFromObject'


const queenChecks = (currentObj, desiredObj, state, setState) => {
    console.log('horizontal')
    const c = findLocationFromObject(currentObj);
    const d = findLocationFromObject(desiredObj);

    if(Math.abs(c.rank - d.rank) === Math.abs(c.file - d.file)){
        if(diagonalCollisionChecks(currentObj, desiredObj, state.position) === true) return false;
    }
    else if(c.file !== d.file && c.rank === d.rank){
        if(horizontalCollisionChecks(currentObj, desiredObj, state.position) === true) return false;
    }
    else if(c.file === d.file && c.rank !== d.rank){
        if(verticalCollisionChecks(currentObj, desiredObj, state.position) === true) return false;
    }else{
        return false;
    }

    
    if(desiredObj.piece.slice(0,5) === currentObj.piece.slice(0,5)) return false;
    
    return true;
}

export default queenChecks