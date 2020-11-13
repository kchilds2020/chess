
const findObjectAtLocation = (pos, board) => {
   let locationObj = board[pos[1] - 1].find(element => element.file === pos[0] && element.rank === pos[1])
   return locationObj;
}

export default findObjectAtLocation
