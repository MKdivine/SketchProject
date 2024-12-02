// Container erstellen
const containerDiv = document.createElement("div");
containerDiv.classList.add("container");
document.body.appendChild(containerDiv);

// Quadrate hinzufügen
for (let i = 0; i < 256; i++) { // Es sollten genau 256 Quadrate sein, nicht 257
  const square = document.createElement("div");
  square.classList.add("square");
  containerDiv.appendChild(square); // Direkt ins Container-Div einfügen
}
