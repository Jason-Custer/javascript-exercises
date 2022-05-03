// 1) Create function computerPlay that randomly returns rock, paper, or scissors.

function computerPlay(){
    computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection === 0) {
        computerSelection = "Rock"
    }
    else if (computerSelection === 1) {
        computerSelection = "Paper"
    }
    else {
        computerSelection = "Scissors"
    }
}
computerPlay()
console.log(computerSelection)
// 2) Create function playRound - plays 1 round with two parameters: playerSelection & computerSelection.

    function playRound(playerSelection, computerSelection) {
        
    }


    // 2.1 Prompt for playerSelection.

    let playerSelection = prompt("What is your selection: Rock, Paper, or Scissors?")
    playerSelection.toLowerCase
    console.log(playerSelection)

    // 2.2 Compare playerSelection with computerPlay and return winner.



// 3) Create loop to play 5 rounds of game.
