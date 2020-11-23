import addMoveToMatchRecord from './addMoveToMatchRecord'
import availableSquares from './available-squares/availableSquares';

const updateBoard = (currentId, destinationId,state, setState) =>{
    let temp = [...state.position];
    let currentRow = currentId[1] - 1;
    let currentCol = temp[currentRow].findIndex(element => element.file === currentId[0]);
    let piece = temp[currentRow][currentCol].piece;
    temp[currentRow][currentCol].piece = '';

    let destRow = destinationId[1] - 1;
    let destCol = temp[destRow].findIndex(element => element.file === destinationId[0])
    temp[destRow][destCol].piece = piece;

    let moves =  addMoveToMatchRecord(piece, currentId, destinationId, state.matchRecord);

    setState({...state, position: temp, matchRecord: moves, turn: state.turn === 'white' ? 'black' : 'white'});
    availableSquares(state, setState)
  }

export default updateBoard
