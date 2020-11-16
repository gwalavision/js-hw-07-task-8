const inputRef = document.querySelector('#validation-input');
const inputSymbolsAmountRef = Number(inputRef.getAttribute('data-length'))

const inputTextHandler = text => {
        console.log(text);
        inputRef.addEventListener('blur', function (e) {
            if (text.length < inputSymbolsAmountRef) {
               return inputRef.classList.add('invalid')
            } 
            return inputRef.classList.replace('invalid', 'valid')
        });
        inputRef.addEventListener('focus', function (e) {
           return inputRef.classList.remove('invalid', 'valid')
        });
}
    
    inputRef.addEventListener('input', function (e) {
        inputTextHandler(inputRef.value)
    })


    