// ========================================
// DESAFIO 1: Classificador de nível de Herói
// ========================================

// Função para classificar o nível baseado no XP
function classificarNivelHeroi(nome, xp) {
    let nivel;
    
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }
    
    return nivel;
}

// Testando o classificador de herói
let nomeHeroi = "Thor";
let xpHeroi = 4258;
let nivelHeroi = classificarNivelHeroi(nomeHeroi, xpHeroi);
//onsole.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);

// ========================================
// DESAFIO 2: Calculadora de partidas Rankeadas
// ========================================

// Função para calcular o saldo e classificar o nível
function calcularRankeada(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    let nivel;
    
    // Classifica o nível baseado nas vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }
    
    return { saldoVitorias, nivel };
}

// Testando a calculadora de rankeadas
let vitorias = 75;
let derrotas = 30;
let resultado = calcularRankeada(vitorias, derrotas);
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);
