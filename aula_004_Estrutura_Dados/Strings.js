
// Em JS o texto é iterável e indexadas 

let aString = ("Um \"texto\"");  // Uso de \ como caracter de escape, no caso aspas duplas " 

let bString = ("Um Diretório c:\\ "); // Colocação da barra \ para visualização dela mesma no texto

let cString = ("Um \t'\\t' tab de espaço");

let dString = ("Uma quebra de \n '\\n' linha");

let eString = ("Um lindo");

console.log(aString, cString);

console.log(bString, dString);

let longString = ("O Pato de Roma comeu a Sopa do Gato de Tuba");

console.log(longString[10], longString[0], aString[0], longString[2] ); // traz R O U P

console.log(longString.indexOf('a',10)); // traz a primeira letra alvo que encontrar partindo de um index
console.log(longString.lastIndexOf('a', 20)); // busca decrescente do index alvo

console.log(longString.charAt(15));

console.log(eString.concat(' dia de chuva', ' depois do sol')); // método de concatenação
console.log(eString + ' dia de chuva' + ' depois do sol' );
console.log(eString, 'dia de chuva', 'depois do sol');
console.log(`${eString} dia de chuva`, 'depois do sol');

console.log(longString.match(/[a-z]/gi)); // flag 'g' de global e flag 'i' de Case-insensitive

console.log(longString.replace('Gato', 'Chato')); // troca o primeiro alvo pelo texto substituto

console.log(longString.replace(/a/g, '*')); // a flag 'g' de global faz com que todas as letras 'a' sejam substituidas

console.log(longString.length); // atributo para tamanho da String

console.log(longString.slice(3, 20)); // conta com a posição inicial e não inclui o index final

console.log(longString.split(' ', 4)); // fatia a string num array com base no caracter passado

console.log(longString.toLocaleUpperCase()); // método todas maiúsculas

console.log(longString.toLowerCase()); // método todas minúsculas

// https://www.w3schools.com/js/DEFAULT.asp e https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
// https://ecma-international.org/publications-and-standards/standards/ecma-262/
// Estudar Expressões Regulares 
/**
 * Símbolo      Significado                 Exemplo
 * .            Qualquer caractere          /a.b/ → "acb"
 * \d           Dígito (0-9)                /\d\d/
 * \w           Caractere de palavra        letras, números, _
 * \s           Espaço                      tab, espaço, quebra
 * +            Uma ou mais vezes           /a+/
 * *            Zero ou mais                /ha*/ //
 /** 
 * ?            Opcional                    /colou?r/
 * {n}          Exatamente n                /\d{3}/
 * {n,m}        Entre n e m                 /\d{2,4}/
 * ^            Começo da string            /^ola/
 * $            Fim da string               /mundo$/
 * `            `                           OU
 * []           Conjunto                    /[abc]/
 * [^]          Negação                     /[^0-9]/
 */



 