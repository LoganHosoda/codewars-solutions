// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// SOLUTION

const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!"
  const map = { 'rock scissors': 1, 'scissors paper': 1, 'paper rock': 1,
                'scissors rock': 2, 'paper scissors': 2, 'rock paper': 2 }
  const contest = p1 + ' ' + p2
  
  return `Player ${map[contest]} won!`
};