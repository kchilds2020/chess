
const whiteKnightChecks = (currentObj, desiredObj, state, setState) => {

    let cRank = parseInt(currentObj.rank);
    let dRank = parseInt(desiredObj.rank)

    const letters = ["a", "b", "c", "d","e", "f", "g", "h"]
    console.log(currentObj.file, desiredObj.file);
    let cFile = letters.findIndex(element => element === currentObj.file);
    let dFile = letters.findIndex(element => element === desiredObj.file);


    console.log('KNIGHT TESTS: ', 'cFile=',cFile,'dFile=',dFile, 'cRank=',cRank,'dRank=',dRank, 'diff:', Math.abs(cRank-dRank), Math.abs(cFile - dFile))
    if(Math.abs(cRank - dRank) === 2){
        if(Math.abs(cFile - dFile) !== 1)
            return false;
    }
    
    if(Math.abs(cFile - dFile) === 2){
        if(Math.abs(cRank- dRank) !== 1)
            return false;
    }
    if(Math.abs(cRank - dRank) === 1){
        if(Math.abs(cFile - dFile) !== 2)
            return false;
    }
    
    if(Math.abs(cFile - dFile) === 1){
        if(Math.abs(cRank- dRank) !== 2)
            return false;
    }
    
    if(desiredObj.piece.slice(0,5) === 'white')
        return false;

    return true;
}

export default whiteKnightChecks
