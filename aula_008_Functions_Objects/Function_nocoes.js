function saudacao(a){
    
    return `Hello ${a}!!!`;
}


function somaMais(a=0,b=0){
    
    return a + b;
}

let nome = 'Alex';

console.log(saudacao(nome));

const retorno = saudacao('Anakin'); // recebe o retorno da função

console.log(retorno);

let num1 = 25;
let num2 = 35;

console.log(somaMais(num1, num2));

console.log(`A soma entre 53 e 54 é ${somaMais(53, 54)}`);

console.log(`Unir Strings 'França' e '/Paris' --> ${somaMais('França','/Paris')}`)

console.log(somaMais()) // como os valores da função foram pré-definidos retorna 0

const raizQuadrada = function(raiz){
    return raiz ** 0.5
};

const raizQuadradaSimples = raiz => raiz**0.5; // forma reduzida Arrow Function =>

console.log(`A raiz quadrada de 144 é ${raizQuadrada(144)}`);

console.log(raizQuadradaSimples(9));
console.log(raizQuadradaSimples(25));
console.log(raizQuadradaSimples(81));

