
window.alert(`Menssagem do Navegador - Alert`);

window.confirm(`Deseja Fechar`);

window.prompt(`Digite`);

let numeroUm = window.prompt(`Digite um Valor Qualquer:`);

console.log(typeof numeroUm);

numeroUm = Number(numeroUm);

let numeroDois = Number(window.prompt(`Digite outro Valor:`));

window.alert(`A soma entre ${numeroUm} e ${numeroDois} é igual a ${numeroUm+numeroDois}`);


let varA = 'A';
let varB = 'B';
let varC = 'C';

let varX;

varX = varA;
varA = varB;
varB = varC;
varC = varX;

console.log(varA, varB, varC, varX);

[varC, varA, varB] = [varB, varC, varA]

console.log(varA, varB, varC, varX);