// Pythagorean Theorem

// Button 
document.getElementById("btn").addEventListener("click", btnclicked);

function btnclicked() {
  // Input
  let sda = +document.getElementById("sda").value;
  let sdb = +document.getElementById("sdb").value;

  // Process
  let total = Math.sqrt(sda * sda + sdb * sdb);

  // Output
  document.getElementById("output").innerHTML = "The hypotenuse is: " + total;
}