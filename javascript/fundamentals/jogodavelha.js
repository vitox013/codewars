/**
 * 
 * @param {Array} board - flat array representation of the board, 
 * from right to left, top to bottom, Ex.
 * [1,2,2,1,1,2,1,2,1] 
 */
 function checkWin(board){
  // all possible winning combinations (of cells filled by the same player)
  const winMap = [123, 456, 789, 147, 258, 369, 357, 159]

  // convert the board to array represening the filled cells, per player.
  // each array item is a string of only the cells (indices) filled by a player
  const moves = board.reduce((players, v, i) => {
    if(v) players[v-1] += i+1
    return players
  }, ['', ''])

console.log(JSON.stringify(moves))

  // find & return the winning combination
  const winningMove = winMap.find(comb =>
    moves.some(m => // there are only 2 sets of moves, one for each player
      // break down the current combination to array and check if every item exists
      // also in the current set of moves. quit on first match.
      comb.toString().split('').every(c => m.includes(c))
    )
  )

  return winningMove ?
    { // get the first number of the winning-move, 
      // substract 1 from it, and use as index to find which
      // player played that move from the board Array
      player: board[winningMove.toString()[0] - 1],
      move: winningMove
    } 
    : false
}


// sample tests:
[
  [1,1,1,2,2,2],       // player 1 wins, horizontal, row 1
  [1,2,2,1,,,1],       // player 1 wins, vertical, col 1
// 1 2 3 4 5 6 7 8 9
  [2,1,1,1,2,1,2,1,2], // player 2 wins, diagonal to right
  [1,1,2,1,2,1,2,1,2], // player 2 wins, diagonal to left
  [1,2,1,1,2,1,2,1,2]  // no win
].forEach(board => console.log(
  checkWin(board)
))