var items = [];

document.querySelector('input[type=submit]')
.addEventListener('click',()=>{
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var precoProduto = document.querySelector('input[name=price]');
    
    if (nomeProduto.value <= 0){
        alert('Digite o Nome do Produto');
    }else if(precoProduto.value <= 0){
        alert('Digite o Valor do Produto')
    }else{
    items.push({
        nome: nomeProduto.value,
        valor: precoProduto.value
    });

    let listaProdutos = document.querySelector('.lista-produtos');
    let soma = 0;
    listaProdutos.innerHTML = "";
    items.map(function(val){
        soma+=parseFloat(val.valor);

        const valorFormatado = parseFloat(val.valor).toFixed(2);

        listaProdutos.innerHTML += `
            <div class="lista-produto-single">
                <h3>${val.nome}</h3>
                <h3 class="price-produto"><span>R$${valorFormatado}</span></h3>
            </div>
            `;
    })
    soma = soma.toFixed(2);
    nomeProduto.value = "";
    precoProduto.value = "";

    let elementoSoma = document.querySelector('.soma-produto h1');
    elementoSoma.innerHTML = 'Total: R$'+soma;
    
}});

document.querySelector('button[name=limpar]')
.addEventListener('click',()=>{
    items = [];
    
    document.querySelector('.lista-produtos').innerHTML = "Lista:";
    document.querySelector('.soma-produto h1').innerHTML= "Total: R$0";
})