console.log('Aspas Simples');

//  o ";" é opcional dentro do JS

console.log("Aspas Duplas");

/*
 * JS é uma linguagem dinâmica, reconhece o
 * dado como String plea simples colocação
 * entre aspas
 */ 

console.log(`Crase`);

/**
 * A Crase é utilizada para ações avançadas de
 * Templates Strings, além de opções de inserção
 * de Aspas nos textos dentro do JS
 */
 
console.log(1133);
console.log(15.90);
 
/**
 * Em JS os números naturais e reais são tratados
 * internamente como "ponto flutuante".
 */

console.log(.02+.01);

/**
 * Isso provaca pequenas imprecisões nos
 * cálculos, no caso, internamete o número
 * de resposta seria 0.30000000000000004
 */

console.log(1133, 15.90, "Texto");

/**
 * Não houve a criação de uma Tupla (em TypeScript
 * a estrutura existe), a exibição em tela feita
 * pelo console.log() é sequencial, seguida por
 * um espaço entre os argumentos
 * (number, strings, objects).
 * 
 * Observa-se que não há quebra de linha
 * na exibição da saída de processamento
 * dentro do Console do IE
 */

 /**
  * Exercício: Exibir a frase:
  * Meu noome é "NOME". Estou aprenndendo JS às 10 da manhã
  */

//  Resposta aceitável
console.log('Meu nome é "ALEX". Estou aprendendo JS às', 10,'da manhã');

//  Resposta Recomendada com Template String
console.log(`Meu nome é "ALEX". Estou aprendendo JS às ${10} da manhã`);

// Placeholders de formato
console.log('Meu nome é "%s". Estou aprendendo JS às %d da manhã', 'ALEX', 10);