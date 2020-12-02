import findLocationFromObject from '../findLocationFromObject'
const avPawnSquares = (currentObj,position) => {
    const c = findLocationFromObject(currentObj)
    let tempArr = []

    if(currentObj.piece.slice(0,5) === 'white'){
        for(let i = c.file -1; i <= c.file+1; i++){
            if(position[c.rank+1][i]){
                if(i === c.file && position[c.rank+1][i].piece === ''){
                    tempArr.push({file: i, rank: c.rank+1})
                }else if(i !== c.file && position[c.rank+1][i].piece.slice(0,5) === 'black')
                {
                    tempArr.push({file: i, rank: c.rank+1})
                }
            }
        }
    }else{
        for(let i = c.file -1; i <= c.file+1; i++){
            if(position[c.rank-1][i]){
                if(i === c.file && position[c.rank-1][i].piece === ''){
                    tempArr.push({file: i, rank: c.rank-1})
                }else if(i !== c.file && position[c.rank-1][i].piece.slice(0,5) === 'white')
                {
                    tempArr.push({file: i, rank: c.rank-1})
                }
            }
        }
    }

    return tempArr
}

export default avPawnSquares