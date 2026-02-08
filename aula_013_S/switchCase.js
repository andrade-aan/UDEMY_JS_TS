function dayOfTheWeekNow(num){
    const dayWeek = num.getDay();
    return dayWeek;
    
}


const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

const dataAtual = new Date();

//console.log(dataAtual.toDateString()); tecla de atalho shift + alt + A

const diaSemana = dataAtual.getDay();

console.log(diasDaSemana[diaSemana]);

// resolução por if/else

if (diaSemana === 5) {
    console.log(diasDaSemana[5]);
} else if (diaSemana === 0) {
    console.log(diasDaSemana[0]);
} else if (diaSemana === 1) {
    console.log(diasDaSemana[1]);
} else if (diaSemana === 2) {
    console.log(diasDaSemana[2]);
} else if (diaSemana === 3) {
    console.log(diasDaSemana[3]);
} else if (diaSemana === 4) {
    console.log(diasDaSemana[4]);
} else if (diaSemana === 6) {
    console.log(diasDaSemana[6]);
} else { console.log('Indefinido') }

// resolução Switch/Case

switch (diaSemana) {
    case 0: console.log(diasDaSemana[0]); break;
    case 1: console.log(diasDaSemana[1]); break;
    case 2: console.log(diasDaSemana[2]); break;
    case 3: console.log(diasDaSemana[3]); break;
    case 4: console.log(diasDaSemana[4]); break;
    case 5: console.log(diasDaSemana[5]); break;
    case 6: console.log(diasDaSemana[6]); break;
    default: console.log('Indefinido');
    
}

function textDayOfWeek(daysWeek){
    const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    
    switch (daysWeek) {
        case 0: daysWeek=diasDaSemana[0]; return daysWeek;
        case 1: daysWeek=diasDaSemana[1]; return daysWeek;
        case 2: daysWeek=diasDaSemana[2]; return daysWeek;
        case 3: daysWeek=diasDaSemana[3]; return daysWeek;
        case 4: daysWeek=diasDaSemana[4]; return daysWeek;
        case 5: daysWeek=diasDaSemana[5]; return daysWeek;
        case 6: daysWeek=diasDaSemana[6]; return daysWeek;
        default:daysWeek='Indefinido'; return daysWeek;
    }

}

const aleatoryDate = new Date(2388787479682);

const data001 = dayOfTheWeekNow(aleatoryDate);

console.log(aleatoryDate, data001)

console.log(textDayOfWeek(dayOfTheWeekNow(aleatoryDate)));


