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
let gameOver, score, color, msg;

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
    startBtnClicked();
    render();
}

function render() {
    init();
    DisplayCompSequence();
    compareSequence();
}

function startBtnClicked (e) {
    getComputerSequence();
    displayCompSequence();
}

function resetBtnClicked (e) {
    init();
}

function getComputerSequence () {
    let randomNum = Math.floor(Math.random() * 4) + 1;
    computerSeq.push(randomNum);
}

function displayCompSequence () {
    let i = computerSeq.length - 1;
    
    id = computerSeq[i];
    color = $('#' + id).attr('class').split(' ')[0];
    // SOUND[i].play();
    $('.' + color).addClass('flash');
    
    setTimeout(() => {
        $('.' + color).removeClass('flash');
    }, 250);
}

function compareSequence() {
    if (computerSeq.toString() === playerSeq.toString()) {
        score++;
        $('span').textContent = score;
    } else {
       // game over

    }
}






function blueClicked (e) {
    console.log(e.target)
    playerSeq.push(1);
    $('#1').addClass('flash');
    setTimeout(() => {
        $('#1').removeClass('flash');
    }, 250);
}

function greenClicked (e) {
    console.log(e.target)
    playerSeq.push(2);
    $('#2').addClass('flash');
    setTimeout(() => {
        $('#2').removeClass('flash');
    }, 250);  

}
function yellowClicked (e) {
    console.log(e.target)
    playerSeq.push(3);
    $('#3').addClass('flash');
    setTimeout(() => {
        $('#3').removeClass('flash');
    }, 250);

}
function redClicked (e) {
    console.log(e.target)
    playerSeq.push(4);
    $('#4').addClass('flash');
    setTimeout(() => {
        $('#4').removeClass('flash');
    }, 250);

}

