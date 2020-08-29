
// FINE FUNZIONI
function genNumeri(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// funzione che il numero non è duplicato

function duplicatoCheck(numero, array) {
 if (array.indexOf(numero) >= 0) {
 return true
 }
 else {
  return false
}
}
function rangeNumero (numero, min, max) {
if (numero >= min && numero <= max) {
  return true
} else {
  return false;
}
}

var bombe = 16;
var tentativi = 100;



// creo una variabile array con i numeri di genNUmeri
var arrayBombe = [];

// ciclo che chiama la mia funzione di generazione dei numeri 16 volte
for (var i = 0; i < bombe; i++) {
  var numeroGenerato;
  do {
    numeroGenerato = genNumeri(1, tentativi);


  } while (duplicatoCheck(numeroGenerato, arrayBombe) === true);
    arrayBombe.push(numeroGenerato);
}
console.log(arrayBombe);

// creo una variabile array che contiene i numeri utente
var numeriUtente = [];
// variabile booleana haPerso = false
var haPerso = false;

var ultimoCiclo = false;
var i = 0;
// ciclo di 84 volte
while (i < tentativi - bombe && haPerso == false && ultimoCiclo == false) {
  do {
    var vaiCiclo = false;
    var numeroInseritoUtente = parseInt(prompt("inserisci un numero tra 1 e 100 ed evita la bomba"));
    if (isNaN(numeroInseritoUtente)) {
      alert ("Inserisci un numero non una parola");
      vaiCiclo = true;
    }
     else if (rangeNumero(numeroInseritoUtente, 1 , tentativi)) {
       // check che il numero non sia duplicato nell'1array utente

      if (duplicatoCheck(numeroInseritoUtente, numeriUtente)) {
        alert ("Hai gia inserito questo numero");
        vaiCiclor = true;
      }
      else {
        vaiCiclo = false;
      }

    }
     else {
      alert ("Devi inserire un numero compreso tra 1 e 100");
      vaiCiclo = true;
    }
  } while (vaiCiclo == true) {
    if (duplicatoCheck(numeroInseritoUtente, arrayBombe)) {
      haPerso = true;
      alert ("hai perso hai beccato una bomba il livello che hai raggiunto è il: " + numeriUtente.length)
    } else {
      numeriUtente.push(numeroInseritoUtente);
      console.log(numeriUtente);
      if (i == tentativi - bombe - 1) {
        ultimoCiclo = true;
      }
    }
    i++;
  }
}

  if (haPerso == false) {
    alert ("hai vinto")
  }


  // se non è duplicato salvo il numero nell'array utente
  // check che il numero non sia nell'array bomba
  // se il numero è nell'array bomba - allert hai perso ed esco dal ciclo
    // allert con arrayUtente.lenght --> numero di volte che l'utente ha inserito un numero corretto
    // haPerso = true
    // esco dal ciclo

// controllo se haPerso è false
  // aller hai vinto
  // allert con arrayUtente.lenght --> numero di volte che l'utente ha inserito un numero corretto
