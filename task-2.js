const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const allIngredientsRef = document.querySelector('#ingredients');

const listCreator = (value) => {
  const tagCreator = document.createElement('li');

  tagCreator.textContent = value

  return allIngredientsRef.appendChild(tagCreator)
}

ingredients.forEach(element => listCreator(element))
