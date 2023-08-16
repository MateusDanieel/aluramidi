function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
/*
function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}
/*
document.querySelector('.tecla_pom').onclick = tocaSomPom; 
// AQUI ESTAMOS GUARDANDO A FUNÇÃO DENTRO DO ONCLICK, POR CONTA DISSO NÃO DEVEMOS COLOCAR O '()'

*/

// SE O VALOR DA VARIAVEL NUNCA FOR ALTERADO, ELA DEVE SER DECLARADA COMO UMA CONSTANTE (const)
const listaDeTeclas = document.querySelectorAll('.tecla');

// REFERENCIA VARIAVEL, QUANDO O VALOR DA REFERENCIA PODERÁ SER ALTERADO, ELA DEVE SER DECLARADA COMO (let)
let contador = 0;

// enquanto
while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = tocaSom;

    contador = contador + 1;

    console.log(contador);
}






















