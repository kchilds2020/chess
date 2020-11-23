import findObjectAtLocation from '../utilities/findObjectAtLocation' 
import findLocationFromObject from '../utilities/findLocationFromObject'

const blackPawnChecks = (currentObj, desiredObj, state, setState) => {
    //check if pawn moved less than two places
    const c = findLocationFromObject(currentObj);
    const d = findLocationFromObject(desiredObj);
    console.log(c.file,c.rank,d.file,d.rank)

    //check if pawn goes past three spaces
    if(c.rank - d.rank > 2)  return false;
    //check if first move for double push
    if(c.rank - d.rank === 2 && c.rank !== 6) return false
    //check if pawn foes backwards
    if(c.rank - d.rank < 0)  return false;

    //check if pieces are obstructing from moving forward
    if(c.rank - d.rank <= 2 && c.rank - d.rank > 0){
        for(let i = 1; i < c.rank - d.rank; i++){
            //let tempObj = findObjectAtLocation(`${currentObj.file}${c.rank - i}`, state.position);
            let tempObj = state.position[c.rank-i][c.file]
            console.log('TEMP OBJECT', tempObj)
            if(tempObj.piece !== '') return false; 
        }
    }

    //check if pawn goes is in different file
    console.log("TESTING BLACK PAWN CAPTURE", desiredObj.piece)
    /* if(desiredObj.file !== currentObj.file){
        if(cRank - dRank !== 1 )
            return false;
        else{
            if(desiredObj.piece === ''){
                //check en passant
                let matches = [...state.matchRecord]
                let prevMove = matches[matches.length - 1];
                console.log('PREV MOVE', prevMove)

                if(prevMove.length === 5){
                    console.log(parseInt(currentObj.rank))
                    if(Math.abs(parseInt(prevMove[1]) - parseInt(prevMove[4])) === 2 && parseInt(currentObj.rank) === 4 ){
                        let tempPosArr = [...state.position]
                        tempPosArr[3][cFile].piece = '';
                        tempPosArr[3][dFile].piece = '';
                        tempPosArr[2][dFile].piece = 'black-pawn'
                        matches.push(`${currentObj.file}${currentObj.rank}>${desiredObj.file}${desiredObj.rank}`)
                        setState({...state, position: tempPosArr, turn: state.turn ==='white' ? 'black' : 'white', matchRecord: matches})
                    }
                }
                return false;
            }
        }
    } */

    //check if pawn goes is in different file
    if(Math.abs(d.file - c.file) > 0){
        //verify its adjacent squares
        if(Math.abs(d.rank - c.rank) !== 1 || Math.abs(d.file - c.file) !== 1 )
            return false;
        else{
            if(desiredObj.piece === ''){
                
                //check en passant
                let matches = [...state.matchRecord]
                //check if matches has a length
                if(matches.length === 0) return false;

                let prevMove = matches[matches.length - 1];
                console.log('PREV MOVE', prevMove)

                //if pawn move
                if(prevMove.length === 5){
                    console.log(prevMove[3], desiredObj.file)
                    //check en passant criteria
                    if(Math.abs(parseInt(prevMove[1]) - parseInt(prevMove[4])) === 2 && c.rank === 3){
                        if(prevMove[3] === desiredObj.file){
                            // update board
                            let tempPosArr = [...state.position]
                            tempPosArr[3][c.file].piece = '';
                            tempPosArr[3][d.file].piece = '';
                            tempPosArr[2][d.file].piece = 'black-pawn'
                            matches.push(`${c.file}${c.rank}>${d.file}${d.rank}`)
                            setState({...state, position: tempPosArr, turn: state.turn ==='white' ? 'black' : 'white', matchRecord: matches})
                        }
                    }
                }
                return false;
            }
        }
    }

    if(desiredObj.piece.slice(0,5) === 'black')
        return false;

    return true;
}

export default blackPawnChecks
