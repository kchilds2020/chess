import findLocationFromObject from '../findLocationFromObject'
import resetBoardColor from '../resetBoardColors';
import {ACTIVE_SQUARE_COLOR} from '../../Config'
const highlightAvSquares = (position, state, setState) => {
    resetBoardColor(state, setState);
    let p = findLocationFromObject(position)
    console.log(position)
    let temp = state.position;
    temp[p.rank][p.file].avSquares.forEach(element => {
        temp[element.rank][element.file].squareColor = ACTIVE_SQUARE_COLOR;
    })

    //setState({...state, position: temp})
}

export default highlightAvSquares