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

