import diagonalCollisionChecks from "../utilities/diagonalCollisionChecks";

const whiteBishopChecks = (currentObj, desiredObj, posArr) => {
    let cRank = parseInt(currentObj.rank);
    let dRank = parseInt(desiredObj.rank)

    const letters = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h']

    let cFile = letters.findIndex(element => element === currentObj.file);
    let dFile = letters.findIndex(element => element === desiredObj.file);
    //if(currentObj.rank === desiredObj.rank || currentObj.file === desiredObj.file) return false
    if(Math.abs(cRank - dRank) !== Math.abs(cFile - dFile)) return false;

    if(diagonalCollisionChecks(currentObj, desiredObj, posArr) === true) return false;

    console.log('DESIRED  PIECE', desiredObj.piece)
    if(desiredObj.piece.slice(0,5) === 'white') return false;
    
    return true;
}

export default whiteBishopChecks
