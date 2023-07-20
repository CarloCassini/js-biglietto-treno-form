console.log("js ok");

// dichiarazione delle variabili
let userKm;
let userEta;
const MyButton = document.getElementById("send-button");
let prezzoViaggio;

MyButton.addEventListener("click", function () {
  userKm = parseFloat(document.getElementById("user-km").value);
  userEta = parseInt(document.getElementById("user-eta").value);

  console.log(userKm);
  console.log(userEta);
});

// vecchio codice
prezzoViaggio = userKm * 0.21;

console.log(prezzoViaggio);
