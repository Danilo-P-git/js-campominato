// INIZIO FUNZIONI
function genNumeri(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// funzione che il numero non è duplicato

function duplicatoCheck(array, numero) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == numero) {
        return true;
    }
  }
  return false;
}
function rangeNumero (numero, min, max) {
if (numero >= min && numero <= max) {
  return true
} else {
  return false;
}
}
// FINE FUNZIONI




var bombe = 16;
var tentativi;
// Faccio scegliere la difficoltà all'utente
var difficoltà = prompt("seleziona la difficoltà tra 1-2-3")
if (difficoltà = 1) {
 tentativi = 100;
}
else if (difficoltà = 2) {
  tentativi = 80;
}
else if (difficoltà = 3) {
  tentativi = 40;
}

// creo una variabile array con i numeri di genNUmeri
var arrayBombe = [];

// ciclo che chiama la mia funzione di generazione dei numeri 16 volte
  var numeroGenerato;
  do {
    numeroGenerato = genNumeri(1, tentativi);
    if (duplicatoCheck(arrayBombe, numeroGenerato) === false) {
      arrayBombe.push(numeroGenerato);

    }

  } while (arrayBombe.length < 16);


console.log(arrayBombe);

// creo una variabile array che contiene i numeri utente
var numeriUtente = [];
// variabile booleana haPerso = false
var haPerso = false;

// chiedo all'utente di inserire il numero un numero pari ai tentativi e faccio il ciclo
while (numeriUtente.length < tentativi - bombe && haPerso == false) {
  // dichiaro una variabile con il numero inserito dall'utente
  var numeroInseritoUtente = parseInt(prompt("inserisci un numero tra 1 e 100"));
  // controllo se il numero inserito è tra 1 e 100
  if (isNaN(numeroInseritoUtente) || rangeNumero(numeroInseritoUtente, 1 , 100) == false) {
    alert("Devi inserire un NUMERO tra 1 e 100")
  }
  // faccio un check che l'utente non inserisca sempre lo stesso numero e comunico all'utente che non può farlo
  else if (duplicatoCheck(numeriUtente, numeroInseritoUtente) === true) {
    alert("non inserire gli stessi numeri è barare")
  }
  // controllo che non sia duplicato
  else if (duplicatoCheck(numeriUtente, numeroInseritoUtente) === false) {
    // controllo se il numero inserito è nella lista dei numeri delle bombe
    if (duplicatoCheck(arrayBombe, numeroInseritoUtente) === true) {
      haPerso = true;
    }
    // se non lo è lo pusho e lo aggiungo all'array dell'utente
     else {
      numeriUtente.push(numeroInseritoUtente);
    }
  }
  console.log(numeriUtente);
}

if (haPerso == true) {
  alert("Hai preso una bomba hai raggiunto il livello " + numeriUtente.length)
}
else {
  alert("Congratulazioni hai vinto")
}
