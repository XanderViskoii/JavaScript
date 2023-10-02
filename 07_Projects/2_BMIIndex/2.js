const modes = document.querySelector('.nav1')
const body = document.querySelector('body')

modes.forEach( function(event) {
    nav1.addEventListener('click', function(event) {
        console.log(event.target);
        if (event.target.id === 'light'){
            body.style.backgroundColor = event.target.id
        }
        if (event.target.id === 'dark'){
            body.style.backgroundColor = event.target.id
        }
    })
})