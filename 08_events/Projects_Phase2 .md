# Projects

## Project Link
[Click Here](https://github.com/XanderViskoii/JavaScript/blob/a974117ce6243f66483c90a4a798f1bfb74b506f/08-events)

# Project 5 
### Solution : [Click Here For Project 5 Source codes](https://github.com/XanderViskoii/JavaScript/blob/a974117ce6243f66483c90a4a798f1bfb74b506f/08_events/5_KeyBoard)

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});


```

# Project 6 
### Solution : [Click Here For Project 6 Source codes](https://github.com/XanderViskoii/JavaScript/blob/a974117ce6243f66483c90a4a798f1bfb74b506f/08_events/6_RabdomColourGenerate)

```javascript
//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);


```
