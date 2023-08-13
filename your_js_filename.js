let playerX = prompt("Enter the name of player using X:");
let playerO = prompt("Enter the name of player using O:");
let scoreX = 0;
let scoreO = 0;
let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
let currentPlayer = playerX; // X starts the game
let gameOver = false;

function displayBoard() {
    let boardHtml = `
    <table border="1">
        <tr>
            <td onclick="makeMove(0)">${board[0]}</td>
            <td onclick="makeMove(1)">${board[1]}</td>
            <td onclick="makeMove(2)">${board[2]}</td>
        </tr>
        <tr>
            <td onclick="makeMove(3)">${board[3]}</td>
            <td onclick="makeMove(4)">${board[4]}</td>
            <td onclick="makeMove(5)">${board[5]}</td>
        </tr>
        <tr>
            <td onclick="makeMove(6)">${board[6]}</td>
            <td onclick="makeMove(7)">${board[7]}</td>
            <td onclick="makeMove(8)">${board[8]}</td>
        </tr>
    </table>
    `;

    document.getElementById('board').innerHTML = boardHtml;
}

function makeMove(position) {
    if (gameOver) {
        alert("Game is over! Please reset to play again.");
        return;
    }
    if (board[position] === " ") {
        board[position] = currentPlayer === playerX ? "X" : "O";
        if (checkWinner()) {
            alert(currentPlayer + " won the game!");
            if (currentPlayer === playerX) {
                scoreX++;
            } else {
                scoreO++;
            }
            gameOver = true;
            displayScore();
            return;
        }
        currentPlayer = currentPlayer === playerX ? playerO : playerX;
    }
    displayBoard();
}

function checkWinner() {
    // Check rows, columns, and diagonals for X
    if (
        (board[0] === "X" && board[1] === "X" && board[2] === "X") ||
        (board[3] === "X" && board[4] === "X" && board[5] === "X") ||
        (board[6] === "X" && board[7] === "X" && board[8] === "X") ||
        (board[0] === "X" && board[3] === "X" && board[6] === "X") ||
        (board[1] === "X" && board[4] === "X" && board[7] === "X") ||
        (board[2] === "X" && board[5] === "X" && board[8] === "X") ||
        (board[0] === "X" && board[4] === "X" && board[8] === "X") ||
        (board[2] === "X" && board[4] === "X" && board[6] === "X")
    ) {
        return true;
    }
    // Check rows, columns, and diagonals for O
    if (
        (board[0] === "O" && board[1] === "O" && board[2] === "O") ||
        (board[3] === "O" && board[4] === "O" && board[5] === "O") ||
        (board[6] === "O" && board[7] === "O" && board[8] === "O") ||
        (board[0] === "O" && board[3] === "O" && board[6] === "O") ||
        (board[1] === "O" && board[4] === "O" && board[7] === "O") ||
        (board[2] === "O" && board[5] === "O" && board[8] === "O") ||
        (board[0] === "O" && board[4] === "O" && board[8] === "O") ||
        (board[2] === "O" && board[4] === "O" && board[6] === "O")
    ) {
        return true;
    }
    return false;
}

function resetGame() {
    board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    currentPlayer = playerX;
    gameOver = false;
    displayBoard();
}

function displayScore() {
    let scoreHtml = `
        ${playerX}: ${scoreX}<br>
        ${playerO}: ${scoreO}
    `;

    document.getElementById('score').innerHTML = scoreHtml;
}

// Initialize the game
displayBoard();
displayScore();
