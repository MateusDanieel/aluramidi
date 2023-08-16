 function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

/*
document.querySelector('.tecla_pom').onclick = tocaSomPom; 
// AQUI ESTAMOS GUARDANDO A FUNÇÃO DENTRO DO ONCLICK, POR CONTA DISSO NÃO DEVEMOS COLOCAR O '()'

*/

// SE O VALOR DA VARIAVEL NUNCA FOR ALTERADO, ELA DEVE SER DECLARADA COMO UMA CONSTANTE (const)

function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;

