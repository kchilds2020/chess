const blackKingChecks = (currentObj, desiredObj) => {
    let cRank = parseInt(currentObj.rank);
    let dRank = parseInt(desiredObj.rank)

    const letters = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h']

    let cFile = letters.findIndex(element => element.file === currentObj.file);
    let dFile = letters.findIndex(element => element.file === desiredObj.file);
    
    if(Math.abs(cRank - dRank)  > 1 || Math.abs(cFile - dFile) > 1) return false;

    if(desiredObj.piece.slice(0,5) === 'black') return false;

    return true;
}

export default blackKingChecks

