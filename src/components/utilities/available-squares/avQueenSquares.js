import findLocationFromObject from '../findLocationFromObject'
const avQueenSquares = (currentObj,state) => {
    const c = findLocationFromObject(currentObj)
    
    let tempArr = []
    const boardLen = 7;

    // upper right direction checks
    console.log(c)

    for(let i = 1; i <= boardLen; i++){
        if(c.rank+i < 8 && c.file+i < 8){
            let tempObj = state.position[c.rank + i][c.file+i];
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
            let tempObj = state.position[c.rank - i][c.file + i];
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
            let tempObj = state.position[c.rank-i][c.file-i];
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
            let tempObj = state.position[c.rank+i][c.file - i];
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

    // upward direction checks
    console.log(c)

    for(let i = 1; i <= boardLen - c.rank; i++){
        let tempObj = state.position[c.rank + i][c.file];
        //check if tempObj has a piece
        if(tempObj.piece === '')
            tempArr.push({file: c.file, rank: c.rank+i})
        else if(tempObj.piece.slice(0,5) === currentObj.piece.slice(0,5)){
            //return tempArr
            break;
        }else{
            tempArr.push({file: c.file, rank: c.rank+i})
            //return tempArr
            break;
        }
    }

    // downward direction checks


    for(let i = 1; i <= c.rank; i++){
        let tempObj = state.position[c.rank - i][c.file];
        //check if tempObj has a piece
        if(tempObj.piece === '')
            tempArr.push({file: c.file, rank: c.rank-i})
        else if(tempObj.piece.slice(0,5) === currentObj.piece.slice(0,5)){
            //return tempArr
            break;
        }else{
            tempArr.push({file: c.file, rank: c.rank-i})
            //return tempArr
            break;
        }
    }

    // right direction checks
    for(let i = 1; i <= boardLen - c.file; i++){
        let tempObj = state.position[c.rank][c.file + i];
        //check if tempObj has a piece
        if(tempObj.piece === '')
            tempArr.push({file: c.file+i, rank: c.rank})
        else if(tempObj.piece.slice(0,5) === currentObj.piece.slice(0,5)){
            //return tempArr
            break;
        }else{
            tempArr.push({file: c.file + i, rank: c.rank})
            //return tempArr
            break;
        }
    }

    // left direction checks
    for(let i = 1; i <= c.file; i++){
        let tempObj = state.position[c.rank][c.file - i];
        //check if tempObj has a piece
        if(tempObj.piece === '')
            tempArr.push({file: c.file-i, rank: c.rank})
        else if(tempObj.piece.slice(0,5) === currentObj.piece.slice(0,5)){
            //return tempArr
            break;
        }else{
            tempArr.push({file: c.file - i, rank: c.rank})
            //return tempArr
            break;
        }
    }

    return tempArr
}

export default avQueenSquares