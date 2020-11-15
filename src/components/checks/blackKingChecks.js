import horizontalCollisionChecks from '../utilities/horizontalCollisionChecks'

const blackKingChecks = (currentObj, desiredObj, posArr) => {
    let cRank = parseInt(currentObj.rank);
    let dRank = parseInt(desiredObj.rank)

    const letters = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h']

    let cFile = letters.findIndex(element => element === currentObj.file);
    let dFile = letters.findIndex(element => element === desiredObj.file);
    
    if((desiredObj.file === 'a' || desiredObj.file === 'b' || desiredObj.file === 'c' || desiredObj.file === 'g' || desiredObj.file === "h") && (Math.abs(cRank - dRank)  > 1 || Math.abs(cFile - dFile) > 1)){

            console.log('castle attemp')
            
            if(horizontalCollisionChecks(currentObj, desiredObj, posArr) === true){
                console.log('if(horizontalCollisionChecks(currentObj, desiredObj, posArr) === true)')
                return false;
            }else{
                return true;
            }
    }

    if(Math.abs(cRank - dRank)  > 1 || Math.abs(cFile - dFile) > 1) return false;

    if(desiredObj.piece.slice(0,5) === 'black') return false;

    return true;
}

export default blackKingChecks

