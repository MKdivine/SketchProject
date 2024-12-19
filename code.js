// Button erstellen

const button = document.createElement("button");
button.classList.add("user-button");
button.innerText = "Generate Custom Grid";
document.body.appendChild(button);

// Container erstellen
const containerDiv = document.createElement("div");
containerDiv.classList.add("container");
document.body.appendChild(containerDiv);

// Default Grid

button.addEventListener("click", function () {
  containerDiv.innerHTML = ""; // Container leeren

  let userNum = prompt("Enter a number between 1 and 100 - or 64");
  let usernum1 = parseInt(userNum);

  if (usernum1 >= 1 && usernum1 <= 100) {
    for (let i = 0; i < usernum1; i++) {
      // Sketchpad Usernum

      const square = document.createElement("div");
      square.classList.add("user-square");
      containerDiv.appendChild(square); // ins Container-Div einfügen
    }
  }
});

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
  containerDiv.appendChild(square); // ins Container-Div einfügen
}

containerDiv.addEventListener("mouseover", function (event) {
  if (event.target.classList.contains("square")) {
    event.target.style.backgroundColor = getRandomColor();
  }
});
