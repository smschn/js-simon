// dichiarazioni di variabili globali
const fiveValidRandomNumbers = [];
const nMin = 1;
const nMax = 100;

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

/*
const prova = getRandomUniqueNumber(fiveValidRandomNumbers, nMin, nMax);
console.log(prova + 'prova funzione');
*/