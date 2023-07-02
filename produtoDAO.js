$(document).ready(function(){


    function inserirNovoProduto(nome, endereco, preco) {
        // Carrega o JSON existente
        fetch('produtos.json')
            .then(response => response.json())
            .then(data => {
                // Cria um novo objeto de produto
                // var novoProduto = 
    
                // Adiciona o novo produto ao array de produtos existente
                data.produtos.push(novoProduto);
    
                // Salva o JSON atualizado
                var jsonData = JSON.stringify(data);
                salvarJSON(jsonData);
            });
    }
    
    function salvarJSON(jsonData) {
        // Faz uma solicitação POST para salvar o JSON atualizado
        fetch('salvar_produtos.php', {
            method: 'POST',
            body: jsonData
        })
        .then(response => {
            if (response.ok) {
                console.log('Produto inserido com sucesso!');
            } else {
                console.error('Erro ao inserir o produto.');
            }
        })
        .catch(error => {
            console.error('Erro ao inserir o produto:', error);
        });
    }





    $("input[value='cadastrar']").click(function(){








    })





})
