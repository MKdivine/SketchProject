// Button erstellen
const buttons = ["Custom Grid", "Random Color", "Black&White"];

// Button Container erstellen
const buttondiv = document.createElement("div");
buttondiv.classList.add("button-container");
document.body.appendChild(buttondiv);

// Container erstellen
const containerDiv = document.createElement("div");
containerDiv.classList.add("container");
document.body.appendChild(containerDiv);

// Button Loop
buttons.forEach((element) => {
  const button = document.createElement("button");
  button.innerText = element;
  document.body.appendChild(button);
  button.classList.add("user-button");
  buttondiv.appendChild(button);
});

const clickButton = document.querySelector("button");
clickButton.addEventListener("click", function (event) {
  if (event.target.classList.contains("square")) {
    // Zufällige Farbe setzen
    event.target.style.backgroundColor = getRandomColor();
  }
});

// Funktion: Zufällige Farbe generieren
function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // Rot: 0-255
  const g = Math.floor(Math.random() * 256); // Grün: 0-255
  const b = Math.floor(Math.random() * 256); // Blau: 0-255
  return `rgb(${r}, ${g}, ${b})`;
}

// Funktion: Opacity berechnen
function getOpacity(opa) {
  let num = parseFloat(opa); // Umwandeln in eine Zahl
  return Math.max(num - 0.1, 0); // Reduzieren und sicherstellen, dass es nicht unter 0 geht
}

// Funktion: Grid erstellen
function createGrid(gridSize) {
  containerDiv.innerHTML = ""; // Container leeren

  const squareSize = 640 / gridSize; // Größe der Quadrate berechnen
  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    containerDiv.appendChild(square);
  }
}

// Default Grid
createGrid(16); // 16x16 Standard-Grid

// EventListener für Container (Delegation)
containerDiv.addEventListener("mouseover", function (event) {
  if (event.target.classList.contains("square")) {
    // Zufällige Farbe setzen
    event.target.style.backgroundColor = getRandomColor();

    // Opacity berechnen und setzen
    let opa = getComputedStyle(event.target).opacity; // Aktuellen Wert holen
    event.target.style.opacity = getOpacity(opa); // Neuen Wert berechnen und setzen
  }
});

// Button-Click: User-Grid erstellen
button.addEventListener("click", function () {
  let userNum = prompt("Enter a number between 1 and 100:");
  let gridSize = parseInt(userNum);

  if (gridSize >= 1 && gridSize <= 100) {
    createGrid(gridSize); // User-Grid erstellen
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
});
