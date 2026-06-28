const prompt = require('prompt-sync')();


const expressao =  prompt('Voce deseja comprar qual fruta? ');

switch (expressao) {
  case "banana":
    console.log("Banana custa R$ 5,00 o quilo.");
    break;
  case "maçã":
    console.log("Maçã custa R$ 8,00 o quilo.");
    break;
  default:
    console.log("Desculpe, não temos esta fruta.");
}