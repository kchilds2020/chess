import findLocationFromObject from '../findLocationFromObject'
const avKnightSquares = (currentObj, state) => {
    const c = findLocationFromObject(currentObj)
    
    let tempArr = []
    let tempObj;


    //left top check
    if(c.rank + 1 <= 7 && c.file - 2 >= 0){
        tempObj = state.position[c.rank+1][c.file - 2]
        if(tempObj.piece.slice(0,5) !== currentObj.piece.slice(0,5)){
            tempArr.push({file: c.file-2, rank: c.rank+1})
        }
    }

    //left bottom check
    if(c.rank - 1 >=0 && c.file - 2 >= 0){
        tempObj = state.position[c.rank-1][c.file - 2]
        if(tempObj.piece.slice(0,5) !== currentObj.piece.slice(0,5)){
            tempArr.push({file: c.file-2, rank: c.rank-1})
        }
    }

    //top left check
    if(c.rank + 2 <= 7 && c.file - 1 >= 0){
        tempObj = state.position[c.rank+2][c.file - 1]
        if(tempObj.piece.slice(0,5) !== currentObj.piece.slice(0,5)){
            tempArr.push({file: c.file-1, rank: c.rank+2})
        }
    }

    //top right check
    if(c.rank + 2 <= 7 && c.file + 1 <= 7){
        tempObj = state.position[c.rank+2][c.file + 1]
        if(tempObj.piece.slice(0,5) !== currentObj.piece.slice(0,5)){
            tempArr.push({file: c.file+1, rank: c.rank+2})
        }
    }

    //right top check
    if(c.rank + 1 <= 7 && c.file + 2 <= 7){
        tempObj = state.position[c.rank+1][c.file + 2]
        if(tempObj.piece.slice(0,5) !== currentObj.piece.slice(0,5)){
            tempArr.push({file: c.file+2, rank: c.rank+1})
        }
    }

    //right bottom check

    if(c.rank - 1 >= 0 && c.file + 2 <= 7){
        tempObj = state.position[c.rank-1][c.file + 2]
        if(tempObj.piece.slice(0,5) !== currentObj.piece.slice(0,5)){
            tempArr.push({file: c.file+2, rank: c.rank-1})
        }
    }

    //bottom left check

    if(c.rank - 2 >= 0 && c.file -1 >= 0){
        tempObj = state.position[c.rank-2][c.file -1]
        if(tempObj.piece.slice(0,5) !== currentObj.piece.slice(0,5)){
            tempArr.push({file: c.file-1, rank: c.rank-2})
        }
    }

    //bottom right check

    if(c.rank - 2 >= 0 && c.file +1 <=7){
        tempObj = state.position[c.rank-2][c.file +1]
        if(tempObj.piece.slice(0,5) !== currentObj.piece.slice(0,5)){
            tempArr.push({file: c.file+1, rank: c.rank-2})
        }
    }


    return tempArr;
}

export default avKnightSquares