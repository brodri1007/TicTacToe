let playedSquares = [];

let playerX = [];
let playerO = [];
let gameWon = false;


const winningCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [3, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];



let currentPlayer = "X";

for (let i = 1; i < 10; i++) {

    let square = document.getElementById(i);
    square.addEventListener('click', () => {
    console.log(gameWon);
    if(!gameWon){
        console.log(i);
        playedSquares.push(i);       
        console.log(playedSquares); 
        square.innerHTML = currentPlayer;
        currentPlayer === "X" ? playerX.push(i) : playerO.push(i);
        console.log(playerX, playerO);
        
            checkWinner();
        } else {

            square.innerHTML = "";
        }
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    })

    function checkWinner() {
        for (let i = 0; i < winningCombos.length; i++) {
            for (let x = 0; x < winningCombos[i].length; x++) {
                if (
                    playerO.includes(winningCombos[i][x]) &&
                    playerO.includes(winningCombos[i][x + 1]) &&
                    playerO.includes(winningCombos[i][x + 2])
                ) {
                    gameWon = true;                    
                    document.getElementById(playerO[x]).className = "col square won";
                    document.getElementById(playerO[x + 1]).className = "col square won";
                    document.getElementById(playerO[x + 2]).className = "col square won";
                  
                }
                if (
                    playerX.includes(winningCombos[i][x]) &&
                    playerX.includes(winningCombos[i][x + 1]) &&
                    playerX.includes(winningCombos[i][x + 2])
                ) {
                    gameWon = true;                    
                    document.getElementById(playerX[x]).className = "col square won";
                    document.getElementById(playerX[x + 1]).className = "col square won";
                    document.getElementById(playerX[x + 2]).className = "col square won";
                   
                }
            };

        }
    }
}



