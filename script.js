let scorePlayer = 0; 
let scoreComputer = 0;


/* const playerChoice = "rock" */

function computerPlay(){
  let computerChoice;
  let random = Math.floor(Math.random()*3);
  if(random == 0){
     computerChoice = "rock";
  }
  else if (random == 1){
    computerChoice = "paper";
  }
  else{
    computerChoice = "scissors"
  }
  return computerChoice;
}

function playRound(playerSelection, computerSelection){
  if (playerSelection == computerSelection){
    return "It's a tie!"
  }
  else if (playerSelection == "rock" && computerSelection == "scissors"){
    scorePlayer++;
    return "You win! " + playerSelection + " beats " + computerSelection;
  }
  else if (playerSelection == "rock" && computerSelection == "paper"){
    scoreComputer++;
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
  else if (playerSelection == "paper" && computerSelection == "scissors"){
    scoreComputer++;
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
  else if (playerSelection == "paper" && computerSelection == "rock"){
    scorePlayer++;
    return "You win! " + playerSelection + " beats " + computerSelection;
  }
  else if (playerSelection == "scissors" && computerSelection == "rock"){
    scoreComputer++;
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
  else if (playerSelection == "scissors" && computerSelection == "paper"){
    scorePlayer++;
    return "You win! " + playerSelection + " beats " + computerSelection;
  }
}



function game(){
  while(scoreComputer < 5 && scorePlayer < 5){
    let choice = prompt("Rock? Paper? Scissors?");
    let playerChoice = choice.toLowerCase();
    let computadora = computerPlay()
    console.log("Jugador escogio " + playerChoice)
    console.log("Computador escogio " + computadora)
    console.log(playRound(playerChoice, computadora));
    console.log("Marcador");
    console.log("Jugador: " + scorePlayer);
    console.log("Computadora: " + scoreComputer);
  }
}

game();