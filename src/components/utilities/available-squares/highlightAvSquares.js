import findLocationFromObject from '../findLocationFromObject'
import resetBoardColor from '../resetBoardColors';
const highlightAvSquares = (position, state, setState) => {
    resetBoardColor(state, setState);
    let p = findLocationFromObject(position)
    let temp = state.position;
    temp[p.rank][p.file].avSquares.forEach(element => {
        temp[element.rank][element.file].squareColor = 'red'
    })

    setState({...state, position: temp})
}

export default highlightAvSquares