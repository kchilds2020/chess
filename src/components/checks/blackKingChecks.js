import horizontalCollisionChecks from '../utilities/horizontalCollisionChecks'

const blackKingChecks = (currentObj, desiredObj, state, setState) => {
    let cRank = parseInt(currentObj.rank);
    let dRank = parseInt(desiredObj.rank)

    const letters = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h']

    let cFile = letters.findIndex(element => element === currentObj.file);
    let dFile = letters.findIndex(element => element === desiredObj.file);
    
    if((desiredObj.file === 'a' || desiredObj.file === 'b' || desiredObj.file === 'c' || desiredObj.file === 'g' || desiredObj.file === "h") && (Math.abs(cRank - dRank)  > 1 || Math.abs(cFile - dFile) > 1)){

            console.log('castle attemp')
            
            if(horizontalCollisionChecks(currentObj, desiredObj, state.position) === true){
                console.log('if(horizontalCollisionChecks(currentObj, desiredObj, posArr) === true)')
                return false;
            }else{
                //update state king - g    rook - f
                let tempPosArr = [...state.position];
                console.log('CASTLE KING LOCATION', tempPosArr[7][letters.findIndex(element => element === 'g')])
                tempPosArr[7][letters.findIndex(element => element === 'g')].piece = 'black-king';
                tempPosArr[7][letters.findIndex(element => element === 'f')].piece = 'black-rook';
                tempPosArr[7][letters.findIndex(element => element === 'e')].piece = '';
                tempPosArr[7][letters.findIndex(element => element === 'h')].piece = '';

                let matches = [...state.matchRecord]
                matches.push('O-O')
                setState({...state, position: tempPosArr, matchRecord: matches, turn: state.turn === 'white' ? 'black' : 'white' })
                return false;
            }
    }

    if(Math.abs(cRank - dRank)  > 1 || Math.abs(cFile - dFile) > 1) return false;

    if(desiredObj.piece.slice(0,5) === 'black') return false;

    return true;
}

export default blackKingChecks

