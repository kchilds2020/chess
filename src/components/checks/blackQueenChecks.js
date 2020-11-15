import horizontalCollisionChecks from '../utilities/horizontalCollisionChecks';
import verticalCollisionChecks from '../utilities/verticalCollisionChecks'
import diagonalCollisionChecks from "../utilities/diagonalCollisionChecks";

const blackQueenChecks = (currentObj, desiredObj, state, setState) => {
    let cRank = parseInt(currentObj.rank);
    let dRank = parseInt(desiredObj.rank)

    const letters = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h']

    let cFile = letters.findIndex(element => element === currentObj.file);
    let dFile = letters.findIndex(element => element === desiredObj.file);

    if(Math.abs(cRank - dRank) === Math.abs(cFile - dFile)){
        if(diagonalCollisionChecks(currentObj, desiredObj, state.position) === true) return false;
    }
    else if(currentObj.file !== desiredObj.file && currentObj.rank === desiredObj.rank){
        if(horizontalCollisionChecks(currentObj, desiredObj, state.position) === true) return false;
    }
    else if(currentObj.file === desiredObj.file && currentObj.rank !== desiredObj.rank){
        if(verticalCollisionChecks(currentObj, desiredObj, state.position) === true) return false;
    }else{
        return false;
    }


    if(desiredObj.piece.slice(0,5) === 'black') return false;

    return true;
}

export default blackQueenChecks
