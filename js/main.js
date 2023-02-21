/*Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23*/

const userName = prompt('insersci nome');

const userSurname = prompt('inserisci cognome');

const userColor = prompt('inserisci colore preferito');

const passNumber = '23';

document.getElementById('password').innerHTML = `La Password è: ${userName}${userSurname}${userColor}${passNumber}`;