window.onload = displayElements;

const elements = {
  'fire': ['./assets/images/fire.png', './assets/sounds/fire.mp3'],
  'leaf': ['./assets/images/leaf.png', './assets/sounds/leaf.mp3'],
  'bird': ['./assets/images/bird.png', './assets/sounds/bird.mp3'],
  'rain': ['./assets/images/rain.png', './assets/sounds/rain.mp3'],
  'thunder': ['./assets/images/thunder.png', './assets/sounds/thunder.mp3'],
  'wind': ['./assets/images/wind.png', './assets/sounds/wind.mp3'],
  'wave': ['./assets/images/wave.png', './assets/sounds/wave.mp3'],
}

// Manage the element icon and the display
function displayElements(){
  let i = 0;
  for (var key in elements) {
    console.log([elements[key][0]]);
    let span = document.createElement("span");
    let img = document.createElement("img");
    img.src = elements[key][0];
    img.id = 'element.'+i;
    span.appendChild(img);
    document.querySelector('#elements').append(span);
    i++;
  }
}
// Managing of sound




