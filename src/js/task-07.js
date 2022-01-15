
const fontSizeEl = document.querySelector('input#font-size-control');
const textEl = document.querySelector('span#text');

fontSizeEl.addEventListener("input", (event) => {    
    textEl.style.fontSize = event.currentTarget.value + "px";
});