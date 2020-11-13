import findObjectAtLocation from './utilities/findObjectAtLocation'
import whitePawnChecks from './checks/whitePawnChecks'

const checkValidation = (currentPos, desiredPos, posArr) => {
    console.log('CHECK VALIDATION: ', currentPos, desiredPos, posArr);

    let currentObj = findObjectAtLocation(currentPos, posArr);
    let desiredObj = findObjectAtLocation(desiredPos, posArr);

    console.log(currentObj.piece, desiredObj.rank,currentObj.rank)

    switch(currentObj.piece) {
        case 'white-pawn':
            return whitePawnChecks(currentObj, desiredObj, posArr);
    } 

    return true;

}

export default checkValidation
