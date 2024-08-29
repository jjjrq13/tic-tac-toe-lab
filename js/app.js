/*

I WANT TO PLAY TIC-TAC-TOE 

Additional Features:  Maybe, Maybe not!
    Hide the game until its time to play, maybe ask the player if they want to play a game ?


1. Player needs to start the game

2. Computer needs to then play game

3. Computer needs to know where player has added things 

4. I want to make some cosmetic chanags to the game so that it looks much better 

5. We need to deicde on a whinner/loser/ Tie 

6. Counter to find out who has won the game 

7. Add up player and computer score

Display it in a way people can understand. 

*/

//!-------------------------------- Facelift --------------------------------*/
/*
I know I manipulate the HTML or the CSS directly but im doing it
as if Im not allowed to chnage the original source code. Just adding to it!
*/

/*-------------------------------- Constants --------------------------------*/

const h3 = document.createElement('h3');
const inputName = document.createElement('input');
const p = document.createElement('p');
const buttonX = document.createElement('button');
const buttonO = document.createElement('button');
const resetButton = document.createElement('button');
const faceLift = [h3, resetButton, inputName, p, buttonX, buttonO];
const boardClass = document.querySelector('.board');
const boardID = document.querySelectorAll('.sqr');
const displayMessage = document.querySelector('#message');

/*------------------------ Cached Element References ------------------------*/

h3.innerText = 'Who will win: You or Skynet?';
p.innerText = 'Choose Your Weapon:';
buttonX.innerText = 'X';
buttonO.innerText = 'O';
resetButton.innerText = 'Play Again';
buttonX.style.margin = '5px';
buttonO.style.margin = '5px';
buttonX.style.backgroundColor = 'red';
buttonO.style.backgroundColor = 'blue';
buttonX.style.color = 'white';
buttonO.style.color = 'white';
resetButton.style.margin = 'auto';
resetButton.style.display = 'flex';
resetButton.style.visibility = 'hidden';
inputName.setAttribute('type', 'name');
inputName.setAttribute('id', 'name');
inputName.setAttribute('placeholder', `What's Your Name?`);
displayMessage.innerText = '';
document.querySelector('body').style.textAlign = 'center';
document.querySelector('.board').style.margin = 'auto';

/*-------------------------------- Functions --------------------------------*/

const appendToBody = (x) => {
    document.body.appendChild(x);
};

const hideFacelift = (x) => {
    if (x !== h3) {
        x.style.visibility = 'hidden';
    }
};

const asignPlayerName = () => {
    playerName = inputName.value;
    inputName.style.visibility = 'hidden';
};

const assignWeapon = (event) => {
    if (inputName.value) {
        playerWeapon = event.target.innerText;
        if (playerWeapon === 'X') {
            skyNetWeapon = 'O';
        } else {
            skyNetWeapon = 'X';
        }
        asignPlayerName();
        h3.innerText = `${playerName}: ${playerScore}     Skynet: ${skynetScore}`;
        faceLift.forEach((x) => {
            hideFacelift(x);
        });
    } else {
        inputName.style.borderColor = 'red';
        inputName.style.borderWidth = '1px';
    }
};

const assignImageToPlayer = (event, player) => {
    if (player === 'X') {
        let img = document.createElement('img');
        img.setAttribute('src', './media/X.svg');
        event.target.appendChild(img);
    } else {
        let img = document.createElement('img');
        img.setAttribute('src', './media/O.svg');
        event.target.appendChild(img);
    }
};

const assignImageToSkynet = (player) => {
    if (player === 'X') {
        let img = document.createElement('img');
        img.setAttribute('src', './media/X.svg');
        boardID[random].appendChild(img);
    } else {
        let img = document.createElement('img');
        img.setAttribute('src', './media/O.svg');
        boardID[random].appendChild(img);
    }
};

/*------------------------ Cached Element References ------------------------*/

faceLift.forEach((element) => {
    appendToBody(element);
});

boardID.forEach((element) => {
    element.style.margin = '2px';
    element.style.border = '1px solid black;';
    element.style.fontSize = '0px';
    element.style.display = 'flex';
    element.style.justifyContent = 'center';
    element.style.alignItems = 'center';
});

/*----------------------------- Event Listeners -----------------------------*/

buttonO.addEventListener('click', assignWeapon);
buttonX.addEventListener('click', assignWeapon);

//!-------------------------------- GAME --------------------------------*/

/*-------------------------------- Constants --------------------------------*/

console.log(boardID);
let board = [];

/*---------------------------- Variables (state) ----------------------------*/

let playerScore = 0;
let skynetScore = 0;
let playerWeapon;
let skyNetWeapon;
let playerName;
let whoWonLast;
let random;

/*-------------------------------- Functions --------------------------------*/
const handleCLick = (event) => {
    if (playerWeapon && playerName && skyNetWeapon) {
        gameHasStarted(event);
    }
};

const noMoreClicks = () => {
    boardClass.style.pointerEvents = 'none';
};

const resetGame = () => {
    boardID.forEach((element) => {
        element.innerText = '';
    });
    board = [];
    displayMessage.innerText = '';
    boardClass.style.pointerEvents = 'auto';
    resetButton.style.visibility = 'hidden';
    if (whoWonLast !== playerWeapon) {
        skynetsTurn();
    }
};

const visisblePlayButton = () => {
    resetButton.style.visibility = 'visible';
};

const checkForWinner = () => {
    if (
        (boardID[0].innerText === `${playerWeapon}` &&
            boardID[1].innerText === `${playerWeapon}` &&
            boardID[2].innerText === `${playerWeapon}`) ||
        (boardID[3].innerText === `${playerWeapon}` &&
            boardID[4].innerText === `${playerWeapon}` &&
            boardID[5].innerText === `${playerWeapon}`) ||
        (boardID[6].innerText === `${playerWeapon}` &&
            boardID[7].innerText === `${playerWeapon}` &&
            boardID[8].innerText === `${playerWeapon}`) ||
        (boardID[0].innerText === `${playerWeapon}` &&
            boardID[3].innerText === `${playerWeapon}` &&
            boardID[6].innerText === `${playerWeapon}`) ||
        (boardID[1].innerText === `${playerWeapon}` &&
            boardID[4].innerText === `${playerWeapon}` &&
            boardID[7].innerText === `${playerWeapon}`) ||
        (boardID[2].innerText === `${playerWeapon}` &&
            boardID[5].innerText === `${playerWeapon}` &&
            boardID[8].innerText === `${playerWeapon}`) ||
        (boardID[0].innerText === `${playerWeapon}` &&
            boardID[4].innerText === `${playerWeapon}` &&
            boardID[8].innerText === `${playerWeapon}`) ||
        (boardID[2].innerText === `${playerWeapon}` &&
            boardID[4].innerText === `${playerWeapon}` &&
            boardID[6].innerText === `${playerWeapon}`)
    ) {
        whoWonLast = playerWeapon;
        playerScore++;
        h3.innerText = `${playerName}: ${playerScore}     Skynet: ${skynetScore}`;
        displayMessage.innerText = `${playerName} you win this round!`;
        displayMessage.style.visibility = 'visible';
        noMoreClicks();
        visisblePlayButton();
        return true;
    } else if (
        (boardID[0].innerText === `${skyNetWeapon}` &&
            boardID[1].innerText === `${skyNetWeapon}` &&
            boardID[2].innerText === `${skyNetWeapon}`) ||
        (boardID[3].innerText === `${skyNetWeapon}` &&
            boardID[4].innerText === `${skyNetWeapon}` &&
            boardID[5].innerText === `${skyNetWeapon}`) ||
        (boardID[6].innerText === `${skyNetWeapon}` &&
            boardID[7].innerText === `${skyNetWeapon}` &&
            boardID[8].innerText === `${skyNetWeapon}`) ||
        (boardID[0].innerText === `${skyNetWeapon}` &&
            boardID[3].innerText === `${skyNetWeapon}` &&
            boardID[6].innerText === `${skyNetWeapon}`) ||
        (boardID[1].innerText === `${skyNetWeapon}` &&
            boardID[4].innerText === `${skyNetWeapon}` &&
            boardID[7].innerText === `${skyNetWeapon}`) ||
        (boardID[2].innerText === `${skyNetWeapon}` &&
            boardID[5].innerText === `${skyNetWeapon}` &&
            boardID[8].innerText === `${skyNetWeapon}`) ||
        (boardID[0].innerText === `${skyNetWeapon}` &&
            boardID[4].innerText === `${skyNetWeapon}` &&
            boardID[8].innerText === `${skyNetWeapon}`) ||
        (boardID[2].innerText === `${skyNetWeapon}` &&
            boardID[4].innerText === `${skyNetWeapon}` &&
            boardID[6].innerText === `${skyNetWeapon}`)
    ) {
        whoWonLast = skyNetWeapon;
        skynetScore++;
        h3.innerText = `${playerName}: ${playerScore}     Skynet: ${skynetScore}`;
        displayMessage.innerText = 'The almighty Skynet wins this round!"';
        displayMessage.style.visibility = 'visible';
        noMoreClicks();
        visisblePlayButton();
        return true;
    } else {
        if (board.length === 9) {
            displayMessage.innerText = 'TIE';
            visisblePlayButton();
            return true;
        }
    }
};

const skynetsTurn = () => {
    do {
        random = Math.floor(Math.random() * boardID.length);
        console.log(`Random Pick: ${random}`);
    } while (board.includes(`${random}`));
    boardID[random].innerText = `${skyNetWeapon}`;
    board.push(`${random}`);
    assignImageToSkynet(skyNetWeapon);
};

const gameHasStarted = (event) => {
    if (event.target.innerText === '') {
        event.target.innerText = `${playerWeapon}`;
        board.push(event.target.id);
        assignImageToPlayer(event, playerWeapon);
        if (!checkForWinner() && board.length < 9) {
            skynetsTurn();
            checkForWinner();
            console.log(board);
        }
    } else {
        console.log('Pick Empty Slot');
    }
};

/*----------------------------- Event Listeners -----------------------------*/

boardID.forEach((element) => {
    element.addEventListener('click', handleCLick);
});
resetButton.addEventListener('click', resetGame);

/*

This game was a leaving hell to make, 

I probably made it much harder then I should have!

extra features that I added... 

1. Player inputs game & picks x or o
2. Display score of whoever won 
3. asigned an image to sqr grid
4. player who wins last goes first!

*/
