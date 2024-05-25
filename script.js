let playedSquares = [];
let playerX = [];
let playerO = [];
let gameWonX = false;
let gameWonO = false;

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

startGame ();
    function startGame () {
        playedSquares = [];
        playerX = [];
        playerO = [];
        gameWonX = false;
        gameWonO = false;
       

        let currentPlayer = "X";
        for (let i = 1; i < 10; i++) {
            let square = document.getElementById(i);
            square.className = "col square"; 
            square.addEventListener('click', () => {
                //console.log(i);
                playedSquares.push("PS: " + i);
                console.log(playedSquares);
                square.innerHTML = currentPlayer;
                console.log(currentPlayer + " " + i)
                currentPlayer === "X" ? playerX.push(i) : playerO.push(i);
                checkWinner();
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            })
        }
        
    }

    

    function checkWinner() {
        for (let i = 0; i < winningCombos.length; i++) {
            for (let x = 0; x < winningCombos[i].length; x++) {
                if (
                    playerO.includes(winningCombos[i][x]) &&
                    playerO.includes(winningCombos[i][x + 1]) &&
                    playerO.includes(winningCombos[i][x + 2])

                ) {
                    gameWonO = true;                    
                    document.getElementById(playerO[x]).className = "col square won";
                    document.getElementById(playerO[x + 1]).className = "col square won";
                    document.getElementById(playerO[x + 2]).className = "col square won";
                    gameWon();
                  
                }
                if (
                    playerX.includes(winningCombos[i][x]) &&
                    playerX.includes(winningCombos[i][x + 1]) &&
                    playerX.includes(winningCombos[i][x + 2])
                ) {
                    gameWonX = true;                    
                    document.getElementById(playerX[x]).className = "col square won";
                    document.getElementById(playerX[x + 1]).className = "col square won";
                    document.getElementById(playerX[x + 2]).className = "col square won";
                    gameWon();
                   
                }
            };
        }
        console.log(`Initial variables: ${playedSquares} ${playerX} ${playerO}` )
       
    }

function gameWon(){
    if (gameWonX) {
        alert("X Won!");
        for (let i = 1; i < 10; i++) {
            let square = document.getElementById(i);
            playedSquares = [];
            //console.log(playedSquares);
            square.innerHTML = "";
        }
        startGame();
        gameWonX = false;
        
    } 
    
    if (gameWonO){
        alert("O Won!");
        for (let i = 1; i < 10; i++) {
            let square = document.getElementById(i);
            playedSquares = [];
           // console.log(playedSquares);
            square.innerHTML = "";
        }
        startGame();
        gameWonO = false;
    };
    console.log(`Initial variables: ${playedSquares} ${playerX} ${playerO}` )
}



