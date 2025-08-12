let randomNum=parseInt(Math.random()*100 + 1);

const number=document.querySelector('#guessNum');
const button = document.querySelector('#submit');
const prevGuessDisplay = document.querySelector('#numArr');
const remGuess = document.querySelector('#rem');
const suggestion = document.querySelector('#lowOrHi');
const startOver = document.querySelector('#stat');

const p= document.createElement('p');

let guessesArray = [];
let numOfGuesses =1;

let playGame =true;

if(playGame){
    button.addEventListener("click",function(e){
        e.preventDefault();
        const guess=parseInt(number.value);
        console.log(guess);
        validateGuess(guess);
    });
}
function validateGuess(guess){
    if(isNaN(guess)){
     alert('enter a valid number');
    }else if(guess < 1){
        alert('enter a number greater than 1');
    }else if(guess > 100){
        alert('enter a number smaller than 100');
    }else{
        guessesArray.push(guess);
        if(numOfGuesses === 11){
             displayGuess(guess);
             displayMessage(`Game Over . The Random Number was ${randomNum}`);
             endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess){
    if(guess === randomNum){
        displayMessage(`You guessed it right`);
        endGame();
    }else if(guess < randomNum){
        displayMessage(`Number is TOO low`);
        
    }else if(guess > randomNum){
        displayMessage(`Number is TOO high`);
        
    }

}

function displayMessage(message){
    suggestion.innerHTML=`<h2>${message}</h2>`;
}
function displayGuess(guess){
    number.value='';
    prevGuessDisplay.innerHTML+=`${guess} ,`;
    numOfGuesses++;
    remGuess.innerHTML=`${11 - numOfGuesses}`;

}

function endGame(){
    number.value='';
    number.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    startGame();

}

function startGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener("click",function(e){
       randomNum =parseInt(Math.random()*100 + 1);
       guessesArray = [];
       numOfGuesses =1;
       prevGuessDisplay.innerHTML = '';
       remGuess.innerHTML=`${11 - numOfGuesses}`;
       suggestion.innerHTML = '';
       number.removeAttribute('disabled');
       startOver.removeChild(p);
       playGame=true;
       
    });
}
