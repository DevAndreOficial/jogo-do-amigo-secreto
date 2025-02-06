//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    //Limpar ária de resultado
    document.querySelector("#resultado").innerHTML = "";

    //Recuperando o input - área onde iremos digitar o nome do amigo secreto
    const input = document.querySelector("#amigo");
    
    if(input.value == "") {
        alert('Por favor, insira um valor válido.');
    }else {
        amigos.push(input.value);
        
        let ul = document.querySelector("#listaAmigos");

        //criar um elemtento li
        let li = document.createElement('li');
        //passar o valor digitado
        li.innerHTML = input.value;
        //adicionar o elemento (li) na lista
        ul.appendChild(li);
        //Limpar o input
        input.value = "";
    }
}

function sortearAmigo() {
    //Verificar se a lista (de amigos) está vazio
    if(amigos.length > 0) {

    //Sorteiar a posição do amigo na lista
    let amigoSecreto = parseInt(Math.random() * amigos.length);

    let resultado = document.querySelector("#resultado");
    //criar um item (li) que representará a resultado
    let liRes = document.createElement('li');

    //passar o texto no elemento criado
    liRes.innerHTML = `O amigo secreto sorteado é: ${amigos[amigoSecreto]}`;
    //passsar o elemento criado na ul resultado
    resultado.appendChild(liRes);

    //zerar o vetor ou lista de amigos, para que possa sorteiar outros amigo
    amigos = [];
    //zerar a lista que aparece na tela
    let ul = document.querySelector("#listaAmigos");
    ul.innerHTML = "";

    }else {
        alert('Você precisa adicionar amigos antes');
    }
   
}