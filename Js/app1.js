const balu = {
    nome: "Balu",
    cor: "Preto",
    altura: 0.40,
    peso: 11.5,
    raca: "Vira-lata",
    latir(){
        alert("au au");
    },
    comer(kg){
        this.peso = this.peso + kg;
        alert("Comi")
    },
    cagar(kg){
        this.peso = this.peso - kg;
        alert("Caguei")
    },
    saudar(){
        let msg = `Olá meu nome é ${this.nome}\n`;
        msg = msg + `Cor: ${this.cor} Raça: ${this.raca}\n`;
        msg = msg + `Peso: ${this.peso}\n`;
        msg = msg + `Altura: ${this.altura}\n`;
        alert(msg)
        
    }
}