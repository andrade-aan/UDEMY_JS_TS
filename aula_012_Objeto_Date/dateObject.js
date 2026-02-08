// Aula 46 - Objeto Date
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

/*

const dataSistema = new Date();

const tresHoras = 60 * 60 * 3 * 1000; // milesimos de segundos
const dataZero = new Date(0); // TimeStamp Unix ou época marco Unix

console.log(dataZero);
console.log(`Marco Temporal Unix: ${dataZero.toString()}`);

console.log(`Marco Unix fuso Zero: ${new Date(0 + tresHoras)}`)

console.log(dataSistema);
console.log(dataSistema.toString());

// jan -> 0 fev -> 1 dezembro -> 11

const data22 = new Date(2022, 11, 22, 22, 22, 22, 0).toString();
console.log(data22);

console.log('getDate pega o dia Dia de hoje:', dataSistema.getDate());
console.log('getMonth pega o mês atual índice 0-11:', dataSistema.getMonth());
console.log('getDay pega dia da semana índice 0-6:', dataSistema.getDay());
console.log('getSeconds para segundos', dataSistema.getSeconds());
console.log('getFullYear pega o ano:', dataSistema.getFullYear());
console.log('getMilleseconds pega os milessegundos de 0-999', dataSistema.getMilliseconds());
console.log(Date.now()); // 1770345840291 milessegundos desde 01-01-1970
console.log(new Date(1770345840291).toString());
*/

function formatarData(data){
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minuto = data.getMinutes();
    const segundos = data.getSeconds();
    const milesimos = data.getMilliseconds();

    const diaZ = zeroAEsquerda(dia)
    const mesZ = zeroAEsquerda(mes)
    const horaZ = zeroAEsquerda(hora)
    const minutoZ = zeroAEsquerda(minuto)
    const segundosZ = zeroAEsquerda(segundos)

    return `${diaZ}/${mesZ}/${ano} ${horaZ}:${minutoZ}:${segundosZ}`;
}

function zeroAEsquerda(alvo){
    return alvo >=10 ? alvo : `0${alvo}`;
}
console.log(formatarData(new Date));
