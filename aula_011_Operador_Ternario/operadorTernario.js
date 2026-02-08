// Aula 45 - Operação Ternária
// ? :
// (condição) ? 'Valor Verdadeiro' : 'Valor Falso'


const pontuacaoUsuario = 999+12;

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP':'Usuário Normal';

if (pontuacaoUsuario >= 1000) {
    console.log('Usuário Vip');

} else {
    console.log ('Usuário Normal');
}

console.log(nivelUsuario);

const corUsuario = 'Azul';
const corPadrao = corUsuario ||  'Preta';

console.log(nivelUsuario, corPadrao)