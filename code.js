const containerDiv = document.createElement('div');
document.body.appendChild(containerDiv);

const squares = document.createElement('div');
for (let i = 0; i < 17; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  squares.appendChild(square);
}
containerDiv.appendChild(squares);

