//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.


/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [4, 6, 9],
    [6, 2, 1],
    [4, 9, 1],
    [7, 3, 1],
    [1, 2, 3]
  ]
  /*---------------------------- Variables (state) ----------------------------*/

  let board = ['', '', '', '', '', '', '', '', ''];
  let turn = 'X';
  let winner = false;
  let tie = false;

/*------------------------ Cached Element References ------------------------*/

const squareEl = document.querySelectorAll('.sqr');
// console.log(squareEl);
const messageEl = document.querySelector('#message');
// console.log(messageEl);
const boardEl = document.querySelector('.board');
// console.log(boardEl);
const resetBtEl = document.querySelector('#reset');
 //console.log(resetBtEl);
 

/*-------------------------------- Functions --------------------------------*/
function render() {
    updateBoard();
    updateMessage();
    placePiece()
    checkForTie()
    checkForWinner()
}

const updateBoard = function() {
    board.forEach((square, squareIndex) => {
    squareEl[squareIndex].textContent = square;
    });
}

const updateMessage = () => {
    if (winner === false && tie === false) {
        messageEl.textContent = turn;
    } else if (!winner && tie) {
        messageEl.textContent = 'tie!';
    } else {
        messageEl.textContent = `${turn} is the winner`
    }
}
const placePiece = (index) => {
    board[index] = turn
}

const checkForWinner = () => {
    for (i = 0; i < winningCombos.length; i++) {
        let currentCombos = winningCombos[i]
        if (board[currentCombos[0]].length > 0) {
            if (board[currentCombos[0]] === board[currentCombos[1]]) {
                if (board[currentCombos[0]] === board[currentCombos[2]]) {
                winner = true;
                console.log(winner)
                }
            }
        }
    }
}

const checkForTie = () => {
    if(winner) return
    if (!board.includes('')) tie = true;
}

const switchPlayerTurn = () => {
    console.log(turn)
    if (winner) return
    if (turn === 'X') {
        turn = 'O'
    } else {
        turn = 'X'
    }
}

const handleClick = (event) => {
    if (winner === true) return;
    // console.log(event.target.classList.contains('sqr'));
    const squareIndex = event.target.id
     //console.log(event.target.id);
     if (board[squareIndex] === 'X' || board[squareIndex] === 'O') {
        return
     }
     if(board[squareIndex].length > 0) {
        return;
    }
    placePiece(squareIndex)
    // console.log(board)
    checkForTie()
    switchPlayerTurn()
    checkForWinner()
    render()
    return;
}


squareEl.forEach(square => {
    square.addEventListener('click', handleClick);
})
const init = () => {
console.log("Initialization game");
 board = ['', '', '', '', '', '', '', '', ''];
 turn = 'X';
winner = false; //true;
 tie = false;
 //updateBoard();
 //updateMessage();
 render()
}
resetBtEl.addEventListener('click', init);


    window.onload = () => {
        init();
    }
  


/*----------------------------- Event Listeners -----------------------------*/

boardEl.addEventListener('click', handleClick);
