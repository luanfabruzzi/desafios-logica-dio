class Classe {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        console.log(`${this.tipo} atacou usando ${this.ataque()}`);
    }

    ataque() {
    let ataques = ["Espada", "Shuriken", "Magia", "Punhos"];
    if (this.tipo === "Guerreiro") {
        return ataques[0];
    } else if (this.tipo === "Ninja") {
        return ataques[1];
    } else if (this.tipo === "Mago") {
        return ataques[2];
    } else if (this.tipo === "Monge") {
        return ataques[3];
    }   
}
}


let Mago = new Classe("Luan", 18, "Mago");
let Guerreiro = new Classe("Kauê", 18, "Guerreiro");
let Monge = new Classe("Vitão", 18, "Monge");
let Ninja = new Classe("Arthur", 19, "Ninja");

Mago.atacar();
Guerreiro.atacar();
Monge.atacar();
Ninja.atacar();