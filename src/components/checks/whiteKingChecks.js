import horizontalCollisionChecks from "../utilities/horizontalCollisionChecks";

const whiteKingChecks = (currentObj, desiredObj, state, setState) => {
    let cRank = parseInt(currentObj.rank);
    let dRank = parseInt(desiredObj.rank)

    const letters = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h']

    let cFile = letters.findIndex(element => element === currentObj.file);
    let dFile = letters.findIndex(element => element === desiredObj.file);
    
    console.log(desiredObj.file)
        
    if((desiredObj.file === 'g' || desiredObj.file === "h") && (Math.abs(cRank - dRank)  > 1 || Math.abs(cFile - dFile) > 1)){

            console.log(' king castle attempt')
            
            if(horizontalCollisionChecks(currentObj, desiredObj, state.position) === true){
                console.log('if(horizontalCollisionChecks(currentObj, desiredObj, posArr) === true)')
                return false;
            }else{
                //update state king - g    rook - f
                let tempPosArr = [...state.position];
                console.log('CASTLE KING LOCATION', tempPosArr[0][letters.findIndex(element => element === 'g')])
                tempPosArr[0][letters.findIndex(element => element === 'g')].piece = 'white-king';
                tempPosArr[0][letters.findIndex(element => element === 'f')].piece = 'white-rook';
                tempPosArr[0][letters.findIndex(element => element === 'e')].piece = '';
                tempPosArr[0][letters.findIndex(element => element === 'h')].piece = '';

                let matches = [...state.matchRecord]
                matches.push('O-O')
                setState({...state, position: tempPosArr, matchRecord: matches, turn: state.turn === 'white' ? 'black' : 'white' })
                return false;
            }
    }

    if(Math.abs(cRank - dRank)  > 1 || Math.abs(cFile - dFile) > 1) 
    {
            return false;
    }

    if(desiredObj.piece.slice(0,5) === 'white') return false;

    return true;
}

export default whiteKingChecks
