import findLocationFromObject from '../utilities/findLocationFromObject'; 

const pawnChecks = (currentObj, desiredObj, state, setState) => {
    const c = findLocationFromObject(currentObj);
    const d = findLocationFromObject(desiredObj);

    //check if pawn goes past three spaces
    if(Math.abs(d.rank - c.rank) > 2)  return false;

    //check if first move for double push
    if((d.rank - c.rank === 2 && c.rank !== 1) || (c.rank - d.rank === 2 && c.rank !== 6)) return false

    //check if pawn foes backwards
    if((d.rank - c.rank < 0 && currentObj.piece.slice(0,5) === 'white') || (c.rank - d.rank < 0 && currentObj.piece.slice(0,5) === 'black'))  return false;

    //check if pieces are obstructing from moving forward
    if(d.rank - c.rank <= 2 && d.rank - c.rank > 0){
        for(let i = 1; i < Math.abs(d.rank - c.rank); i++){
            let tempObj = currentObj.piece.slice(0,5) === 'white' ? state.position[c.rank + i][c.file] : state.position[c.rank - i][c.file]                                                               
            if(tempObj.piece !== '') return false; 
        }
    }


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

                //if pawn move
                if(prevMove.length === 5){
                    //check en passant criteria
                    if(Math.abs(parseInt(prevMove[1]) - parseInt(prevMove[4])) === 2){
                        if(prevMove[3] === desiredObj.file){
                            // update board
                            let tempPosArr = [...state.position]
                            if(c.rank === 4){
                                tempPosArr[c.rank][c.file].piece = '';
                                tempPosArr[c.rank][d.file].piece = '';
                                tempPosArr[d.rank][d.file].piece = 'white-pawn'
                                matches.push(`${c.file}${c.rank}>${d.file}${d.rank}`)
                                setState({...state, position: tempPosArr, turn: state.turn ==='white' ? 'black' : 'white', matchRecord: matches})
                            }else if(c.rank === 3){
                                tempPosArr[c.rank][c.file].piece = '';
                                tempPosArr[c.rank][d.file].piece = '';
                                tempPosArr[d.rank][d.file].piece = 'black-pawn'
                                matches.push(`${c.file}${c.rank}>${d.file}${d.rank}`)
                                setState({...state, position: tempPosArr, turn: state.turn ==='white' ? 'black' : 'white', matchRecord: matches})
                            }
                        }
                    }
                }
                return false;
            }
        }
    }

    if(desiredObj.piece.slice(0,5) === currentObj.piece.slice(0,5))
        return false;  

    if(c.file === d.file && desiredObj.piece !== '')
        return false;


    return true;
}

export default pawnChecks
