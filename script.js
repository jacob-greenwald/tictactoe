

let board = Array(9).fill(null);
let current_player = "X";
document.getElementById("turnDiv").innerHTML += current_player

function checkWinCondition() {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (board[i*3] == board[i*3 + 1] && board[i*3] == board[i*3 + 2] && board[i*3]) {
            return board[i*3];
        }
    }
    // Check columns: 
    for (let i = 0; i < 3; i++) {
        if (board[i] == board[i + 3] && board[i] == board[i + 6] && board[i]) {
            return board[i];
        }
    }

    // Check diagonals: 
    if (board[0] == board[4] && board[0] == board[8] && board[0]) {
        return board[0];
    }
    if (board[2] == board[4] && board[2] == board[6] && board[2]) {
        return board[2];
    }
    return null
}

function stalemate() {
    if (board.every((val) => val != null)) {
        return true;
    }
    return false;
}

function cellClicked(event) {
    cell_id = event.target.id;
    cell_num = cell_id.slice(-1);
    if (board[cell_num] == null) {
        document.getElementById(cell_id).innerHTML = current_player;
        board[cell_num] = current_player;
        switch_turns();
    }
}

function startGame() {
    board = Array(9).fill(null);
    current_player = "X";
    document.getElementById("turnDiv").innerHTML = "Player: " + current_player;
    createBoard();
}

function createBoard() {
    let board_elem = document.getElementById("board")
    // Clear current board
    board_elem.innerHTML = "";
    for (let row = 0; row < 3; row++) {
        let row_elem = document.createElement("div");
        row_elem.setAttribute("class", "row");	
        row_elem.setAttribute("id", "row" + row);

        for (let col = 0; col < 3; col++) {
            let cell = document.createElement("div");
            const cell_num = row * 3 + col;
            cell.setAttribute("class", "cell");	
            cell.setAttribute("id", "cell" + cell_num);	
            cell.addEventListener("click", cellClicked);
            row_elem.appendChild(cell);
        }
        board_elem.appendChild(row_elem);
    }
}

function gameOver() {
    // Disable clicking
    for (let i = 0; i < 9; i++) {
        document.getElementById("cell"+i).removeEventListener("click", cellClicked);
    }
    // Create play-again button
    let play_again_btn = document.createElement("button");
    play_again_btn.setAttribute("id", "playAgainBtn");
    play_again_btn.setAttribute("id", "playAgainBtn");
    play_again_btn.addEventListener("click", startGame);
    play_again_btn.innerHTML = "Game over, play again?";

    let board_elem = document.getElementById("board")
    board_elem.append(play_again_btn);



}

function switch_turns () {

    let winner =  checkWinCondition();
    if (winner) {
        document.getElementById("turnDiv").innerHTML = "Congratulations " + winner + ", you win!";
        gameOver();
        return
    }
    if (stalemate()) {
        document.getElementById("turnDiv").innerHTML = "Aw, it was a stalemate :(";
        gameOver();
        return
    }

    if (current_player == "X") {
        current_player = "O";
    } else {
        current_player = "X";
    }
    document.getElementById("turnDiv").innerHTML = "Player: " + current_player;
}

document.onload = createBoard();