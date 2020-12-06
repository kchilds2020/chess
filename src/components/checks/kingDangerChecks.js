import findLocationFromObject from "../utilities/findLocationFromObject"
import findKingLocation from '../utilities/findKingLocation'
import availableSquares from '../utilities/available-squares/availableSquares'


const kingDangerChecks = (currentObj,desiredObj,position, setState) => {
    let d = findLocationFromObject(desiredObj)
    let k = currentObj.piece.slice(0,5) === 'black' ? findKingLocation(position, 'white') : findKingLocation(position, 'black');
    let temp = position;
    let desObj = desiredObj;
    desObj.piece = currentObj.piece;
    temp[d.rank][d.file] = desObj;
    console.log(d, k, temp[d.rank][d.file])
    availableSquares(position,setState)
    console.log(d, k, temp[d.rank][d.file], temp[k.rank][k.file])
    
    //find available squares for temp;
        for(let r = 0; r < 7; r++){
            for(let c = 0; c < 7; c++){
                if(temp[r][c].avSquares){
                    temp[r][c].avSquares.forEach(element => {
                        console.log(element, k)
                        if(element.rank === k.rank && element.file === k.file){
                            console.log('IN CHECK')
                        }
                    })
                }
            }
        }
}

export default kingDangerChecks