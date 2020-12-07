import addMoveToMatchRecord from './addMoveToMatchRecord'
import availableSquares from './available-squares/availableSquares';
import resetBoardColor from './resetBoardColors';
import findLocationFromObject from './findLocationFromObject'

const updateBoard = (currentObj, desiredObj, state, setState) =>{
    resetBoardColor(state, setState);
    let temp = [...state.position];
    const c = findLocationFromObject(currentObj);
    const d = findLocationFromObject(desiredObj);
    
    let piece = temp[c.rank][c.file].piece;
    temp[c.rank][c.file].piece = '';
    temp[d.rank][d.file].piece = piece;
    temp = availableSquares(temp);

    let moves =  addMoveToMatchRecord(piece, currentObj, desiredObj, state.matchRecord);

    setState({...state, position: temp, matchRecord: moves, turn: state.turn === 'white' ? 'black' : 'white'});

    console.log(state)
  }
 
export default updateBoard
