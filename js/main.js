/*Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23*/
document.getElementById("myBtn").onclick = myObject;

    const firstName = prompt('insersci nome');

    const userSurname = prompt('inserisci cognome');
    
    const userColor = prompt('inserisci colore preferito');
    
    const passNumber = '23';

function myObject (firstName, userSurname, userColor) {
    
    document.getElementById('password').innerHTML = "La Password è:" + firstName + userSurname + userColor + passNumber;
}

