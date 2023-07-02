$(document).ready(function(){

    const express = require('express');
    const fs = require('fs');

    const app = express();
    app.use(express.json());


    $("input[value='Cadastrar']").click(function(){
        console.log("Eu passei aqui 0");

        // app.post('/inserir_produto', (req, res) => {
        //     console.log("Eu passei aqui 1");

        //     // Lê o arquivo produtos.json existente
        //     fs.readFile('produtos.json', 'utf8', (err, data) => {
        //         if (err) {
        //             console.error('Erro ao ler o arquivo produtos.json:', err);
        //             res.status(500).send('Erro ao atualizar o produto.');
        //             return;
        //         }
    
        //         // Converte o conteúdo do arquivo para objeto JavaScript
        //         const produtos = JSON.parse(data);
        //         ProdutoDAO.produtos = produtos;
    
        //         // Adiciona o novo produto ao array de produtos existente
        //         const Produto = require("./produto");
        //         const ProdutoDAO = require("./produtoDAO");

        //         NewProduct = new Produto(1001, "Produto1", "Teste pra ver se funciona", 12.00, "Alguma foto ai"); 
        //         ProdutoDAO.salvarProduto(NewProduct);
        //         produtos = ProdutoDAO.produtos;

    
        //         // Converte o objeto JavaScript de volta para JSON
        //         const jsonAtualizado = JSON.stringify(produtos);
    
        //         // Escreve o JSON atualizado no arquivo produtos.json
        //         fs.writeFile('produtos.json', jsonAtualizado, 'utf8', (err) => {
        //             if (err) {
        //                 console.error('Erro ao atualizar o arquivo produtos.json:', err);
        //                 res.status(500).send('Erro ao atualizar o produto.');
        //                 return;
        //             }
    
        //             console.log('Produto atualizado com sucesso!');
        //             res.send('Produto atualizado com sucesso!');
        //         });
        //     });
    
    
        // })
        

    })





})