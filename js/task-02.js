const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = ingredients.map(item => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = item;
  return itemEl;
});

document.body.append(...ingredientsEl);