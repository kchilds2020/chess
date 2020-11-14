import findObjectAtLocation from '../utilities/findObjectAtLocation'

const blackPawnChecks = (currentObj, desiredObj, posArr) => {
    //check if pawn moved less than two places
    let dRank = parseInt(desiredObj.rank);
    let dFile = desiredObj.file;
    let cRank = parseInt(currentObj.rank);
    let cFile = currentObj.file;
    
    //check if pawn goes past three spaces
    if(cRank - dRank > 2)  return false;
    //check if pawn foes backwards
    if(cRank - dRank < 0)  return false;

    //check if pieces are obstructing from moving forward
    if(cRank - dRank <= 2 && cRank - dRank > 0){
        for(let i = 1; i < cRank - dRank; i++){
            let tempObj = findObjectAtLocation(`${currentObj.file}${cRank - i}`,posArr);
            console.log('TEMP OBJECT', tempObj)
            if(tempObj.piece !== '') return false; 
        }
    }

    //check if pawn goes is in different file
    console.log("TESTING BLACK PAWN CAPTURE", desiredObj.piece)
    if(desiredObj.file !== currentObj.file){
        if(cRank - dRank !== 1 )
            return false;
        else{
            if(desiredObj.piece === '')
                return false;
        }
    }

    if(desiredObj.piece.slice(0,5) === 'black')
        return false;

    return true;
}

export default blackPawnChecks
