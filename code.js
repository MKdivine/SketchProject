// Container erstellen
const containerDiv = document.createElement("div");
containerDiv.classList.add("container");
document.body.appendChild(containerDiv);

// Quadrate hinzufügen
for (let i = 0; i < 256; i++) { // Es sollten genau 256 Quadrate sein
  const square = document.createElement("div");
  square.classList.add("square");
  containerDiv.appendChild(square); // ins Container-Div einfügen
}
