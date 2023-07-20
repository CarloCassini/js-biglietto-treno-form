console.log("js ok");

// dichiarazione delle variabili
const userName = document.getElementById("user-name").value;
let userKm;
let userEta;
const MyButton = document.getElementById("send-button");
let prezzoViaggio;
let prezzoSconto;

// al momento gestisco solo km e eta
MyButton.addEventListener("click", function () {
  userKm = parseFloat(document.getElementById("user-km").value);
  userEta = parseInt(document.getElementById("user-eta").value);

  console.log(userName);
  console.log(userKm);
  console.log(userEta);

  // vecchio codice
  prezzoViaggio = userKm * 0.21;

  console.log(prezzoViaggio);

  if (isNaN(userKm) || isNaN(userEta)) {
    console.log(" ricarica e inserisci valori numerici ");
  } else {
    if (userEta < 18) {
      prezzoSconto = prezzoViaggio * 0.2;
      prezzoViaggio = prezzoViaggio - prezzoSconto;
    } else if (Eta >= 65) {
      prezzoSconto = prezzoViaggio * 0.4;
      prezzoViaggio = prezzoViaggio - prezzoSconto;
    }
    console.log(prezzoViaggio);

    // qui viene inserito il valore a 2 decimali
    // prezzoSconto = prezzoSconto.toFixed(2);
  }

  document.getElementById("output-name").innerHTML = userName;
  document.getElementById("output-price").innerHTML = prezzoViaggio;
  document.getElementById("output-discount").innerHTML = prezzoSconto;
});
