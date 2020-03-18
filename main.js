/*  obiettivo esercizio
// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito19
*******************/



// creazione variabile per nome utente
var name;

// creazione variabile per cognome utente
var surname;

// creazione variabile per colore preferito utente
var favoriteColor;

// assegnazione valore alla variabile nome utente
name = prompt("Qual è il tuo nome?");

// assegnazione valore variabile per cognome utente
surname = prompt("Qual è il tuo cognome?");

// assegnazione valore variabile per colore preferito utente
favoriteColor = prompt("Qual è il tuo colore preferito?");

// output
document.getEleomentById('title').innerHTML = (name + surname + favoriteColor + 19);
