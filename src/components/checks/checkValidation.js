import findObjectAtLocation from '../utilities/findObjectAtLocation'
import whitePawnChecks from './whitePawnChecks'
import blackPawnChecks from './blackPawnChecks'
import whiteRookChecks from './whiteRookChecks';
import blackRookChecks from './blackRookChecks';
import whiteBishopChecks from './whiteBishopChecks'
import blackBishopChecks from './blackBishopChecks'
import whiteQueenChecks from './whiteQueenChecks'
import blackQueenChecks from './blackQueenChecks'
import whiteKingChecks from './whiteKingChecks';
import blackKingChecks from './blackKingChecks';
import whiteKnightChecks from './whiteKnightChecks';
import blackKnightChecks from './blackKnightChecks';

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
        default: 
        break;
    } 

    return true;

}

export default checkValidation
