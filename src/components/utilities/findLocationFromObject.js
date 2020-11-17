const findLocationFromObject = (object) => {
    const letters = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h']
    let rank = parseInt(object.rank) - 1
    let file = letters.findIndex(element => element === object.file);
    console.log(file,rank)
    return {file, rank}

}

export default findLocationFromObject;