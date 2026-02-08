let num_01 = 20;
let num_02 = 5;

const passo_dois = 2;

const passo_tres = 3;

const passo_quatro = '4'; // estranhamente o kernel resolve a proposição matemática

console.log(`Atribuimos para a constante passo_quatro o tipo de dado ${typeof passo_quatro}`);

let contador = 0;

console.log(`Valor da variável contador: ${contador}`);

contador = contador + passo_dois; // forma extensa

console.log(`Contador com acréscimo da constante passo dois ${passo_dois} = ${contador}`);

contador += passo_dois; // forma reduzida de --> contador = contador + passo_dois

console.log(`Variável contador sendo acrescida: ${contador}`);

console.log(`Podemos usar o incremento += para os outros operadores: -=, *=, /=`);

//contador **= passo_dois;

console.log (`Contador ${contador} elevado ao quadrado usando **= ${contador**=passo_dois}`);

console.log (`Contador ${contador} dividido /= por passo_3 = ${contador/=passo_tres}`);

console.log (`Vamos voltar multiplicando o ${contador} pelo passo_tres = ${contador*=passo_tres}`);

console.log (`Vamos multiplicar o resultado ${contador} pela contante ${typeof passo_quatro} '${passo_quatro}' = ${contador*=passo_quatro}`);

console.log(`No caso de se utilizar a concatenação '+', o valor será diferente exemplo:  ${contador+passo_quatro} e não ${(contador+=passo_quatro)/10 -.4}`);

console.log(`Resto da Divisão de ${num_01} e ${num_02} é ${num_01%num_02}.`); // % --> resto da divisão


console.log(`Soma-se ${num_01} com ${num_02} é igual a`, num_01+num_02);

console.log(`Potência de ${num_01} elevada a ${num_02} é igual a ${num_01**num_02}`);

console.log(`Convertendo a constante em number mediante parseInt, parseFloat ou simplesmente Number`);

const nova = parseInt(passo_quatro); // constante "nova" recebe a transformação do string '4' para 4 number

console.log(`Tipo de dado que antes era ${typeof passo_quatro} foi`,
     'atribuída a uma nova constante',
     typeof nova);

console.log(`Incremento ++ ou --`);

console.log(`contdor = ${contador=2} depois de contador++ = ${contador++}`);

console.log(`O acréscimo de 1 foi feito depois da impressão, agora contador = ${contador}`);

console.log(`contador = ${contador} e com ++contador agora vale ${++contador}`);

console.log(`--contador = ${--contador}`)

console.log(`o incremento é sempre de 1`)