const addInputEl1 = document.getElementById('input-el1');
const addInputEl2 = document.getElementById('input-el2');
const addButton = document.getElementById('add-button');
const addResults = document.getElementById('add-results');

addButton.addEventListener ('click', () => {
    const addnumber1 = addInputEl1.value;
    const addnumber2 = addInputEl2.value;

    const sum = Number(addnumber1) + Number(addnumber2);
console.log(addnumber1);


    addResults.textContent = sum;
})

const subInputEl1 = document.getElementById('sub-input-el1');
const subInputEl2 = document.getElementById('sub-input-el2');
const subButton = document.getElementById('sub-button');
const subResults = document.getElementById('sub-results');

subButton.addEventListener ('click', () => {
    const subnumber1 = subInputEl1.value;
    const subnumber2 = subInputEl2.value;

    const difference = Number(subnumber1) - Number(subnumber2);
console.log(subnumber1);


    subResults.textContent = difference;
})

const multInputEl1 = document.getElementById('mult-input-el1');
const multInputEl2 = document.getElementById('mult-input-el2');
const multButton = document.getElementById('mult-button');
const multResults = document.getElementById('mult-results');

multButton.addEventListener ('click', () => {
    const multnumber1 = multInputEl1.value;
    const multnumber2 = multInputEl2.value;

    const product = Number(multnumber1) * Number(multnumber2);
console.log(multnumber1);

    multResults.textContent = product;
})

const divInputEl1 = document.getElementById('division-input-el1');
const divInputEl2 = document.getElementById('division-input-el2');
const divButton = document.getElementById('division-button');
const divResults = document.getElementById('division-results');

divButton.addEventListener ('click', () => {
    const divnumber1 = divInputEl1.value;
    const divnumber2 = divInputEl2.value;

    const quotient = Number(divnumber1) / Number(divnumber2);
console.log(divnumber1);

    divResults.textContent = quotient;
})