window.onload = displayElements;

const elements = {
  'fire': ['./assets/images/fire.png', './assets/sounds/fire.mp3'],
  'leaf': ['./assets/images/leaf.png', './assets/sounds/leaf.mp3'],
  'bird': ['./assets/images/bird.png', './assets/sounds/bird.mp3'],
  'rain': ['./assets/images/rain.png', './assets/sounds/rain.mp3'],
  'thunder': ['./assets/images/thunder.png', './assets/sounds/thunder.mp3'],
  'wind': ['./assets/images/wind.png', './assets/sounds/wind.mp3'],
  'wave': ['./assets/images/wave.png', './assets/sounds/wave.mp3']
}

function displayElements(){
  for (var key in elements) {
    // Span element
    let div = document.createElement("div");
    div.className = 'element';
    // Images
    let img = document.createElement("img");
    img.src = elements[key][0];
    div.appendChild(img);
    // Sound
    let audio = document.createElement("audio");
    audio.src = elements[key][1];
    audio.loop = 'loop';
    audio.id = 'audio.'+key;
    div.appendChild(audio);
    // Input range for volume
    let volume = document.createElement('input');
    volume.type = 'range'
    volume.min = 0;
    volume.max = 100;
    volume.step = "1";
    volume.defaultValue = 0;
    volume.id = key
    volume.addEventListener('change', (event) => {
      changeVolume(event);
    });
    div.appendChild(volume);
    // Add span to dom
    document.querySelector('#elements').append(div);
  }
}

function changeVolume(event){
  let audio = document.getElementById('audio.'+event.target.id);
  let volumeValue = document.getElementById(event.target.id).value;
  audio.volume = (parseFloat(volumeValue).toFixed(2))/100;
  audio.play();
}