console.log('Tipos de Dados Primitivos dentro do JS:');
console.log('String, Number, undefined, null, boolean, symbol');

let idade; // não aponta pra nenhum local de memória
let idadeAvo = 70; // variável tipo number
let nome = 'Name'; // variável tipo string
const testeIdade = idadeAvo-18;

let verdadeiro = true; // variável boolean

let indefinida; // variável undefined

let nulida = null; // variável sem referência na memória

console.log(testeIdade);

idade = 14;

let calculo = (idade/idadeAvo)**-3.4

console.log(testeIdade-idade);

console.log('Tipo de Dado:', typeof indefinida, '--> conteudo:', indefinida);
console.log('Tipo de Dado:', typeof verdadeiro, '--> conteudo:', verdadeiro);
console.log('Tipo de Dado:', typeof nome,'--> conteudo:', nome);
console.log('Tipo de Dado:', typeof idade, '--> conteudo:', idade);
console.log('Tipo de Dado:', typeof calculo, '--> conteudo', calculo);
console.log('Tipo de Dado:', typeof nulida, '--> conteudo', nulida);

/**
 * Variáveis primitivas não se comportam como referência dentro do sistema.
 * Quando se atribui um valor real/natural para uma variável A, por exemplo,
 * e após, dentro do código, se iguala a variavel A = B, B copia o valor de
 * A para si, e, mesmo depois de A modificar seu valor, B continua com o valor
 * inicial atribuído a variável A
 */ 

// exemplo

let a = 'A';
let b = a;

console.log(`Variável primitiva 'a' = ${a} e 'b' = ${b}, sendo let 'b'='a'`);

console.log(`Vamos alterar o valor de 'a' para 'B'`);

a = 'B';

console.log(`Variável primitiva 'a' = ${a} e 'b' = ${b} continua com o valor original de 'a'`);


/**
 * Arrays, Objects e Functions são mutáveis, são datos por referência
 * No caso de um Array ser atribuido a outra variável como cópia,
 * os valores seguem as alterações feitas no original, replicando as
 * modificações, é um ponteiro para a memória.
 * Para realizar uma cópia efetiva do array, utiliza-se os [...]
 * 
 */

const arrayA = [1,2,3];
const arrayB = arrayA;
const arrayC = [...arrayA];

console.log(arrayA, arrayB)

console.log(`arrayC -->`, arrayC)

console.log(`Vamos modificar o arrayA inserindo um valor com arrayA.push(56)`);

arrayA.push(56);

console.log(`Notamos que ao inserir o valor em arrayA, a cópia feita no arrayB também foi alterada:`)

console.log(arrayA, arrayB)

console.log(`arrayC -->`, arrayC)

console.log(`No caso de alterarmos o arrayB somente, o mesmo afeta também o arrayA`);

console.log(`Usando o arrayB.pop() iremos afetar o arrayA`);

arrayB.pop();

console.log(arrayA, arrayB)

console.log(`arrayC -->`, arrayC)
