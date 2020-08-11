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
document.querySelector('.padElements')     .addEventListener('click', btnClicked);
// document.querySelector('.green')    .addEventListener('click', greenClicked);
// document.querySelector('.yellow')   .addEventListener('click', yellowClicked);
// document.querySelector('.red')      .addEventListener('click', redClicked);

/*----- event listeners -----*/
document.querySelector('#startBtn') .addEventListener('click', init);
document.querySelector('#resetBtn') .addEventListener('click', init);

/*----- functions -----*/

function init() {
    gameOver = false;
    score = 0;
    playerSeq = [];
    computerSeq = [];
    render();
}

function render() {
    getComputerSequence();
    displayCompSequence();
    // compareSequence();
}


function getComputerSequence () {
    let randomNum = Math.floor(Math.random() * 4) + 1;
    computerSeq.push(randomNum);
}

function displayCompSequence () {
    setInterval(() => {
        computerSeq.forEach((element, idx) => {
            let id = computerSeq[idx];
            color = $('#' + id).attr('class').split(' ')[0];
            console.log(color);
            $('.' + color).addClass('flash');
            setTimeout(() => {
                $('.' + color).removeClass('flash')
            }, 700);
        })
    }, 700);
}

function compareSequence() {
    console.log(playerSeq);
    console.log(computerSeq);
    if (computerSeq.toString() === playerSeq.toString()) {
        score++;
        $('span').textContent = score;
        console.log("hitting if statement in compare sequence")
        playerSeq = [];
        render();
    } else {
       // game over

    }
}

function btnClicked (e) {
    if (e.target.id === '') {
        return;
    }
    const id = e.target.id;
    playerSeq.push(parseInt(id));
    $('#' + id).addClass('flash');
    setTimeout(() => {
        $('#' + id).removeClass('flash');
        if( computerSeq.length === playerSeq.length) compareSequence();
    }, 700);
}

// function blueClicked (e) {
//     console.log(e.target)
//     playerSeq.push(1);
//     $('#1').addClass('flash');
//     setTimeout(() => {
//         $('#1').removeClass('flash');
//         if( computerSeq.length === playerSeq.length) compareSequence();
//     }, 700);
// }

// function greenClicked (e) {
//     console.log(e.target)
//     playerSeq.push(2);
//     $('#2').addClass('flash');
//     setTimeout(() => {
//         $('#2').removeClass('flash');
//         if( computerSeq.length === playerSeq.length) compareSequence();
//     }, 700);  
// }

// function yellowClicked (e) {
//     console.log(e.target)
//     playerSeq.push(3);
//     $('#3').addClass('flash');
//     setTimeout(() => {
//         $('#3').removeClass('flash');
//         if( computerSeq.length === playerSeq.length) compareSequence();
//     }, 700);

// }
// function redClicked (e) {
//     console.log(e.target)
//     playerSeq.push(4);
//     $('#4').addClass('flash');
//     setTimeout(() => {
//         $('#4').removeClass('flash');
//         if( computerSeq.length === playerSeq.length) compareSequence();
//     }, 700);
// }

