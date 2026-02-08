const section01 = document.querySelector('.divisao-um');
const section02 = document.querySelector('.divisao-dois');
const section03 = document.querySelector('.divisao-tres');

const dateTest = new Date();

const opcoes = {
    dateStyle: 'full',
    timeStyle: 'full'
};

const formatterBR = new Intl.DateTimeFormat('pr-BR', opcoes)

section01.innerHTML = getDate(dateTest);

section02.innerHTML = getMonthNameBrazil(dateTest);
section02.innerHTML += `<br>${getNameDayOfWeek(dateTest)}`;

section03.innerHTML = formatterBR.format(dateTest);

function getMonthNameBrazil(data) {

    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    const monthName = months[data.getMonth()];

    return monthName;

}

function getNameDayOfWeek(data) {
    const daysOfWeek = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];

    const nameDayOfWeek = daysOfWeek[data.getDay()];

    return nameDayOfWeek;



}

function zeroAEsquerda(numero) {
    if (numero < 10) {
        return `0${numero}`;
    } else { return numero; }
}

// Função Única
function getDate(data) {

    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    const daysOfWeek = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];

    const dia = data.getDate();
    const diaSemana = data.getDay();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const segundos = data.getSeconds();
    const minutos = data.getMinutes();

    return `${daysOfWeek[diaSemana]}, ${zeroAEsquerda(dia)} de ${months[mes]} de ${ano} ${zeroAEsquerda(hora)}h ${zeroAEsquerda(minutos)}min ${zeroAEsquerda(segundos)}s`;

}

const ex = new Date(2999847653235);

console.log(ex);

console.log(getDate(ex));