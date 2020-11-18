let counterValue = 0;
const totalValueRef = document.querySelector('#value');
const incrementRef = document.querySelector('button[data-action="increment"]');
const decrementRef = document.querySelector('button[data-action="decrement"]');

incrementRef.addEventListener('click', () => {
totalValueRef.textContent = counterValue +=1;
})

decrementRef.addEventListener('click', () => {
totalValueRef.textContent = counterValue -=1;
})
