import {LIGHT_COLOR,DARK_COLOR} from '../Config'

const resetBoardColor = (state, setState) => {
    let temp = state.position;
    let dark = true;
    for(let r = 0; r < 8; r++){
        for(let c = 0; c < 8; c++){
            temp[r][c].squareColor = dark === true ? DARK_COLOR : LIGHT_COLOR;

            dark = dark === true ? false : true;
        }
        dark = dark === true ? false : true;
    } 

    setState({...state, position: temp})
}

export default resetBoardColor;