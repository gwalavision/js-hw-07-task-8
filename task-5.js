const inputRef = document.querySelector('#name-input');

const nameRef = document.querySelector('#name-output');

inputRef.addEventListener('input', function (e) {
   nameRef.textContent =  inputRef.value
});