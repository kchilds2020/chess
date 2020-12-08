import findKingLocation from './findKingLocation'

const gameOverCheck = (state) => {

    let pos = state.position;
    let winner = 'incomplete'
    let white = findKingLocation(pos, 'white')
    let black = findKingLocation(pos, 'black')

    if(white === undefined) winner = 'black';
    if(black === undefined) winner = 'white';

    return winner;
}

export default gameOverCheck
