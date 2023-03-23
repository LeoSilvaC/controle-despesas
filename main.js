const itens = document.querySelectorAll(".container");

const produtos = {
    "empada": 4,
    "acai": 14
}  

itens.forEach(function(element){
    const botoes = element.querySelectorAll(".controle button")

    botoes.forEach(botao => botao.addEventListener("click", (event) => {
        atualizaItem(botao.parentElement, event);
        atualizaTotal(element);
    }))
})

function atualizaItem(controle, botao){
    const input = controle.querySelector(".controle-contador")
    const inputValue = parseInt(input.value)

    if(botao.target.innerText === "-" && inputValue > 0){
        input.value = parseInt(input.value) - 1; 
    } else if(botao.target.innerText === "+"){
        input.value = parseInt(input.value) + 1; 
    }
}

function atualizaTotal(container){
    const controles = container.querySelectorAll(".controle");
    let totalValue = 0;

    controles.forEach( (controle) => {
        totalValue += parseInt(controle.querySelector("input").value) * produtos[controle.dataset.produto];
    });

    container.querySelector("[data-estatistica]").innerText = totalValue.toLocaleString('pt-BR',{style:'currency',currency: 'BRL'});
}
