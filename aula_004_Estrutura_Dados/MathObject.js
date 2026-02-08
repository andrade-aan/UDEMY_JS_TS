/*
let numx = 9.000000000001
let numy = 9.999999999999;
let numw = 9.500000009999;
let numz = 9.499999999999;
let num2 = Math.floor(numy); // descarta após ponto flutuante e transforma em inteiro
let num3 = Math.ceil(numx); // descarta após ponto flutuante e transforma em inteiro para cima

let num4 = Math.round(numw);
let num5 = Math.round(numz)

let listTemp = (23, -2, 192, -39, 1934, 2, 34, -452, -1, 0, 20458); // é um array

console.log(listTemp);

console.log('Entrada original do número: ', numy);
console.log('O número original é inteiro?', Number.isInteger(numy));
console.log('Transformação com Math.floor: ',num2); // ficou em 9 o número 9.999999999999
console.log('O número transformado pelo Math.floor é inteiro? ', Number.isInteger(num2));
console.log('-------------------------------------');
console.log('Entrada original do número: ', numx);
console.log('O número original é inteiro?', Number.isInteger(numx));
console.log('Transformação com Math.ceil: ',num3); // foi pra 10 o número 9.000000000001
console.log('O número transformado pelo Math.ceil é inteiro?', Number.isInteger(num3));
console.log('-------------------------------------');
console.log('Usando o Math.round no número ', numw, 'e', numz);
console.log('Math.round', numw, '-->', Math.round(numw));
console.log('Math.round', numz, '-->', Math.round(numz));
console.log('Os números transformados pelo Math.round são inteiros?' + '\n' + Number.isInteger(num5) +'\n' + Number.isInteger(num4));


console.log('Número menor da lista 23, -2, 192, -39, 1934, 2, 34, -452, -1, 0, 20458 -->', Math.min(23, -2, 192, -39, 1934, 2, 34, -452, -1, 0, 20458));
console.log('Número maior da lista 23, -2, 192, -39, 981934, 2, 34, -452, -1, 0, 20458 -->',Math.max(23, -2, 192, -39, 981934, 2, 34, -452, -1, 0, 20458));
console.log('Potência de 12 ao cubo Math.pow(12,3) --> ',Math.pow(12,3))
console.log('Raiz quadrada de 144 Math.sqrt(144) -->',Math.sqrt(144))*/

const aleatorio = Math.random(); // número aleatório entre 0 e 1, sendo intervalos abertos os limites

const ale10 = Math.round(Math.random() * (100-0)); // intervalo 

console.log(aleatorio);

console.log(ale10);


//console.log(Number.isInteger(num2));
//console.log(Number.isInteger(num3));