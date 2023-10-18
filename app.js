console.log("CONNECTED!");
const container = document.querySelector(".container");
console.log(container);
function something() {
  console.log("something clicked");
}
const newDiv = document.createElement("div");
newDiv.innerHTML = `<span onClick="something()">This is appended child</span>`;
container.appendChild(newDiv);
