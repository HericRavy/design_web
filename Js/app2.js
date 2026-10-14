class Animal{
    constructor(nome, cor="Desconhecido", altura=0.3, peso=0, raca="Vira-lata"){
        this.nome = nome;
        this.cor = cor;
        this.altura = altura;
        this.peso = peso;
        this.raca = raca;
    }

    falar(){
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

class Cachorro extends Animal{
    constructor(nome, cor="Desconhecido", altura=0.3, peso=0, raca="Vira-lata"){
        super(nome, cor, altura, peso, raca);
        this.patas = 4;
    }
    falar(){
        alert("au! au!");
    }
    saudar(){
        let msg = super.saudar();
            msg = msg + "\nSou um cachorro!"
            alert(msg);
    }
}

class Passaro extends Animal{
    constructor(nome, cor="Desconhecido", altura=0.3, peso=0, raca="Vira-lata"){
        super(nome, cor, altura, peso, raca)
    }
    falar(){
        alert("fiu!fiu!");
    }
    saudar(){
        let msg = super.saudar();
            msg = msg + "\nSou um pássaro!"
            alert(msg);
    }
}

const balu = new Cachorro("Balu")
const mel = new Animal ("Mel", "Amarelo", 1,10, "Labrador")
const leleco = new Passaro("Leleco", undefined, undefined, undefined, "Papagaio")