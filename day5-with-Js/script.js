
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange']

const btn = document.querySelector('#changeBtn');
const colorName = document.querySelector('#colorName');

function pickRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

btn.addEventListener('click', () => {
  const c = pickRandomColor();
  document.body.style.backgroundColor = c;
  colorNameEl.textContent = `Current color: ${c}`;
});
 