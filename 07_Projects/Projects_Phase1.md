# Projects

## Project Link
[Click Here](https://github.com/XanderViskoii/JavaScript)

# Solution Codes Of Projects

## Project 1
### Solution:[Click Here For Project1 Source codes](https://github.com/XanderViskoii/JavaScript/blob/0a96f5f8ef4434dd5f5ad99126501e248774a596/07_Projects/1_ColourSwitcher)
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
### Solution: [Click Here For Project2 Source codes](https://github.com/XanderViskoii/JavaScript/blob/0a96f5f8ef4434dd5f5ad99126501e248774a596/07_Projects/2_BMIIndex)
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