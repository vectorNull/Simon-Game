/*----- constants -----*/

const blueSound =        new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
const greenSound =       new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
const yellowSound =      new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
const redSound =         new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
const gameOverSound =    new Audio("https://s3.amazonaws.com/adam-recvlohe-sounds/error.wav");

const gameBoard = {
    blue:   '1',
    green:  '2',
    yellow: '3',
    red:    '4'
}

/*----- app's state (variables) -----*/
let playerChoice = [];
let computerChoice = [];
let gameOver;
let score;

/*----- cached element references -----*/
document.querySelector('.blue')     .addEventListener('click', blueClicked);
document.querySelector('.green')    .addEventListener('click', greenClicked);
document.querySelector('.yellow')   .addEventListener('click', yellowClicked);
document.querySelector('.red')      .addEventListener('click', redClicked);

/*----- event listeners -----*/
document.querySelector('#startBtn') .addEventListener('click', startBtnClicked);
document.querySelector('#resetBtn') .addEventListener('click', resetBtnClicked);

/*----- functions -----*/

function init() {
    gameOver = false;
    render();
}

function render() {
    computerChoice = Math.floor(Math.random() * 4) + 1
    
}


function startBtnClicked (e) {

}
function resetBtnClicked (e) {
    
}

function blueClicked (e) {
    
}

function greenClicked (e) {
    

}
function yellowClicked (e) {
    

}
function redClicked (e) {
    

}

init();