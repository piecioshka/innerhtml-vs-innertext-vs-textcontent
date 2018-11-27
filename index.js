const $el1 = document.querySelector('.inner-html');
const $el2 = document.querySelector('.inner-text');
const $el3 = document.querySelector('.text-content');

const LIMIT = 1000;

function doInnerHTML() {
    $el1.innerHTML += 1;
}
function doInnerText() {
    $el2.innerText += 2;
}
function doTextContent() {
    $el3.textContent += 3;
}

function perform(operation) {
    const startTime = Date.now();
    for (let i = 0; i < LIMIT; i++) {
        operation();
    }
    const endTime = Date.now();

    console.log(`${operation.name}: ${endTime - startTime} ms`);
}

function setup() {
    perform(doInnerHTML);
    perform(doInnerText);
    perform(doTextContent);
}

setup();
