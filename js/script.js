/*  --------- CONSEGNA --------
1. Clccando su “via” il computer genera 5 numeri
2. Vengono mostrati per 5 secondi i numeri generati
3. Una volta inserito il quinto numero viene mostrato per 3 sec: “Calcolo in corso”
5. Vengono mostrati i numeri indovinati e se non ce ne sono viene mostrato “Hai perso, nessun numero indovinato!”
6. Opzionale:
	- alla fine far apparire un bottone “restart”
	- all’inizio fare scegliere all’utente con quanti numeri giocare
 */

$(document).ready(function(){

    reset();

    // array dei numeri random generati dal computer
    var arrRandom = [];
    var arrNumber = [];
    var result = [];

    // Quando clicco su VIA...
    $('#btn-start').click(function(){
        // nascondo se stesso (bottone);
        $(this).hide();

        // fino a che l'arrRandom non è inferiore di 5...
        while(arrRandom.length < 5){
            arrRandom.push(generatorRandomNumber(1, 100));
        };

        // mostro a video i numeri random
        printOutput(arrRandom.toString(), '#display');

        // dopo 5 secondi sovrascrivo il display e rendo visibile btn-box
        setTimeout(function(){
            printOutput("Indovina i 5 numeri", '#display');
            $('#btn-box').show();
        }, 5000);
    });


    // al click di btn...
    $('#btn').click(function(){

        if(arrNumber.length < 5){
            arrNumber.push($('input').val());
            $('input').val('');
            console.log(arrNumber);
        }

        if(arrNumber.length === 4){
            $('#btn-box').hide();
            printOutput('Calcolo in corso...', '#display');
            setTimeout(function(){
                if(arrNumber.toString() === arrRandom.toString()){
                    result.push(arrNumber.toString() === arrRandom.toString())
                    console.log(result);
                }else{
                    printOutput('Hai perso', '#display');
                }
            }, 3000);
        }
    });






// ------ FUNZIONI ------

function reset(){
    printOutput('Sei pronto?', '#display');
    $('#btn-start').show();
    $('#btn-box').hide();
};

function printOutput(text, target){
    $(target).text(text);
};

function generatorRandomNumber (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
};



});