const amigos = []
const cadastro = document.getElementById("cadastro");
const nome = cadastro.nome;
const nasc = cadastro.nasc;
const whatsapp = cadastro.whatsapp;
const lista = document.getElementById("lista");
let editando = null;

cadastro.addEventListener("submit", function(e){
    e.preventDefault();
    let item = [nome.value, nasc.value, whatsapp.value];
    if (editando == null){
    
    let check = amigos.find(item => item[0] == nome.value);
    if (check == undefined){
        amigos.unshift(item);
    cadastro.reset();
    }else{
        alert(`${nome.value} já cadastrado.`)
    }
    }else{
        //Se editando diferente e nulo, atualizar
        let amigo = amigos[editando] //[Nome, Nasc, Whatsapp]
        amigo[0] = nome.value; // Valor digitado em input Nome
        amigo[1] = nasc.value; // Valor digitado em input Nasc
        amigo[2] = whatsapp.value; // Valor digitado em input Whatsapp
    }
    //Atualiza lista 
    exibirLista();

});


function exibirLista(){
    let itens = "";
    for(let i = 0; i<amigos.length; i++){
        let item = amigos[i]; //item = [Nome, Nasc, Whatsapp]
        //Cria botao para remover
        let remover = `<button onclick="remover(${i})">Remover</button>`;
        let atualizar = `<button onclick="atualizar(${i})">Atualizar</button>`
        //Cria uma tag li
        let li = `<li>${item[0]} | ${item[1]} | ${item[2]} | ${remover} ${atualizar}</li>`;
        //Junta o li nos itens
        itens = itens + li;
    }
    //Alterar o html da lista para ser igual aos itens
    lista.innerHTML = itens;
}

function remover(i){
    let item = amigos[i]; // [Nome, Nasc, Whatsapp]
    let check = confirm(`Deseja reamente excluir ${item[0]}?`);
    if (check == true){
        amigos.splice(i,1); //splice(posição inicial, qtd itens a remover)
    }
    exibirLista();
}

function atualizar(i){
    editando = i
    let item = amigos[editando];
    nome.value = item[0];
    nasc.value = item[1];
    whatsapp.value = item[2];
}


