// Container erstellen
const containerDiv = document.createElement("div");
containerDiv.classList.add("container");
document.body.appendChild(containerDiv);

// random color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // Rot: 0-255
  const g = Math.floor(Math.random() * 256); // Grün: 0-255
  const b = Math.floor(Math.random() * 256); // Blau: 0-255
  return `rgb(${r}, ${g}, ${b})`;
}

// Quadrate hinzufügen
for (let i = 0; i < 256; i++) {
  // Es sollten genau 256 Quadrate sein
  const square = document.createElement("div");
  square.classList.add("square");
  for (let i = 0; i < 256; i++) {}
  containerDiv.appendChild(square); // ins Container-Div einfügen
}

// Event Listener für die Maus
containerDiv.addEventListener("mouseover", function (event) {
  if (event.target.classList.contains("square")) {
    event.target.style.backgroundColor = "black";
  }
});

containerDiv.addEventListener("contextmenu", function (event) {
  if (event.target.classList.contains("square")) {
    event.target.style.backgroundColor = getRandomColor();
    const h3 = document.createElement("h3");
    h3.innerText = "Arier";
    h3.style.color = getRandomColor();
    event.target.appendChild(h3);
  }
});
