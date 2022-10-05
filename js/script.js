// INPUT

    //chiedo all'utente il suo nome e salvo la risposta in una variabile
    const userName = prompt("Qual è il tuo nome? Rispondi senza lasciare spazi!"); 
    //Loggo in console la risposta per verificare (non necessario)
    console.log(userName); 

    //chiedo all'utente il suo cognome e salvo la risposta in una variabile
    const userSurname = prompt("Qual è il tuo cognome? Rispondi senza lasciare spazi!"); 
    //Loggo in console la risposta per verificare (non necessario)
    console.log(userSurname); 

    //chiedo all'utente il suo colore preferito e salvo la risposta in una variabile
    const favoriteCol = prompt("Qual è il tuo colore preferito? Rispondi senza lasciare spazi!"); 
    //Loggo in console la risposta per verificare (non necessario)
    console.log(favoriteCol);

// ELABORAZIONE

    /* Genero un numero casuale tra 0 e 100 esclusi: con la funzione math.random seleziono un numero 
    in virgola tra 0 e 1, moltiplicandolo per 100, e arrotondandolo a numero intero con math.round*/
    let myNumber = Math.round(Math.random() * 100);

    //Loggo per verificare che la variabile myNumber restituisca un numero e che sia intero
    console.log(myNumber, typeof(myNumber));

    /*Concateno i valori delle variabili dell'input (i loro valori sono dati di tipo stringa)
     con il numero della variabile myNumber.*/
    const strongPassword = userName + userSurname + favoriteCol + myNumber;

    /*Loggo il risultato di questa concatenazione e noto che è un valore di tipo stringa, essendo stata
    una concatenazione tra dati di tipo stringa e numeri.*/
    console.log(strongPassword, typeof(strongPassword));

// OUTPUT

    //inserisco il valore della variabile strongPassword all'interno del file HTML 
    document.getElementById("best-password").innerHTML = `Questa è la tua password super sicura: <span class= text-success>${strongPassword} </span>`;






