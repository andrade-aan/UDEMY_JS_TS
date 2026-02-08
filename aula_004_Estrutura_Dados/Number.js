

let num1 = 15983;
let num2 = 2.5;
let numIrracional = 192.4599835952126389;

let imprecisao1 = 0.7;
let imprecisao2 = 0.1;

// Padrão numérico IEEE 754-2008 sobre precisão numérica

let resolverImprecisao = ((imprecisao1*100 + imprecisao2*100)/100);

console.log(`Resultado de solução da imprecisão com multiplicação e divisão por 100: \n${resolverImprecisao}`);

console.log(imprecisao1 + imprecisao2);  // retorna 0.7999999999999999 e não 0.8

imprecisao1+=imprecisao2;
imprecisao1+=imprecisao2;
imprecisao1+=imprecisao2; // 0.9999999999999999

imprecisao1 = parseFloat(imprecisao1.toFixed(2));

console.log(imprecisao1);


// para resoolver o problema de arredondamento




console.log(num1.toString() + num2); // concatenação com transformação em String

console.log(num1.toString(2)); // Visualização do Number como número binário

console.log(numIrracional.toFixed(2)); // Arredondar número com dízima periódica

console.log(`Numero ${num1} é inteiro? ${Number.isInteger(num1)}`); // retorna boolean --> true

console.log(`Numero ${numIrracional} é inteiro? ${Number.isInteger(numIrracional)}`); // retorna false

let numTemp = num1*'Jima';

console.log(Number.isNaN(numTemp)); // retorna boolean --> true