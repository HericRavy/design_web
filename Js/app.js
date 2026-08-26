var nasc = 2009;
let nome = "Heric";
const viva = true

function calcIdade(ano=2026){
    let idade = ano - nasc;
    let menor;
    if (idade < 18){
        alert(`${nome} é menor de idade`)
        menor = true
    
    }else{
        menor = false

    }
    
    alert(`${nome} é menor de idade? ${menor}\nIdade: ${idade}`)
    return idade;
}
calcIdade();
//alert(`Fora da função: Idade ${idade}`); Erro pois a variável lrt não existe fora do escopo dela
alert(`Fora da função: Idade ${calcIdade(2027)}`);
