const watches = [
    {
        nome: 'RM 67-02',
        description: 'Starting with the RM 67-01, whose lightness, thinness and ergonomics made it a perfect candidate, we reworked its lines to highlight its hidden athletic qualities.',
        img: './img/product1.jfif',
        preco: 1000000
    }
]

for (let i = 0; i < watches.length; i++) {
    const watch = watches[i];
    const store = document.querySelector('.store');

    store.innerHTML += `
    <div class="item">
  <img
    src="${watch.img}"
    alt=""
  />
  <span>
    <h3>${watch.nome}</h3>
  </span>
  <span>
    <p>
      ${watch.description}
    </p>
  </span>
  <span> R$ ${watch.preco} </span>
  <button>Adicionar ao Carrinho</button>
</div>
    `

}