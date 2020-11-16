const allCategories = document.querySelectorAll('li.item');
console.log(allCategories);
const lists = document.querySelectorAll('li.item ul');

const categoriesReturner = (array, array2) => {
    console.log(`В списке ${array.length} категории.`);
    array2.forEach(value => console.log(`Категория: ${value.previousElementSibling.textContent} \nКоличество элементов: ${value.children.length}`));
}

categoriesReturner(allCategories, lists)

