// creazione variabile nome
var name;

// creazione variabile cognome
var surname;

// creazione variabile anno di nascita
var born;

// creazione variabile luogo di nascita
var place;

// creazione variabile età
var age;

// creazione variabile indirizzo
var address;

// creazione variabile professione
var job;

// creazione variabile sport preferito
var sport;

// creazione variabile serie tv preferita
var series;

// assegnazione valore variabile nome
name = prompt("Inserisci qui il tuo nome");

// assegnazione valore variabile cognome
surname = prompt("Inserisci qui il tuo cognome");

// assegnazione valore variabile data di nascita
born = prompt("Inserisci qui l'anno di nascita");

// assegnazione valore variabile luogo di nascita
place = prompt("Inserisci qui il luogo di nascita");

// assegnazione valore variabile età
age = 2020 - born;

// assegnazione valore variabile indirizzo
address = prompt("Inserisci qui il tuo indirizzo di residenza");

// assegnazione valore variabile professione
job = prompt("Inserisci qui la tua professione");

// assegnazione valore variabile sport preferito
sport = prompt("Inserisci qui il nome del tuo sport preferito");

// assegnazione valore variabile serie tv preferita
series = prompt("Inserisci qui il nome della tua serie TV preferita");


// output nome
document.getElementById('name').innerHTML = name;

// output cognome
document.getElementById('surname').innerHTML = surname;

// output anno di nascita
document.getElementById('born').innerHTML = born;

// output luogo di nascita
document.getElementById('born-place').innerHTML = place;

// output età
document.getElementById('old').innerHTML = age;

// output indirizzo
document.getElementById('address').innerHTML = address;

// output professione
document.getElementById('job').innerHTML = job;

// output sport preferito
document.getElementById('sport').innerHTML = sport;

// output serie tv preferita
document.getElementById('series').innerHTML = series;


// messaggio grazie una volta completato il form
alert("Grazie");

// messaggio di saluto una volta completato il form
document.writeln("Hai completato il form, alla prossima!");
