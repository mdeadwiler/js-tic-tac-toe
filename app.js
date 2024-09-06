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
    [4, 16, 9],
    [6, 2, 1],
    [4, 9, 1],
    [7, 2, 1],
    [1, 2, 3],
  ]
  /*---------------------------- Variables (state) ----------------------------*/

  let board = ['', '', '', '', '', '', '', '', ''];
  let turn = 'X';
  let winner = false;
  let tie = false;

/*------------------------ Cached Element References ------------------------*/

const squareEl = document.querySelectorAll('.sqr');
//console.log(squareEl);
const messageEl = document.querySelector('#message');
//console.log(messageEl);
const boardEl = document.querySelector('.board');
//console.log(gameBoard);


/*-------------------------------- Functions --------------------------------*/
function render() {
    updateBoard();
    updateMessage();
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

const init = () => {
console.log("Initialization game");
 board = ['X', 'O', 'X', 'O', 'X', '', '', '', ''];
 turn = 'X';
winner = false;
 tie = false;
 console.log(board);
 console.log(turn);
 console.log(winner);
 console.log(tie);
 //updateBoard();
 //updateMessage();
 render()
}
    window.onload = () => {
        init();
    }
  

 




/*const updateBoard = ((board) => {
   board.forEach((value, index) => {
    const square = squareEl[index];
    if  (value === 1) {
        square.textContent = 'X';
    } else if (value === -1) {
        square.textContent = '0';
    } else {
        square.textContent = '';
    }
   });
});*/


const handleClick = (event) => {
    console.log('click', event.target.id);

};






/*----------------------------- Event Listeners -----------------------------*/

boardEl.addEventListener('click', handleClick);
