const watches = [
  {
    id: 'product1',
    nome: 'RM 67-02',
    description: 'Starting with the RM 67-01, whose lightness, thinness and ergonomics made it a perfect candidate, we reworked its lines to highlight its hidden athletic qualities.',
    img: './img/product1.jfif',
    preco: 950000.00
  },
  {
    id: 'product2',
    nome: 'RM 67-02',
    description: 'Starting with the RM 67-01, whose lightness, thinness and ergonomics made it a perfect candidate, we reworked its lines to highlight its hidden athletic qualities.',
    img: './img/product2.jpg',
    preco: 750000.00
  },
  {
    id: 'product3',
    nome: 'RM 67-02',
    description: 'Starting with the RM 67-01, whose lightness, thinness and ergonomics made it a perfect candidate, we reworked its lines to highlight its hidden athletic qualities.',
    img: './img/product3.jfif',
    preco: 320000.00
  },
  {
    id: 'product4',
    nome: 'RM 67-02',
    description: 'Starting with the RM 67-01, whose lightness, thinness and ergonomics made it a perfect candidate, we reworked its lines to highlight its hidden athletic qualities.',
    img: './img/product4.jpg',
    preco: 655000.00
  },
  {
    id: 'product5',
    nome: 'RM 67-02',
    description: 'Starting with the RM 67-01, whose lightness, thinness and ergonomics made it a perfect candidate, we reworked its lines to highlight its hidden athletic qualities.',
    img: './img/product5.jfif',
    preco: 750000.00
  }
];

for (let i = 0; i < watches.length; i++) {
  const watch = watches[i];
  const store = document.querySelector('.store');


  store.innerHTML += `
  <div class="item">
  <img width="100%" height="50%" src="${watch.img}" alt="" />
  <span>
    <h3>${watch.nome}</h3>
  </span>
  <span>
    <p>${watch.description}</p>
  </span>
  <span class="price"> R$ ${watch.preco} </span>
  <button id="${watch.id}" class="add-cart">
    Adicionar ao Carrinho
  </button>
</div>
    `
};

const cartButton = document.querySelector('#cart-button');
const cartDisplay = document.querySelector('.cart');

cartButton.addEventListener('click', () => {
  if (cartDisplay.style.display === 'block') {
    return cartDisplay.style.display = 'none'
  } else {
    return cartDisplay.style.display = 'block'
  }
});



document.body.addEventListener('click', (event) => {
  let clickedId = event.target.attributes[0].value;

  for (let i = 0; i < watches.length; i++) {
    const watch = watches[i];

    if (clickedId === watch.id) {
      cartDisplay.innerHTML += `
      <div class="cartItem">
            <img height="70px" width="70px" src="${watch.img}" alt="" />
            <div>${watch.nome}</div>
            <div>Quantidade:</div>
            <div class="qtd-btn">
              1
              <button id="qtdMore">+</button>
              <button id="qtdMinus">-</button>
            </div>
            <div>Preço:</div>
            <div class="price-cart">${watch.preco}</div>

            <button class="remove-btn">Remover</button>
      </div>
      `
    }
  };
  const watchesCartPrices = document.querySelectorAll('.price-cart');
  let whatchesCartPricesArray = []

  for (let i = 0; i < watchesCartPrices.length; i++) {
    const watch = watchesCartPrices[i];
    whatchesCartPricesArray.push(Number(watch.innerText))
  }
  console.log(whatchesCartPricesArray);

  const total = document.querySelector('.total');
  
  const soma = whatchesCartPricesArray.reduce((total, qtd)=> total + qtd);

  total.textContent = `Total: ${soma}`
});



