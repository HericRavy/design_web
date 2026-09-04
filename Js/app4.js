let vezes = Number(prompt("Digite o número de vezes: "));
for (let i = 0; i <= vezes; i++){
    if (vezes > 100){
        alert("Valor muito alto, digite um valor de 0 a 100")
        break
    }
    alert(`Contei ${i}`); //É ímpar?
    if (i%2!==0){ //Se ímpar, continua = voltar para o ínicio
        continue
    }
    alert(`${i} é par`)
}