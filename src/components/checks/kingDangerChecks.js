import findLocationFromObject from "../utilities/findLocationFromObject"
import findKingLocation from '../utilities/findKingLocation'


const kingDangerChecks = (currentObj,desiredObj,position) => {
    let d = findLocationFromObject(desiredObj)
    let k = currentObj.piece.slice(0,5) === 'black' ? findKingLocation(position, 'white') : findKingLocation(position, 'black');
    let temp = position;

    console.log(d, k, temp)
    
    
    //find available squares for temp;

}

export default kingDangerChecks