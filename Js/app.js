let foto = 1;
const imagem = document.getElementById("foto");

function proximo(e){
    e.preventDefault();
    if (foto < 6){
        foto = foto + 1;
    }
    imagem.setAttribute("src", `./img/foto${foto}.jpg`);
}

const prox = document.getElementById("prox");
prox.addEventListener("click", proximo);

function anterior(e){
    e.preventDefault();
    if (foto > 1){
        foto = foto - 1;
    }
    imagem.setAttribute("src", `./img/foto${foto}.jpg`);
}

const ant = document.getElementById("ant");
ant.addEventListener("click", anterior);
