# sistema-recomendação-drinks

Este projeto é um sistema de recomendação de drinks onde o usuário insere um drink que ele gosta e o programa retorna 5 dinks em potencial que podem ser do gosto da pessoa.

## 📖 Sobre este projeto
Utilizando JavaScript, desevolvi um programa que utiliza álgebra linear para recomendar drinks baseado em um drink de preferência. O algoritmo utiliza o conceito de cosseno entre vetores para determinar bebidas próximas à fornecida pelo usuário. Cada bebida tem um vetor de ingredientes, se a bebida possui o ingrediente o índice correspondente recebe 1, se não, recebe 0. Assim, os cossenos mais próximos de 1 (além da própria bebida) são os com ingredientes semelhantes e podem ser de interesse o usuário.

## 🧔 User Story
Ao entrar na página principal, o usuário se depara com uma box com instruções para inserir um drink, um input e um botão. Ao inserir o drink e pressionar o botão, abre um pop-up na tela com os 5 drinks mais próximos, tendo o primeiro em destaque e com foto. Ao fechar o pop-up, volta para a página inicial

## 💻 Tecnologias
- JavaScript
- TheCocktailDB API