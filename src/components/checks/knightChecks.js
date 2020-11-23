import findLocationFromObject from '../utilities/findLocationFromObject'
const knightChecks = (currentObj, desiredObj, state, setState) => {

    const c = findLocationFromObject(currentObj);
    const d = findLocationFromObject(desiredObj);
    console.log(c.file,c.rank,d.file,d.rank)

    //console.log('KNIGHT TESTS: ', 'cFile=',cFile,'dFile=',dFile, 'cRank=',cRank,'dRank=',dRank, 'diff:', Math.abs(cRank-dRank), Math.abs(cFile - dFile))
    if(Math.abs(c.rank - d.rank) === 2){
        if(Math.abs(c.file - d.file) !== 1)
            return false;
    }
    
    if(Math.abs(c.file - d.file) === 2){
        if(Math.abs(c.rank- d.rank) !== 1)
            return false;
    }
    if(Math.abs(c.rank - d.rank) === 1){
        if(Math.abs(c.file - d.file) !== 2)
            return false;
    }
    
    if(Math.abs(c.file - d.file) === 1){
        if(Math.abs(c.rank- d.rank) !== 2)
            return false;
    }
    
    if(desiredObj.piece.slice(0,5) === currentObj.piece.slice(0,5))
        return false;

    return true;
}

export default knightChecks
