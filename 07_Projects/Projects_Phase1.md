# Projects

## Project Link
[Click Here](https://github.com/XanderViskoii/JavaScript)

# Solution Code

## Project 1

```javascript
console.log("Xander Viskoii")
```

## Project 2
### Solution: 
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