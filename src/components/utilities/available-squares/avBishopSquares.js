import findLocationFromObject from '../findLocationFromObject'
const avPawnSquares = (currentObj,position) => {
    const c = findLocationFromObject(currentObj)
    
    let tempArr = []
    const boardLen = 7;

    // upper right direction checks

    for(let i = 1; i <= boardLen; i++){
        if(c.rank+i < 8 && c.file+i < 8){
            let tempObj = position[c.rank + i][c.file+i];
            //check if tempObj has a piece
            if(tempObj.piece === '')
                tempArr.push({file: c.file+i, rank: c.rank+i})
            else if(tempObj.piece.slice(0,5) === currentObj.piece.slice(0,5)){
                //return tempArr
                break;
            }else{
                tempArr.push({file: c.file+i, rank: c.rank+i})
                //return tempArr
                break;
            }
        }else{
            break;
        }
    }

    // downward right checks


    for(let i = 1; i <= boardLen; i++){
        if(c.rank - i >= 0 && c.file + i <8){
            let tempObj = position[c.rank - i][c.file + i];
            //check if tempObj has a piece
            if(tempObj.piece === '')
                tempArr.push({file: c.file + i, rank: c.rank - i})
            else if(tempObj.piece.slice(0,5) === currentObj.piece.slice(0,5)){
                //return tempArr
                break;
            }else{
                tempArr.push({file: c.file + i, rank: c.rank - i})
                //return tempArr
                break;
            }
        }else{
            break;
        }
    }

    // downward left direction checks
    for(let i = 1; i <= boardLen; i++){
        if(c.rank - i >= 0 && c.file - i >= 0){
            let tempObj = position[c.rank-i][c.file-i];
            //check if tempObj has a piece
            if(tempObj.piece === '')
                tempArr.push({file: c.file-i, rank: c.rank-i})
            else if(tempObj.piece.slice(0,5) === currentObj.piece.slice(0,5)){
                //return tempArr
                break;
            }else{
                tempArr.push({file: c.file - i, rank: c.rank-i})
                //return tempArr
                break;
            }
        }else{
            break;
        }
    }

    // upward left direction checks
    for(let i = 1; i <= boardLen; i++){
        if(c.rank +i< 8 && c.file-i >= 0){
            let tempObj = position[c.rank+i][c.file - i];
            //check if tempObj has a piece
            if(tempObj.piece === '')
                tempArr.push({file: c.file-i, rank: c.rank+i})
            else if(tempObj.piece.slice(0,5) === currentObj.piece.slice(0,5)){
                //return tempArr
                break;
            }else{
                tempArr.push({file: c.file - i, rank: c.rank+i})
                //return tempArr
                break;
            }
        }else{
            break;
        }
    }

    return tempArr
}

export default avPawnSquares