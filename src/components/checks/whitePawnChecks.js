import findObjectAtLocation from '../utilities/findObjectAtLocation'

const whitePawnChecks = (currentObj, desiredObj, posArr) => {

    //check if pawn goes past three spaces
    if(parseInt(desiredObj.rank) - parseInt(currentObj.rank) > 2)  return false;
    //check if pawn foes backwards
    if(parseInt(desiredObj.rank) - parseInt(currentObj.rank) < 0)  return false;

    //check if pieces are obstructing from moving forward
    if(parseInt(desiredObj.rank) - parseInt(currentObj.rank) <= 2 && parseInt(desiredObj.rank) - parseInt(currentObj.rank) > 0){
        for(let i = 1; i <= parseInt(desiredObj.rank) - parseInt(currentObj.rank); i++){
            let tempObj = findObjectAtLocation(`${currentObj.file}${parseInt(currentObj.rank) + i}`,posArr);
            console.log('TEMP OBJECT', tempObj)
            if(tempObj.piece !== '') return false; 
        }
    }

    //check if pawn goes is in different file
    if(desiredObj.file !== currentObj.file){
        if(parseInt(desiredObj.rank) - parseInt(currentObj.rank) !== 1 )
            return false;
        else{
            if(desiredObj.piece === '')
                return false;
        }
    }


    return true;
}

export default whitePawnChecks