//Processamento-Memória
//Entradas
//Saida
const enfase = document.getElementById("enfase")
const topo = document.getElementById("topo");
//Evento
window.addEventListener("scroll", function(e){
    if (window.scrollY > 0){
        topo.classList.add("solido");
    }else{
        topo.classList.remove("solido")
    }
})

function destacar(){
    enfase.classList.add("destaque")
}

function cancelar(){
    enfase.classList.remove("destaque")
}