

let board = Array(9).fill(null);
let current_player = "X";

for (let i = 0; i < 9; i++) {
    cell = document.getElementById("cell" + i);
    cell.addEventListener("click", function() {
        if (board[i] == null) {
            document.getElementById("cell" + i).innerHTML = current_player;
            board[i] = current_player;
            switch_turns();
        }
    })
}

function switch_turns () {
    if (current_player == "X") {
        current_player = "O";
    } else {
        current_player = "X";
    }
}