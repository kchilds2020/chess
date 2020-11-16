import findObjectAtLocation from '../utilities/findObjectAtLocation'

const whitePawnChecks = (currentObj, desiredObj, state, setState) => {
   

    const letters = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h']

    let cFile = letters.findIndex(element => element === currentObj.file);
    let dFile = letters.findIndex(element => element === desiredObj.file);

    //check if pawn goes past three spaces
    if(parseInt(desiredObj.rank) - parseInt(currentObj.rank) > 2)  return false;
    //check if pawn foes backwards
    if(parseInt(desiredObj.rank) - parseInt(currentObj.rank) < 0)  return false;

    //check if pieces are obstructing from moving forward
    if(parseInt(desiredObj.rank) - parseInt(currentObj.rank) <= 2 && parseInt(desiredObj.rank) - parseInt(currentObj.rank) > 0){
        for(let i = 1; i < parseInt(desiredObj.rank) - parseInt(currentObj.rank); i++){
            let tempObj = findObjectAtLocation(`${currentObj.file}${parseInt(currentObj.rank) + i}`,state.position);
            console.log('TEMP OBJECT', tempObj)
            if(tempObj.piece !== '') return false; 
        }
    }

    //check if pawn goes is in different file
    if(desiredObj.file !== currentObj.file){
        if(parseInt(desiredObj.rank) - parseInt(currentObj.rank) !== 1 )
            return false;
        else{
            if(desiredObj.piece === ''){
                
                //check en passant
                let matches = [...state.matchRecord]
                let prevMove = matches[matches.length - 1];
                console.log('PREV MOVE', prevMove)

                if(prevMove.length === 5){
                    if(Math.abs(parseInt(prevMove[1]) - parseInt(prevMove[4])) === 2 && parseInt(currentObj.rank) === 5 ){
                        let tempPosArr = [...state.position]
                        tempPosArr[4][cFile].piece = '';
                        tempPosArr[4][dFile].piece = '';
                        tempPosArr[5][dFile].piece = 'white-pawn'
                        matches.push(`${currentObj.file}${currentObj.rank}>${desiredObj.file}${desiredObj.rank}`)
                        setState({...state, position: tempPosArr, turn: state.turn ==='white' ? 'black' : 'white', matchRecord: matches})
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
