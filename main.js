const $el1 = document.querySelector(".inner-html");
const $el2 = document.querySelector(".inner-text");
const $el3 = document.querySelector(".text-content");
const $el4 = document.createElement("span");
const $el5 = document.createElement("span");
const $el6 = document.createElement("span");

const LIMIT = 3000;

function doInnerHTML($element) {
    $element.innerHTML += 1;
}
function doInnerText($element) {
    $element.innerText += 2;
}
function doTextContent($element) {
    $element.textContent += 3;
}

function perform($element, operation, label) {
    const startTime = Date.now();
    for (let i = 0; i < LIMIT; i++) {
        operation($element);
    }
    const endTime = Date.now();

    console.log(`[${label}] ${endTime - startTime} ms`);
}

function main() {
    perform($el1, doInnerHTML, "Element exists in DOM: innerHTML");
    perform($el2, doInnerText, "Element exists in DOM: innerText");
    perform($el3, doTextContent, "Element exists in DOM: textContent");

    perform($el4, doInnerHTML, "Element does not exists in DOM: innerHTML");
    perform($el5, doInnerText, "Element does not exists in DOM: innerText");
    perform($el6, doTextContent, "Element does not exists in DOM: textContent");
}

main();
