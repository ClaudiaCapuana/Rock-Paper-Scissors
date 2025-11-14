const yourScore = document.querySelector("#yourScore");
const cptScore = document.querySelector("#cptScore");
const btnContainer = document.querySelector("#btnContainer");

btnContainer.addEventListener("click", (e) => {
  const randNumber = Math.floor(Math.random() * 3 + 1);
  console.log(randNumber);

  if (e.target.matches("#rock")) {
    if (computerChoice(randNumber) === "rock") {
      alert("it's a tie");
    } else if (computerChoice(randNumber) === "paper") {
      alert("you lose!!!");
    } else if (computerChoice(randNumber) === "scissors") {
      alert("you win!!!");
    }
  } else if (e.target.matches("#paper")) {
    if (computerChoice(randNumber) === "rock") {
      alert("you win!!!");
    } else if (computerChoice(randNumber) === "paper") {
      alert("it's a tie");
    } else if (computerChoice(randNumber) === "scissors") {
      alert("you lose!!!");
    }
  } else if (e.target.matches("#scissors")) {
    if (computerChoice(randNumber) === "rock") {
      alert("you lose!!!");
    } else if (computerChoice(randNumber) === "paper") {
      alert("you win");
    } else if (computerChoice(randNumber) === "scissors") {
      alert("it's a tie");
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
