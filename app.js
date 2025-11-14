const yourScore = document.querySelector("#yourScore");
const cptScore = document.querySelector("#cptScore");
const btnContainer = document.querySelector("#btnContainer");
const resultText = document.querySelector("#result");
let usercpt = 0;
let computercpt = 0;

btnContainer.addEventListener("click", (e) => {
  const randNumber = Math.floor(Math.random() * 3 + 1);
  console.log(randNumber);

  if (e.target.matches("#rock")) {
    if (computerChoice(randNumber) === "rock") {
      resultText.innerText = "it's a tie";
    } else if (computerChoice(randNumber) === "paper") {
      resultText.innerText = "You lose, paper beats rock";
      cptScore.innerText = ++computercpt;
    } else if (computerChoice(randNumber) === "scissors") {
      resultText.innerText = "You win, rock beats scissors";
      yourScore.innerText = ++usercpt;
    }
  } else if (e.target.matches("#paper")) {
    if (computerChoice(randNumber) === "rock") {
      resultText.innerText = "you win paper beats rock";
      yourScore.innerText = ++usercpt;
    } else if (computerChoice(randNumber) === "paper") {
      resultText.innerText = "it's a tie";
    } else if (computerChoice(randNumber) === "scissors") {
      resultText.innerText = "you lose scissors beats paper";
      cptScore.innerText = ++computercpt;
    }
  } else if (e.target.matches("#scissors")) {
    if (computerChoice(randNumber) === "rock") {
      resultText.innerText = "you lose rock beat paper";
      cptScore.innerText = ++computercpt;
    } else if (computerChoice(randNumber) === "paper") {
      resultText.innerText = "you win scissors beats paper";
      yourScore.innerText = ++usercpt;
    } else if (computerChoice(randNumber) === "scissors") {
      resultText.innerText = "it's a tie";
    }
  }
});

function computerChoice(number) {
  let cptChoice;

  switch (number) {
    case 1:
      cptChoice = "rock";
      break;

    case 2:
      cptChoice = "paper";
      break;

    case 3:
      cptChoice = "scissors";
      break;

    default:
      break;
  }
  return cptChoice;
}
