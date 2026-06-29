const prompt = require('prompt-sync')();

const nome = prompt('Digite seu nome: ');

const idade = Number(prompt('Digite sua idade: '));

console.log(`Olá jovem  ${nome} de ${idade} anos de idade`);

console.log("digite v para verdadeiro e f para falso")

const c =  prompt("Você ama o programador incrivel que fez esse código?: ");

switch (c) {
  case "v":
    console.log("Muito obrigado!");
    break;
  case "f":
    console.log("Estou triste");
    break;
  default:
    console.log("Desculpe, não entendi.");
}