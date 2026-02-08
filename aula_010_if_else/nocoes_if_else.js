
const hora = Math.floor((Math.random() * (35-0)));

console.log(`Hora do sistema: ${hora}h`);

console.log(Number.isInteger(hora))

if (Number.isInteger(hora)) {

    if (hora >= 0 && hora < 12) {
        console.log('Bom dia!');
    } else if (hora >= 12 && hora < 18) { 
        console.log('Boa tarde!');

    } else if (hora >= 18 && hora <= 24) {
        console.log('Boa noite!');

    } else {console.log('Hora inválida!');

}

}
