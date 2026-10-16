/*Procesamento/Armazenamento*/
const lista = []

/*Entradas*/
const formulario = document.getElementById("formulario");
const texto = formulario.texto;

/*Saídas*/
const tags = document.getElementById("tags")

/*Gatilho/Evento*/
formulario.addEventListener("submit", function(e){
    e.preventDefault();
    let t = texto.value;
    t = t.split(" ");
    for (i = 0; i<t.length; i++){
        let palavra = t[i];
        palavra = palavra.toUpperCase();
        if (palavra.startsWiths("#")){
            lista.push(palavra);
        }else if (palavra.includes("#")){
            let pos = palavra.indexOf("#");
        palavra.slice(0, pos, palavra.length);
        lista.push(palavra);
    }
    }
    lista.push(t);
    tags.innerHTML = lista;
    formulario.reset();
})