
//Initial variables and arrays
let playedSquares = [];
let playerX = [];
let playerO = [];
let currentPlayer = "X";

const winningCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [3, 5, 7],
    [3, 6, 9],
    [1, 5, 9],
    [2, 5, 8],
];


//main loop for the game
for (let i = 1; i < 10; i++) {
    //loop over the game's cells adding a class for size and borders
    let square = document.getElementById(i);
    square.className = "col square";

//Addind and onclick event to each cell
    square.addEventListener('click', () => {
        //Limit the number of clicks to calculate when the game is tied
           
        playedSquares.push(i);
            //Based on the currentPlayer, push the cell number to the player array       
            currentPlayer === "X" ? playerX.push(i) : playerO.push(i)

            //Ass player X o O to the cliked cell.
            square.innerHTML = currentPlayer


            //Switch the current player on each click
            currentPlayer = currentPlayer === "X" ? "O" : "X"
            document.getElementById('turn').innerHTML = `It's ${currentPlayer}' turn.`
            //Check if there is a winner
            checkWinner()
          if (playedSquares.length > 8) {  
           //Once all square have been played, it is a tie 
            document.getElementById('turn').innerHTML = `It's a tie!.`
            document.getElementById('turn').className = 'alert  alert-success';
        }

    })
}


//Reset by clicking the button and clearing all the cells and arrays
function reset() {
    for (let i = 1; i < 10; i++) {
        let square = document.getElementById(i);
        square.innerHTML = "";
        playedSquares = [];
        playerX = [];
        playerO = [];
    }
    document.getElementById('turn').innerHTML = `It's ${currentPlayer}' turn.`
    document.getElementById('turn').className = '';
}



function checkWinner() {
//Loop thru the winningcombos array
    for (let i = 0; i < winningCombos.length; i++) {
        for (let x = 0; x < winningCombos[i].length; x++) {
//Check if any of the player arrays contain the numbers in the winning arrays. If it does then we have a winner
            if (playerO.includes(winningCombos[i][x]) && playerO.includes(winningCombos[i][x + 1]) && playerO.includes(winningCombos[i][x + 2])) {
                document.getElementById('turn').innerHTML = `O it's the Winner!.`
                document.getElementById('turn').className = 'alert  alert-success';
            }

//Check if any of the player arrays contain the numbers in the winning arrays. If it does then we have a winner

            if (playerX.includes(winningCombos[i][x]) && playerX.includes(winningCombos[i][x + 1]) && playerX.includes(winningCombos[i][x + 2])) {
                document.getElementById('turn').innerHTML = `X it's the Winner!.`
                document.getElementById('turn').className = 'alert  alert-success';
            }

        }

    }

}



