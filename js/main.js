// dichiarazioni di variabili globali
const fiveValidRandomNumbers = [];
const nMin = 1;
const nMax = 100;

// ottenere 5 numeri univoci e stamparli in pagina al caricamento della stessa
getRandomUniqueNumber(fiveValidRandomNumbers, nMin, nMax);
document.getElementById('bottom_content').innerHTML = fiveValidRandomNumbers;

// dopo 10 secondi i numeri scompaiono
setTimeout(function() {

    document.getElementById('bottom_content').innerHTML = '';

}, 10000);

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
        // console.log(randomNumberGenerated);
        if (arrayF.includes(randomNumberGenerated) == false) {
            arrayF.push(randomNumberGenerated);
        }
        if (arrayF.length >= 5) {
            check = true;
        }
    }
    // console.log(fiveValidRandomNumbers);
    return arrayF;
}