const choices = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;

const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const winnerDisplay = document.getElementById("winner");
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");

document.querySelectorAll(".choice").forEach(button => {
  button.addEventListener("click", () => {
    const userChoice = button.id;
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    playRound(userChoice, computerChoice);
  });
});

function playRound(user, computer) {
  userChoiceDisplay.textContent = `Your choice: ${user}`;
  computerChoiceDisplay.textContent = `Computer's choice: ${computer}`;

  if (user === computer) {
    winnerDisplay.textContent = "It's a Draw!";
    winnerDisplay.style.color = "#888";
  } else if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    winnerDisplay.textContent = "You Win! 🎉";
    winnerDisplay.style.color = "green";
    userScore++;
  } else {
    winnerDisplay.textContent = "You Lose 😞";
    winnerDisplay.style.color = "red";
    computerScore++;
  }

  userScoreDisplay.textContent = userScore;
  computerScoreDisplay.textContent = computerScore;
}
