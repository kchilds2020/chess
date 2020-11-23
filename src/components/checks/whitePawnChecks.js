import findLocationFromObject from '../utilities/findLocationFromObject'; 

const whitePawnChecks = (currentObj, desiredObj, state, setState) => {
    const c = findLocationFromObject(currentObj);
    const d = findLocationFromObject(desiredObj);
    console.log(c.file,c.rank,d.file,d.rank)

    //check if pawn goes past three spaces
    if(d.rank - c.rank > 2)  return false;

    //check if first move for double push
    if(d.rank - c.rank === 2 && c.rank !== 1) return false

    //check if pawn foes backwards
    if(d.rank- c.rank < 0)  return false;

    //check if pieces are obstructing from moving forward
    console.log(c.file, c.rank)
    if(d.rank - c.rank <= 2 && d.rank - c.rank > 0){
        for(let i = 1; i < d.rank - c.rank; i++){
            //let tempObj = findObjectAtLocation(`${c.file}${c.rank + i}`,state.position);
            let tempObj = state.position[c.rank + i][c.file]                                                               
            console.log('TEMP OBJECT ', tempObj)
            if(tempObj.piece !== '') return false; 
        }
    }


    //check if pawn goes is in different file
    if(Math.abs(d.file - c.file) > 0){
        //verify its adjacent squares
        if(d.rank - c.rank !== 1 || Math.abs(d.file - c.file) !== 1 )
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
                    if(Math.abs(parseInt(prevMove[1]) - parseInt(prevMove[4])) === 2 && c.rank === 4){
                        if(prevMove[3] === desiredObj.file){
                            // update board
                            let tempPosArr = [...state.position]
                            tempPosArr[4][c.file].piece = '';
                            tempPosArr[4][d.file].piece = '';
                            tempPosArr[5][d.file].piece = 'white-pawn'
                            matches.push(`${c.file}${c.rank}>${d.file}${d.rank}`)
                            setState({...state, position: tempPosArr, turn: state.turn ==='white' ? 'black' : 'white', matchRecord: matches})
                        }
                    }
                }
                return false;
            }
        }
    }

    if(desiredObj.piece.slice(0,5) === 'white')
        return false; 


    return true;
}

export default whitePawnChecks
