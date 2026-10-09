class Animal{
    constructor(nome, cor="Desconhecido", altura=0.3, peso=0, raca="Vira-lata"){
        this.nome = nome;
        this.cor = cor;
        this.altura = altura;
        this.peso = peso;
        this.raca = raca;
    }

    latir(){
        alert("Oi");
    }
    comer(kg){
        this.peso = this.peso + kg;
        alert("Comi")
    }
    cagar(kg){
        this.peso = this.peso - kg;
        alert("Caguei")
    }
    saudar(){
        let msg = `Olá meu nome é ${this.nome}\n`;
        msg = msg + `Cor: ${this.cor} Raça: ${this.raca}\n`;
        msg = msg + `Peso: ${this.peso}\n`;
        msg = msg + `Altura: ${this.altura}\n`;
        alert(msg)
        
    }
}
const balu = new Animal("Balu")
const mel = new Animal ("Mel", "Amarelo", 1,10, 45, "Labrador")