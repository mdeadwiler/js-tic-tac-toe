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
const gameBoard = document.querySelector('.board');
//console.log(gameBoard);

/*-------------------------------- Functions --------------------------------*/
const init = () => {
console.log("Initialization game");
    // Add your initialization code here
    render();
  };

  //console.log(init);


const updateMessage = () => {
    console.log(updateMessage);
}

const updateBoard = ((board) => {
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
});


const handleClick = (event) => {
    console.log('click', event.target.id);

};



const render = () => {
    console.log('this is rendering');
    updateBoard();
    updateMessage();
  };




/*----------------------------- Event Listeners -----------------------------*/

gameBoard.addEventListener('click', handleClick);
