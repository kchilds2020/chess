import findLocationFromObject from '../findLocationFromObject'
const avPawnSquares = (currentObj,state) => {
    const c = findLocationFromObject(currentObj)
    
    let tempArr = []
    const boardLen = 7;

    //check all available squares in uppward direction
    console.log(c)

    for(let i = 1; i <= boardLen - c.rank; i++){
        let tempObj = state.position[c.rank + i][c.file];
        //check if tempObj has a piece
        if(tempObj.piece === '')
            tempArr.push({file: c.file, rank: c.rank+i})
        else if(tempObj.piece.slice(0,5) === currentObj.piece.slice(0,5)){
            return tempArr
        }else{
            tempArr.push({file: c.file, rank: c.rank+i})
            return tempArr
        }
    }

    return tempArr
}

export default avPawnSquares