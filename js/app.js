/*----- constants -----*/
const SOUND = {
    1:          "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
    2:          "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3",
    3:          "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3",
    4:          "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3",
    gameOver:   "https://s3.amazonaws.com/adam-recvlohe-sounds/error.wav"
}
const player = new Audio()

/*----- app's state (variables) -----*/
let playerSeq = [];
let computerSeq = [];
let gameOver, score, currentscore, msg;

/*----- cached element references -----*/
scoreDisplay = $('#score');

/*----- event listeners -----*/
document.querySelector('#startBtn').addEventListener('click', init);
document.querySelector('#resetBtn').addEventListener('click', init);
document.querySelector('.padElements').addEventListener('click', btnClicked);

/*----- functions -----*/

function init() {
    score = 0;
    currentScore = 0;
    playerSeq = [];
    computerSeq = [];
    scoreDisplay[0].textContent = `Score: ${currentScore}`;
    render();
}

function render() {
    getComputerSequence();
    displayCompSequence();
    if (playerSeq.length === computerSeq.length) compareSequence();
}

function getComputerSequence() {
    let randomNum = Math.floor(Math.random() * 4) + 1;
    computerSeq.push(randomNum);
}

function displayCompSequence() {
    let idx = 0;
    const timer = setInterval(() => {
        const id = computerSeq[idx];
        $('#' + id).addClass('flash');
        playSound(id);
        setTimeout(() => {
            $('#' + id).removeClass('flash')
        }, 700);
        idx = ++idx;
        if (idx >= computerSeq.length) {
            clearInterval(timer);
        }
    }, 1000);
}

function compareSequence() {
    if (computerSeq.toString() === playerSeq.toString()) {
        currentScore = ++score;
        scoreDisplay[0].textContent = `Score: ${currentScore}`;
        playerSeq = [];
        render();
    } else {
        playSound(gameOver);
        scoreDisplay[0].textContent = "Game Over. Try again."
    }
}

function btnClicked(e) {
    if (e.target.id === '') {
        return;
    }
    const id = e.target.id;
    playerSeq.push(parseInt(id));
    playSound(id);
    $('#' + id).addClass('flash');
    setTimeout(() => {
        $('#' + id).removeClass('flash');
        if (computerSeq.length === playerSeq.length) compareSequence();
    }, 700);
}

function playSound(i) {
    player.src = SOUND[i];
    player.play();
  }