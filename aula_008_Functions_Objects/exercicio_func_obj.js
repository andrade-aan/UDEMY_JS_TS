/**
 * IIFE no JavaScript (Immediately Invoked Function Expression)
 * IIFE é uma função que é criada e executada imediatamente,
 * no mesmo momento em que é definida.
 * 👉 Muito usada para:
 * Criar escopo privado
 * Evitar poluição do escopo global
 * Executar código de inicialização
 * Emular encapsulamento antes de modules, let e const
 */




function meuEscopo (){
    const formulario = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');

   // let contador = 1;

    const pessoaCadastro = [];

   


    function recebeEventoFormulario (evento){
        
        evento.preventDefault();
        const nome = formulario.querySelector('.nome');
        const sobrenome = formulario.querySelector('.sobrenome');
        const peso = formulario.querySelector('.peso');
        const altura = formulario.querySelector('.altura');

        pessoaCadastro.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso:peso.value,
            altura: altura.value
        });

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
        console.log(pessoaCadastro);
        console.log (nome.value,sobrenome.value,peso.value,altura.value);


      //  evento.preventDefault();
      //  console.log(`Formulário enviado ${contador}`);
      //  contador++;

    }

    formulario.addEventListener('submit', recebeEventoFormulario);

// onsubimit é o evento de apertar o botão enviar

  //  formulario.onsubmit = function (evento){
  //      evento.preventDefault();
  //      alert(1);
  //      console.log('Foi Enviado')
  //  };



}

meuEscopo()