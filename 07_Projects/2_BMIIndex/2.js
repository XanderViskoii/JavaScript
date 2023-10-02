// const modes = document.querySelector('.nav1')
// const body = document.querySelector('body')

// modes.forEach( function(event) {
//     nav1.addEventListener('click', function(event) {
//         console.log(event.target);
//         if (event.target.id === 'light'){
//             body.style.backgroundColor = event.target.id
//         }
//         if (event.target.id === 'dark'){
//             body.style.backgroundColor = event.target.id
//         }
//     })
// })


// Submit type event
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
    // const bmi = (weight / ((height*height)/10000)).toFixed(2);
    // const bmi_value = document.querySelector('.results');
    // if(parseFloat(bmi_value) <= 18.6){
    //     results.innerHTML = `Work hard on yourself, you're underweight ${bmi}`;
    //     console.log(`${bmi}`);
    // } 
    // else if(parseFloat(bmi_value) >= 18.6 && parseFloat(bmi_value) <= 24.9){
    //     results.innerHTML = `Nice dude perfection , keep maintaing ${bmi}`;
    //     console.log(`${bmi}`);
    // } 
    // else if(parseFloat(bmi_value) >= 24.9) {
    // results.innerHTML = `Work hard on yourself, you're overweight ${bmi}`;
    // console.log(`${bmi}`);
    // }
});