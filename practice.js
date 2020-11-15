
const products = [
  {
    name: 'Playstation 5',
    description: 'The brand new Sony console',
    price: 1000,
  },

  {
    name: 'Xbox Series X',
    description: "Microsoft's most anticipated product on the market",
    price: 999,
  },
];


const itemCreator = product => {

const productCard = document.createElement('div');
productCard.classList.add('product-item');

const titleRef = document.createElement('h2');
titleRef.classList.add('product-item-title', 'title')
titleRef.textContent = product.name;


const descRef = document.createElement('p');
descRef.classList.add('product-item-description')
descRef.textContent = product.description;

const priceRef = document.createElement('p');
priceRef.classList.add('product-item-price')
priceRef.textContent = product.price;
  
productCard.append(titleRef, descRef, priceRef);

  return productCard;
} 

const productCards = products.map(item => itemCreator(item));


const bodyDiv = document.querySelector('.js-body');


bodyDiv.append(...productCards);


document.addEventListener('load', function (e) {
  // body
});



