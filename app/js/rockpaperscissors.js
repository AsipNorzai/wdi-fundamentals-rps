////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if(move === null) {
        move =  getInput;
    }
    return move;
}

function getComputerMove(move) {
  if(move === null) {
      move = randomPlay;
  }
  return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove ) {
      winner = 'tie'
    } else if (playerMove === 'rock' && computerMove === 'scissors') {
      winner = "Player";
    } else if (playerMove === 'rock' && computerMove === 'paper') {
      winner = "Computer";
    } else if (playerMove === 'scissors' && computerMove === 'paper') {
      winner = "Player";
    } else if (playerMove === 'rock' && computerMove === 'paper') {
      winner = "Player";
    } else if (computerMove === 'rock' && playerMove === 'scissors') {
     winner = "Computer";
    } else if (computerMove === 'scissors' && playerMove === 'paper') {
      winner = "Computer";
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playerTurn = getPlayerMove;
    var computerTurn = getComputerMove;
    var winner = getWinner(playerTurn, computerTurn);
    while (playerWins < 5 || computerWins < 5) {
      if(winner === 'Player') {
        playerWins += 1;
      } else if (winner === 'Computer') {
        computerWins += 1;
      }
      console.log("Player chose " + playerTurn + " Computer chose " + computerTurn);
      console.log(winner + " Won this round!");
    }
    if (playerWins >= 5 && computerWins < 5) {
        return console.log("Player has won this game.");
    } else {
        return console.log("computer has won this game.");
    }
}
