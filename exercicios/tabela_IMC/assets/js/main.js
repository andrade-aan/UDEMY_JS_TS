// video-aula 44


const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();// e de evento ou event
    // console.log('evento');
    // setCalculo('Resultado:');
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    console.log(altura);
    console.log(peso);


    if (!peso) { // se o peso for inválido
        setCalculo(`Peso Inválido!!!`, false);
        return;
    }

    if (!altura) {
        setCalculo(`Altura Inválida!!!`, false);
        return;
    }

    const imc = getImc(peso, altura);

    console.log(imc);



    const nivelImc = getNivelImc(imc);

    //setCalculo(nivelImc);

    const diagnostico = `Seu IMC é de ${imc} - ${nivelImc}`;

    setCalculo(diagnostico, true);






});

function getNivelImc(imc) {
    const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];

    if (imc >= 40) {
        return nivel[5];

    } else if (imc >= 35) {
        return nivel[4];

    } else if (imc >= 30) {
        return nivel[3];

    } else if (imc >= 25) {
        return nivel[2]

    } else if (imc >= 18.5) {
        return nivel[1]

    } else { return nivel[0] };


}

function getImc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc.toFixed(2);
}

function criarParagrafo() {
    const paragrafo = document.createElement('p'); // cria uma tag <p>
    return paragrafo;
}

function setCalculo(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const paragrafo = criarParagrafo();

    if (isValid) {
        paragrafo.classList.add('paragrafo-resultado')

    } else {
        paragrafo.classList.add('paragrafo-invalido')
    }


    paragrafo.innerHTML = msg;
    resultado.appendChild(paragrafo);
    // resultado.appendChild(paragrafo);
}






