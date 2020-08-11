/*----- constants -----*/
const SOUND = [
    "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
    "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3",
    "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3",
    "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3",
    "https://s3.amazonaws.com/adam-recvlohe-sounds/error.wav"
]

/*----- app's state (variables) -----*/
let playerSeq = [];
let computerSeq = [];
let gameOver, score, currentscore, msg;

/*----- cached element references -----*/
displayScore = $('span');


/*----- event listeners -----*/
document.querySelector('#startBtn').addEventListener('click', init);
document.querySelector('#resetBtn').addEventListener('click', init);
document.querySelector('.padElements').addEventListener('click', btnClicked);

/*----- functions -----*/

function init() {
    gameOver = false;
    score = 0;
    currentscore = 0;
    playerSeq = [];
    computerSeq = [];
    render();
}

function render() {
    getComputerSequence();
    displayCompSequence();
    compareSequence();
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
        currentscore = ++score;
        displayScore.textContent = currentscore;
        playerSeq = [];
        render();
    } else {
        

    }
}

function btnClicked(e) {
    if (e.target.id === '') {
        return;
    }
    const id = e.target.id;
    playerSeq.push(parseInt(id));
    $('#' + id).addClass('flash');
    setTimeout(() => {
        $('#' + id).removeClass('flash');
        if (computerSeq.length === playerSeq.length) compareSequence();
    }, 700);
}