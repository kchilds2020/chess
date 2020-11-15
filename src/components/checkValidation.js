import findObjectAtLocation from './utilities/findObjectAtLocation'
import whitePawnChecks from './checks/whitePawnChecks'
import blackPawnChecks from './checks/blackPawnChecks'
import whiteRookChecks from './checks/whiteRookChecks';
import blackRookChecks from './checks/blackRookChecks';
import whiteBishopChecks from './checks/whiteBishopChecks'
import blackBishopChecks from './checks/blackBishopChecks'
import whiteQueenChecks from './checks/whiteQueenChecks'
import blackQueenChecks from './checks/blackQueenChecks'
import whiteKingChecks from './checks/whiteKingChecks';
import blackKingChecks from './checks/blackKingChecks';
import whiteKnightChecks from './checks/whiteKnightChecks';
import blackKnightChecks from './checks/blackKnightChecks';

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
        case 'black-rook':
            return blackRookChecks(currentObj, desiredObj, posArr);
        case 'white-bishop':
            return whiteBishopChecks(currentObj, desiredObj, posArr);
        case 'black-bishop':
            return blackBishopChecks(currentObj, desiredObj, posArr);
        case 'white-queen':
            return whiteQueenChecks(currentObj, desiredObj, posArr);
        case 'black-queen':
            return blackQueenChecks(currentObj, desiredObj, posArr);
        case 'white-king':
            return whiteKingChecks(currentObj, desiredObj, posArr);
        case 'black-king':
            return blackKingChecks(currentObj, desiredObj, posArr);
        case 'white-knight':
            return whiteKnightChecks(currentObj, desiredObj, posArr);
        case 'black-knight':
            return blackKnightChecks(currentObj, desiredObj, posArr);
    } 

    return true;

}

export default checkValidation
