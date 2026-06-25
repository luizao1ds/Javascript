const prompt = require('prompt-sync')();

// Equivale a um scanf("%s", &nome)
const nome = prompt('Digite seu nome: ');

// Equivale a um scanf("%d", &idade)
const idade = Number(prompt('Digite sua idade: '));

console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
