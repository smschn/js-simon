// dichiarazioni di variabili globali
const fiveValidRandomNumbers = [];
const nMin = 1;
const nMax = 100;
const fiveUserAnswers = [];
let counter = 0;

// ottenere 5 numeri univoci e stamparli in pagina al caricamento della stessa
getRandomUniqueNumber(fiveValidRandomNumbers, nMin, nMax);
document.getElementById('bottom_content').innerHTML = fiveValidRandomNumbers;

// dopo 5 secondi i numeri scompaiono e cambio il messaggio visualizzato
setTimeout(function() {

    document.getElementById('bottom_content').classList.add('d_none');
    document.getElementById('top_content').innerHTML = 'Inserisci 5 numeri appena osservati.';

}, 5000);

// dopo 7 secondi appaiono 5 prompt >> pusho l'input nell'array >> confronto i due array con un ciclo
setTimeout(function() {

    let num1 = parseInt(prompt('Inserisci il primo numero')); // parseInt perché altrimenti num1 è stringa e non funziona il ciclo di confronto degli array
    fiveUserAnswers.push(num1);
    let num2 = parseInt(prompt('Inserisci il secondo numero'));
    fiveUserAnswers.push(num2);
    let num3 = parseInt(prompt('Inserisci il terzo numero'));
    fiveUserAnswers.push(num3);
    let num4 = parseInt(prompt('Inserisci il quarto numero'));
    fiveUserAnswers.push(num4);
    let num5 = parseInt(prompt('Inserisci il quinto numero'));
    fiveUserAnswers.push(num5);

    for (let i = 0; i < 5; i++) {

        if ((fiveValidRandomNumbers.includes(fiveUserAnswers[i])) == true) {
            console.log(`Complimenti! Hai indovinato il numero: ${fiveUserAnswers[i]}`);
            counter++;
            document.getElementById('correct_numbers').classList.remove('d_none');
            document.getElementById('correct_numbers').classList.add('d_block');
            document.getElementById('correct_numbers').innerHTML += `${fiveUserAnswers[i]}, `;
        } else {
            console.log(`Mi dispiace, il numero ${fiveUserAnswers[i]} non era tra quelli apparsi.`);
            document.getElementById('wrong_numbers').classList.remove('d_none');
            document.getElementById('wrong_numbers').classList.add('d_block');
            document.getElementById('wrong_numbers').innerHTML += `${fiveUserAnswers[i]}, `;
        }
        
    }

    console.log(`In totale hai indovinato: ${counter} numeri.`);

}, 7000);

// --- inizio funzioni

// funzione che genera numeri casuali
function getRandomNumber(nMinFunc, nMaxFunc) {

    const randomNumber = Math.floor(Math.random() * (nMaxFunc - nMinFunc + 1) + nMinFunc);
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