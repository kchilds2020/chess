
const addMoveToMatchRecord = (piece, destSquare, matchRecord) => {
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
  moves.push(`${syntax}${destSquare}`)
  return moves;
 }

export default addMoveToMatchRecord
