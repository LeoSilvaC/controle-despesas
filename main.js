const itens = document.querySelectorAll(".container");

const produtos = {
    "empada": 4,
    "acai": 14
}  

const returnCurrency = (value) => value.toLocaleString('pt-BR',{style:'currency',currency: 'BRL'});

itens.forEach(function(element){
    const botoes = element.querySelectorAll(".controle button")

    botoes.forEach(botao => botao.addEventListener("click", (event) => {
        atualizaItem(botao.parentElement, event);
        atualizaTotalItem(element);
        atualizaTotal();
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

function atualizaTotalItem(container){
    const controles = container.querySelectorAll(".controle");
    
    let totalValue = 0;

    controles.forEach( (controle) => {
        totalValue += parseInt(controle.querySelector("input").value) * produtos[controle.dataset.produto];
    });

    container.querySelector("[data-estatistica]").innerText = returnCurrency(totalValue)
}

function atualizaTotal(){
    let valoresItens = document.querySelectorAll(".container .valor-total");
    
    let caixaTotal = 0;

    valoresItens.forEach(element => {
        caixaTotal += parseInt(element.innerText.replace(",",".").replace(/[^\d.]/g,""));
    })

    document.querySelector(".caixa-valor").innerText = returnCurrency(caixaTotal);
}
