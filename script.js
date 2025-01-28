const cells = document.querySelectorAll(".cell");
const currentStatus = document.querySelector("#status");
const restart = document.querySelector(".restart");
let currentPlayer = "X";

const player1Name = prompt("Enter Player 1 name (X):") || "Player 1";
const player2Name = prompt("Enter Player 2 name (O):") || "Player 2";

// Map players to their symbols
const players = {
  X: player1Name,
  O: player2Name,
};


const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

currentStatus.textContent = `${players[currentPlayer]}'s turn`;

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.innerText !== "") {
      return;
    }

    cell.innerText = currentPlayer;

    if (checkWinner()) {
        return;
      }

    if (currentPlayer === "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }

    currentStatus.textContent = `${players[currentPlayer]}'s turn`;

    
  });
});

restart.addEventListener("click", () => {
  cells.forEach((cell) => {
    cell.innerText = "";
  });

  currentPlayer = "X";
  currentStatus.textContent = `${players[currentPlayer]}'s turn`;
});

function checkWinner() {
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;

    if (
      cells[a].innerText &&
      cells[a].innerText === cells[b].innerText &&
      cells[a].innerText === cells[c].innerText
    ) {
        currentStatus.innerText = `${players[cells[a].innerText]} Wins!`;
        return true;
    }
  }

  //check for draw 

  if([...cells].every(cell => cell.innerText !== '')) {
    currentStatus.innerText = `It's a Draw!`;
    return true
  }

  return false;
}
