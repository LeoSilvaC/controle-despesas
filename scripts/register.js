const register = document.querySelector(".container-registro");
const botaoAdicionar = register.querySelector(".adc-logo");

function createContainer(name, produtos) {
  const container = document.createElement("div");
  container.classList.add("container");
  container.innerHTML = `<div class="pessoa">
  <p class="nome-pessoa">${name}</p>
  <button class="btn-editar">Editar</button>
  <label class="nome">Açaí</label>
  <div class="controle" data-produto="acai">
    <button class="controle-botao">-</button>
    <input
      type="text"
      class="controle-contador"
      value="${produtos[0]}"
      data-contador
    />
    <button class="controle-botao">+</button>
  </div>
  <label class="nome">Empada</label>
  <div class="controle" data-produto="empada">
    <button class="controle-botao">-</button>
    <input
      type="text"
      class="controle-contador"
      value="${produtos[1]}"
      data-contador
    />
    <button class="controle-botao">+</button>
  </div>
  <p class="texto-total">Total</p>
  <p class="valor-total" data-estatistica>R$ 0,00</p>
</div>`;
  return container;
}

botaoAdicionar.addEventListener("click", submit);

function submit() {
  const input = document.querySelector(".form-input");

  if (input.value.length == 0) {
    window.alert("Você precisa inserir um nome");
  }

  const elementoPai = document.querySelector(".container-pessoas");
  elementoPai.appendChild(createContainer(input.value, [0, 0]));
}
