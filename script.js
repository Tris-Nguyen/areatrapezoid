// AREA OF A TRAPEZOID Calculator

// Event listener
document.getElementById("CalcBtn").addEventListener("click", areaTrap);

var clearInput1 = document.getElementById("top-base");
var clearInput2 = document.getElementById("bottom-base");
var clearInput3 = document.getElementById("height");
var decimalsInput = document.getElementById("decimals");
var output = document.getElementById("output");

let checkAdded = false;

// Event function
function areaTrap() {
  // Input
  var topBase = clearInput1.value;
  var bottomBase = clearInput2.value;
  var height = clearInput3.value;

  // Process
  let area = ((topBase + bottomBase) / 2) * height;

  // Output
  output.innerHTML = area.toFixed(decimalsInput.value);

  clearInput1.value = "";
  clearInput2.value = "";
  clearInput3.value = "";

  if (!checkAdded) {
    const check = document.createElement("img");

    check.src = "images/check.png";
    check.className = "check";

    clearInput1.parentNode.appendChild(check.cloneNode());
    clearInput2.parentNode.appendChild(check.cloneNode());
    clearInput3.parentNode.appendChild(check.cloneNode());

    checkAdded = true;
  }
}
