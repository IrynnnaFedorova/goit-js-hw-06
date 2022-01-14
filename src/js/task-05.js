const inputEl = document.querySelector('input#name-input');
const outputEl = document.querySelector('span#name-output');
const outputContent = outputEl.textContent;

inputEl.addEventListener('input', (event) => {    
    let inputValidation = event.currentTarget.value > ''
        ? outputEl.textContent = event.currentTarget.value
        : outputEl.textContent = outputContent;
    return inputValidation;
});