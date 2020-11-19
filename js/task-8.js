const boxesRef = document.querySelector('#boxes');
const inputRef = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');



const getRandomInt = (min, max) => {

        min = Math.ceil(min);
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } 

const createBoxes = amount => {
    for (let i = 0; i < amount; i += 1) {

        const divTag = document.createElement('div');
        divTag.style.backgroundColor = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`
        divTag.style.width = 30+(10*i)+'px'
        divTag.style.height = 30 + (10 * i) + 'px'

        boxesRef.appendChild(divTag)
    }
    console.log(boxesRef.childNodes);

}

const destroyBoxes = () => {

    boxesRef.childNodes.forEach(value => value.remove())
}



inputRef.addEventListener('focus', () => {
    inputRef.value = ''
});

createBtn.addEventListener('click', () =>  {
    createBoxes(inputRef.value)

});

destroyBtn.addEventListener('click', () => {
    destroyBoxes()
    inputRef.value = ''
})


