const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector('#ingredients')
const ingredientsArray = ingredients.map(element => {
  const ingredientList = document.createElement('li');
  ingredientList.classList.add('item');
  ingredientList.textContent = element;

  return ingredientList;
});

ingredientsEl.append(...ingredientsArray);