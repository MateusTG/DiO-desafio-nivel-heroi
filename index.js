// ========================================
// DESAFIO 1: Classificador de nível de Herói
// ========================================

class Heroi {
    constructor(nome, xp) {
        this.nome = nome;
        this.xp = xp;
        this.nivel = this.classificarNivel();
    }

    classificarNivel() {
        if (this.xp < 1000) {
            return "Ferro";
        } else if (this.xp >= 1001 && this.xp <= 2000) {
            return "Bronze";
        } else if (this.xp >= 2001 && this.xp <= 5000) {
            return "Prata";
        } else if (this.xp >= 5001 && this.xp <= 7000) {
            return "Ouro";
        } else if (this.xp >= 7001 && this.xp <= 8000) {
            return "Platina";
        } else if (this.xp >= 8001 && this.xp <= 9000) {
            return "Ascendente";
        } else if (this.xp >= 9001 && this.xp <= 10000) {
            return "Imortal";
        } else {
            return "Radiante";
        }
    }

    exibirInfo() {
        console.log(`O Herói de nome ${this.nome} está no nível de ${this.nivel}`);
    }
}

// Testando a classe Heroi
const heroi1 = new Heroi("Thor", 4258);
heroi1.exibirInfo();

const heroi2 = new Heroi("Hulk", 9500);
heroi2.exibirInfo();

// ========================================
// DESAFIO 2: Calculadora de partidas Rankeadas
// ========================================

class Jogador {
    constructor(nome, vitorias, derrotas) {
        this.nome = nome;
        this.vitorias = vitorias;
        this.derrotas = derrotas;
        this.saldoVitorias = this.calcularSaldo();
        this.nivel = this.classificarNivel();
    }

    calcularSaldo() {
        return this.vitorias - this.derrotas;
    }

    classificarNivel() {
        if (this.vitorias < 10) {
            return "Ferro";
        } else if (this.vitorias >= 11 && this.vitorias <= 20) {
            return "Bronze";
        } else if (this.vitorias >= 21 && this.vitorias <= 50) {
            return "Prata";
        } else if (this.vitorias >= 51 && this.vitorias <= 80) {
            return "Ouro";
        } else if (this.vitorias >= 81 && this.vitorias <= 90) {
            return "Diamante";
        } else if (this.vitorias >= 91 && this.vitorias <= 100) {
            return "Lendário";
        } else {
            return "Imortal";
        }
    }

    exibirRanking() {
        console.log(`O Herói tem de saldo de ${this.saldoVitorias} está no nível de ${this.nivel}`);
    }
}

// Testando a classe Jogador
const jogador1 = new Jogador("Player1", 75, 30);
jogador1.exibirRanking();

const jogador2 = new Jogador("Player2", 95, 10);
jogador2.exibirRanking();

// ========================================
// DESAFIO 3: Escrevendo as classes de um Jogo
// ========================================

class HeroiAventura {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        
        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou ataque desconhecido";
        }
        
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Testando a classe HeroiAventura com diferentes tipos
const mago = new HeroiAventura("Merlin", 150, "mago");
mago.atacar();

const guerreiro = new HeroiAventura("Aragorn", 35, "guerreiro");
guerreiro.atacar();

const monge = new HeroiAventura("Liu Kang", 28, "monge");
monge.atacar();

const ninja = new HeroiAventura("Ryu", 30, "ninja");
ninja.atacar();
