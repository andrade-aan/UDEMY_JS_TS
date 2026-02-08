// criando um Object

const objectPessoa = {
    nome: 'Alex', sobrenome: 'Novart', idade:'35',
    fala () {
        console.log(`Meu nome é ${this.nome} e tenho a idade de ${this.idade}`)
    }
};

objectPessoa.fala(); // foi criada fuction dentro do Object

console.log(objectPessoa)
console.log(objectPessoa.nome, objectPessoa.sobrenome);

// Criando uma Function de Fabricação de Objetos

function criarCadastroPessoa (nome, sobrenome, idade){
    return {
    nome: nome, //parametro: atributo
    sobrenome: sobrenome, //parametro: atributo
    idade: idade //parametro: atributo
    }
}

function pessoaSimples (nome, sobrenome, idade){
    return{nome, sobrenome, idade};
}

const registro_001 = criarCadastroPessoa ('Alex', 'Nascimento', 45);
const registro_002 = criarCadastroPessoa ('Friart','Kwetrt', 112);

const registro_003 = pessoaSimples ('Edberts', 'Wandeef', 23);

console.log(registro_001, registro_002);

console.log(registro_001.idade, registro_002.sobrenome);

console.log(registro_003.nome, registro_003.sobrenome)