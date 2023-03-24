import { buttonBehavior, atualizaTotal } from "./price-calc.js";

const register = document.querySelector(".container-registro");
const botaoAdicionar = register.querySelector(".adc-logo");

function makeid(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

function createContainer(name, produtos) {
  const container = document.createElement("div");

  container.classList.add("container");

  function handleButtonBehavior(event) {
    buttonBehavior(event, container);
  }

  container.innerHTML = `<div class="pessoa">
  <p class="nome-pessoa">${name}</p>
  <button class="remove-button">Remover</button>
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

  const botoes = container.querySelectorAll(".controle-botao");
  botoes.forEach((botao) => {
    botao.addEventListener("click", handleButtonBehavior);
    document.querySelector(".form-input").value = "";
  });

  const botaoRemover = container.querySelector(".remove-button");
  botaoRemover.addEventListener("click", () => {
    container.remove();
    atualizaTotal();
  });

  return container;
}

botaoAdicionar.addEventListener("click", submit);

function submit() {
  const input = document.querySelector(".form-input");

  if (input.value.length == 0) {
    window.alert("Você precisa inserir um nome");
  } else {
    const elementoPai = document.querySelector(".container-pessoas");
    elementoPai.appendChild(createContainer(input.value, [0, 0]));
  }
}
