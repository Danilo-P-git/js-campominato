// Il computer deve generare 16 numeri casuali tra 1 e 100
// i numeri non possono essere duplicati
// in seguito deve chiedere all'utente 84 volte di inserire un numero alla volta, sempre compreso tra 1 e 100
// l'utente non può inserire lo stesso numero più volte
// se il numero è presente nella lista dei numeri generati il gioco finisce se no continua
// La partita termina quando il giocatore inserisce un numero generato o il numero massimo di numeri consentiti
// al termine della partita il software deve comunicare il punteggio cioè il numero di volte che l'utente ha inserito un numero consentito

// funzione che genera tra 1 e 100

function genNumeri(num) {

  return Math.floor(Math.random() * num) + 1
}



//funzione che il numero non è duplicato
function duplicatoCheck(elementoDaVerificare, array) {
  var checkDoppio = false;
  for (var i = 0; i < array.length; i++) {
    if (elementoDaVerificare === array[i]) {
        var checkDoppio = true
    }

  }
}
// FINE FUNZIONI



// creo una variabile array con i numeri di genNUmeri
var arrayBombe = [];
var x = 0;

// ciclo che chiama la mia funzione di generazione dei numeri 16 volte
while (x == 16) {
  var numeroGenerato = genNumeri(100);
  console.log(numeroGenerato);
  // mi chiamo il check della funzione duplicati       // se non è duplicato lo salvo nell'array bombe
  if (duplicatoCheck(numeroGenerato, arrayBombe) === false) {
     arrayBombe.push(numeroGenerato);
  }

}


console.log(arrayBombe);



// creo una variabile array che contiene i numeri utente

// variabile booleana haPerso = false

// ciclo di 84 volte
  // prompt in cui chiedo all'utente un numero
  // check che il numero sia compreso tra 1 e 100
  // check che il numero non sia duplicato nell'array utente
  // se non è duplicato salvo il numero nell'array utente
  // check che il numero non sia nell'array bomba
  // se il numero è nell'array bomba - allert hai perso ed esco dal ciclo
    // allert con arrayUtente.lenght --> numero di volte che l'utente ha inserito un numero corretto
    // haPerso = true
    // esco dal ciclo

// controllo se haPerso è false
  // aller hai vinto
  // allert con arrayUtente.lenght --> numero di volte che l'utente ha inserito un numero corretto
