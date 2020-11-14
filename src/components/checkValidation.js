import findObjectAtLocation from './utilities/findObjectAtLocation'
import whitePawnChecks from './checks/whitePawnChecks'
import blackPawnChecks from './checks/blackPawnChecks'
import whiteRookChecks from './checks/whiteRookChecks';

const checkValidation = (currentPos, desiredPos, posArr) => {
    console.log('CHECK VALIDATION: ', currentPos, desiredPos, posArr);

    let currentObj = findObjectAtLocation(currentPos, posArr);
    let desiredObj = findObjectAtLocation(desiredPos, posArr);

    console.log(currentObj.piece, desiredObj.rank,currentObj.rank)

    switch(currentObj.piece) {
        case 'white-pawn':
            return whitePawnChecks(currentObj, desiredObj, posArr);
        case 'black-pawn':
            return blackPawnChecks(currentObj, desiredObj, posArr);
        case 'white-rook':
            return whiteRookChecks(currentObj, desiredObj, posArr);
    } 

    return true;

}

export default checkValidation
