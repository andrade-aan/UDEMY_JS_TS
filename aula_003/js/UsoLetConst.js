let nome1; //inicializada, declarada mas não definida
let nome = 'Alex';
console.log(nome1);
nome1 = 'Fabi'
// sem usar a variável
console.log('nome nasceu em 1984.');
console.log('Em 2000 nome conheceu Maria.');
console.log('nome se casou com Maria em 2012');
console.log('Maria teve 1 filho com nome em 2015.');
console.log('O filho de nome se chama Eduardo.');

// Primeira opção de código

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, `conheceu ${nome1}`);
console.log(nome, `se casou com ${nome1} em 2012.`);
console.log(nome1, 'teve um filho com', nome, 'em 2015.');
console.log('O filho de', nome, "se chama Eduardo.");

/**
 * No uso de const, necessariamente há declaração do
 * valor de incializasção da const, não havendo
 * modificação posterior
 */
const numeroPi= 3.14;
console.log(numeroPi);

console.log(numeroPi*4);

console.log(typeof numeroPi);
console.log(typeof nome);


/**
 * Exercício com nome, idade, peso, altura
 * IMC
 */

const nomeCandidato = 'Lomhar';
const sobrenomeCandidato = 'Benth Grinjyt';
const alturaCandidato = 1.73;
const idadeCandidato = 50;
const pesoCandidato = 88;
let imc = pesoCandidato/(alturaCandidato**2);
let anoNascimentoCandidato;

anoNascimentoCandidato = 2025-idadeCandidato;

console.log(nomeCandidato, sobrenomeCandidato, 'tem', idadeCandidato, 'anos,')
console.log('pesa', pesoCandidato, 'Kg,', 'tem', alturaCandidato, 'de altura');
console.log(nomeCandidato, 'tem Índice de Massa Corporal de', imc);
console.log(nomeCandidato, sobrenomeCandidato, 'nasceu no ano de', 2025-idadeCandidato);
console.log('Índice de Massa Corporal de', nomeCandidato, sobrenomeCandidato, 'é', imc + '.');


// Usando Templatte String

console.log(`${nomeCandidato} ${sobrenomeCandidato} tem ${idadeCandidato}`);
console.log(`${nomeCandidato} pesa ${pesoCandidato} Kg e tem ${alturaCandidato}m de altura!`);
console.log(`Índice de Massa Corporal de ${pesoCandidato/(alturaCandidato**2)}!!`);
console.log(`O candidato nasceu no ano de ${anoNascimentoCandidato}.`);

/**
 * No caso de se atribuir uma variável sem a especificação de 
 * LET ou CONST, o JS interpreta como a criação de uma variável
 * GLOBAL.
 * Atualmente o uso do VAR (variáverl global) é desaconselhada
 * pelas boas práticas
 */


ftuy = 345; // isso cria uma variável global, o var está implícito

console.log(ftuy);

// essa variável pode ser redeclarada

ftuy = 'Agora a mesma variável possui outro valor, passou de number para string';

console.log(ftuy);


