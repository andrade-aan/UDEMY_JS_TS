
const alunos = ['Alex Andewvert', 'Rilmar Jester', 'Trae Nulfir'];

console.log(alunos[0]);
console.log(alunos[2]);

alunos[3]='Katia Freika';
/**
 * adiciono um elemento na posição de índice [3],
 * caso exista, o elemento anterior será substituído
 * pelo novo valor na memória
 */

alunos.push('Carla Freiza'); // método push adiciona um elemento ao final do array

console.log(alunos);

alunos[10]='Wilkra Tryn' // posso incluir em uma possição não sequencial do array, caso não exista

alunos[alunos.length] = 'Yesdres Gurlw';
/**
 * a propriedade 'length' retorna o número de elementos de um array,
 * como o índice se inicia em zero, o número representa a posição
 * do último índice que será sequencial ao final do array
 */
alunos[alunos.length] = 'Wersd Firtza';

alunos.unshift('Zender Barterw'); // o valor entraria no índice [0]
alunos.unshift('Cricas Hitziwe'); 
/**
 * o valor entraria no índice [0] empurrando os demais
 * o método unshift adiciona o valor alvo no começo do array
 * deslocando todos os demais itens para frente, mudando a
 * indexação do array 
 */ 



console.log(alunos[2]);

console.log(alunos);

const remo_001 = alunos.pop(); // remove o último do array

console.log(alunos);

const remo_002 = alunos.shift(); // remove o primeiro do array afetando a posição dos índices

const remo_003 = delete alunos[10]; 
/** 
 * limpa a posição [10] e confirma a exclusão com true
 * a constante irá receber o valor boolean true confirmando
 * a exclusão do valor
 * */



const alunosRemovidos = [];

alunosRemovidos.push(remo_001);
alunosRemovidos.push(remo_002);
alunosRemovidos[alunosRemovidos.length] = remo_003;


console.log(alunosRemovidos);



console.log(alunos.slice(5, alunos.length));