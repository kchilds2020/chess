
const diagonalCollisionChecks = (currentObj, desiredObj, posArr) => {
    let cNum = posArr[parseInt(currentObj.rank) - 1].findIndex(element => element.file === currentObj.file)
    let dNum = posArr[parseInt(desiredObj.rank) - 1].findIndex(element => element.file === desiredObj.file)
    const letters = ['a','b','c','d','e','f','g','h']
    let desiredPos = parseInt(desiredObj.rank);
    let currentPos = parseInt(currentObj.rank);

    //upperRight
    let tempObj
    if(dNum - cNum > 0 && desiredPos -currentPos > 0){
        for(let i = 1; i < dNum - cNum; i++){
            tempObj = posArr[currentPos - 1 + i].find(element => element.file === letters[cNum + i])
            if(tempObj.piece !== '') return true;
        }
    }
    //upperLeft
    if( cNum - dNum > 0 && desiredPos - currentPos > 0){
        for(let i = 1; i < cNum - dNum; i++){
            tempObj = posArr[currentPos - 1 + i].find(element => element.file === letters[cNum - i])
            if(tempObj.piece !== '') return true;
        }
    }
    //lowerLeft
    if(cNum - dNum > 0 && currentPos - desiredPos > 0){
        for(let i = 1; i < cNum-dNum; i++){
            tempObj = posArr[currentPos - 1 - i].find(element => element.file === letters[cNum - i])
            if(tempObj.piece !== '') return true;
        }
    }
    
    //lowerRight
    if(dNum - cNum > 0 && currentPos - desiredPos > 0){
        for(let i = 1; i < dNum - cNum; i++){
            tempObj = posArr[currentPos - 1 - i].find(element => element.file === letters[cNum + i])
            if(tempObj.piece !== '') return true;
        }
    }
    
    return false;


}

export default diagonalCollisionChecks
