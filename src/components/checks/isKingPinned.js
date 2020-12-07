/* import findLocationFromObject from "../utilities/findLocationFromObject"
import findKingLocation from '../utilities/findKingLocation'
import availableSquares from '../utilities/available-squares/availableSquares' */
//import isInCheck from './isInCheck'


const isKingPinned = (currentObj,desiredObj,position) => {
    /* let d = findLocationFromObject(desiredObj)
    let c = findLocationFromObject(currentObj)
    let k = currentObj.piece.slice(0,5) === 'black' ? findKingLocation(position, 'black') : findKingLocation(position, 'white');
    let temp = position;
    let desObj = desiredObj;
    let res = false;
    desObj.piece = currentObj.piece;
    temp[d.rank][d.file] = desObj;
    //temp[c.rank][c.file].piece = '';
    console.log(d, k, temp)
    temp = availableSquares(temp)
    console.log(d, k, temp[d.rank][d.file], temp[k.rank][k.file])
    
    //find available squares for temp;
         for(let r = 0; r < 7; r++){
            for(let c = 0; c < 7; c++){
                if(temp[r][c].avSquares){
                    temp[r][c].avSquares.forEach(element => {
                        console.log(element, k)
                        if(element.rank === k.rank && element.file === k.file){
                            console.log('IN CHECK')
                            res = true;
                        }
                    })
                }
                if(res === true) temp[r][c].piece = ''
            }
        } 
        return res; */
}

export default isKingPinned