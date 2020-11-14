
const verticalCollisionChecks = (currentObj, desiredObj, board) => {
    //up
    let desiredPos = parseInt(desiredObj.rank);
    let currentPos = parseInt(currentObj.rank);
    if( desiredPos - currentPos > 0){
        for(let i = 1; i < desiredPos - currentPos; i++){
            let tempObj = board[(currentPos - 1) + i].find(element => element.file === currentObj.file)
            console.log(tempObj.piece)
            if(tempObj.piece !== '') return true;
        }
    }
    //down
    else{
        for(let i = 1; i < currentPos - desiredPos; i++){
            let tempObj = board[(currentPos - 1) - i].find(element => element.file === currentObj.file)
            if(tempObj.piece !== '') return true;
        }
    }

    return false;

}
export default verticalCollisionChecks
