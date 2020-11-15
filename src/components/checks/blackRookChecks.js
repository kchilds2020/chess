import horizontalCollisionChecks from '../utilities/horizontalCollisionChecks';
import verticalCollisionChecks from '../utilities/verticalCollisionChecks'

const blackRookChecks = (currentObj, desiredObj, state, setState) => {
    //dont allow board update if diaganol attempts
    if(desiredObj.file !== currentObj.file && desiredObj.rank !== currentObj.rank) return false;
    
    //dont allow board update if obstructions of path
    if(verticalCollisionChecks(currentObj, desiredObj, state.position) === true) return false
    if(horizontalCollisionChecks(currentObj, desiredObj, state.position) === true) return false
    
    //dont allow capture if destination piece is white;
    if(desiredObj.piece.slice(0,5) === 'black') return false; 

    return true;
}

export default blackRookChecks
