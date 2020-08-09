/*----- constants -----*/
let sound = [
    "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
    "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3",
    "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3",
    "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3",
    "https://s3.amazonaws.com/adam-recvlohe-sounds/error.wav"
]



/*----- app's state (variables) -----*/
let playerSeq = [];
let computerSeq = [];
let gameOver;
let score;
let interval;
let color;

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
    score = 0;
    render();
}

function render() {
    startBtnClicked();
}

function startBtnClicked (e) {
    getRandomNumber();
    let i = 0;
    interval = setInterval(function () {
        id = computerSeq[i];
        color = $('#'+id).attr('class').split(' ')[1];
    }, 1000);
}
function resetBtnClicked (e) {
    
}

function getRandomNumber () {
    let randomNum = Math.floor(Math.random() * 4) + 1;
    computerSeq.push(randomNum);
}


init();
function blueClicked (e) {
    
}

function greenClicked (e) {
    

}
function yellowClicked (e) {
    

}
function redClicked (e) {
    

}

