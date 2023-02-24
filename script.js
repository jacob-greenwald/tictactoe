

let board = Array(9).fill(null);
let current_player = "X";

function createBoard() {
    board = document.getElementById("board")
    for (let row = 0; row < 3; row++) {
        let row_elem = document.createElement("div");
        row_elem.setAttribute("class", "row");	
        row_elem.setAttribute("id", "row" + row);
        for (let col = 0; col < 3; col++) {
            let cell = document.createElement("div");
            const cell_num = row * 3 + col;
            cell.setAttribute("class", "cell");	
            cell.setAttribute("id", "cell" + cell_num);	

            cell.addEventListener("click", function() {
                if (board[cell_num] == null) {
                    document.getElementById("cell" + cell_num).innerHTML = current_player;
                    board[cell_num] = current_player;
                    switch_turns();
                }
            })
            row_elem.appendChild(cell);
        }
        board.appendChild(row_elem);
    }
}

// for (let i = 0; i < 9; i++) {
//     cell = document.getElementById("cell" + i);
//     cell.addEventListener("click", function() {
//         if (board[i] == null) {
//             document.getElementById("cell" + i).innerHTML = current_player;
//             board[i] = current_player;
//             switch_turns();
//         }
//     })
// }

function switch_turns () {
    if (current_player == "X") {
        current_player = "O";
    } else {
        current_player = "X";
    }
}

createBoard();