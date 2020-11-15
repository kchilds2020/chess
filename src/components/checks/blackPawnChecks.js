import findObjectAtLocation from '../utilities/findObjectAtLocation'

const blackPawnChecks = (currentObj, desiredObj, state, setState) => {
    //check if pawn moved less than two places
    let cRank = parseInt(currentObj.rank);
    let dRank = parseInt(desiredObj.rank)

    const letters = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h']

    let cFile = letters.findIndex(element => element === currentObj.file);
    let dFile = letters.findIndex(element => element === desiredObj.file);
    //check if pawn goes past three spaces
    if(cRank - dRank > 2)  return false;
    //check if pawn foes backwards
    if(cRank - dRank < 0)  return false;

    //check if pieces are obstructing from moving forward
    if(cRank - dRank <= 2 && cRank - dRank > 0){
        for(let i = 1; i < cRank - dRank; i++){
            let tempObj = findObjectAtLocation(`${currentObj.file}${cRank - i}`, state.position);
            console.log('TEMP OBJECT', tempObj)
            if(tempObj.piece !== '') return false; 
        }
    }

    //check if pawn goes is in different file
    console.log("TESTING BLACK PAWN CAPTURE", desiredObj.piece)
    if(desiredObj.file !== currentObj.file){
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
    }

    if(desiredObj.piece.slice(0,5) === 'black')
        return false;

    return true;
}

export default blackPawnChecks
