const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const ulEl = document.querySelector('.gallery');

const imageEl = images.map(image => {
  ulEl.insertAdjacentHTML('afterbegin', '<li class="gallery__item"><img class="gallery__img"></li>');

  const itemEl = document.querySelector('.gallery__item');
  const imgEl = document.querySelector('.gallery__img');
  imgEl.src = `${image.url}`;
  imgEl.alt = `${image.alt}`; 
  console.log('', imgEl);
  
  return itemEl;
})


// const imageEl = images.map(image => {

//   const itemEl = document.createElement('li');
//   itemEl.classList.add('gallery__item');

//   const imgEl = document.createElement('img');
//   imgEl.classList.add('gallery__img');
//   imgEl.src = `${image.url}`;
//   imgEl.alt = `${image.alt}`; 

//   itemEl.append(imgEl);
//   return itemEl;
// });

// console.log('', imageEl);
// const ulEl = document.querySelector('.gallery');

// ulEl.append(...imageEl);
// console.log('', ulEl);
// document.body.appendChild(titleEl);