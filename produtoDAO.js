const produtos = {}

function salvarProduto(produto) {
    produtos.push(produto)
    return produto
}

function getProduto(codigo) {
    for (const produto of produtos) {
        if(produto.codigo == codigo)
            return produto
        else return ({})
    }
}

function getProdutos() {
    return Object.values(produtos)
}

// function excluirProduto(id){
//     const produto = produtos[id]
//     delete produtos[id]
//     return produto
// }


module.exports = {
    produtos,
    salvarProduto,
    getProduto,
    getProdutos,
    // excluirProduto
}
