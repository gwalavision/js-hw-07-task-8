const allCategories = document.querySelectorAll('li.item');


const categoriesReturner = array => {
    console.log(`В списке ${array.length} категории.`);
    array.forEach(value => console.log(`Категория: ${value.firstElementChild.textContent} 
    \nКоличество элементов: ${value.firstElementChild.nextElementSibling.children.length}`));
}

categoriesReturner(allCategories)




