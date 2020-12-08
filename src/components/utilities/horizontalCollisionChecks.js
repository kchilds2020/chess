
const horizontalCollisionChecks = (currentObj, desiredObj, posArr) => {

    let cNum = posArr[parseInt(currentObj.rank) - 1].findIndex(element => element.file === currentObj.file)
    let dNum = posArr[parseInt(desiredObj.rank) - 1].findIndex(element => element.file === desiredObj.file)
    const letters = ['a','b','c','d','e','f','g','h']
    //right
    if(dNum - cNum > 0){
        for(let i = 1; i < dNum - cNum; i++){
            let tempObj = posArr[parseInt(currentObj.rank) - 1].find(element => element.file === letters[cNum + i])
            if(tempObj.piece !== '') return true;
        }
    }
    //left    
    else{
        for(let i = 1; i < cNum - dNum; i++){
            let tempObj = posArr[parseInt(currentObj.rank) - 1].find(element => element.file === letters[cNum - i])
            if(tempObj.piece !== '') return true;
        }
    }
    return false;
}

export default horizontalCollisionChecks
