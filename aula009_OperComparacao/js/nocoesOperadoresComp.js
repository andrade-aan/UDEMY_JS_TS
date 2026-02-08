/**
 * Operadores de Comparação
 *      >       maior que
 *      >=      maior ou igual
 *      <       menor que
 *      <=      menor ou igual
 *      ==      igualdade (valor) --> Not Recommended
 *      ===     igualdade estrita (valor e tipo) --> Recommended
 *      !=      diferença (valor) --> Not Recommended
 *      !==     diferença estrita (valor e tipo) --> Recommended
 */

const tipoNumerico = 10;
const tipoString = '10';

console.log(`Evitar usar == para igualdade`)
console.log(`10 numeral é igual a '10' string? -->`,tipoNumerico == tipoString)

console.log('Usando ===');

console.log(`10 é diferente de '10'?`,tipoNumerico === tipoString);

