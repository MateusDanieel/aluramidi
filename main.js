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

// REFERENCIA VARIAVEL, QUANDO O VALOR DA REFERENCIA PODERÁ SER ALTERADO, ELA DEVE SER DECLARADA COMO (let)
let contador = 0;

// ENQUANTO
while (contador < listaDeTeclas.length) {
    //listaDeTeclas[contador].onclick = tocaSom;
    
                                      // FUNÇÃO ANONIMA
    listaDeTeclas[contador].onclick = function () {
        tocaSom('#som_tecla_pom');
    };

    contador = contador + 1;

    console.log(contador);
}






















