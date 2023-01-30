const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients')


const elementsMarkup = ingredients.map(item => {
  const el = document.createElement('li');
  el.textContent = item;
  el.classList.add('item');
  return el;
})

ingredientsEl.append(...elementsMarkup)
