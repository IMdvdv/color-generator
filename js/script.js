const randomBut = document.querySelector('#btn1');
let hexOut = document.querySelector('#s1');
let rgbOut = document.querySelector('#s2');

const hexElements = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
];

function generateHex() {
  let hexColor = '#';
  function getRandomNum() {
    return Math.floor(Math.random() * hexElements.length);
  }
  for (let i = 0; i < 6; i++) {
    hexColor += hexElements[getRandomNum()];
  }
  return hexColor;
}

function hexToRgb(hex) {
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5), 16);

  return `${r}, ${g}, ${b}`;
}

randomBut.addEventListener('click', () => {
  let hexColor = generateHex();
  document.body.style.backgroundColor = hexColor;
  hexOut.textContent = hexColor;
  rgbOut.textContent = hexToRgb(hexColor);
});
