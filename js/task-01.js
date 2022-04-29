const categoriesEl = document.querySelector('#categories').childElementCount;

const categoryNameEl = document.querySelectorAll('#categories h2');

console.log('Number of categories:', categoriesEl);

// for (const el of categoryNameEl) {
//   console.log('Category: ', el.textContent);

//   console.log('Elements: ', el.nextElementSibling.childElementCount);
// }

categoryNameEl.forEach(mainContent);

function mainContent(el) {
  console.log('Category: ', el.textContent);
  console.log('Elements: ', el.nextElementSibling.childElementCount);
}