function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio).play();
    // AO CHAMAR O ELEMENTO NO CONSOLE.LOG DO FIREFOX, ELE EXIBE AS PROPRIEDADES DO ELEMENTO, UMA VANTAGEM SOBRE O CHROME

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }
}
/*
function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}
/*
document.querySelector('.tecla_pom').onclick = tocaSomPom; 
// AQUI ESTAMOS GUARDANDO A FUNÇÃO DENTRO DO ONCLICK, POR CONTA DISSO NÃO DEVEMOS COLOCAR O '()', TODA VEZ QUE A GENTE COLOCA OS PARENTESES AO LADO DE UM NOME DE UMA FUNÇÃO, A GENTE JÁ INVOCA ELA IMEDIATAMENTE ANTES MESMO DO USUÁRIO INTERAGIR COM A PÁGINA

*/

// SE O VALOR DA VARIAVEL NUNCA FOR ALTERADO, ELA DEVE SER DECLARADA COMO UMA CONSTANTE (const)
const listaDeTeclas = document.querySelectorAll('.tecla');
/*
// REFERENCIA VARIAVEL, QUANDO O VALOR DA REFERENCIA PODERÁ SER ALTERADO, ELA DEVE SER DECLARADA COMO (let)
let contador = 0;

// ENQUANTO

while (contador < listaDeTeclas.length) {
    //listaDeTeclas[contador].onclick = tocaSom;

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    // TEMPLATE STRING
    const idAudio = `#som_${instrumento}`;
    
                    // FUNÇÃO ANONIMA
    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    contador = contador + 1;
}
*/

// LOOPINGS DE FORMA MAIS DINAMICA
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    // EVENTO DE QUANDO O USUÁRIO PRESSIONA A TECLA
                            // O PRIMEIRO PARAMETRO DA FUNÇÃO ANONIMA É REFERENTE AO 'EVENTO'
    tecla.onkeydown = function (evento) {
        // SE (DADA CONDIÇÃO FOR VERDADEIRA (TRUE)) {}
        // === É MAIS SEGURO DO QUE APENAS ==
        // || = OR/OU - SE PRONUNCIA 'PAIPE PAIPE'
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

        
        
    }

    // EVENTO DE QUANDO O USUÁRIO SOLTA A TECLA
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}

// É UMA BOA PRATICA SEMPRE DEIXAR UMA LINHA VAZIA NO FIM DO ARQUIVO!