# Projects

## Project Link
[Click Here](https://github.com/XanderViskoii/JavaScript/blob/a974117ce6243f66483c90a4a798f1bfb74b506f/07_Projects)

# Solution Codes Of Projects

## Project 1
### Solution : [Click Here For Project1 Source codes](https://github.com/XanderViskoii/JavaScript/blob/0a96f5f8ef4434dd5f5ad99126501e248774a596/07_Projects/1_ColourSwitcher)
```javascript
console.log("Xander Viskoii")
const buttons = document.querySelectorAll('.button');
// console.log(buttons); 
const body = document.querySelector('body');

buttons.forEach( function(button) {
    console.log(button);
    button.addEventListener('click', function(event){
        console.log(event);
        console.log(event.target);
        if(event.target.id === 'grey'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'white'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'blue'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'yellow'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'purple'){
            body.style.backgroundColor = event.target.id;
        }
    })
});
```

## Project 2
### Solution : [Click Here For Project2 Source codes](https://github.com/XanderViskoii/JavaScript/blob/0a96f5f8ef4434dd5f5ad99126501e248774a596/07_Projects/2_BMIIndex)
```JavaScript
const form = document.querySelector('form');
// this usecase below will give empty value
// const height = parseInt(document.querySelector('#height').value)


form.addEventListener('submit', function(event) {
    event.preventDefault(); //Stopping default action

    // Selecting inputs //parseInt to convert string to int
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    
// Some checks

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        //show the results\
        results.innerHTML = `<span>${bmi}</span>`;
    }
```

## Project 3
### Solution : [Click Here For Project 3 Source codes](https://github.com/XanderViskoii/JavaScript/blob/a974117ce6243f66483c90a4a798f1bfb74b506f/07_Projects/3_DigitalClock)

```JavaScript
const clock = document.getElementById('clock')


setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)
```
## Project 3
### Solution : [Click Here For Project 3 Source codes](https://github.com/XanderViskoii/JavaScript/blob/a974117ce6243f66483c90a4a798f1bfb74b506f/07_Projects/4_GuessTheNumber)

```JavaScript
let randomNumber = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#subt');;
const userInput = document.querySelector('#guessField') ;
const guessSlot = document.querySelector('.guesses') ;
const remaining = document.querySelector('.lastResult') ;
const lowOrHi = document.querySelector('.lowOrHi'); 
const startOver = document.querySelector('.resultParas') ;

const p = document.createElement('p');

let prevGuess = [];
let NumGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(event){
        event.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if(isNaN(guess)){
        alert('Please enter a valid Number')
    } else if(guess<1){
        alert('Please enter a number greater than 1')
    } else if(guess>100){
        alert('Please enter a number lower than 100')
    } else {
        prevGuess.push(guess);
        if(NumGuess === 3){
            displayGuess(guess);
            displayMessage(`Game Over : Random Number was ${randomNumber}`)
            endGame();
        } else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if(randomNumber === guess){
        displayMessage(`Amazing, you have guessed the number`);
        endGame();
    } else if(guess < randomNumber){
        displayMessage(`Number is too low`);
    } else if(guess > randomNumber){
        displayMessage(`Number is too high`);
    }
}

function displayGuess(guess){
    userInput.value = ""
    guessSlot.innerHTML += `${guess}, `;
    NumGuess++;
    remaining.innerHTML = `${3 - NumGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(g){
        randomNumber = parseInt(Math.random()*100 + 1);
        prevGuess = [];
        NumGuess = 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${3- NumGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    })
}


```