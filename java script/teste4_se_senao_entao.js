const prompt = require('prompt-sync')();
const temperatura = parseFloat(prompt('Qual a temperatura atual? ')); 
//parseFloat transforma a string(Texto) em número decimal.
//prompt-sync é uma biblioteca que permite a entrada de dados no terminal, semelhante ao scanf em C.
//prompt solicita ao usuário a incerir um valor, seja ele string ou número.
if (temperatura > 30) { 
    console.log("Está muito quente!");
} 
else if (temperatura > 20) {
    console.log("Está um clima agradável.");
} 
else {
    console.log("Está frio.");
}