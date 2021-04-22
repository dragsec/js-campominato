/* TEST */
/* variabili utili */
var min = 1;
var max = 100;
var gameNumbers = [];
var userNumbers = [];
var i = 1;


/* genero numeri */
while (i < 16){
    
    /* mmm???
    var x = 0;
    var localNumber = Math.ceil(Math.random()*100);
    
    for (var i2 = 0; i2 < i; i2++){
        if(localNumber = gameNumbers[i2]){
            x += 1;
        }
    }

    if(x = 0){
        gameNumbers.push(localNumber);
    }  */


    var localNumber = Math.ceil(Math.random()*100);
    gameNumbers.push(localNumber);
    i = gameNumbers.length;
}

console.log(gameNumbers); /* controllo */


/* chiedo numeri fino a condizioni */



/* risultato */