console.log('JS FUNCTION OK!');

// GENERATORE NUMERO CASUALE DA 1 A n

function randomGenerator(receiveMax) {
    return giveRandomNumber = Math.floor(Math.random() * receiveMax) + 1;
}

// PUNTARE L'ARRAY

function pointArray(receiveIdArray) {
    //console.log(`Hai puntato la griglia ${receiveIdArray}!`);

    const giveArraySelection = document.getElementById(receiveIdArray);

    giveArraySelection.innerHTML = '';

    return giveArraySelection;
}

// CREARE GLI SLOT DELL'ARRAY E INSERIRE L'INPUT DELL'UTENTE - RESTITUISCE L'ARRAY CREATO

function makeUserArray(receiveQuantity, receiveArraySelection) {

    const giveArrayUser = [];

    let i = 0;

    while (i < receiveQuantity) {

        const userInput = parseInt(prompt('Inserisci numero da 1 a ' + maxNumber));

        if (!isNaN(userInput) && !giveArrayUser.includes(userInput)) {

            const createSlot = document.createElement('div');

            createSlot.className = 'slot-style';

            giveArrayUser[i] = userInput;

            createSlot.innerHTML = userInput;

            receiveArraySelection.append(createSlot);

            i++;

        }

    }

    return giveArrayUser;

}

// CREARE GLI SLOT DELL'ARRAY E INSERIRE NUMERI RANDOM

function makeArrayContent(receiveArraySelection, receiveRandomNumber) {
    const createSlot = document.createElement('div');

    createSlot.className = 'slot-style';

    createSlot.innerHTML = receiveRandomNumber;

    receiveArraySelection.append(createSlot);
}

// CREA n NUMERI CASUALI DIVERSI

function makeUniqueRandom(receiveQuantity, receiveMax, receiveArraySelection) {

    let i = 0;
    const giveArrayRandomized = [];

    do {

        const randomNumber = randomGenerator(receiveMax);

        while (!giveArrayRandomized.includes(randomNumber)) {

            makeArrayContent(receiveArraySelection, randomNumber);

            giveArrayRandomized[i] = randomNumber;

            i++;

        }

    } while (i < receiveQuantity)

    return giveArrayRandomized;

}


// CAMBIA COLORE IN BASE A DIFFICOLTA'
// PIU' FACILE
function changeColorDown(receiveParameterSelector) {
    if (receiveParameterSelector.className === 'hardest-color') {
        receiveParameterSelector.className = 'hard-color';
    } else {
        if (receiveParameterSelector.className === 'hard-color') {
            receiveParameterSelector.className = 'medHard-color';
        } else {
            if (receiveParameterSelector.className === 'medHard-color') {
                receiveParameterSelector.className = 'medium-color';
            } else {
                receiveParameterSelector.className = 'easy-color';
            }
        }
    }
}

// PIU' DIFFICILE
function changeColorUp(receiveParameterSelector) {
    if (receiveParameterSelector.className === 'easy-color') {
        receiveParameterSelector.className = 'medium-color';
    } else {
        if (receiveParameterSelector.className === 'medium-color') {
            receiveParameterSelector.className = 'medHard-color';
        } else {
            if (receiveParameterSelector.className === 'medHard-color') {
                receiveParameterSelector.className = 'hard-color';
            } else {
                receiveParameterSelector.className = 'hardest-color';
            }
        }
    }

}


// CONTROLLO NUMERI INDOVINATI

function checkSolution(receiveUserArray, receiveRandomArray) {

    let winPoints = 0;

    let giveSolutionFeedback;

    for (let i = 0; i < receiveUserArray.length; i++) {

        const inputNumber = receiveUserArray[i];

        if (receiveRandomArray.includes(inputNumber)) {
            winPoints++;
            //giveSolutionFeedback[i] = `Il numero ${inputNumber} è giusto!`;
            console.log(`Il numero ${inputNumber} è giusto!`);
        } else {
            //giveSolutionFeedback[i] = `Il numero ${inputNumber} NON è corretto!`;
            console.log(`Il numero ${inputNumber} NON è corretto!`);
        }

    }

    if (winPoints === 1) {

        console.log(`Hai totalizzato ${winPoints} punto!`);
        return giveSolutionFeedback = `Hai totalizzato ${winPoints} punto!`;

    } else {

        console.log(`Hai totalizzato ${winPoints} punti!`);
        return giveSolutionFeedback = `Hai totalizzato ${winPoints} punti!`;

    }



}

// VISUALIZZA DI NUOVO LA SOLUZIONE

function revealSolution(receiveRandomArraySelected, receiveArraySolution) {

    for (let i = 0; i < receiveArraySolution.length; i++) {
        makeArrayContent(receiveRandomArraySelected, receiveArraySolution[i]);
    }

}