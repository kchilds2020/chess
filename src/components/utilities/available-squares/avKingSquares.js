import findLocationFromObject from '../findLocationFromObject'
const avKingSquares = (currentObj, position) => {
    const c = findLocationFromObject(currentObj)
    
    let tempArr = []
    let tempObj;


    //up
    if(c.rank + 1 <= 7){
        tempObj = position[c.rank+1][c.file];
        if(tempObj.piece.slice(0,5) !== currentObj.piece.slice(0,5)){
            tempArr.push({file: c.file, rank: c.rank+1})
        }
    }
    //upper right  
    if(c.rank + 1 <= 7 && c.file + 1 <= 7){
        tempObj = position[c.rank+1][c.file+1]
        if(tempObj.piece.slice(0,5) !== currentObj.piece.slice(0,5)){
            tempArr.push({file: c.file+1, rank: c.rank+1})
        }
    }
    //right
    if(c.file + 1 <= 7){
        tempObj = position[c.rank][c.file+1]
        if(tempObj.piece.slice(0,5) !== currentObj.piece.slice(0,5)){
            tempArr.push({file: c.file+1, rank: c.rank})
        }
    }

    //bottom right
    if(c.rank - 1 >= 0 && c.file + 1 <= 7){
        tempObj = position[c.rank-1][c.file+1]
        if(tempObj.piece.slice(0,5) !== currentObj.piece.slice(0,5)){
            tempArr.push({file: c.file+1, rank: c.rank-1})
        }
    }

    //bottom
    if(c.rank - 1 >= 0){
        tempObj = position[c.rank-1][c.file]
        if(tempObj.piece.slice(0,5) !== currentObj.piece.slice(0,5)){
            tempArr.push({file: c.file, rank: c.rank-1})
        }
    }

    //bottom left
    if(c.rank - 1 >= 0 && c.file - 1 >= 0){
        tempObj = position[c.rank-1][c.file - 1]
        if(tempObj.piece.slice(0,5) !== currentObj.piece.slice(0,5)){
            tempArr.push({file: c.file-1, rank: c.rank-1})
        }
    }

    //left

    if(c.file - 1 >= 0){
        tempObj = position[c.rank][c.file - 1]
        if(tempObj.piece.slice(0,5) !== currentObj.piece.slice(0,5)){
            tempArr.push({file: c.file-1, rank: c.rank})
        }
    }

    //upper left

    if(c.rank + 1 <= 7 && c.file - 1 >= 0){
        tempObj = position[c.rank+1][c.file -1]
        if(tempObj.piece.slice(0,5) !== currentObj.piece.slice(0,5)){
            tempArr.push({file: c.file-1, rank: c.rank+1})
        }
    }

    return tempArr;
}

export default avKingSquares