const container = document.querySelector(".container");
const url =
  "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const row = 10; // Corrected variable name to 'row' from 'rows'

for (let i = 0; i < row * 3; i++) {
  // Changed 'rows' to 'row'
  const img = document.createElement("img");
  img.src = `${url}`;
  img.style.width = `${getRandomSize()}`; // Added setting width using getRandomSize()
  container.appendChild(img);
}

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`; // Corrected 'getRandomNR' to 'getRandomNr'
}

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300; // Adjusted random number generation based on your requirement
}
