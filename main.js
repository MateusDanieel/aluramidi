function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
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

    tecla.onkeydown = function () {
        tecla.classList.add('ativa');
    }

}

// É UMA BOA PRATICA SEMPRE DEIXAR UMA LINHA VAZIA NO FIM DO ARQUIVO!