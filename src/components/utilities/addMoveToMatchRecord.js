
const addMoveToMatchRecord = (piece, currentObj, desiredObj, matchRecord) => {
  let p = piece.slice(6);
  let syntax = '';
  let moves = matchRecord;
  switch (p) {
    case 'knight':
      syntax = 'N'
      break;
    case 'pawn':
      syntax = ''
      break;
    case 'rook':
      syntax = 'R'
      break;
    case 'bishop':
      syntax = 'B'
      break;
    case 'queen':
      syntax = 'Q'
      break;
    case 'king':
      syntax = 'K'
      break;
    default:
      syntax = ''
  
  }
  moves.push(`${syntax}${currentObj.file}${currentObj.rank}>${syntax}${desiredObj.file}${desiredObj.rank}`)
  return moves;
 }

export default addMoveToMatchRecord
