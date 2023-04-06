const keys = document.querySelectorAll('.key');
const checkbox = document.querySelector('.checkbox_keys');
const switcher = document.querySelector('.switcher');
const showkeys = document.querySelector('.piano-keys');

const playNote = (note) =>{
  const audio = new Audio(`../notes/${note}.wav`);
  audio.play();
}

const handleMouseDown = (key) => {
    playNote(key.getAttribute('data-note'));

    if (key.className.includes('black')) {
        key.classList.add('press');
        return;
    }
    key.style.background = '#ddd'
}

const handleMouseUp = (key) => {

    if (key.className.includes('black')) {
        key.classList.remove('press');
        return;
    }

    key.style.background = 'white';
}

keys.forEach((key) => {
    key.addEventListener('mousedown', () => handleMouseDown(key))
    key.addEventListener('mouseup', () => handleMouseUp(key))
});

checkbox.addEventListener('change', ({target}) =>{
  if(target.checked){
    switcher.classList.add('switcher-active')
    showkeys.classList.remove('disabled')
    return;
  }

  switcher.classList.remove('switcher-active')
  showkeys.classList.add('disabled')
})

const keyDownMapper = {
  "Tab": () => handleMouseDown(keys[0]),
  "'": () => handleMouseDown(keys[1]),
  "q": () => handleMouseDown(keys[2]),
  "1": () => handleMouseDown(keys[3]),
  "w": () => handleMouseDown(keys[4]),
  "e": () => handleMouseDown(keys[5]),
  "2": () => handleMouseDown(keys[6]),
  "r": () => handleMouseDown(keys[7]),
  "3": () => handleMouseDown(keys[8]),
  "t": () => handleMouseDown(keys[9]),
  "4": () => handleMouseDown(keys[10]),
  "y": () => handleMouseDown(keys[11]),
  "u": () => handleMouseDown(keys[12]),
  "5": () => handleMouseDown(keys[13]),
  "i": () => handleMouseDown(keys[14]),
  "6": () => handleMouseDown(keys[15]),
  "o": () => handleMouseDown(keys[16]),
  "p": () => handleMouseDown(keys[17]),
  "7": () => handleMouseDown(keys[18]),
  "a": () => handleMouseDown(keys[19]),
  "8": () => handleMouseDown(keys[20]),
  "s": () => handleMouseDown(keys[21]),
  "9": () => handleMouseDown(keys[22]),
  "d": () => handleMouseDown(keys[23]),
}

const keyUpMapper = {
  "Tab": () => handleMouseUp(keys[0]),
  "'": () => handleMouseUp(keys[1]),
  "q": () => handleMouseUp(keys[2]),
  "1": () => handleMouseUp(keys[3]),
  "w": () => handleMouseUp(keys[4]),
  "e": () => handleMouseUp(keys[5]),
  "2": () => handleMouseUp(keys[6]),
  "r": () => handleMouseUp(keys[7]),
  "3": () => handleMouseUp(keys[8]),
  "t": () => handleMouseUp(keys[9]),
  "4": () => handleMouseUp(keys[10]),
  "y": () => handleMouseUp(keys[11]),
  "u": () => handleMouseUp(keys[12]),
  "5": () => handleMouseUp(keys[13]),
  "i": () => handleMouseUp(keys[14]),
  "6": () => handleMouseUp(keys[15]),
  "o": () => handleMouseUp(keys[16]),
  "p": () => handleMouseUp(keys[17]),
  "7": () => handleMouseUp(keys[18]),
  "a": () => handleMouseUp(keys[19]),
  "8": () => handleMouseUp(keys[20]),
  "s": () => handleMouseUp(keys[21]),
  "9": () => handleMouseUp(keys[22]),
  "d": () => handleMouseUp(keys[23]),
}

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  keyDownMapper[event.key]()
});

document.addEventListener('keyup', (event) => {
  keyUpMapper[event.key]()
});