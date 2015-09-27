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
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove ) {
      winner = 'tie';
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
    var playerWins = 0,
    computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
        var  playerMove = getPlayerMove(),
            computerMove = getComputerMove(),
            winner = getWinner(playerMove, computerMove);
      if(winner === 'Player') {
        playerWins += 1;
      } else if (winner === 'Computer') {
        computerWins += 1;
      }

      console.log("Player chose " + playerMove + ", Computer chose " + computerMove);

      if(winner === 'Player' || winner === 'Computer') {
        console.log(winner + " Won this round!");
      } else if (winner === 'tie') {
        console.log("It was a tie!");
      }

     console.log("The score currently is: " + '\n' +
                "Player has scored " + playerWins + '\n' +
                "Computer has scored " + computerWins);
    }

    if (playerWins === 5 && computerWins < 5) {
        console.log("Player has won this game.");
    } else{
        console.log("computer has won this game.");
    }
}
