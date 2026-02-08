const numero = Number(prompt (`Digite um número qualquer:`));

const numeroTitulo = document.getElementById('numero-titulo');

const textoDoc = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

textoDoc.innerHTML = `<p>Raiz quadrada é <strong>${Math.sqrt(numero)}</strong></p>`;

textoDoc.innerHTML += `<p>Número ${numero} elevado ao quadrado --> <strong>${Math.pow(numero,2)}</strong></p>`;

textoDoc.innerHTML += `<p>O número ${numero} é inteiro: <strong>${Number.isInteger(numero)}</strong></p>`;

textoDoc.innerHTML += `<p>O valor digitado ${numero} é classificado como Not a Number - NaN? <strong>${Number.isNaN(numero)}</strong> </p>`;

textoDoc.innerHTML +=  `<p>Arredondando para baixo --> <strong>${Math.floor(numero)}</strong></p>`;

textoDoc.innerHTML += `<p>Arredondando para cima --><strong>${Math.ceil(numero)}</strong></p>`;

textoDoc.innerHTML += `<p>Arredondamento Matemático --> <strong>${Math.round(numero)}</strong></p>`;

textoDoc.innerHTML += `<p>Número com duas casas decimais --><strong>${numero.toFixed(2)}</strong></p>`