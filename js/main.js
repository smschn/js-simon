// dichiarazioni di variabili globali
const fiveValidRandomNumbers = [];
const nMin = 1;
const nMax = 100;
const fiveUserAnswers = [];
let counter = 0;

// ottenere 5 numeri univoci e stamparli in pagina al caricamento della stessa
getRandomUniqueNumber(fiveValidRandomNumbers, nMin, nMax);
document.getElementById('bottom_content').innerHTML = fiveValidRandomNumbers;

// dopo 5 secondi i numeri scompaiono
setTimeout(function() {

    document.getElementById('bottom_content').innerHTML = '';

}, 5000);

// dopo 7 secondi appaiono 5 prompt >> pusho l'input nell'array >> confronto i due array con un ciclo
setTimeout(function() {

    let num1 = prompt('Inserisci il primo numero');
    fiveUserAnswers.push(num1);
    let num2 = prompt('Inserisci il secondo numero');
    fiveUserAnswers.push(num2);
    let num3 = prompt('Inserisci il terzo numero');
    fiveUserAnswers.push(num3);
    let num4 = prompt('Inserisci il quarto numero');
    fiveUserAnswers.push(num4);
    let num5 = prompt('Inserisci il quinto numero');
    fiveUserAnswers.push(num5);

    console.log(fiveValidRandomNumbers[0]);
    console.log(fiveUserAnswers[0]);

    for (let i = 0; i < 5; i++) {
        if ((fiveValidRandomNumbers.includes(fiveUserAnswers[i])) == true) {
            console.log(`Complimenti! Hai indovinato il numero: ${fiveUserAnswers[i]}`);
            counter++;
        } else {
            console.log(`Mi dispiace, non hai indovinato il numero ${i}`);
        }
    }

    console.log(`In totale hai indovinato: ${counter} numeri`)

}, 7000);

console.log(fiveUserAnswers)

// --- inizio funzioni

// funzione che genera numeri casuali
function getRandomNumber(nMinFunc, nMaxFunc) {

    const randomNumber = Math.floor(Math.random() * (nMaxFunc - nMinFunc + 1) + nMinFunc)
    return randomNumber;

}

// funzione per ottenere numeri univoci
function getRandomUniqueNumber(arrayF, minF, maxF) {

    let randomNumberGenerated;
    let check = false;
    while (check == false) {
        randomNumberGenerated = getRandomNumber(minF, maxF);
        if (arrayF.includes(randomNumberGenerated) == false) {
            arrayF.push(randomNumberGenerated);
        }
        if (arrayF.length >= 5) {
            check = true;
        }
    }
    return arrayF;

}