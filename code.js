// === BUTTONS UND CO ===

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

// === VITAL FUNCTIONS FOR THE GRID ===

// Funktion: Black&White Modus aktivieren
function blackAndWhite() {
  containerDiv.addEventListener("mouseover", function (event) {
    if (event.target.classList.contains("square")) {
      event.target.style.backgroundColor = "black";
    }
  });
}
// Funktion: Zufällige Farbe generieren
function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // Rot: 0-255
  const g = Math.floor(Math.random() * 256); // Grün: 0-255
  const b = Math.floor(Math.random() * 256); // Blau: 0-255
  return `rgb(${r}, ${g}, ${b})`;
}
function rgbAbuse() {
  containerDiv.addEventListener("mouseover", function (event) {
    if (event.target.classList.contains("square")) {
      event.target.style.backgroundColor = getRandomColor();
    }
  });
}

// Button-Click: User-Grid erstellen
function userGrid() {
  let userNum = prompt("Enter a number between 1 and 100:");
  let gridSize = parseInt(userNum);

  if (gridSize >= 1 && gridSize <= 100) {
    createGrid(gridSize); // User-Grid erstellen
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
}


/* // Funktion: Opacity berechnen
function getOpacity(opa) {

  let num = parseFloat(opa); // Umwandeln in eine Zahl
  return Math.max(num - 0.1, 0); // Reduzieren und sicherstellen, dass es nicht unter 0 geht
}
 */


// Button Loop
buttons.forEach((element) => {
  const button = document.createElement("button");
  button.innerText = element;
  document.body.appendChild(button);
  button.classList.add("user-button");
  buttondiv.appendChild(button);

  // Button Event Loop 

  button.addEventListener("click", () => {
    if (index === 0) {
       createGrid()
    } else if (index === 1) {
      rgbAbuse()
    } else if (index === 2) {
      blackAndWhite()
    }
  })
});

/* const clickButton = document.querySelector("button");
clickButton.addEventListener("click", function (event) {
  if (event.target.classList.contains("square")) {
    // Zufällige Farbe setzen
    event.target.style.backgroundColor = getRandomColor();
  }
});
 */

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

// Default EventListener für Container (Delegation)
containerDiv.addEventListener("mouseover", function (event) {
  if (event.target.classList.contains("square")) {
    // Zufällige Farbe setzen
    event.target.style.backgroundColor = "green";

  }
});

