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

const checkValidation = (currentPos, desiredPos, state, setState /*posArr*/) => {
    console.log('CHECK VALIDATION: ', currentPos, desiredPos, state.position);

    let currentObj = findObjectAtLocation(currentPos, state.position);
    let desiredObj = findObjectAtLocation(desiredPos, state.position);

    console.log(currentObj.piece, desiredObj.rank,currentObj.rank)

    switch(currentObj.piece) {
        case 'white-pawn':
            return whitePawnChecks(currentObj, desiredObj, state, setState);
        case 'black-pawn':
            return blackPawnChecks(currentObj, desiredObj, state, setState);
        case 'white-rook':
            return whiteRookChecks(currentObj, desiredObj, state, setState);
        case 'black-rook':
            return blackRookChecks(currentObj, desiredObj, state, setState);
        case 'white-bishop':
            return whiteBishopChecks(currentObj, desiredObj, state, setState);
        case 'black-bishop':
            return blackBishopChecks(currentObj, desiredObj, state, setState);
        case 'white-queen':
            return whiteQueenChecks(currentObj, desiredObj, state, setState);
        case 'black-queen':
            return blackQueenChecks(currentObj, desiredObj, state, setState);
        case 'white-king':
            return whiteKingChecks(currentObj, desiredObj, state, setState);
        case 'black-king':
            return blackKingChecks(currentObj, desiredObj, state, setState);
        case 'white-knight':
            return whiteKnightChecks(currentObj, desiredObj, state, setState);
        case 'black-knight':
            return blackKnightChecks(currentObj, desiredObj, state, setState);
    } 

    return true;

}

export default checkValidation
