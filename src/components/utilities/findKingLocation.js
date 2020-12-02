const findKingLocation = (position, color) => {
    let k;
        position.forEach((r, index) => {
            if(r.findIndex(element => element.piece === `${color}-king`) !== -1){
                k = {rank: index, file: r.findIndex(element => element.piece === `${color}-king`)};
            }
        })
    return k;

}

export default findKingLocation