/**
 * Operadores Lógicos
 * 
 *      &&      -->     AND     -->     todas expressões verdadeiras
 *      ||      -->     OR
 *      !       -->     NOT
 */

const expressaoAnd = 10>4 && 6<=12 && 9===9 // todas são verdade

const expressaoOr = 10>4 || 24<=12 || 9===5 // basta uma verdadeira

console.log(expressaoAnd, expressaoOr)

/**
 *      Valores Avaliados em Falsy
 *      false       -->     false literal, puro
 *      0           -->     false
 *      '' "" ``    -->     false
 *      null        -->     false
 *      undefined   -->     false
 *      NaN         -->     false
 * 
 */


console.log(10>4 && 6<=12 && 9===9 && 4!==5 && 0 && 'a'==='a');

/**
 * A linguagem percorre a expressão até encontrar um false, no caso o 
 * zero que é tipo na linguagem como false. Caso o zero estivesse no 
 * começo da expressão o restante nem seria processado, pois o valor
 * já seria false. É o conceito de curto-circuito.
 * 
 * Dispensamos a utilização de uma estrutura de condição formal.
 * A linguagem checa a estrutura lógica e, como null é false, passa a
 * adotar o valor tido como verdadeiro, no caso a cor default
 */

let corUsuario = null;
let corDefault = corUsuario || 'VERMELHO'

console.log(corDefault);

// Mudando o sentido lógico

corUsuario = 'AZUL';
corDefault = corUsuario || 'VERMELHO'

console.log(corUsuario);

console.log(corDefault);